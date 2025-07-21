import React from "react";
import Brandsprops from "./Brandsprops";

const Brands = () => {
    return (
        <>
            <div className="brands-block">
                <div className="container">
                    <div className="brand-inner">
                        <div className="section-title">
                            <span>shop by brands</span>
                        </div>
                        <div className="brand-raw">
                            <div className="brand-raw-inner">
                               <Brandsprops image="assets/images/8.jpg"   />
                               <Brandsprops image="assets/images/4.jpg"   />
                               <Brandsprops image="assets/images/6.jpg"   />
                               <Brandsprops image="assets/images/7.jpg"   />
                               <Brandsprops image="assets/images/2.jpg"   />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Brands