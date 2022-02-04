import React, { useEffect, useRef, useState } from "react";
import logo from "../../assets/images/logo.png";
const NabBar = () => {
     const [headerHeight, setHeaderHeight] = useState();
     const [headerClass, setHeaderClass] = useState("nvr sticky-top");
     //const [NavActive,setNavActive] = useState("HotDeals");
     const headerRef = useRef();

     useEffect(() => {
          window.onscroll = () => {
               setSize();
          };
          window.addEventListener("resize", function () {
               resizeEvent();
          });
     }, []);

     const resizeEvent = () => {
          if (headerRef.current) {
               setHeaderHeight(headerRef.current.clientHeight);
          }
     };

  const setSize = () => {
     if (window.scrollY < 30) {
          setHeaderClass("nvr sticky-top msticky");
     } else {
          setHeaderClass("nvr sticky-top msticky active");
     }
  };

     return (
          <>
               <div className="w-100" style={{ height: headerHeight }}></div>
                    <div
                         id="nav"
                         ref={headerRef}
                         className={headerClass}
                         onLoad={() => {
                              setSize();
                              resizeEvent();
                         }}
                         >
                    <div className="container p-0">
                         <nav className="navbar navbar-expand-md  sticky-top">
                              <a className="navbar-brand" href="/">
                                   <img className="img-fluid" src={logo} alt=""/>
                              </a>
                              <button
                                   className="navbar-toggler custom-toggler"
                                   type="button"
                                   data-toggle="collapse"
                                   data-target="#navbarNavDropdown"
                                   aria-controls="navbarNavDropdown"
                                   aria-expanded="false"
                                   aria-label="Toggle navigation"
                                   >
                                   <span className="navbar-toggler-icon" />
                              </button>
                              <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                   <ul className="navbar-nav text-capitalize">
                                        <li className= "nav-item ">
                                             <a className="nav-link" href="/" >
                                                  HOT DEALS
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link " href="/couresenearme">
                                                  COURSE NEAR ME
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link " href="/mygolfpunks">
                                                  MY GOLFPUNKS
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link  " href="/nftmarketplace">
                                                  NFT MARKETPLASE
                                             </a>
                                        </li>
                                        <li className="nav-item">
                                             <a className="nav-link  " href="/connectwallet">
                                                  CONNECT WALLET
                                             </a>
                                        </li>
                                   </ul>
                                   <ul className="navbar-nav  ml-auto  text-capitalize">
                                        <li className="nav-item">
                                             <a className="nav-link  " href="/">
                                                  log in / sign up
                                             </a>
                                        </li>
                                   </ul>     
                              </div>
                         </nav>
                    </div>    
               </div>
          </>
     );
};

export { NabBar };
