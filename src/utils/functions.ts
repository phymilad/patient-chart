import { Patient } from "../models/type"

export const makeRangeData = ({data, low, high} : {data: Patient[], low: number, high: number} ) => {
  const answerData : Record<string, number> = {'low': 0, 'normal': 0, 'high': 0}
  for (const item of data) {
    if (item.answer as number < low) {
      answerData['low'] += 1
    } else if(item.answer as number > high) {
      answerData['high'] += 1
    } else {
      answerData['normal'] += 1
    }
  }
  return answerData
}

export const makeBooleanData = ({data} : {data: Patient[]} ) => {
  const answerData : Record<string, number> = {'Positive': 0, 'Negative': 0}
  for (const item of data) {
    if (item.answer === "Positive") {
      answerData['low'] += 1
    } else if(item.answer === "Negative") {
      answerData['high'] += 1
    } else {
      answerData['normal'] += 1
    }
  }
  return answerData
}

