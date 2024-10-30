import {useState} from 'react';
import {Button,Fade} from 'reactstrap';

export default function FadeEx(){
    const [fade,setFade] = useState(false);
    
    return(
        <div>
            <Button color='primary' onClick={()=>setFade(!fade)}>Toggle Fade</Button>
            <Fade in={fade} tag="p" className='mt-3'>
                         개굴개굴 개굴개굴
                        (깨굴깨굴 깨굴깨굴)
                        개굴개굴 개굴개굴 노래를 한다

            </Fade>
        
        </div>
    )
}