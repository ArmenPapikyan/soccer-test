import React from "react";
import {createStats} from "../../helpers";
import {removeCard} from "../../Actions/Team";
import {connect} from "react-redux";

function Card(props) {
    const {name, type, stats, element} = props
    const handleClick = () => {
        props.removeCard(element)
    }
    return (
        <div className="card">
            <div className="card-body">
                <div className="card-remove" onClick={() => handleClick()}>X</div>
                <h4 className="card-title">{name}</h4>
                <div className="card-subtitle">Stats</div>
                {createStats(type, stats)}
            </div>
        </div>
    )
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeCard(obj) {
            return dispatch(removeCard(obj))
        }
    };
};
export default connect(null, mapDispatchToProps)(Card);
