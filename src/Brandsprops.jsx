import React from "react";

const Brandsprops = (props) => {
    return (
        <>
            <div className="brans-item">
                <div className="brands items-img">
                    <a href="#">
                        <img src={props.image} alt="8-img" />
                    </a>
                </div>
            </div>
        </>
    )
}
export default Brandsprops