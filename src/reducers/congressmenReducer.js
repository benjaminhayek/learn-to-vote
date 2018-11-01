export const congressmenReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_CONGRESSMEN':
        return action.members
      default: 
        return state
    }
  }