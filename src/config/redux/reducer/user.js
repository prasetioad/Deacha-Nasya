const initialState = {
    user : {},
    loading : false,
    error: '',

}

const userReducer = (state = initialState, action)=>{
    switch (action.type) {
        case "LOGIN" :
            return {
                ...state,
                loading: true
            }
        default :
        return state;
    }
}

export default userReducer