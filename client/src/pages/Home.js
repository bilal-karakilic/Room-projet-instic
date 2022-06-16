
import { useEffect, useState } from "react";
import Card from "../Components/card";
import Footer from "../Components/footer";
import Header from "../Components/header";
import axios from 'axios';

const Home = () => {

    const [datas, setDatas] = useState([]);

    useEffect(() => {
        try {
            const resp = axios.get('http://localhost:3080/api/v1/rooms')
            .then(response => setDatas(response.data));
        } catch(e) {
            console.log(e)
        }
    }, [])

    return (
        <div className="Home">
            <Header />
            <div className="container-card container">
                {
                    datas.slice(0,4).map(data =>
                        <Card data={data}/>
                    )
                }
            </div>
            <Footer />
        </div>
    );
}

export default Home;