import React from "react";
import Collectionprops from "./Collectionprops";

const Collection = () => {
    return (
        <>
            <div className="collections-block">
                <div className="container">
                    <div className="coll-inner">
                        <div className="section-title">
                            <span>featured collection</span>
                        </div>
                        <div className="coll-raw">
                            <div className="coll-raw-inner">
                                <Collectionprops image="assets/images/eius-tempora.jpg" new="new" sale="on sale!" name="eius tempora" price="$379.00" />
                                <Collectionprops image="assets/images/porro-quisquam.jpg" new="new"  name="porro quisquam" price="$319.00" />
                                <Collectionprops image="assets/images/architecto-beatae.jpg" new="new" name="architecto beatae" price="$359.00" />
                                <Collectionprops image="assets/images/reprehenderit-beatae.jpg" new="new" sale="on sale!" name="reprehenderit beatae" price="$99.00" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Collection