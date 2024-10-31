import{Col,Button,Form,FormGroup,Label,Input,Modal,ModalFooter,ModalBody,ModalHeader} from 'reactstrap';
import { useState } from 'react';
import axios from 'axios';

const Withdraw=()=>{
   const [withdraw,setwithdraw] = useState({id:'',money:0}); //초기화
   const [isModal,setIsModal] = useState(false);
   const [message,setMessage] =useState("");

   const edit =(e)=>{
    setwithdraw({...withdraw,[e.target.name]:e.target.value});
   }

   const submit= (e)=>{
        e.preventDefault();
        axios.post("http://localhost:8080/withdraw",withdraw)
        .then(res=>{
              setMessage(`출금 성공(잔액:${res.data})`)
              setIsModal(true);  
        })
        .catch(err=>{
            console.log(err);
            setMessage(`출금 실패(사유 :${err.response.data})`);
            setIsModal(true);
        })
   }

   return(
   <div className='route'>
        <h4>출금</h4>
        <Form >
        <FormGroup row>
        <Label id='id' sm={3}>계좌번호</Label>
            <Col sm={9}>
                 <Input type='text' name="id" value={withdraw.id} onChange={edit}>계좌번호</Input>
            </Col>
        </FormGroup>
        <FormGroup row>
        <Label for='balance' sm={3}>출금액</Label>
            <Col sm={9}>
                <Input type='text' name='money' value={withdraw.money} onChange={edit} />
            </Col>
        </FormGroup>
        <Button color='warning' onClick={submit}>출금</Button>
        </Form>
        <Modal isOpen={isModal} toggle={()=>setIsModal(!isModal)}>
                <ModalHeader toggle={()=>setIsModal(!isModal)}>출금확인</ModalHeader>
                <ModalBody>
                    {message}
                </ModalBody>
                <ModalFooter>
                        <Button color='primary' onClick={()=>setIsModal(!isModal)} >확인</Button>
                </ModalFooter>
            </Modal>

    </div>
   );
}
export  default Withdraw;