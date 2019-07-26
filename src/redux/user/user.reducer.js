const INITIAL_STATE = {
  currentUser: null
};
<<<<<<< HEAD
=======

>>>>>>> 23aa576... added redux, and implemented userReducer and userActions to header and app components
const userReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return { ...state, currentUser: action.payload };

    default:
      return state;
  }
};

export default userReducer;
