import { Button } from 'reactstrap';
export default function Section0() {
    return(
        <div style={{width:"100%"}}>
            <div style={{position:"relative"}}>
                <h3 className="section0 section_main_title"> 
                    이미 모두의 은행<br/>
                    지금은 토토뱅크
                </h3>
                <p className="section0 section_sub1">
                    한 사람, 한 사람을 위해 시작한 은행<br/>
                    더 많은 사람들이 찾는 모두의 은행이 되었습니다.
                </p>
                <div style={{opacity:"1"}} className='section0 store'> 
                <div style={{padding:"20px", display:"inline-block", width:"280px", backgroundColor:"white", borderRadius:"10px"}}>
                    <img src="/img/m-home-google.png" width="30px" alt=""/>&nbsp;&nbsp;
                    <span className="section_sub1">Google Play</span>
                </div>&nbsp;&nbsp;&nbsp;&nbsp;
                <div style={{padding:"20px", display:"inline-block", width:"280px", backgroundColor:"white", borderRadius:"10px"}}>
                    <img src="/img/m-home-apple.png" width="30px" alt=""/><span className="section_sub1">App Store</span>
                </div>
                </div>
                <img src="/img/main-bg3.png" alt="" width="100%"/>
            </div>
        </div>
    )
}