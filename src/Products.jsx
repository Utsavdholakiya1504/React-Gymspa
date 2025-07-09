import React from "react";
import Productsprops from "./Productsprops";

const Products = () => {
    return (
        <>
            <div className="products-block">
                <div className="container">
                    <div className="products-inner">
                        <div className="section-title">
                            <span>new products</span>
                        </div>
                        <div className="prod-raw">
                            <div className="prod-raw-inner">
                               <Productsprops image="assets/images/perspiciatis-unde.jpg" new="new" sale="on sale!" name="perspiciatis-unde" price="$99.00" />
                               <Productsprops image="assets/images/omnis-iste.jpg" new="new"  name="omnis-iste" price="$199.00" />
                               <Productsprops image="assets/images/accusantium-dolore.jpg" new="new" sale="on sale!" name="accusantium-dolore" price="$299.00" />
                               <Productsprops image="assets/images/rem-aperiam.jpg" new="new"  name="rem-aperiam" price="$249.00" />
                               <Productsprops image="assets/images/adipisci-velit.jpg" new="new" sale="on sale!" name="adipisci-velit" price="$289.00" />
                               <Productsprops image="assets/images/numquam-eius.jpg" new="new"  name="numquam-eius" price="$279.00" />
                               <Productsprops image="assets/images/modi-tempora.jpg" new="new"  name="modi-tempora" price="$349.00" />
                               <Productsprops image="assets/images/dolore-magnam.jpg" new="new" sale="on sale!" name="dolore-magnam" price="$399.00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}
export default Products