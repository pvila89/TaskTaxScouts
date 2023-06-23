function reducer(state, action) {
    switch(action.type) {
        case "bookSearch":
            return  [
                ...state,
                {
                    // Aquí s'hauria de fer call a l'api
                    description: action.payload.description,
                }
            ]
        default:
            return state;
    }    
}