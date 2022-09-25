import {useEffect} from 'react';
import {connect} from "react-redux";
import {getNewsEn} from "../../redux/actions/newsAction";
import {getLanguage} from "../../locales";

const En = (props) => {
    useEffect(() => {
        props.getNewsEn();
    }, [])
    return (
        <div className="container">
            {props.newsEn.map((item, index) => {
                return (
                    <div className="card">
                        <img src={item.image_url} alt=""/>
                        <h3>{getLanguage() === 'uz' ? item.titleUz : getLanguage() === "ru" ? item.titleRu : item.titleEn}</h3>
                    </div>
                )
            })}
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        newsEn: state.news.newsEn,
    }
}

export default connect(mapStateToProps, {getNewsEn})(En);