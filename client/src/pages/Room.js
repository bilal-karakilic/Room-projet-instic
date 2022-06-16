
import { useEffect, useState } from "react";
import Card from "../Components/card";
import Footer from "../Components/footer";
import Header from "../Components/header";
import axios from 'axios';
import { useParams } from 'react-router';

const Room = () => {
    const [data, setData] = useState([]);
    const { id } = useParams();
    useEffect(() => {
        try {
            const resp = axios.get(`http://localhost:3080/api/v1/rooms/${id}`)
            .then(response => setData(response.data));
        } catch(e) {
            console.log(e)
        }
    }, []);

    return (
        <div className="Room">
            <Header />
            <div className="container-room">
                <h1>{data.name}</h1>
                <div className="Img">
                    <img src={data.thumbnail}/>
                </div>
                <div className="container-content">
                    <div>
                        <ul>
                            <li><p><i className="fa-solid fa-arrows-maximize"></i> {data.surface}m2</p></li>
                            <li><p><i className="fa-solid fa-bed"></i> simple</p></li>
                            <li><p><i className="fa-solid fa-location-dot"></i>Lyon</p></li>
                            <li><p><i className="fa-solid fa-calendar-check"></i> Disponible</p></li>
                        </ul>
                    </div>
                    <div>
                        <span>{data.price}$</span> / nuit
                    </div>
                    <div>
                        <span>Description:</span>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer feugiat odio eu tincidunt porta. Donec porta, odio at scelerisque malesuada, metus elit sollicitudin diam, in aliquet quam urna ornare lorem. Aliquam a felis libero. Aliquam congue turpis id dui tristique pulvinar. Nullam laoreet id lorem et rhoncus. Vestibulum nec mi ut ante commodo venenatis ac ut est. Duis sed mattis lacus. Ut porta malesuada est ac feugiat.
                    </div>

                    <a href={`/chambres/reservation/${id}`}>Réserver cette chambres</a>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Room;