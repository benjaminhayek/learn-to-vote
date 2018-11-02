  export const addCongressmen = (members) => ({
    type: "ADD_CONGRESSMEN",
    members
  });

  export const contentStatus = (loading) => ({
    type: 'CONTENT_STATUS',
    status: loading
  })

  export const addSenators = (senator) => ({
    type: "ADD_SENATORS",
    senator
  });

  export const getEducation = (bills) => ({
    type: 'GET_EDUCATION',
    bills
  })