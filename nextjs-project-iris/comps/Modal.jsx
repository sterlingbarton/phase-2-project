import React, {useState} from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import styles from '../styles/Modal.module.css'

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

    if(isModal) {
        document.body.classList.add('active-modal')
      } else {
        document.body.classList.remove('active-modal')
      }

  return (
    <Container className='text-center'>
        <div className={styles.modal}>
            <div className={styles.overlay} onClick={() => handleCloseModal(!isModal)}></div>
            <div className={styles.modalContent}>
                <form onSubmit={onSubmit}>
                    <Row style={{'padding-bottom': '1em'}}>
                        <Col>
                            <Button variant='info' onClick={() => handleCloseModal(!isModal)} style={{'position': 'absolute', 'right': '15px', 'top': '15px', 'border': '1px solid #708090', 'border-radius':'6px'}}>X</Button>
                        </Col>
                    </Row>
                    <Row style={{'padding-bottom': '1em'}}>
                        <label>Name</label>
                        <Col style={{'margin-top': '.5em'}}>
                        <input type="text" placeholder='Task' name="name" value={formData.name} onChange={handleChange} style={{'width': '95%'}}></input>
                        </Col>
                    </Row>
                    <Row style={{'padding-bottom': '1em'}}>
                        <label>Due date:</label>
                        <Col style={{'margin-top': '.5em'}}>
                            <input type="text" placeholder='Month' name="monthDueDate" value={formData.monthDueDate} onChange={handleChange} style={{'margin-bottom': '1em', 'width': '95%'}}></input>
                        <Col>
                        </Col>
                            <input type="text" placeholder='Day' name="dueDate" value={formData.dueDate} onChange={handleChange} style={{'width': '95%'}}></input>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <input type="submit" style={{'padding': '.3em', 'background': '#0DCAF0', 'border': '1px solid #708090', 'border-radius':'6px'}} onClick={() => handleCloseModal(!isModal)}></input>
                        </Col>
                    </Row>
                </form>
            </div>
        </div>
    </Container>
  )
}

export default Modal