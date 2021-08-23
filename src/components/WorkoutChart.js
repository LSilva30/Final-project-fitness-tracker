import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function WorkoutChart({workouts}) {   // workouts is prop being passed from WorkoutList and shows ALL of our workouts
  console.log('these are my workouts>', workouts)
  const completedWorkouts = workouts.filter((exercise) => {      // .filter() is looping through the list of workouts, creating each one as an individual exercise 
    return exercise.completed                                   // and returning only the exercise that are set to completed == True
  })
  console.log('this is the filtered-->', completedWorkouts)      // only the workouts that are completed == true
  const completedPercentage = Math.round((completedWorkouts.length / workouts.length) * 100)    // (completedWorkouts.length = however many are completed True) divided / by (workouts.length = how many workouts total)
  return <CircularProgressbar value={completedPercentage} text={`${completedPercentage}%`} />
}

export default WorkoutChart