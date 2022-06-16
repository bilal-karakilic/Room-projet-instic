
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Deconnexion = () => {
    let navigate = useNavigate();
    useEffect(() => {
        sessionStorage.removeItem('jwt');
        return navigate('/');
    })
}

export default Deconnexion;