import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import HeaderAdmin from "../Components/headerAdmin";

const HomeAdmin = () => {
    let navigate = useNavigate();
    useEffect(() => {
        if(!sessionStorage.getItem('jwt')) {
            return navigate('/admin/login');
        }
    })

    return (
        <div>
            <HeaderAdmin />
        </div>
    );
}

export default HomeAdmin;