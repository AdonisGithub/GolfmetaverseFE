import React from "react";
import insta from "../../assets/images/insta.png"
import faceb from "../../assets/images/faceb.png"
import twt from "../../assets/images/twt.png";
const Footer = () => {
  return (
    <div className=" bg_footer">
      <div className="container">
        <footer>
          <div className="col-12 col-md-12">
            <h4 className="text-center text-white">All Golf Destinations</h4>
            <br />
            <div className="row">
              {/* <div className="col-12 col-md-12">
                <h5>UNITED STATES </h5>
              </div> */}
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  <li>
                    <a href="/"> Alabama </a>
                  </li>
                  <li>
                    <a href="/"> Alaska </a>
                  </li>
                  <li>
                    <a href="/"> Arizona </a>
                  </li>
                  <li>
                    <a href="/"> Arkansas </a>
                  </li>
                  <li>
                    <a href="/"> California </a>
                  </li>
                  <li>
                    <a href="/"> Colorado </a>
                  </li>
                  <li>
                    <a href="/"> Connecticut</a>
                  </li>
                  <li>
                    <a href="/"> Delaware </a>
                  </li>
                  <li>
                    <a href="/"> Florida </a>
                  </li>
                  <li>
                    <a href="/"> Georgia </a>
                  </li>
                  <li>
                    <a href="/"> Hawaii </a>
                  </li>
                  <li>
                    <a href="/"> Idaho</a>
                  </li>
                  <li>
                    <a href="/"> Illinois </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  <li>
                    <a href="/"> Indiana </a>
                  </li>
                  <li>
                    <a href="/"> Lowa </a>
                  </li>
                  <li>
                    <a href="/"> Kansas </a>
                  </li>
                  <li>
                    <a href="/"> Kentucky </a>
                  </li>
                  <li>
                    <a href="/"> Louisiana </a>
                  </li>
                  <li>
                    <a href="/"> Maine</a>
                  </li>
                  <li>
                    <a href="/"> Maryland </a>
                  </li>
                  <li>
                    <a href="/"> Massachusetts </a>
                  </li>
                  <li>
                    <a href="/"> Michigan </a>
                  </li>
                  <li>
                    <a href="/"> Minnesota </a>
                  </li>
                  <li>
                    <a href="/"> Mississippi</a>
                  </li>
                  <li>
                    <a href="/"> Missouri </a>
                  </li>
                  <li>
                    <a href="/"> Montana </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  <li>
                    <a href="/"> Nebraska </a>
                  </li>
                  <li>
                    <a href="/"> Nevada </a>
                  </li>
                  <li>
                    <a href="/"> New Hampshire </a>
                  </li>
                  <li>
                    <a href="/"> New Jersey </a>
                  </li>
                  <li>
                    <a href="/"> New Mexico </a>
                  </li>
                  <li>
                    <a href="/"> New York</a>
                  </li>
                  <li>
                    <a href="/"> North Calorina </a>
                  </li>
                  <li>
                    <a href="/"> North Dakota </a>
                  </li>
                  <li>
                    <a href="/"> Ohio </a>
                  </li>
                  <li>
                    <a href="/"> Oklahoma </a>
                  </li>
                  <li>
                    <a href="/"> Oregon</a>
                  </li>
                  <li>
                    <a href="/"> Pennsylvania </a>
                  </li>
                  <li>
                    <a href="/"> Puerto Rico </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  <li>
                    <a href="/"> Rhode Island </a>
                  </li>
                  <li>
                    <a href="/"> South Calorina </a>
                  </li>
                  <li>
                    <a href="/"> South Dakota </a>
                  </li>
                  <li>
                    <a href="/"> Tennessee </a>
                  </li>
                  <li>
                    <a href="/"> Texas </a>
                  </li>
                  <li>
                    <a href="/"> Utah</a>
                  </li>
                  <li>
                    <a href="/"> Vermont </a>
                  </li>
                  <li>
                    <a href="/"> Virginia </a>
                  </li>
                  <li>
                    <a href="/"> Washington </a>
                  </li>
                  <li>
                    <a href="/"> Washington D.C. </a>
                  </li>
                  <li>
                    <a href="/"> West Virginia</a>
                  </li>
                  <li>
                    <a href="/"> Wisconsin </a>
                  </li>
                  <li>
                    <a href="/"> Wyoming </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  {/* <li>
                    <h5>ARUBA </h5>
                  </li> */}
                  <li>
                    <a href="/"> Aruba </a>
                  </li>
                  {/* <li>
                    <h5>AUSTRALIA</h5>
                  </li> */}
                  <li>
                    <a href="/"> Australia </a>
                  </li>
                  {/* <li>
                    <h5>BERMUDA</h5>
                  </li> */}
                  <li>
                    <a href="/"> Bermuda </a>
                  </li>
                  {/* <li>
                    <h5>COSTA RICA</h5>
                  </li> */}
                  <li>
                    <a href="/"> Costa Rica </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  {/* <li>
                    <h5>CANADA</h5>
                  </li> */}
                  <li>
                    <a href="/"> Alberta </a>
                  </li>
                  <li>
                    <a href="/"> British Columbia </a>
                  </li>
                  <li>
                    <a href="/"> Ontario </a>
                  </li>
                  <li>
                    <a href="/"> Prince Edward Island</a>
                  </li>
                  <li>
                    <a href="/"> Quebec </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  {/* <li>
                    <h5>DOMINICAN REPUBLIC </h5>
                  </li> */}
                  <li>
                    <a href="/"> Dominican Republic </a>
                  </li>
                  {/* <li>
                    <h5>IRELAND</h5>
                  </li> */}
                  <li>
                    <a href="/"> Ireland </a>
                  </li>
                  {/* <li>
                    <h5>JAMAICA</h5>
                  </li> */}
                  <li>
                    <a href="/"> Jamaica </a>
                  </li>
                  {/* <li>
                    <h5>MALAYSIA</h5>
                  </li> */}
                  <li>
                    <a href="/"> Malaysia </a>
                  </li>
                </ul>
              </div>
              <div className="col-6 col-md-3">
                <ul className="glf_cont list-unstyled">
                  {/* <li>
                    <h5>MEXICO</h5>
                  </li> */}
                  <li>
                    <a href="/"> Mexico</a>
                  </li>
                  {/* <li>
                    <h5>UNITED ARAB EMIRATES</h5>
                  </li> */}
                  <li>
                    <a href="/"> United Arab Emirates</a>
                  </li>
                  {/* <li>
                    <h5>UNITED KINGDOM</h5>
                  </li> */}
                  <li>
                    <a href="/"> England</a>
                  </li>
                  <li>
                    <a href="/"> Northern Ireland</a>
                  </li>
                  <li>
                    <a href="/"> Scotland</a>
                  </li>
                  <li>
                    <a href="/"> Wales</a>
                  </li>
                </ul>
              </div>

              <div className="col-12 col-md-4">
               <ul className="glf_cont list-unstyled d-flex justify-content-center">
                    <li>
                    <span className="text-white">© 2022</span>&nbsp;&nbsp;
                    </li>
                    <li>
                         <a href="/">Cryptogolf.io</a>&nbsp;&nbsp;
                    </li>
                    <li>
                         <a href="/">Tems and Conditions</a>&nbsp;&nbsp;
                    </li>
                    </ul>
              </div>
              <div className="col-12 col-md-4">
               <ul className="glf_cont list-unstyled d-flex justify-content-center">
                    <li>
                         <a href="/">Golf Course</a>&nbsp;&nbsp;
                    </li>
                    <li>
                         <a href="/">Signup</a>&nbsp;
                    </li>
                    <li>
                         <a href="/">Login</a>&nbsp;&nbsp;
                    </li>
                    </ul>
              </div>
              <div className="col-12 col-md-4">
                <ul className="d-flex justify-content-center">
                  <li>
                    <a
                      href="/"
                      title="twitter"
                    >
                      <img
                        src={twt}
                        style={{ width: "30px", marginInline: 10 }}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      title="facebook"
                    >
                      <img
                        src={faceb}
                        style={{ width: "30px", marginInline: 10 }}
                        alt=""
                      />
                    </a>
                  </li>
                  <li>
                    <a
                      href="/"
                      title="instagram"
                    >
                      <img
                        src={insta}
                        style={{ width: "30px", marginInline: 10 }}
                        alt=""
                      />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export { Footer };
