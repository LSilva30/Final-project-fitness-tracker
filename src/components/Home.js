import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className='home-hero'><h2>Lets build your weekly workout!</h2></section>
      <section className='experience-levels'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://pivotalmotion.physio/wp-content/uploads/2021/01/Deadlift.jpeg' />
          <Card.Body>
            <Card.Title>BEGINNER</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to='/workout/beginner'>
              <Button variant='primary'>START</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://media.istockphoto.com/photos/getting-fit-one-lift-at-a-time-picture-id961254774?k=6&m=961254774&s=612x612&w=0&h=I0n5MSS2dh6ANjGcUg0qmZStmtPn63QHG4hUYCFGsTg=' />
          <Card.Body>
            <Card.Title>INTERMEDIATE</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to='/workout/intermediate'>
              <Button variant='primary'>START</Button>
            </Link>
          </Card.Body>
        </Card>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://media.istockphoto.com/photos/muscular-man-working-out-in-gym-strong-male-torso-abs-picture-id924491214?k=6&m=924491214&s=170667a&w=0&h=lRHhI56O149RYkeVBNJt9C0MvBWJ4CLLSOEdiKFF_fw=' />
          <Card.Body>
            <Card.Title>EXPERT</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Link to='/workout/expert'>
              <Button variant='primary'>START</Button>
            </Link>
          </Card.Body>
        </Card>
      </section>
    </>
  )
}

export default Home
