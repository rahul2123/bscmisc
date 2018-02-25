const userReducer = (state = { name: "Max" }, action) => {
    switch (action.type) {
        case "change_name":
            state = {
                ...state,
                name: action.payload
            };
            break;
        case "SET_AGE":
            state = {
                ...state,
                age: action.payload
            };
            break;
    }
    return state;
};

export default userReducer;