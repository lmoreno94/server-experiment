import express from 'express'
import { getEntriesWithOutSensitiveInfo, getEntryById, addDiary } from '../controllers/diaries'
import toNewDiaryEntry from '../utils/toNewDiaryEntry'

const router = express.Router()

router.get('/', (_req, res) => {
  res.send(getEntriesWithOutSensitiveInfo())
})

router.get('/:id', (req, res) => {
  const diary = getEntryById(+req.params.id)

  return diary !== null
  ? res.send(diary)
  : res.sendStatus(404)
})

router.post('/', (req, res) => {
  try {
    const newDiaryEntry = toNewDiaryEntry(req.body)
    const addedDiaryEntry = addDiary(newDiaryEntry)
    res.json(addedDiaryEntry)
  } catch (e: any) {
    res.status(400).send(e.message)
  }

})

router.post('/', (_req, res) => {
  res.send('Saving a diary!')
})

export default router
