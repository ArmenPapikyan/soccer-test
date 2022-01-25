import React from "react";

function Loading({pageLoader, small}) {
    return (
        <div className={`loader ${small ? 'small-loader' : ''} ${pageLoader ? 'page-loader' : ''}`}>
            <img src="/images/loader.svg"/>
        </div>
    )
}

export default Loading;
