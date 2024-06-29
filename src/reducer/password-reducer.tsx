export const passwordReducer = (state: any, action: { type: any; }) => {
    switch(action.type) {
        case 'CORRECT_PASSWORD':
            return {
                ...state,
                message: 'Password is correct',
                isAuthenticated: true
            };
        case 'INCORRECT_PASSWORD':
            return {
                ...state,
                message: 'Password is incorrect',
                isAuthenticated: false
            };
        case 'EMPTY_INPUT':
            return {
                ...state,
                message: 'Password cannot be empty',
                isAuthenticated: false
            };
            case 'LOGOUT':
            return {
                ...state,
                message: '',
                isAuthenticated: false
            };
        default:
            return state;
    }
};
