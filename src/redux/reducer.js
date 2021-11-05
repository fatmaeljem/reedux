import { ADD, COMPLETE, DELETE, EDIT } from "./actionType";



let init ={
    lesTaches : [ { id: Math.random(), action: "Wake Up", isDone: true },
{ id: Math.random(), action: "Get Coffe", isDone: false },]
}
 
const listeReducer =(state=init,{type,payload,payload2})=>{
    switch (type) {
        case DELETE:
            
            return{
                ...state,lesTaches:state.lesTaches.filter(el=>el.id!==payload)
            };

        case COMPLETE:
            return{
                ...state,lesTaches:state.lesTaches.map((el) => (el.id === payload? { ...el, isDone: !el.isDone } : el))
            };

        case ADD:
            let newTache={id: Math.random(), action: payload, isDone: false }
            return{
                ...state,lesTaches: [...state.lesTaches,newTache]
            };

        case EDIT:
            return{
                ...state,lesTaches: state.lesTaches.map((el) => (el.id === payload? { ...el, action: payload2 } : el))
            };
    
        default:
        
            return state
    }

}
export default listeReducer