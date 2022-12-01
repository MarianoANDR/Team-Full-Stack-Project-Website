import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';
import pic from './images/Charity-bro.svg'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import Card from './Card';

function OffcanvasExample() {
    
  return (
    <>
      {['sm'].map((expand) => (
        <Navbar sticky = 'top'  key={expand} bg="white" expand={expand} className="mb-3">
          <Container fluid>
          <Navbar.Brand href="#home">Helping Hand</Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                  Helping Hand
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
              <Nav className="me-auto">
        <Nav.Link className='p-3 display' href="#home">about</Nav.Link>
        <Nav.Link  className='p-3 display' href="#features">blog</Nav.Link>
        <Nav.Link  className='p-3 display' href="#pricing">contribute</Nav.Link>
      </Nav>
    <Nav>
        <Nav.Link  className='p-3' href="/login"><Button>Join now</Button></Nav.Link>
       
      </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    <main>
        <section className='section'>
            <h1>Always give without remembering and always receive without forgetting</h1>
            
        <a href="https://storyset.com/people"><img className='dis' src= {pic}></img></a>
        
            <div className='join-now'>
            <Button >Subscribe</Button>
            
</div>
        </section>
        <section className='section1'>
        <a href="https://storyset.com/people"><img src= {pic}></img></a>
        </section>
    </main>
    <section className='work color' id='color'>
      <div className='heading'>
      <h2>How Replate Works</h2>
      <p>
      Replate’s platform is a web app, allowing donors to schedule pick-up services in a <br></br> few clicks. Our data-driven technology provides detailed metrics on the impact of <br></br> those contributions.
      </p>
      </div>
      <Card/>
    </section>
    </>
  );
}

export default OffcanvasExample;