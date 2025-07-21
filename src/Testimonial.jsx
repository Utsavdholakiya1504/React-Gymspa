import React from "react";
import Testimonialprops from "./Testimonialprops";

const Testimonial = () => {
    return (
        <>
            <div className="testimonial-block">
                <div className="container">
                    <div className="test-inner">
                        <div className="section-title">
                            <span> testimonial </span>
                        </div>
                        <div className="test-raw">
                            <div className="test-raw-inner">
                                <Testimonialprops image="assets/images/tetimonial-img-1.jpg" name="John Doe" feild="Fitness Trainer" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />
                                <Testimonialprops image="assets/images/tetimonial-img-2.jpg" name="Mark Doe" feild="Fitness Trainer" desc="Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum." />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Testimonial