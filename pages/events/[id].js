import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import Carousel from 'react-bootstrap/Carousel'

function EventDetails() {
  const router = useRouter();
  const eventID = router.query.id;
  const event = getEventById(eventID);

  if (!event) {
    return (
      <div>
        <h1>No Such event found!!</h1>
      </div>
    );
  }

  return (
    <div>
      <h1>This is the event details u asked for {event.title}</h1>
      <Carousel variant="dark" style={{'max-width':'600px'}}>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/rafting.jpg"
            alt="First slide"
          />
          <Carousel.Caption style={{'color':'#3e3e3e'}}>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/skiing.jpg"
            alt="Second slide"
          />

          <Carousel.Caption style={{'color':'#3e3e3e'}}>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="images/trekking.jpg"
            alt="Third slide"
          />

          <Carousel.Caption style={{'color':'#3e3e3e'}}>
            <h3>Third slide label</h3>
            <p>
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default EventDetails;
