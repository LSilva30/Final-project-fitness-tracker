import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import weightlifting from '../assets/weightlifting.png'

function Home() {
  return (
    <>
      <section className='home-hero'>
      
        <h1 className="silva-strong-title">SILVA<img className="strong-icon" src={weightlifting} alt="icon of a guy lifting a squat bar" />STRONG</h1>
        <hr className="home-hr"/>
        {/* <h2>Lets build your weekly workout!</h2> */}
        <h2>CHOOSE YOUR LEVEL</h2>
        <hr className="home-hr"/>
        <p className="home-quote"><i>You're just a click away from acheiving your fitness goals! Let's build your weekly workout.</i></p>
      </section>
      <section className='experience-levels'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://pivotalmotion.physio/wp-content/uploads/2021/01/Deadlift.jpeg' />
          <Card.Body>
            <Card.Title>BEGINNER</Card.Title>
            <hr/>
            <Card.Text>
            "Short and simple, a great way for beginners to get started on their physical journey."
            </Card.Text>
            <Link to='/workout/beginner'>
              <Button className='btn-cards' variant='secondary'>START NOW</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://media.istockphoto.com/photos/getting-fit-one-lift-at-a-time-picture-id961254774?k=6&m=961254774&s=612x612&w=0&h=I0n5MSS2dh6ANjGcUg0qmZStmtPn63QHG4hUYCFGsTg=' />
          <Card.Body>
            <Card.Title>INTERMEDIATE</Card.Title>
            <Card.Text>
            "For those who are looking to push themselves to the next level. You will be challenged to step out of your comfort zone."
            </Card.Text>
            <Link to='/workout/intermediate'>
              <Button className='btn-cards' variant='secondary'>START NOW</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://media.istockphoto.com/photos/muscular-man-working-out-in-gym-strong-male-torso-abs-picture-id924491214?k=6&m=924491214&s=170667a&w=0&h=lRHhI56O149RYkeVBNJt9C0MvBWJ4CLLSOEdiKFF_fw=' />
          <Card.Body>
            <Card.Title>EXPERT</Card.Title>
            <Card.Text>
            "Advanced exercises that challenge your body for increased strength, power, and extra intensity to acheive greater results."
            </Card.Text>
            <Link to='/workout/expert'>
              <Button className='btn-cards' variant='secondary'>START NOW</Button>
            </Link>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

export default Home
