
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
                const newState = JSON.parse(JSON.stringify(state));;
                console.log(newState)
             
              newState.burger[action.payload] += 1
               
               return newState
            }
            case "MINUS":{
                const newState = JSON.parse(JSON.stringify(state));;
                console.log(newState)
             
              newState.burger[action.payload] -= 1
               
               return newState
              }
            default: return state
        }
}

