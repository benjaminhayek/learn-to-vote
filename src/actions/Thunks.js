import { addCongressmen, contentStatus, addSenators } from './index';
import { memberData} from '../utils/dataCleaners';

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
