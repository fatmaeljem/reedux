import { DELETE, EDIT } from "./actionType"
import { COMPLETE } from "./actionType"
import { ADD } from "./actionType"





export const handelDelete=(id)=>{
    return{
        type:DELETE,
        payload:id
    }
}
export const handelComplete=(id)=>{
    return{
        type:COMPLETE,
        payload:id
    }
}
export const handelAdd=(newTask)=>{
    return{
        type:ADD,
        payload:newTask
    }
}
export const handelEdit=(id, text)=>{
    return{
        type:EDIT,
        payload:id,
        payload2:text,
    }
}