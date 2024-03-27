import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./HomePageCard.css";
import image1 from "../../images/bg 1.png";
import image2 from "../../images/bg 2.png";
import image3 from "../../images/bg 3.png";
import image4 from "../../images/bg 4.png";
import image5 from "../../images/bg 5.png";
import image6 from "../../images/bg 6.png";
import image7 from "../../images/bg 7.png";
import image8 from "../../images/bg 8.png";
import image9 from "../../images/bg 9.png";
import image10 from "../../images/bg 10.png";
import image11 from "../../images/bg 11.png";

function HomePageCard({ title, description, startDate, index, id }) {
    const [topImage, setTopImage] = useState(false);
    const [imageURL, setImageURL] = useState(null);

    function isEven(number) {
        return number % 2 === 0;
    }

    function getImageIndex(number) {
        const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9, image10, image11];
        return images[number];
    }

    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * 11);
        const even = isEven(randomIndex);
        setTopImage(even);
        setImageURL(getImageIndex(randomIndex));
    }, []);

    return (
        <div className="col">
            {topImage ? (
                <Link to={`/hikes/hike/${id}`} >
                    <div className="card h-100">
                        <img src={imageURL} className="card-img-top" alt="" />
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <small>Start on: {startDate}</small>
                            <p className="card-text">{description}</p>
                        </div>
                    </div>
                </Link>

            ) : (
                <Link to={`/hikes/hike/${id}`}>
                    <div className="card h-100">
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <small>Start on: {startDate}</small>
                            <p className="card-text">{description}</p>
                        </div>
                        <img src={imageURL} className="card-img-top" alt="" />
                    </div>
                </Link>
            )}
        </div>
    );
}

export default HomePageCard;
