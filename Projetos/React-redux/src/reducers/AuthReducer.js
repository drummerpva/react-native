const initialState = {
    email: 'douglaspoma@yahoo.com',
    senha: '123456'
};

const AuthReducer = (state = [], action) => {
    if (state.length == 0) {
        return initialState;
    }

    return state;
};

export default AuthReducer;