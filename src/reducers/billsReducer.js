export const billsReducer = (state = [], action) => {
    switch(action.type) {
      case 'GET_EDUCATION':
        return action.bills
      default: 
        return state
    }
  }