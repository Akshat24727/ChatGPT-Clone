import React from "react";
import {MdPaid} from "react-icons/md";
import {BiMenu} from "react-icons/bi";

const Help = () => {
  return (
   <div
    className="tab-pane fade"
    id="help"
    role="tabpanel"
    aria-labelledby="help"
    tabIndex="0">
      <div className="main-wrapper p-0">
        <div className="fixed-header">
          <div className="d-flex align-items-center gap-2">
            <button className="navbar-toggler d-md-none d-block"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mainnavbarNav"
            aria-controls="mainnavbarNav"
            aria-expanded="false"
            aria-label="Toggle Navigation">
                      <BiMenu className="mobil_custom_menu"/>
            </button>

            <a href="/"
            className="logo-icon d-flex d-md-none">
              <img src="assets/svg/logo-icon.svg"
              className="img-fluid"
              alt=""/>
            </a>
            <h3>FAQ</h3>
          </div>
          <a href="/"
          className="premium-btn"
          data-cursor="pointer">
            <i className="iconsax"
            data-icon="crow-2"></i>
            <MdPaid/>Get<span>premium</span>
          </a>
        </div>  

        <div className="faq-section main-section">
          <div className="container card p-0">
            <div className="card-header">
              <h3 className="text-white title-basic aos-init aos-animated"
              data-aos-duration="1000"
              data-aos-delay="100">FAQ  
              </h3>
            </div>

            <div className="card-body px-sm-4 px-3">
              <div className="accordion"
              id="accordionPanelsStayOpenExample">
                {[1,2,3,4,5,6].map((el, i)=>(
                  <div className="accordion-item aos-init aos-animate"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay={100 * 1 + i}
                  >
                    <h2 className="accordion-header"
                    id="panelsStayOpen-headingOne">
                          <button 
                          data-cursor="pointer"
                          className="accordion-button"
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target="#panelsStayOpen-collapseOne"
        aria-controls="panelsStayOpen-collapseOne" 
        aria-expanded="true"
        aria-label="Toggle Navigation">
        Is the content unique?
        </button>
                    </h2>
                    <div className="accordion-collapse collapse show"
                    id="panelsStayOpen-collapseOne"
                    aria-labelledby="panelsStayOpen-headingOne">
                      <div className="accordion-body">
                        I'm a blockchain developer looking to contribute to your company and learn everything about blockchain.
                      </div>
                    </div>
                  </div>
                  ))}
              </div>
            </div>
          </div>
        </div>    
      </div>
    </div>
  );
}

export default Help