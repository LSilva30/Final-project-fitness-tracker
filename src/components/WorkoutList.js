import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function WorkoutList() {
  const { level } = useParams()     // level is being deconstructed to be dynamic to whichever Link is being clicked (App.js line:13 is parameter ":level") and it is Linked in Home.js on the Link that shows "/workout/beginner" for example"
  const [ workouts, setWorkouts ] = useState([])
  const  [exerciseName, setExerciseName] = useState("")

  // DO A USE EFFECT TO SEND THE LEVEL TO THE BACKEND API
  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_ENDPOINT}/workouts`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ level }),
    })
    .then(res => res.json())
    .then(data => setWorkouts(data))  // setWorkouts: "data" is the workouts and then we're SETTING that to state GETTER: 'workouts' (line:6)
    .catch(err => console.log(err))
  }, [])

  console.log('this is the full list of workouts from state-->', workouts)   // "workouts" is now the full list of workouts we get based off the level we clicked

 // pass in level and exercise
 const handleClick = (exerciseName) => {
  fetch(`${process.env.REACT_APP_API_ENDPOINT}/workouts/${level}/${exerciseName}`, {
    method: 'PATCH',
    headers: {
      'Content-type': 'application/json'
    },
    body: JSON.stringify({ completed: true })
  })
  .then(res => res.json())
  // .then(data => console.log(data.level.exercise))
  .catch(err => console.log(err))
}

  return (
    <ul>
    {workouts.map((exercise, i) => { 
      // mapping through the list of exercises, setting the data into single variable "exercise"
      return <li key={i}>
        <Button variant="dark" onClick={() => handleClick(exercise.name)}>done</Button> &nbsp; {`name: ${exercise.name}/ sets: ${exercise.sets}/ reps: ${exercise.reps}/`}</li>   // then returning it as a list dynamically by category: DISPLAYING IT TO SITE
    })}
  </ul>
  )
}
