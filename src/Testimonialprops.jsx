import React from "react";

const Testimonialprops = (props) => {
    return (
        <>
            <div className="test-col">
                <div className="test-col-inner">
                    <div className="test-details">
                        <div className="test-img">
                            <img src={props.image} alt="testimonial-img-1" />
                        </div>
                        <div className="test-name">
                            <strong>{props.name} </strong>
                            <p>{props.feild}</p>
                        </div>
                    </div>
                    <div className="test desc">
                        <p>{props.desc}</p>
                    </div>
                </div>
            </div>

        </>
    )
}
export default Testimonialprops