const Card = ({data}) => {
    return (
        <div className="Card">
            <div className="container-img">
                <img src={data.thumbnail}/>
            </div>
            <div className="container-content">
                <h2>{data.name}</h2>
                <p><i className="fa-solid fa-arrows-maximize"></i> {data.surface}m2</p>
                <p><i className="fa-solid fa-bed"></i> simple</p>
                <p><i className="fa-solid fa-location-dot"></i>{data.city}</p>
                <p><i className="fa-solid fa-calendar-check"></i> Disponible</p>
                <a href={`/chambres/${data.id}`}>Voir</a>
            </div>
        </div>
    );
}


export default Card;