import { Button, Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className='home-hero'><h2>Lets build your weekly workout!</h2></section>
      <section className='experience-levels'>
        <Card style={{ width: '18rem' }}>
          <Card.Img variant='top' src='https://st4.depositphotos.com/12982378/23309/i/600/depositphotos_233093594-stock-photo-racial-man-doing-push-ups.jpg' />
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
          <Card.Img variant='top' src='holder.js/100px180' />
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
          <Card.Img variant='top' src='holder.js/100px180' />
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
