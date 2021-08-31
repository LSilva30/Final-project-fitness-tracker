import { Button } from 'react-bootstrap'

function Workout({ exercise, handleClick }) {
  const isCompleted = exercise.completed
  return (
    <div className='workout-group'>
        <Button variant={isCompleted ? 'success' : 'outline-success'} onClick={() => handleClick(exercise)}>
          {isCompleted ? <i className="fas fa-check"/> : <i className="fas fa-check" />}
        </Button>
        &nbsp;
      <li className='exercise-list'>
        {
        `${exercise.name}:
         Sets: ${exercise.sets} / 
         Reps: ${exercise.reps}`
        }
      </li>
    </div>
  )
}

export default Workout
