import { CircularProgressbar } from 'react-circular-progressbar'
import 'react-circular-progressbar/dist/styles.css'

function WorkoutChart({workouts}) {
  const completedWorkouts = workouts.filter((exercise) => {
    return exercise.completed
  })
  const completedPercentage = Math.round((completedWorkouts.length / workouts.length) * 100)
  return (
  <CircularProgressbar value={completedPercentage} text={`${completedPercentage}%`} />
  )
}

export default WorkoutChart