import {useState} from 'react';
import {Tooltip} from 'reactstrap';
export default function TooltipEx(){
    const[tooltipOpen,setTooltipOpen] = useState(false);
    return(
        <>
        <span id="llm"><u><i>LLM</i></u></span>
        <Tooltip placement='bottom' isOpen={tooltipOpen} target="llm"
        toggle={()=>setTooltipOpen(!tooltipOpen)}>
            대규모 언어 모델(LLM)은 방대한 양의 데이터로 사전 학습된 초대형 딥 러닝 모델입니다.
        </Tooltip>
        </>
    )
}