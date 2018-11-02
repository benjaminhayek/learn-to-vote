export const congressmenReducer = (state = [], action) => {
    switch(action.type) {
      case 'ADD_CONGRESSMEN':
        return action.members
      case 'TOGGLE_SELECTED':
      const selectedIds = action.selected.map(select => select.congressmen.id)
      return state.map(congressmen => {
        if (selectedIds.includes(congressmen.id)) {
          congressmen.selected = true;
          return congressmen
        } else {
          congressmen.selected = false;
          return congressmen
        }
      })
      default: 
        return state
    }
  }