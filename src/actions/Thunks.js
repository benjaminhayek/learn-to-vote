import { getEducationBills } from '../utils/ApiCals'; 
import { addCongressmen, contentStatus, addSenators, getEducation } from './index';
import { memberData, senateData } from '../utils/dataCleaners';

export const fetchCongress = (chamber) => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await memberData(chamber)
        dispatch(addCongressmen(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }

export const fetchSenators = (chamber) => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await memberData(chamber)
        dispatch(addSenators(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }

  export const getBills = () => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await getEducationBills()
        dispatch(getEducation(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }
