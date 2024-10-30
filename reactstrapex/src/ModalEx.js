import {useState} from 'react';
import { Button,Modal,ModalHeader,ModalBody,ModalFooter } from 'reactstrap';

export default function  ModalEx() {
    const [modal,setModal] = useState(false);
    const toggle =()=>{
        setModal(!modal);
    }
    return (
        <div>
        <Button color='primary' onClick={()=>setModal(!modal)}>Modal Test</Button>
        <Modal isOpen={modal} toggle={toggle}> {/*modal에도 toggle을 주면 버튼을 누르지 않아도 모달이 닫힘 */}
            <ModalHeader toggle={toggle}>계좌개설</ModalHeader>
            <ModalBody>
                계좌를 개설하시겠습니까?
            </ModalBody>
            <ModalFooter>
                <div><Button color='primary'onClick={toggle}>개설</Button></div>
                <div><Button color='secondary'onClick={toggle}>취소</Button></div>
            </ModalFooter>
        </Modal>
        
        </div>
    )
  }