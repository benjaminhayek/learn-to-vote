import { initialFetch } from '../utils/ApiCals' 

export const fetchCongress = () => {
    return async dispatch => {
      dispatch(contentStatus('loading'))
      try {
        const response = await initialFetch()
        dispatch(addCongressmen(response))
        dispatch(contentStatus('resolved'))
      } catch (error) {
        dispatch(contentStatus('error'))
      }
    }
  }

  export const addCongressmen = (members) => ({
    type: "ADD_CONGRESSMEN",
    members
  });

  export const contentStatus = (loading) => ({
    type: 'CONTENT_STATUS',
    status: loading
  })