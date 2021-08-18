import { Button } from 'react-bootstrap'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

export default function WorkoutList() {
  const { level } = useParams()     // level is being deconstructed to be dynamic to whichever Link is being clicked (App.js line:13 is parameter ":level") and it is Linked in Home.js on the Link that shows "/workout/beginner" for example"
  const [ workouts, setWorkouts ] = useState([])
  // const [ finish, setFinish ] = useState(false)

  // DO A USE EFFECT TO SEND THE LEVEL TO THE BACKEND API
  useEffect(() => {
    fetch('http://localhost:5000/workouts', {
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

  useEffect(() => {
    fetch('http://localhost:5000/workouts', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(),
    })
    .then(res => res.json())
    .then(data => console.log('this is my data--->', data))
    .catch(err => console.log(err))
  }, [])

  return (
    <ul>
    {workouts.map((workout, i) => {     // mapping through the list of workouts, setting the data into single variable "workout"
      return <li key={i}><Button variant="dark">done</Button> &nbsp; {`name: ${workout.name}/ sets: ${workout.sets}/ reps: ${workout.reps}/`}</li>   // then returning it as a list dynamically by category: DISPLAYING IT TO SITE
    })}
  </ul>
  )
}
