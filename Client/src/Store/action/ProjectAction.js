export const createProject = (project) => {
    return (dispatch, getState, {getFirestore}) => {
      const firestore = getFirestore();
      
      firestore.collection('projects').add({
        ...project,
        authorFirstName:"firstName",
        authorLastName: "lastName",
        authorId: 12345,
        createdAt: new Date()

}).then(() => {
    dispatch({type: "CREATE_PROJECT",project});

}).catch((err) => {
dispatch({typ: "CREATE_PROJECT_ERROR", err});
})
}
};