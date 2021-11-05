import React from 'react'
import { useSelector } from 'react-redux'
import Task from './Task'

const TodoList = () => {


    const lesTaches = useSelector(state => state.lesTaches)
    return (
        <div className="lista">
            {
                lesTaches.map((el,i)=><Task task={el} key={i}/>)
            }
        </div>
    )
}

export default TodoList