function counterReducer ( state = 0, action){


    if (action.type === "increment") {

        return state + 1;
        
    }


    return state

}
