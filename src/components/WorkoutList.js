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
    .then(data => setStateFunction(data)) // setStateFunction: "data" is the workouts and then we're SETTING that to state GETTER: 'workouts'. setStateFunction is the placeholder for setWorkout that will be passed in on (line:28)
    .catch(err => console.log(err))
}

function WorkoutList() {
  const { level } = useParams() // level is being deconstructed to be dynamic to whichever Link is being clicked (App.js line:13 is parameter ":level") and it is Linked in Home.js on the Link that shows "/workout/beginner" for example"
  const [workouts, setWorkouts] = useState([])
  const [addWorkouts, setaddWorkouts] = useState(false)

  // DO A USE EFFECT TO SEND THE LEVEL TO THE BACKEND API
  useEffect(() => {
    fetchWorkouts(level, setWorkouts)     // we created a function called fetchWorkouts basically to reuse our fetch wherever we want and it takes 2 parameters: Level of the workout and the setWorkout state(which replaces setStateFunction on line:17)
  }, [level])

  console.log('this is the full list of workouts from state-->', workouts) // "workouts" is now the full list of workouts we get based off the level we clicked

  const handleClick = exercise => {       // handleClick function is what toggles from false to true
    const { name, completed } = exercise  // here we are deconstructing the name and completed field from whichever exercise we are clicking
    console.log('this is our exercise-->', exercise)
    fetch(
      `${process.env.REACT_APP_API_ENDPOINT}/workouts/${level}/${name}`,    // finds the level of the workout and the name of the workout we will modify
      {
        method: 'PATCH',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ completed: !completed }),    // this sets completed to whatever the opposite of its original state. to create the toggle functionality
      }
    )
      .then(() => fetchWorkouts(level, setWorkouts))    // here we are refetching and rerendering the page with the new values on completed after a succesful click
      // .catch(err => console.log(err))
  }

 
  return (
    <>
      <Button onClick={() => setaddWorkouts(!addWorkouts)}>{addWorkouts ? 'Finish Adding' : 'Add Workouts'}</Button>
      <div className='workout-mainPage'>
        <div>
          {workouts.map((exercise, i) => {      // mapping through the list of exercises, setting the data into single variable "exercise"
            return <Workout key={i} exercise={exercise} handleClick={handleClick} addWorkouts={addWorkouts} />
          })}
        </div>
        {addWorkouts ? (
          <WorkoutForm level={level} refetchWorkouts={() => fetchWorkouts(level, setWorkouts)}/>    // if we click modify: show only the form
        ) : (
          <WorkoutChart workouts={workouts}/>   // if we unclick modify show the chart
        )}
      </div>
    </>
  )
}

export default WorkoutList