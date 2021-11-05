import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { handelComplete, handelDelete, handelEdit } from '../redux/action'
import Modal from 'react-modal';

const Task = ({task}) => {
    const dispatch = useDispatch()

    const customStyles = {
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          marginRight: '-50%',
          transform: 'translate(-50%, -50%)',
        },
      }; 
        const [modalIsOpen, setIsOpen] = React.useState(false);
        function openModal() {
          setIsOpen(true);
        } 
        function closeModal() {
          setIsOpen(false);
        }

    const [update, setUpdate] = useState(task.action)

    return (
        <div className="tache" id={task.isDone?"comp":""}>
            <h4>{task.action}</h4>
            <button onClick={()=>dispatch(handelDelete(task.id))}><i class="fas fa-window-close" style={{color:"red"}}></i></button>
            <button onClick={()=>dispatch(handelComplete(task.id))}><i class="fas fa-check-square" style={{color:"rgb(23, 211, 32)"}}></i></button>
            <button onClick={openModal}> <i  class="fas fa-edit" style={{color:"rgb(208, 211, 23)"}}></i></button>
            <Modal
       isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        <form className="addForm" onSubmit={(e)=>{e.preventDefault(); dispatch(handelEdit(task.id,update)); closeModal()}}>
          <label>edit your task</label>
          <input type="text" 
           value={update} 
           onChange={(e) => setUpdate(e.target.value)}      
          />
          <div>
            <button>update</button>
            <button onClick={closeModal}>cancel</button>
          </div>
        </form>
      </Modal>
        </div>
    )
}

export default Task