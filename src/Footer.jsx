import React from "react";

const Footer = () => {
  return (
    <>
      <div className="footer">
        {/* start footer top  */}
        <div className="footer-top">
          <div className="container">
            <div className="top-inner">
              <div className="top-inner-left">
                <h2>
                  <span>Sign up to get latest updates</span>
                  <p>Enter your email address to receive new updates</p>
                </h2>
              </div>
              <div className="top-inner-right">
                <form action="#">
                  <input type="email" name="email" id="mail" placeholder="Enter your email...." />
                  <input type="button" defaultValue="subscribe" />
                </form>
              </div>
            </div>
          </div>
        </div>
        {/* end footer top  */}
        {/* start footer middle  */}
        <div className="footer-middle">
          <div className="container">
            <div className="middle-inner">
              <div className="mid-inner-col">
                <div className="col-title">
                  <strong>Contact Us</strong>
                </div>
                <ul className="col-desc">
                  <li>
                    <span> Address: </span><br />
                    Etrend Gymspa <br />
                    180 Street, Arizona<br />
                    85002<br />
                    United States<br />
                  </li>
                  <li className="mail-contact">
                    <span> Mail us: </span>
                    <a href="mailto:info@domain.com">info@domain.com</a>
                  </li>
                  <li className="mail-contact">
                    <span> Phone: </span>
                    <a href="tel:+1234567890">(123)456 7890</a>
                  </li>
                </ul>
              </div>
              <div className="mid-inner-col">
                <div className="col-title">
                  <strong><a href="#">Your account </a></strong>
                </div>
                <ul className="col-desc">
                  <li>
                    <a href="#">personal info</a>
                  </li>
                  <li>
                    <a href="#">orders</a>
                  </li>
                  <li>
                    <a href="#">credit slips</a>
                  </li>
                  <li>
                    <a href="#">Addresses </a>
                  </li>
                </ul>
              </div>
              <div className="mid-inner-col">
                <div className="col-title">
                  <strong>Products</strong>
                </div>
                <ul className="col-desc">
                  <li>
                    <a href="#">Prices drop</a>
                  </li>
                  <li>
                    <a href="#">New products </a>
                  </li>
                  <li>
                    <a href="#">Best sales </a>
                  </li>
                  <li>
                    <a href="#">Sitemap </a>
                  </li>
                  <li>
                    <a href="#">Stores </a>
                  </li>
                </ul>
              </div>
              <div className="mid-inner-col">
                <div className="col-title">
                  <strong>Our company</strong>
                </div>
                <ul className="col-desc">
                  <li>
                    <a href="#">Delivery </a>
                  </li>
                  <li>
                    <a href="#">Legal Notice </a>
                  </li>
                  <li>
                    <a href="#">Terms and conditions of use </a>
                  </li>
                  <li>
                    <a href="#">About us </a>
                  </li>
                  <li>
                    <a href="#">Secure payment </a>
                  </li>
                  <li>
                    <a href="#">Contact us </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* footer middle with bootstrap  */}
        <div className="footer-middle-2">
          <div className="container-sm">
            <div className="accordion accordion-flush" id="accordionFlushExample">
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    Contact Us
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <ul className="col-desc">
                    <li>
                      <span> Address: </span><br />
                      Etrend Gymspa <br />
                      180 Street, Arizona<br />
                      85002<br />
                      United States<br />
                    </li>
                    <li className="mail-contact">
                      <span> Mail us: </span>
                      <a href="mailto:info@domain.com">info@domain.com</a>
                    </li>
                    <li className="mail-contact">
                      <span> Phone: </span>
                      <a href="tel:+1234567890">(123)456 7890</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseTwo" aria-expanded="false" aria-controls="flush-collapseTwo">
                    Your account
                  </button>
                </h2>
                <div id="flush-collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <ul className="col-desc">
                    <li>
                      <a href="#">personal info</a>
                    </li>
                    <li>
                      <a href="#">orders</a>
                    </li>
                    <li>
                      <a href="#">credit slips</a>
                    </li>
                    <li>
                      <a href="#">Addresses </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseThree" aria-expanded="false" aria-controls="flush-collapseThree">
                    Products
                  </button>
                </h2>
                <div id="flush-collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <ul className="col-desc">
                    <li>
                      <a href="#">Prices drop</a>
                    </li>
                    <li>
                      <a href="#">New products </a>
                    </li>
                    <li>
                      <a href="#">Best sales </a>
                    </li>
                    <li>
                      <a href="#">Sitemap </a>
                    </li>
                    <li>
                      <a href="#">Stores </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="accordion-item">
                <h2 className="accordion-header">
                  <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapsefour" aria-expanded="false" aria-controls="flush-collapsefour">
                    Our company
                  </button>
                </h2>
                <div id="flush-collapsefour" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <ul className="col-desc">
                    <li>
                      <a href="#">Delivery </a>
                    </li>
                    <li>
                      <a href="#">Legal Notice </a>
                    </li>
                    <li>
                      <a href="#">Terms and conditions of use </a>
                    </li>
                    <li>
                      <a href="#">About us </a>
                    </li>
                    <li>
                      <a href="#">Secure payment </a>
                    </li>
                    <li>
                      <a href="#">Contact us </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div></div>
        {/* end footer middle  */}
        {/* start footer bottom  */}
        <div className="footer-bottom">
          <div className="container">
            <div className="bottom-inner">
              <div className="bot-inner-left">
                <p className="copyright">
                  <a href="http://www.prestashop.com" target="_blank">© 2025 - Ecommerce software by
                    PrestaShop™</a>
                </p>
              </div>
              <div className="bot-inner-right">
                <ul className="payment-icons">
                  <li>
                    <a href="#"><i className="fa-brands fa-cc-visa" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-cc-paypal" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-cc-discover" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-solid fa-money-check-dollar" /></a>
                  </li>
                  <li>
                    <a href="#"><i className="fa-brands fa-cc-mastercard" /></a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* end footer bottom  */}
      </div>

    </>

  )
}
export default Footer