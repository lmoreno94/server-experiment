import { NewDiaryEntry } from '../types'
import parseComment from './parseComment';
import parseDate from './parseDate';
import parseVisibility from './parseVisibility';
import parseWeather from './parseWeather';

const toNewDiaryEntry = (object: any): NewDiaryEntry => {
    const newEntry: NewDiaryEntry = {
        comment: parseComment(object.comment),
        date: parseDate(object.date),
        weather: parseWeather(object.weather),
        visibility: parseVisibility(object.visibility)
    }
    return newEntry
}

export default toNewDiaryEntry