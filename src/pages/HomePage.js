import { Carousel } from "react-bootstrap"
import img1 from '../assets/img31.jpg'
import img2 from '../assets/img33.jpg'
import img3 from '../assets/img34.jpg'

export default function HomePage() {
    return (
        <div>
            <Carousel className='carousel-home' >
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ img1 }  
                    alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ img2 }
                    alt="Second slide"
                    />

                </Carousel.Item>
                <Carousel.Item>
                    <img
                    className="d-block w-100"
                    src={ img3 }
                    alt="Third slide"
                    />

                </Carousel.Item>
            </Carousel>            
        </div>
    )
}
