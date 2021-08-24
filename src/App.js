import { Route, Switch } from 'react-router-dom'
import WorkoutList from './components/WorkoutList'
import Header from './components/Header'
import Home from './components/Home'
import Recommendations from './components/Recommendations'
import './App.css'

function App() {
  return (
    <>
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/workout/:level' component={WorkoutList} /> 
      </Switch>
    </>
  )
}

export default App
