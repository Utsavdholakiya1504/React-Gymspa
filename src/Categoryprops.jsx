import React from "react";

const Categoryprops = (props) => {
    return (
        <>
            <div className="cate-col">
                <div className="cate-col-inner">
                    <div className="cat-col-inner-img">
                        <img src={props.image} alt="shop-img" />
                        <div className="cat-action-btn">
                            <a href="#" className> {props.name}</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Categoryprops