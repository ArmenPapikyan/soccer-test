import React from "react";
import Card from "./Includes/Card";
import {connect} from "react-redux";

function DropArea(props) {
    const {compereList} = props;
    return (
        <div className="drop-area">
            {compereList.length ? compereList.map((el, i) => {
                return (
                    <Card element={el} type={el.type} stats={el.stats ? el.stats : el} key={i} name={el.name}/>
                )
            }) : (<h1>PASS TEAM OR PLAYER FOR COMPERE</h1>)}

        </div>
    )
}

const mapStateProps = (state) => {
    return {
        compereList: state.TeamOrPlayer.compereList
    }
}
export default connect(mapStateProps)(DropArea);
