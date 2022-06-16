import HeaderAdmin from "../Components/headerAdmin";
import { useState , useEffect} from "react";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const AppartementForm = () => {
    const [name, setName] = useState('');
    const [img, setImg] = useState('');
    const [city, setCity] = useState('');
    const [zipcode, setZipcode] = useState('');
    const [adress, setAdress] = useState('');
    const [error, setError] = useState('');
    const [roomAdd, setRoomAdd] = useState(false);

    const [number, setNumber] = useState('');
    const [nameRoom, setNameRoom] = useState('');
    const [imgRoom, setImgRoom] = useState('');
    const [surface, setSurface] = useState('');
    const [price, setPrice] = useState('');
    let navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        if(name && img && city && zipcode && adress) {
            try {
                const resp = await axios.post('http://localhost:3080/api/v1/admin/appartement/add',{
                    name: name, img: img, city: city, zipcode: zipcode, adress: adress
                    // }).then(response =>  {
                    //     if(response.status == 200) {
                    //          sessionStorage.setItem('jwt',response.data);
                    //          return navigate('/admin');
                    //     }
                    });
            } catch(e) {
                setError(e);
            }
        } else {
            setError('Veuillez renseigner les champs manquants');
        }
    }
    return (
        <div className="AppartAdd">
            <HeaderAdmin />
            <div className="AdminConnexion">
            <div className="container-form">
                <div className="form-content">
                    <svg width="64" height="64" viewBox="0 0 64 64" fill="#83899A" xmlns="http://www.w3.org/2000/svg">
                        <path d="M13.6613 35.3853V28.0603C13.6611 27.9233 13.6254 27.7886 13.5575 27.6695C13.4897 27.5504 13.3922 27.4509 13.2744 27.3807C13.1567 27.3106 13.0227 27.2722 12.8857 27.2693C12.7487 27.2663 12.6132 27.299 12.4926 27.3641L9.74258 28.3991C9.20633 28.6891 8.71633 27.9491 9.19383 27.5691L30.7388 10.4441C31.092 10.1637 31.5278 10.0077 31.9787 10.0003C32.4296 9.99282 32.8703 10.1343 33.2326 10.4028L55.3851 27.5703C55.8626 27.9453 55.3726 28.6953 54.8363 28.4003L52.0863 27.3653C51.9657 27.3003 51.8303 27.2676 51.6932 27.2705C51.5562 27.2734 51.4222 27.3118 51.3045 27.382C51.1867 27.4521 51.0892 27.5516 51.0214 27.6707C50.9536 27.7899 50.9178 27.9245 50.9176 28.0616V35.3853C50.9176 37.8312 50.4358 40.2531 49.4998 42.5128C48.5638 44.7725 47.1919 46.8257 45.4624 48.5552C43.733 50.2847 41.6798 51.6566 39.4201 52.5926C37.1604 53.5286 34.7385 54.0103 32.2926 54.0103V54.0103C29.8462 54.0112 27.4236 53.53 25.1632 52.5944C22.9028 51.6588 20.8488 50.287 19.1187 48.5574C17.3885 46.8278 16.0161 44.7744 15.0797 42.5143C14.1433 40.2542 13.6613 37.8317 13.6613 35.3853V35.3853Z" fill="#5E63DC"/>
                        <path d="M32 43.9613C36.6385 43.9613 40.3988 40.201 40.3988 35.5625C40.3988 30.924 36.6385 27.1638 32 27.1638C27.3615 27.1638 23.6013 30.924 23.6013 35.5625C23.6013 40.201 27.3615 43.9613 32 43.9613Z" fill="white"/>
                    </svg>
                    <h2>Ajout d'un appartement</h2>
                    <span>{error}</span>
                </div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div>
                        <label>Nom</label>
                        <input type='text' placeholder="Nom" value={name} onChange={(e) => setName(e.target.value)}/>
                    </div>
                    <div>
                        <label>Adresse</label>
                        <input type='text' placeholder="Adress" value={adress} onChange={(e) => setAdress(e.target.value)} />
                    </div>
                    <div>
                        <label>Code postal</label>
                        <input type='text' placeholder="Code postal" value={zipcode} onChange={(e) => setZipcode(e.target.value)}/>
                    </div>
                    <div>
                        <label>Ville</label>
                        <input type='text' placeholder="Ville" value={city} onChange={(e) => setCity(e.target.value)}/>
                    </div>
                    <div>
                        <label>Image</label>
                        <input type='text' placeholder="Image" value={img} onChange={(e) => setImg(e.target.value)}/>
                    </div>
                    {
                        roomAdd ? (
                            <div className="room-form">
                                <h2>Room info</h2>
                                <div className="addRoom" onClick={() => setRoomAdd((prev) => !prev)}>
                                <span>delete Room</span>
                            </div>
                                <div>
                                    <label>NomRoom</label>
                                    <input type='text' placeholder="NomRoom" value={nameRoom} onChange={(e) => setNameRoom(e.target.value)}/>
                                </div>
                                <div>
                                    <label>Number</label>
                                    <input type='float' placeholder="Number" value={number} onChange={(e) => setNumber(e.target.value)} />
                                </div>
                                <div>
                                    <label>prix</label>
                                    <input type='text' placeholder="Prix" value={price} onChange={(e) => setPrice(e.target.value)}/>
                                </div>
                                <div>
                                    <label>surface</label>
                                    <input type='text' placeholder="Surface" value={surface} onChange={(e) => setSurface(e.target.value)}/>
                                </div>
                                <div>
                                    <label>Image</label>
                                    <input type='text' placeholder="Image" value={imgRoom} onChange={(e) => setImgRoom(e.target.value)}/>
                                </div>
                            </div>

                        ) : (
                            <div className="addRoom" onClick={() => setRoomAdd((prev) => !prev)}>
                                <span>Add Room</span>
                            </div>
                        )
                    }

                    <button>Ajout</button>
                </form>

            </div>
        </div>
        </div>
    );
}

export default AppartementForm;