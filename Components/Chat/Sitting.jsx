import React, {useState, useEffect} from "react";
import {MdPaid} from "react-icons/md";
import {BiMenu} from "react-icons/bi";

import {useStateContext} from "../../Context/index";

const Sitting = () => {
  const [user, setUser] = useState();
  const {userMembership} = useStateContext();

  useEffect(()=>{
    const str = localStorage.getItem("userDetail");
    const parsedObj = JSON.parse(str);

    if(parsedObj?.name){
      setUser(parsedObj);
    }
  }, []);

  const [userNew, setUserNew] = useState({
    name: user?.name || "",
    surname: "",
    email: user?.email || "",
    password: user?.password || "",
    passwordConfirm : user?.passwordConfirm  || "",
  });

  const handleFormFieldChange = (fieldName, e) => {
    setUserNew({...userNew, [fieldName]: e.target.value});
  }

  const updateUser = ()=> {
    const jsonObj = JSON.stringify(userNew);
    localStorage.setItem("userDetail", jsonObj);
 //   window.location.reload();
  }

  return (
    <div
    className="tab-pane fade"
    id="settings" 
    role="tabpanel"
    aria-labelledby="settings"
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
            <h3>Setting</h3>
          </div>
          <a href="/"
          className="premium-btn"
          data-cursor="pointer">
            <i className="iconsax"
            data-icon="crow-2"></i>
            <MdPaid/>Get<span>premium</span>
          </a>
        </div>
        <div className="main-section d-flex gap-4 flex-column ">
        <div className="container card p-0">
        <div className="card-header">
        <h3 className="text-white">My Account</h3>
                 
        </div>

        <div className="card-body px-sm-4 px-3">
          <div className="my-account ">
            <div className="user-detail"></div>
            <div className="user-main">
              <div className="user-profile">
                <img src="theblockchaincoders.jpg"
                 className="img-fluid"
                 alt=""/>
                 <i className="iconsax"
                 data-icon="camera"></i>
              </div>
              <div className="user-option">
                <h4>{user?.name}</h4>
                <p>{user?.email}</p>
              </div>
            </div>

            <form className="msger-inputarea mb-0">
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="firstname"
                    className="form-label">
                      First Name
                    </label>
                    <input type="email"
                    id="firstname"
                    placeholder={user?.name}
                    onChange={(e)=>handleFormFieldChange("name",e)}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="lastname"
                    className="form-label">
                      Last Name
                    </label>
                    <input type="email"
                    id="lastname"
                    placeholder={user?.name}
                    onChange={(e)=>handleFormFieldChange("surname",e)}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="emailid"
                    className="form-label">
                      Email ID
                    </label>
                    <input type="email"
                    id="emailid"
                    placeholder={user?.name}
                    onChange={(e)=>handleFormFieldChange("email",e)}
                    className="msger-input"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>  
        <div className="card-footer">
          <div className="setting-btn">
            <button className="select-plan"
            onClick={()=>updateUser()}>Update</button>
            <button className="on-select-plan select-plan">
            Cancel</button>
          </div>
        </div>      
        </div>

        {userMembership && userMembership.membershipID != 0 && (
        <div className="container card p-0">
        <div className="card-header">
        <h3 className="text-white">Membership</h3>
        </div>
        <div className="card-body px-sm-4 px-3">
          <div className="my-account ">
            <form className="msger-inputarea mb-0">
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="firstname"
                    className="form-label">
                      Membership  Plan
                   </label>
                    <input type="email"
                    id="firstname"
                    placeholder={userMembership.membershipID == 1 ? "One Month" :
                      userMembership.membershipID == 2 ? "Six Month" :
                      userMembership.membershipID == 3 ? "One Year" : ""}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="lastname"
                    className="form-label">
                      Membership Cost
                    </label>
                    <input type="email"
                    id="lastname"
                    placeholder={userMembership.membershipID == 1 ? "One MATIC" :
                      userMembership.membershipID == 2 ? "3 MATIC" :
                      userMembership.membershipID == 3 ? "5 MATIC" : ""}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="emailid"
                    className="form-label">
                      Email ID
                    </label>
                    <input type="email"
                    id="emailid"
                    placeholder={userMembership.id}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="lastname"
                    className="form-label">
                      Membership Expired
                    </label>
                    <input type="email"
                    id="lastname"
                    placeholder={`${userMembership.expiredate || ""}`}
                    onChange={(e)=>handleFormFieldChange("surname",e)}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="emailid"
                    className="form-label">
                      Address
                    </label>
                    <input type="email"
                    id="emailid"
                    placeholder={userMembership.addressUser}
                    className="msger-input"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
        </div>
        )}

        <div className="container card p-0">
          <div className="card-header">
            <h3 className="text-white">
              Change Password
            </h3>
          </div>
          <div className="card-body px-sm-4 px-3">
            <div className="my-account ">
            <form className="msger-inputarea mb-0">
              <div className="row">
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="firstname"
                    className="form-label">
                      New Password
                   </label>
                    <input type="email"
                    id="firstname"
                    placeholder={`new password`}
                    onChange={(e)=> handleFormFieldChange("password",e)}
                    className="msger-input"
                    />
                  </div>
                </div>
                <div className="col-sm-6 col-12">
                  <div className="mb-3">
                    <label htmlFor="lastname"

                    className="form-label">
                      Membership Cost
                    </label>
                    <input type="email"
                    id="lastname"
                    placeholder={`Confirm password`}
                    onChange={(e)=> handleFormFieldChange("passwordConfirm",e)}
                    className="msger-input"
                    />
                  </div>
                </div>
                
                
              </div>
            </form>
          </div>
          </div>
          <div className="card-footer">
            <div className="setting-btn">
              <button
              className="select-plan"
              onClick={()=> updateUser()}>
                Update Password
              </button>
              <button
              className="on-select-plan select-plan">
                Cancel
              </button>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default Sitting;