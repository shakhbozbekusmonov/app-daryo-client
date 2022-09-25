import {useEffect} from 'react';
import {connect} from "react-redux";
import {getNewsUz} from "../../redux/actions/newsAction";

const Uz = (props) => {
    useEffect(() => {
        props.getNewsUz();
    }, [])
    return (
        <div className="container">
            {props.newsUz.map((item, index) => {
                return (
                    <div className="card">
                        <img src={item.image_url} alt=""/>
                        <h3>{item.title}</h3>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        newsUz: state.news.newsUz,
    }
}

export default connect(mapStateToProps, {getNewsUz})(Uz);