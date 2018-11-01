import { initialCongressFetch, initialSenateFetch } from '../utils/ApiCals'; 
import { addCongressmen, contentStatus, addSenators } from './index';
import { congressData, senateData } from '../utils/dataCleaners';

export const fetchCongress = () => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await congressData()
        dispatch(addCongressmen(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }

export const fetchSenators = () => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await senateData()
        dispatch(addSenators(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }