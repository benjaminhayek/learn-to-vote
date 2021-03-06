export const congressmenReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_CONGRESSMEN':
        return action.members
      case 'CLEAR_SELECTED':
        return state.map(members => ( {...members, selected: false } ))  
      case "TOGGLE_SELECTED":
      return state.map(members => {
        return members.id === action.id
          ? { ...members, selected: !members.selected }
          : members;
      });
      default: 
        return state
    }
  }