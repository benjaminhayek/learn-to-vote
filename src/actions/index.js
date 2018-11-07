  export const addCongressmen = (members) => ({
    type: "ADD_CONGRESSMEN",
    members
  });

  export const contentStatus = (loading) => ({
    type: 'CONTENT_STATUS',
    status: loading
  });

  export const addSenators = (senator) => ({
    type: "ADD_SENATORS",
    senator
  });

  export const toggleSelected = (id) => ({
    type: 'TOGGLE_SELECTED',
    id
  });

  export const clearSelected = () => ({
    type: 'CLEAR_SELECTED',
  })