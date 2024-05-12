const { Router } = require('express');
const { check } = require('express-validator');

const { obtenerProductos, 
        crearProducto, 
        actualizarProducto, 
        borrarProducto, 
        obtenerProducto } = require('../controllers/productos');

const { existeCategoriaPorId, 
        existeProductoPorId } = require('../helpers/db-validators');

const { validarJWT, 
        validarCampos, 
        esAdminRole } = require('../middlewares');

const router = Router();

// Obtener todas las productos - publico
router.get('/', obtenerProductos );

// Obtener las porductos por id - publico
router.get('/:id', [
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], obtenerProducto );

// Crear producto - privado - cualquier persona con un token valido
router.post('/', [ 
    validarJWT,
    check('nombre', 'El nombre es obligatorio').not().isEmpty(),
    check('categoria', 'No es un id de Mongo válido').isMongoId(),
    check('categoria').custom(existeCategoriaPorId),
    validarCampos
], crearProducto);

// Actualizar producto - privado - cualquier persona con un token valido
router.put('/:id', [
    validarJWT,
    //check('categoria', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], actualizarProducto );

// Borrar producto - ADMIN
router.delete('/:id', [
    validarJWT,
    esAdminRole,
    check('id', 'No es un id de Mongo válido').isMongoId(),
    check('id').custom( existeProductoPorId ),
    validarCampos
], borrarProducto );

module.exports = router