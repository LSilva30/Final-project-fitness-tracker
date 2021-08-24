import { Button } from 'react-bootstrap'

function Workout({ exercise, handleClick }) {
  const isCompleted = exercise.completed    // go into the exercise and check that the completed is set to True. assign it to variable 'isCompleted'
  return (
    <div className='workout-group'>
        <Button variant={isCompleted ? 'success' : 'outline-success'} onClick={() => handleClick(exercise)}>
          {isCompleted ? <i className="fas fa-check"/> : <i className="fas fa-check" />}
        </Button>
        
      <li className='exercise-list'>    
        {                             // the exercise is being set by a map from WorkoutList and setting the data into each field dynamically
        `name: ${exercise.name}/  
         sets: ${exercise.sets}/ 
         reps: ${exercise.reps}/`
        }
      </li>
    </div>
  )
}

export default Workout
