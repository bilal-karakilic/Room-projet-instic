
import { useEffect, useState } from "react";
import Card from "../Components/card";
import Footer from "../Components/footer";
import Header from "../Components/header";
import axios from 'axios';


const Appartements = () => {
    const [datas, setDatas] = useState([]);

    useEffect(() => {
        try {
            const resp = axios.get('http://localhost:3080/api/v1/appartements')
            .then(response => setDatas(response.data));
        } catch(e) {
            console.log(e)
        }
    }, [])
    return (
        <div className="Appartements">
            <Header />
                <div className="container-card container">
                {
                    datas.map(data =>
                        <Card data={data}/>
                    )
                }
                </div>
            <Footer />
        </div>
    );
}

export default Appartements;