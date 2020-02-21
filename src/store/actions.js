import { ACTIONS } from "./constants";

export const setMoment = text => ({ type: ACTIONS.SET_MOMENT, text })

export const setNote = text => ({ type: ACTIONS.SET_NOTE, text })