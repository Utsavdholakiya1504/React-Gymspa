import React from "react";

const Servicesprops = (props) => {
    return (
        <>
            <div className="service-col">
                <div className="col-inner">
                    <div className="img-block">
                        <img src={props.image} alt="shipping-img" />
                    </div>
                    <div className="col-inner-text">
                        <strong> {props.title} </strong>
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Servicesprops