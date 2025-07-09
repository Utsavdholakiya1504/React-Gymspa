import React from "react";

const Productsprops = (props) => {
    return (
        <>
            <div className="prod-item">
                <div className="prod-item-img"> 
                    <a href="#">
                        <img src={props.image} alt="perspiciatis-unde-img" />
                    </a>
                    <ul className="prod-sale">
                        <li className="new">{props.new}</li>
                        <li className="sale">{props.sale}</li>
                    </ul>
                    <div className="prod-view">
                        <a href="#">Quick view</a>
                    </div>
                </div>
                <div className="prod-item-desc">
                    <h3 className="prod-title">
                        <a href="#">{props.name}</a>
                    </h3>
                    <div className="prod-price">
                        <span className="price">{props.price}</span>
                    </div>
                    <a href="#" className="action-btn">add to cart</a>
                </div>
            </div>
        </>
    )
}
export default Productsprops