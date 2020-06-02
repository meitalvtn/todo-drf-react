import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';


const editIcon = <svg class="bi bi-pencil" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" d="M11.293 1.293a1 1 0 0 1 1.414 0l2 2a1 1 0 0 1 0 1.414l-9 9a1 1 0 0 1-.39.242l-3 1a1 1 0 0 1-1.266-1.265l1-3a1 1 0 0 1 .242-.391l9-9zM12 2l2 2-9 9-3 1 1-3 9-9z"/>
<path fill-rule="evenodd" d="M12.146 6.354l-2.5-2.5.708-.708 2.5 2.5-.707.708zM3 10v.5a.5.5 0 0 0 .5.5H4v.5a.5.5 0 0 0 .5.5H5v.5a.5.5 0 0 0 .5.5H6v-1.5a.5.5 0 0 0-.5-.5H5v-.5a.5.5 0 0 0-.5-.5H3z"/>
</svg>

const Task = ({task}) => {
    const [completed, setCompleted] = useState(task.completed)
    const [editing, setEditing] = useState(false)
    return (
        <Form style={{'display': 'flex', 'align-items': 'center', 'justify-content': 'space-between'}}>
            <Button 
                style={{'margin-right': '18px'}} 
                variant="outline-dark" 
                size='sm'
                onClick = {() => setEditing}
                >
                {editIcon}
            </Button>
            <span style={{'width': '70%'}}>
                {task.title}
                <p style={{'font-size': '12px'}}>{task.description}</p>
            </span>
            <span style={{'display': 'flex', 'align-items': 'center'}}>
                <span >
                <Button 
                    style={{'margin': '5px'}} 
                    variant={completed ? 'success' : 'outline-info'} 
                    size='sm'
                    onClick={() => setCompleted(!completed)}
                    >
                        {completed ?  '✓' : '__'}
                </Button> 
                </span>
                <Button style={{'margin': '5px'}} variant="outline-danger" size='sm'>X</Button>
            </span>
        </Form>
        )
    }

export default Task