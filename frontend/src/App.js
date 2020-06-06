import React, {useState, useEffect} from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Task from './Task'
import axios from 'axios';

function App() {
  const today = new Date()
  const formatted_today = today.toLocaleDateString("en-US", { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        '/api/todos',
      );
      setTasks(result.data);
    };
 
    fetchData();
  }, []);

  return (
    <Modal.Dialog>
      <Modal.Header >
        <Modal.Title>{formatted_today}</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <ListGroup>
          {tasks.map(task => 
            <ListGroup.Item key={task.id}>
              <Task task={task}/>
            </ListGroup.Item>
            )}
        </ListGroup>
      </Modal.Body>

      <Modal.Footer>
        <Button 
          variant="outline-primary">
          Clear all
        </Button>
        <Button 
          variant="outline-primary">
          +
        </Button>
      </Modal.Footer>
  </Modal.Dialog>
  );
}

export default App;
