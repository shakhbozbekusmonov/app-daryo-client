import { useState, useEffect } from 'react';
import axios from "axios";
import {API_PATH} from "../../tools/constants";
import {Link} from "react-router-dom";
import {FadeLoader} from "react-spinners";

const Home = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        axios.get(API_PATH + "uz")
            .then((res) => {
                console.log(res);
                setLoading(false);
                setNews(res.data.top);
            })
    }, [])

    const styles = {
        widths: "100%",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    }
    return (
        <div style={{width: "100%", height: "100%"}}>
            {loading ? (
                <div style={styles}>
                    <FadeLoader/>
                </div> )
                : (
                <div className="container">
                    <div className="row">
                        {news.map((item, index) => {
                            return (
                                <div className="col-4 mt-3">
                                    <div className="card">
                                        <img src={item.image_url} style={{height: "200px"}} alt={item.title}/>
                                        <div className="card-body">
                                            <h5>{item.title}</h5>
                                            <p>{item.text.slice(0, 154)}<Link to={""}> Batafsil</Link></p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
                )
            }
        </div>
    );
};

export default Home;