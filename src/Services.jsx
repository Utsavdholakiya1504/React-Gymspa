import React from "react";
import Servicesprops from "./Servicesprops";

const Services = () => {
    return (
        <>
            <div className="service-block">
                <div className="container">
                    <div className="services-inner">
                        <div className="section-title">
                            <span>Our services</span>
                        </div>
                        <p className="service-text">
                            Electric Motorized Power Fitness Machine Perfect for Home <br />
                            Use "DIY Installation with video call assistance".
                        </p>
                        <div className="items-row">
                            <Servicesprops image="assets/images/Free-Shipping.png" title="Free Shipping" desc="Free Delivery Option and excludes other delivery options such as One-Day Delivery" />
                            <Servicesprops image="assets/images/Secure-Payments.png" title="Secure Payments" desc="The webpage where credit card numbers are entered is secured via
                                            Secure
                                            Sockets Layer" />
                            <Servicesprops image="assets/images/5-Years-Warranty.png" title="5 Years Warranty" desc="5 Years Motor Warranty,1 Year part Warranty,Life time Frame" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Services