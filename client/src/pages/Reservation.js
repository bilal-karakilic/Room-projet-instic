import axios from 'axios';
import { useParams } from 'react-router';

const Reservation = () => {

    const { id } = useParams();
    console.log(id);
}


export default Reservation;