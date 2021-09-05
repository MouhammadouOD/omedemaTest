import { HANDLE_TEAM } from "./type";


const result = fetch(
            "https://cgjresszgg.execute-api.eu-west-1.amazonaws.com/teams/"
        ).then((response) => response.json());


const initialState= {
    teams : result
}

const teamsReducer = (state = initialState , action) =>{
    switch (action.type) {
        case HANDLE_TEAM:
            
            return{
                ...state ,
                teams : action.payload
            }
    
        default:
            break;
    }
}

export default teamsReducer