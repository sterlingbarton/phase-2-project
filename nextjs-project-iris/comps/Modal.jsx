import React, {useState} from 'react'
import { Container } from 'react-bootstrap'

function Modal({handleCloseModal, isModal, handleSubmit}) {
    const [formData, setFormData] = useState({
        "id": "",
        "name": "",
        "monthDueDate": "",
        "dueDate": ""
    })

    function handleChange(e){
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function onSubmit(e){
        e.preventDefault()
        handleSubmit(formData)
    }


  return (
    <Container>
        <form onSubmit={onSubmit}>
            <button onClick={() => handleCloseModal(!isModal)}>X</button>
            <label>Name</label>
            <input type="text" placeholder='Task' name="name" value={formData.name} onChange={handleChange}></input>
            <label>Due date:</label>
            <input type="text" placeholder='Month' name="monthDueDate" value={formData.monthDueDate} onChange={handleChange}></input>
            <label></label>
            <input type="text" placeholder='Day' name="dueDate" value={formData.dueDate} onChange={handleChange}></input>
            <input type="submit"></input>
        </form>
    </Container>
  )
}

export default Modal