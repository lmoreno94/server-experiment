import { DiaryEntry, NonSensitiveInfoDiaryEntry, NewDiaryEntry } from '../types';
import Diaries from '../seed/diaries.json'

const diaries: DiaryEntry[] = Diaries as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const getEntryById = (id: number): NonSensitiveInfoDiaryEntry | undefined => {
    const entry = diaries.find( d => d.id === id )
    if( entry ){
        const { comment, ...restOfDiary } = entry
        return restOfDiary
    }
    return undefined
}

export const getEntriesWithOutSensitiveInfo = (): NonSensitiveInfoDiaryEntry[] => {
    return diaries.map(({ id, date, weather, visibility }) => {
        return {
            id,
            date,
            weather,
            visibility
        }
    })
}

export const addDiary = (newDiaryEntry: NewDiaryEntry): DiaryEntry => {
    const newDiary  = {
        id: Math.max(...diaries.map(d => d.id)) + 1,
        ...newDiaryEntry
    }

    diaries.push(newDiary)
    return newDiary
}
