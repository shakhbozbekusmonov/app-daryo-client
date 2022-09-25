import {useEffect} from 'react';
import {connect} from "react-redux";
import {getNewsRu} from "../../redux/actions/newsAction";

const Ru = (props) => {
    useEffect(() => {
        props.getNewsRu();
    }, [])
    return (
        <div className="container">
            {props.newsRu.map((item, index) => {
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
        newsRu: state.news.newsRu,
    }
}

export default connect(mapStateToProps, {getNewsRu})(Ru);