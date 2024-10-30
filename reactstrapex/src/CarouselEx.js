import 'bootstrap/dist/css/bootstrap.css';
import {UncontrolledCarousel}from 'reactstrap';

const items =[
    {
    src:'/frog1.png',
    caption:'개구리1'
    },
    {
        src:'/frog2.png',
        caption:'개구리2'
    },
    {
        src:'/frog3.png',
        caption:'개구리3'
    },
    {
        src:'/frog5.png',
        caption:'개구리4'
    },
    {
        src:'/frog7.png',
        caption:'개구리5'
    },
    {
        src:'/frog8.png',
        caption:'개구리6'
    }
]
export default function CarouselEx() {
    return(
        <>
    
        <UncontrolledCarousel items={items} />
   
        </>
    )
}