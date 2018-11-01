export const senatorReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_SENATORS':
        return action.senator
      default: 
        return state
    }
  }