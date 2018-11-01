import { initialCongressFetch, initialSenateFetch } from '../utils/ApiCals' 
import { addCongressmen, contentStatus, addSenators } from './index'

export const fetchCongress = () => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await initialCongressFetch()
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
        const response = await initialSenateFetch()
        dispatch(addSenators(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }