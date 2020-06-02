import React from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Task from './Task'

const dummy_tasks = [
  {
      id: 1, 
      title: 'Pomodoro',
      description: 'Try one round of the Pomodoro technique',
      completed: true
  },
  {
      id: 2,
      title: 'Workout',
      description: 'Do lower body/cardio workout',
      completed: false
  },
    {
      id: 3,
      title: 'Start todo frontend- dummy tasks',
      description: 'Design frontend with dummy tasks',
      completed: true
  },
  {
      id: 4,
      title: 'Start todo frontend- tasts from DB',
      description: 'Request from backend the actual tasks in DB',
      completed: false
  }
]

function App() {
  const today = new Date()
  const formatted_today = today.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  return (
    <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>{formatted_today}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          {dummy_tasks.map(task => 
            <ListGroup.Item key={task.id}>
              <Task task={task}/>
            </ListGroup.Item>
            )}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="outline-primary">Clear all </Button>
        <Button variant="outline-primary">+</Button>
      </Modal.Footer>
  </Modal.Dialog>
  );
}

export default App;
