import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Workout from './Workout'
import WorkoutChart from './WorkoutChart'
import WorkoutForm from './WorkoutForm'
import { Button, Col } from 'react-bootstrap'

const fetchWorkouts = (level, setStateFunction) => {
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ level }),
  })
    .then(res => res.json())
    .then(data => setStateFunction(data))
    .catch(err => console.log(err))
}

function WorkoutList() {
  const { level } = useParams() 
  const [workouts, setWorkouts] = useState([])
  const [addWorkouts, setaddWorkouts] = useState(false)

  useEffect(() => {
    fetchWorkouts(level, setWorkouts)
  }, [level])

  const handleClick = exercise => {
    const { name, completed } = exercise
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/workouts/${level}/${name}`, 
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }), 
      }
    )
      .then(() => fetchWorkouts(level, setWorkouts)) 
  }

 
  return (
    <>
        <h1>
          <i className="fas fa-dumbbell"/>
          <br/>
        {level}
        </h1>
        <hr/>
      <div className='workout-mainPage'>
        <div className="workout-group-container">
          {workouts.map((exercise, i) => { 
            return <Col xl={3} lg={3} md={8} sm={10} xs={12}><Workout key={i} exercise={exercise} handleClick={handleClick} addWorkouts={addWorkouts} /></Col>
          })}
        </div>
        {addWorkouts ? (
          <WorkoutForm level={level} refetchWorkouts={() => fetchWorkouts(level, setWorkouts)}/>
          ) : (
            <WorkoutChart workouts={workouts}/>
            )}
            <Button variant="secondary" onClick={() => setaddWorkouts(!addWorkouts)}>{addWorkouts ? 'Finish Adding' : 'Add Workouts'}</Button>
      </div>
    </>
  )
}

export default WorkoutList