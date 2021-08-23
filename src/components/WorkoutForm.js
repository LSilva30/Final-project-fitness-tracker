import { useState } from "react"
import { Form, Button } from "react-bootstrap"

function WorkoutForm({ refetchWorkouts, level }) {
  const [ formValues, setFormValues ] = useState({
    name: '',
    sets: 0,
    reps: 0,
    completed: false
  })
  
  const handleFormSubmit = (e) => {
    e.preventDefault()
    console.log(formValues)
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/workouts/create`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ workout: formValues, level }),
      }
    )
      .then(() => refetchWorkouts())
      // .catch(err => console.log(err))
  }

  const handleChange = e => {
    console.log(`Dynamic Name: ${e.target.name} | Value: ${e.target.value}`)
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value
    })
  }
  
  return (
   <Form onSubmit={handleFormSubmit} >
     <Form.Group controlId='workout-sets'>
      <Form.Label>
        Sets
      </Form.Label>
      <Form.Control name='sets' type='number' placeholder='input sets' onChange={handleChange}/>
     </Form.Group>

     <Form.Group controlId='workout-reps'>
      <Form.Label>
        Reps
      </Form.Label>
      <Form.Control name='reps' type='number' placeholder='input reps' onChange={handleChange}/>
     </Form.Group>

     <Form.Group controlId='workout-name'>
      <Form.Label>
        Name
      </Form.Label>
      <Form.Control name='name' type='text' placeholder='input name' onChange={handleChange}/>
     </Form.Group>
     <Button variant='primary' type='submit'>
      submit
     </Button>
   </Form>
  )
}

export default WorkoutForm