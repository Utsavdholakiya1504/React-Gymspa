import React from "react";

const Collectionprops = (props) => {
    return (
        <>
            <div className="coll-item">
                <div className="coll-item-img">
                    <a href="#">
                        <img src={props.image} alt="eius-tempora-img" />
                    </a>
                    <ul className="coll-sale">
                        <li className="new">{props.new}</li>
                        <li className="sale">{props.sale}</li>
                    </ul>
                    <div className="coll-view">
                        <a href="#">Quick view</a>
                    </div>
                </div>
                <div className="coll-item-desc">
                    <h3 className="coll-title">
                        <a href="#">{props.name}</a>
                    </h3>
                    <div className="coll-price">
                        <span className="price">{props.price}</span>
                    </div>
                    <a href="#" className="action-btn">add to cart</a>
                </div>
            </div>
        </>
    )
}
export default Collectionprops