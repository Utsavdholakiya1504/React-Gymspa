import React from "react";
import Categoryprops from "./Categoryprops";

const Category = () => {
    return (
        <>
            <div className="shop-category">
                <div className="container">
                    <div className="cate-inner">
                        <div className="section-title">
                            <span> Shop by Category </span>
                        </div>
                        <div className="cate-row">
                            <Categoryprops image="assets/images/shop1.jpg" name="shop" />
                            <Categoryprops image="assets/images/sale 2.jpg" name="sale" />
                            <Categoryprops image="assets/images/fashion 3.jpg" name="fashion" />
                            <Categoryprops image="assets/images/mobiles 4.jpg" name="mobiles" />
                            <Categoryprops image="assets/images/sports 5.jpg" name="sport" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Category