
const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
        },
        menu: {
        salad: 10,
        cheese: 20,
        beef: 55
        }
}

export const burgerReducer = (state = burgerState,action)=>{
        switch(action.type){
            case "ADD":{
              const newState = {...state}
              newState.burger[action.payload] += 1
               
               return newState
            }
            case "MINUS":{
                if(state.burger[action.payload] > 0){
                    state.burger[action.payload] -= 1
                }
                
                 return {...state}
              }
            default: return state
        }
}

