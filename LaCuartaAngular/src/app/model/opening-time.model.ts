/*
export enum DAY {
  MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

export type OpeningSchedule = {
  [key in DAY]: [OpeningHours];
}

export enum WORKING_TIME {
  OPEN, CLOSE
}

export type OpeningHours = {
  [key in WORKING_TIME]: string;
}

 */

export type OpeningSchedule = {
  [key: string]: OpeningHours[]
}

export type OpeningHours = {
  [key: string]: string;
}

