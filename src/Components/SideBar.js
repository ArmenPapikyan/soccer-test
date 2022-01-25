import React, {useEffect} from "react";
import {getLeagues} from "../Actions/Leagues";
import {connect} from "react-redux";
import Loading from "./Includes/Loading";
import {getTeamOrPlayer} from "../Actions/Team";

function SideBar(props) {
    const {data, loading, compereList} = props;
    useEffect(() => {
        props.getLeagues();
    }, [])

    const handleClick = (type, id) => {
        if (type !== 'league') {
            if (compereList.some(el => el.id === id) && compereList.some(el => el.type === type)) {
                return false
            } else {
                props.getTeamOrPlayer(type, id);
            }
        }
    }
    const categoryList = arr => {
        return (
            <ul className="panel-list">
                {arr.map((item, index) => {
                    return (
                        <li className={` list-item ${(compereList.some(el => el.id === item.id) && compereList.some(el => el.type === item.type)) ? 'active' : ''} `}
                            key={index}>
                            <div
                                className={`item-header ${compereList.some(el => el.type !== item.type) ? 'disable' : ''}`}
                                onClick={() => handleClick(item.type, item.id)}>
                                {item.children &&
                                <img className="item-arrow" src="/images/down-arrow-svgrepo-com.svg"/>}
                                <div className={`item-title ${item.children && 'fw-bold'}`}>
                                    {item.name}
                                </div>
                            </div>
                            {item.children && (
                                <div className="item-body">{categoryList(item.children)}</div>
                            )}
                        </li>
                    );
                })}
            </ul>
        );

    };
    return (
        <div className="sideBar">
            <div style={{width: 300}}>
                {loading ? <Loading pageLoader={true}/> :
                    <div className="sidebar-nav">{data && categoryList(data)}</div>
                }

            </div>
        </div>
    )
}

const mapStateProps = (state) => {
    return {
        data: state.Leagues.data,
        loading: state.Leagues.loading,
        compereList: state.TeamOrPlayer.compereList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        getLeagues() {
            return dispatch(getLeagues())
        },
        getTeamOrPlayer(type, id) {
            return dispatch(getTeamOrPlayer(type, id))
        }
    };
};
export default connect(mapStateProps, mapDispatchToProps)(SideBar);
