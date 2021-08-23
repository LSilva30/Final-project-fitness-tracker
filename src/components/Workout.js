import { Button } from 'react-bootstrap'

function Workout({exercise, handleClick, modifyWorkouts, handleDelete}) {
  const isCompleted = exercise.completed
  return (
    <div className='workout-group'>
      {modifyWorkouts ? (
        <Button variant='outline-danger' onClick={() => handleDelete(exercise.name)}>
          Delete Workout
        </Button>
      ) : (
        <Button variant={isCompleted ? 'outline-success' : 'outline-danger'} onClick={() => handleClick(exercise)}>
          {isCompleted ? <i className="fas fa-check"/> : <i className="fas fa-times" />}
        </Button>
      )}
      <li className='exercise-list'>
        {`name: ${exercise.name}/ 
     sets: ${exercise.sets}/ 
     reps: ${exercise.reps}/`}
      </li>
    </div>
  )
}

export default Workout
