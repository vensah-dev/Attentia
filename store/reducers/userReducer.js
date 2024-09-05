const initialState = {
    userName: "Legally",
    credits: 9999,
    xp: 100,
};

const user = (state = initialState, action ) => {
    switch(action.type){
        case "setCredits":
            return{
                ...state,
                credits: action.value
            };

        case "D":
            return{
                ...state,
                count: state.count - 1
            };

        default:
            return state;
    }
};

export default user;
