import { useEffect } from "react";
import { useSetAtom } from "jotai";
import { tokenAtom } from "./atoms";
import { useNavigate } from "react-router";

const Token = () => {
    let params = new URL(window.location.href).searchParams;
    let token = params.get("token");
    const setToken = useSetAtom(tokenAtom);
    const navigate = useNavigate();

    useEffect(() => {
        console.log(token);
        setToken(token);
        navigate("/user");
    }, [token])

    return(
        <></>
    ); 
};
export default Token;