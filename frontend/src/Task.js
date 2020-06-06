import React, { useState, useRef, useEffect } from 'react';
import Button from 'react-bootstrap/Button';

const Title = ({title, setTitle, editingTitle, setEditingTitle}) => {
    return <div>{editingTitle ? <TitleInput title={title} setTitle={setTitle} setEditingTitle={setEditingTitle}/> 
    : <div onClick={() => setEditingTitle(!editingTitle)}><TitleDisplay title={title}/></div>}</div>
}

const TitleDisplay = ({title}) => (
    <div>{title}</div>
)

// TODO: make title required (client-side validation)
const TitleInput = ({title, setTitle, setEditingTitle}) => {
    const inputElement = useRef(null)
    useEffect(() => inputElement.current && inputElement.current.focus())
    return <input 
            required
            ref={inputElement}
            type='text' 
            value={title}
            style={{border: 'none', outline: 'none', borderBottom: '1px solid grey'}}
            onChange = {(e) => setTitle(e.target.value)}
            onBlur = {() => setEditingTitle(false)}
        />
    }

const Description = ({description, setDescription, editingDescription, setEditingDescription}) => {
     return <div>{editingDescription ? <DescriptionInput description={description} setDescription={setDescription} setEditingDescription={setEditingDescription}/> : <div onClick={() => setEditingDescription(!editingDescription)}> <DescriptionDisplay description={description}/> </div>} </div>
}

const DescriptionDisplay = ({description}) => (
    <p style={{fontSize: '12px'}}>{description}</p>
)

const DescriptionInput = ({description, setDescription, setEditingDescription}) => {
    const inputElement = useRef(null)
    useEffect(() => inputElement.current && inputElement.current.focus())
    return <input
        ref={inputElement}
        type='text' 
        value={description}
        style={{border: 'none', outline: 'none', borderBottom: '1px solid grey'}}
        onChange = {(e) => setDescription(e.target.value)}
        onBlur = {(e) => setEditingDescription(false)}
    />
}

const Task = ({task}) => {
    const [completed, setCompleted] = useState(task.completed)
    const [title, setTitle] = useState(task.title)
    const [description, setDescription] = useState(task.description)
    const [editingTitle, setEditingTitle] = useState(false)
    const [editingDescription, setEditingDescription] = useState(false)

    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
            <span style={{width: '70%'}}>
                <Title title={title} setTitle={setTitle} editingTitle={editingTitle} setEditingTitle={setEditingTitle}/>
                <Description description={description} setDescription={setDescription} editingDescription = {editingDescription} setEditingDescription={setEditingDescription}/>
            </span>
            <span style={{display: 'flex', alignItems: 'center'}}>
                <span>
                <Button 
                    style={{margin: '5px'}} 
                    variant={completed ? 'success' : 'outline-success'} 
                    size='sm'
                    onClick={() => setCompleted(!completed)}
                    >
                    ✓
                </Button> 
                </span>
                <Button style={{margin: '5px'}} variant="outline-danger" size='sm'>✕</Button>
            </span>
        </div>
        )
    }

export default Task