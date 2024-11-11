import { useState, useEffect } from 'react';
import { Table, Label, Input } from 'reactstrap';
import { useAtomValue, useAtom } from 'jotai';
import { tokenAtom } from './atoms';
import {useNavigate} from 'react-router';
import axios from 'axios';
const User = () => {
    const [member, setMember] = useState();
    //const token = useAtomValue(tokenAtom);
    const [token, setToken] = useAtom(tokenAtom);
    const navigate = useNavigate();
    const divStyle = { margin: "0 auto", width: "400px", border: "1px solid lightgray", borderRadius: "7px", padding: "10px" };

    useEffect(() => {
        request(token);
    }, []);

    const request = (ptoken) => {

        axios.get("http://localhost:8080/user", {
            headers: { Authorization: ptoken }
        }
        )
            .then(res => {
                console.log(res.data);
                //토큰이 만료되어 백엔드에서 토큰을 다시 만들어줌, 받은 토큰 갱신하고 사용자 정보 다시 요청해야함 
                if (res.data === 'token') {
                    setToken(res.headers.authorization); // 갱신 정보 저장 
                    request(res.headers.authorization); //갱신된 사용자 정보 다시 요청 
                } else {// 정상  
                    setMember({ ...res.data });
                }

            })
            .catch(err => {
                console.log(err);
                navigate("/");
            })
    }

    return (
        <>

            <div className='header-text'>회원정보</div>
            {member != null &&
                <div style={divStyle}>
                    <Table borderless>
                        <tr>
                            <td><Label for='id'></Label></td>
                            <td><Input type='text' readOnly value={member && member.username}></Input></td>
                        </tr>
                        <tr>
                            <td><Label for='email'></Label></td>
                            <td><Input type='text' readOnly value={member && member.email}></Input></td>
                        </tr>
                    </Table>
                </div>
            }

        </>
    )
}
export default User;