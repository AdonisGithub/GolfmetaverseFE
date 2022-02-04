import React from "react";
import abt_ban1 from "../../assets/images/abt_ban1.png";
// import hw_wok from "../../assets/images/hw_wok.png"
// import glf_certi from "../../assets/images/glf_certi.png";
// import abt_ban from "../../assets/images/abtban.jpg";
// import flg_rd from "../../assets/images/flg_rd.png";

const Courses = (props) => {

    
    return (
        <div className="destina_dtl">
            <div className="row">
                <div className="col-12 col-md-2">
                    <img
                        alt=""
                        className="img-fluid"
                        src={abt_ban1}
                        data-xblocker="passed"
                        style={{ visibility: "visible" }}
                    />
                </div>
                <div className="col-12 col-md-8">
                    <h3>{props.data.clubname}</h3>
                    <h6>({props.data.review} Reviews)</h6>
                    <h6>(telephone:{props.data.telephone})</h6>
                    <h6>(zipcode:{props.data.zipcode})</h6>
                    <p className="more">
                        Golf fanatics meet blockchain technology on the course. 
                        GOLFHUB18 provides a tokenized economy for the golf industry around the world through the adoption and usage of the GOLF utility token. 
                        The token is built on the Binance Smart Chain (BEP20) blockchain and it is a safe and secure blockchain solution as a store of value or contactless payment of goods and services on a peer to peer basis. 
                        The GOLFHUB18 App utilizes this token as payments for our membership services, green fees and cart, golf merchandise purchases at the clubhouse shop, tournament events and prizes and as loyalty cash back rewards to members.
                        <span className="moreellipses">...&nbsp;</span>
                        <span className="morecontent">
                        <span>
                            municipal scene led by TPC Harding Park and Presidio, the latter
                            of which can trace its roots back more than 100 years. The best
                            public golf courses near San Francisco typically lie farther
                            south along the coast. San Francisco is also one of the world's
                            great cities, with fantastic restaurants ranging from old
                            Italian to authentic Chinese, tourist attractions such as
                            Alcatraz, Fisherman's Wharf and the Cable Cars and great hotels
                            among one of the most iconic skylines in the world.
                        </span>
                        &nbsp;&nbsp;
                        <a href ="/" className="morelink">
                            More
                        </a>
                        </span>
                    </p>
                </div>
                <div className="col-12 col-md-2 vertical-center">
                <a href="/teetime" className="btn exp_btn cg_btn1 g_btn">
                    View Teetime
                </a>
                </div>
            </div>
        </div>
    );
};
export default Courses;
