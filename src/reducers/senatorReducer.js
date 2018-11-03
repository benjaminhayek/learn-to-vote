export const senatorReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_SENATORS':
        return action.senator
        case "TOGGLE_SELECTED":
        return state.map(senator => {
          return senator.id === action.id
            ? { ...senator, selected: !senator.selected }
            : senator;
        });  
      default: 
        return state
    }
  }