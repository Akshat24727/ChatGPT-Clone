import React, {useEffect, useState} from "react";
import {BiMenu} from "react-icons/bi";
import {MdPaid} from "react-icons/md";

import {Form} from "./index";
import {useStateContext} from "../../Context/index";

const Chat = () => {
  const [active, setActive] = useState("Ask Anything");
  const [hide, setHide] = useState(true);
  const [proMember, setProMember] = useState({});
  const [freeTrail, setFreeTrail] = useState();

  const {Free, address} = useStateContext();

  const close = (e) => {
    e.preventDefault();
    setHide(false);
  };
  const productList = [
      "Ask Anything",
      "Content writer",
      "Code Generator",
      "Translate Anything",
      "Social Media",
      "Email Generator",
      "Personal Advise",
       "Password Generator",
      "Travel/hangout",
      "Essay writer",
    ];

  const loadData = () => {
    const UserDetail = localStorage.getItem("UserDetail");
    const member = JSON.parse(UserDetail);
    setProMember(member);

    const freeTrail = localStorage.getItem("freeTrail");
    setFreeTrail(freeTrail);
    console.log(freeTrail);
  };

  useEffect(()=>{
    loadData();
  }, []);

  const display = Free?.replace(/['"]+/g,"");

  return (
   
    <div className="tab-pane fade show active"
    id = "chat"
    role = "tabpanel"
    aria-labelledby="chat"
    tabIndex="0">
      <div className="main-wrapper">
      <nav className="navbar navbar-expand-lg bg-light p-0">
        <button className="navbar-toggler d-none"
        type="button"
        data-bs-toggle="collapse" 
        data-bs-target='#navbarNav'
        aria-controls="navbarNav" 
        aria-expanded="false"
        aria-label="Toggle Navigation">
        <BiMenu className="mobil_custom_menu"/>
        </button>
        <div className="collapse navbar-collapse"
        id="navbarNav">
        <div className="inner-menu-panel">
          <button data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          className="inner-close d-block d-lg-none"> 
            Back
          </button>
          <div className="search-box">
            <i className="iconsax"
            data-icon="search-normal-2"></i>
            <input
            type="text"
            className="form-control"
            placeholder="Search Here.."
            />
          </div>
          <ul className="inner-links-list"
          id="innerLink">{productList.map((product, i)=>(
            <li key={i + 1} onClick={()=>setActive(product)}
            className = {product == active ? "active" : ""}
            >
              <a href="#!"
              data-title="Ask Anything">
                {product}
              </a>
            </li>
            ))}
          </ul>
        </div>
        </div>
      </nav>
      <div className="chat-header">
        <div className="d-flex align-items-center gap-2">
          <button className="navbar-toggler d-md-none d-block"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#mainnavbarNav"
          aria-controls="mainnavbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
            <BiMenu className="mobil_custom_menu"/>
              </button>
            <a href="/"
            className="logo-icon d-flex d-md-none">
              <img src="assets/svg/logo-icon.svg"
              className="img-fluid"
              alt=""/>
            </a>
            <h3 id="targetDiv">{active}</h3>
        </div>
        <div className="header-option">{display == "Pro Member" ?
        (
          <a href="#">{display}
          </a>
          ):(
          <a className="del-btn" data-cursor="pointer" href="#">
            Free Left (
              <span id="freeTry">
                {Free || 0}/5
              </span>
              )
          </a>
          )}
          <a href="#!" className="premium-btn" 
          id="subscriptionBtn"
          data-cursor="pointer"
          >
            <MdPaid/>Get <span>Premium</span>
          </a>
          </div>
      </div>
      <div className="main-chat">
        <div className="no-chat">
          {hide ? (
            <div>
              <img src="assets/svg/no-chat.svg"
              className="img-fluid"
              alt=""/>
              <h3>{active == "Ask Anything" ? "" : "Ask"} {active} chatbot</h3>
            </div>
            ):(
            ""
            )}
        </div>
        <div className="" id="chat_container"></div>
        <Form close={close}
        proMember={proMember}
        address={address}
        freeTrail={freeTrail}/>
      </div>
      </div>
    </div>
  );
};

export default Chat;