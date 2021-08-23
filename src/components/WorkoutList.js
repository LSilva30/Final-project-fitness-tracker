import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Workout from './Workout'
import WorkoutChart from './WorkoutChart'
import WorkoutForm from './WorkoutForm'
import { Button } from 'react-bootstrap'

const fetchWorkouts = (level, setStateFunction) => {
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/workouts`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ level }),
  })
    .then(res => res.json())
    .then(data => setStateFunction(data)) // setWorkouts: "data" is the workouts and then we're SETTING that to state GETTER: 'workouts' (line:6)
    .catch(err => console.log(err))
}

function WorkoutList() {
  const { level } = useParams() // level is being deconstructed to be dynamic to whichever Link is being clicked (App.js line:13 is parameter ":level") and it is Linked in Home.js on the Link that shows "/workout/beginner" for example"
  const [workouts, setWorkouts] = useState([])
  const [modifyWorkouts, setModifyWorkouts] = useState(false)

  // DO A USE EFFECT TO SEND THE LEVEL TO THE BACKEND API
  useEffect(() => {
    fetchWorkouts(level, setWorkouts)
  }, [level])

  console.log('this is the full list of workouts from state-->', workouts) // "workouts" is now the full list of workouts we get based off the level we clicked

  // pass in level and exercise
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
      // .catch(err => console.log(err))
  }

  const handleDelete = (workoutName) => {
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/workouts/delete`,
      {
        method: 'POST',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ workoutName , level }),
      }
    )
      .then(() => fetchWorkouts(level, setWorkouts))
      // .catch(err => console.log(err))
  }
 
  return (
    <>
      <Button onClick={() => setModifyWorkouts(!modifyWorkouts)}>{modifyWorkouts ? 'Finish Modifying' : 'Modify Workouts'}</Button>
      <div>
        <div>
          {workouts.map((exercise, i) => {      // mapping through the list of exercises, setting the data into single variable "exercise"
            return <Workout key={i} exercise={exercise} handleClick={handleClick} modifyWorkouts={modifyWorkouts} handleDelete={handleDelete} />
          })}
        </div>
        {modifyWorkouts ? (
          <WorkoutForm level={level} refetchWorkouts={() => fetchWorkouts(level, setWorkouts)}/>
        ) : (
          <WorkoutChart workouts={workouts}/>
        )}
      </div>

    </>
  )
}

export default WorkoutList