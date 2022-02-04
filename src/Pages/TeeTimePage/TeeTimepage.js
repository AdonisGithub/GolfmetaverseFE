import React from "react";
//import abtban from "../../assets/images/abtban.jpg"
import fire from "../../assets/images/fire.png";
import golf_cart from "../../assets/images/golf-cart.png";
import hot_deal_flame_triangle from "../../assets/images/hot-deal-flame-triangle.png";
import Carousel from "../../Components/Common/Carousel";

const TeeTimePage = () => {
  return (
    <div className="tee_time_wrapper">
      <div className="container" style={{ marginTop: 20 }}>
        <div className="row">
          <div className="col-12 col-md-4">
            {/* tee_golf_left start */}
            <div className="tee_golf_left">
              
              <Carousel/>

              <div className="tee_golf_des">
                <h3> Grande Vista Golf Club </h3>
                <p> 110 Grand Palms Drive, Pembroke Pines, Florida, 33027 </p>
                {/* rating-info start */}
                <div className="rating-info">
                  
                  <span
                    className="course-rating"
                    itemProp="aggregateRating"
                    itemScope
                    itemType="http://schema.org/AggregateRating"
                  
                  >
                    <svg id="star-svg-container">
                      <defs>
                        <linearGradient id="90bf1bce-b6db-4245-bf50-c5e863d0a36d-1">
                          <stop offset={1} id="star-gradient-first-stop" />
                          <stop offset={1} id="star-gradient-second-stop" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M8.6,5l4.2,0.4L9.7,8.3l1,4.2L7,10.3l-3.6,2.2l1-4.2L1.2,5.5L5.4,5l1.6-3.8L8.6,5z"
                        fill="url(#90bf1bce-b6db-4245-bf50-c5e863d0a36d-1)"
                        id="star-path"
                      />
                    </svg>
                    <svg id="star-svg-container">
                      <defs>
                        <linearGradient id="5baabfd8-af9b-4eb2-9b27-87a7863547c4-2">
                          <stop offset={1} id="star-gradient-first-stop" />
                          <stop offset={1} id="star-gradient-second-stop" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M8.6,5l4.2,0.4L9.7,8.3l1,4.2L7,10.3l-3.6,2.2l1-4.2L1.2,5.5L5.4,5l1.6-3.8L8.6,5z"
                        fill="url(#5baabfd8-af9b-4eb2-9b27-87a7863547c4-2)"
                        id="star-path"
                      />
                    </svg>
                    <svg id="star-svg-container">
                      <defs>
                        <linearGradient id="632760ed-1308-4327-8c75-a1f5943065c8-3">
                          <stop offset="0.7" id="star-gradient-first-stop" />
                          <stop offset="0.7" id="star-gradient-second-stop" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M8.6,5l4.2,0.4L9.7,8.3l1,4.2L7,10.3l-3.6,2.2l1-4.2L1.2,5.5L5.4,5l1.6-3.8L8.6,5z"
                        fill="url(#632760ed-1308-4327-8c75-a1f5943065c8-3)"
                        id="star-path"
                      />
                    </svg>
                    <svg id="star-svg-container">
                      <defs>
                        <linearGradient id="590b533a-e3ad-4acf-8722-394c66713c18-4">
                          <stop offset={0} id="star-gradient-first-stop" />
                          <stop offset={0} id="star-gradient-second-stop" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M8.6,5l4.2,0.4L9.7,8.3l1,4.2L7,10.3l-3.6,2.2l1-4.2L1.2,5.5L5.4,5l1.6-3.8L8.6,5z"
                        fill="url(#590b533a-e3ad-4acf-8722-394c66713c18-4)"
                        id="star-path"
                      />
                    </svg>
                    <svg id="star-svg-container">
                      <defs>
                        <linearGradient id="5c831c17-98d7-470f-9eb6-7756e75e8a4d-5">
                          <stop offset={0} id="star-gradient-first-stop" />
                          <stop offset={0} id="star-gradient-second-stop" />
                        </linearGradient>
                      </defs>
                      <path
                        d="M8.6,5l4.2,0.4L9.7,8.3l1,4.2L7,10.3l-3.6,2.2l1-4.2L1.2,5.5L5.4,5l1.6-3.8L8.6,5z"
                        fill="url(#5c831c17-98d7-470f-9eb6-7756e75e8a4d-5)"
                        id="star-path"
                      />
                    </svg>
                    <meta itemProp="ratingValue" content="2.7005" />
                  </span>
                  <div className="review-count">
                    
                    <span itemProp="reviewCount">
                      <i
                        className="fa fa-info-circle"
                      
                        data-toggle="tooltip"
                        data-placement="top"
                        aria-hidden="true"
                        data-original-title="Grand Palms Hotel and Golf Resort's Grand, Royal, and Sabal nines allow you to create your very own personalized course."
                      />
                      620
                    </span>
                    <span className="golfer-reviews"> Reviews</span>
                  </div>
                  <div className="like-count">
                    
                    <span itemProp="reviewCount">
                      <i className="fa fa-thumbs-up" aria-hidden="true" />
                      79%
                    </span>
                    <span className="golfer-reviews">
                      
                      Like
                      <i
                        className="fa fa-info-circle"
                      
                        data-toggle="tooltip"
                        data-placement="top"
                        aria-hidden="true"
                        data-original-title="Grand Palms Hotel and Golf Resort's Grand, Royal, and Sabal nines allow you to create your very own personalized course."
                      />
                    </span>
                  </div>
                </div>
                {/* rating-info end */}
                <p className="more">
                  Grand Palms Hotel and Golf Resort's Grand, Royal, and Sabal
                  nines allow you to create your very own personalized course
                  featuring an interesting mix of playability and challenge that
                  every golfer will appreciate. Each strategic layout is equally
                  beautiful, while keeping its own unique flavor. As with most
                  South Florida golf courses, water is the p
                  <span className="moreellipses">...&nbsp;</span>
                  <span className="morecontent">
                    <span>
                      principal hazard, but the designers have kept the forced
                      carries to a minimum and added bail out areas for the more
                      timid golfer. The addition of more than a thousand palm
                      trees has helped this course mature into the lush,
                      tropical paradise that the designers envisioned. It
                      exemplifies the South Florida golf resort. During your
                      next visit to Pembroke Pines, be sure reserve a tee time
                      at one of the Grand Palms Golf Resort's three golf
                      courses.
                    </span>
                    &nbsp;&nbsp;
                    <a href='/' className="morelink">
                      More
                    </a>
                  </span>
                </p>
                <div className="tree_s_b_row">
                  
                  <a href="/" className="three_btn">
                    <span>
                      <i className="fa fa-map-marked-alt" aria-hidden="true" />
                    </span>
                    Directions
                  </a>
                  <a href="/" className="three_btn">
                    <span>
                      <i className="fa fa-info-circle" aria-hidden="true" />
                    </span>
                    Course Details
                  </a>
                  <a href="/" className="three_btn">
                    <span>
                      <i className="fa fa-pen" aria-hidden="true" />
                    </span>
                    Review
                  </a>
                </div>
              </div>
              {/*  tee_golf_des end */}
              {/* facility-policies-info start */}
              <div className="facility-policies-info expand">
                <h3>Policies</h3>
                <ul>
                  <li>Metal spikes allowed: No</li>
                  <li>
                    Credit cards accepted: VISA, MasterCard, Amex, Discover
                    Welcomed
                  </li>
                </ul>
                <h3>Rentals/Services</h3>
                <ul>
                  <li>Carts: Yes</li>
                  <li>Clubs: Yes</li>
                </ul>
                <h3>Practice/Instruction</h3>
                <ul>
                  <li>Driving range: Yes</li>
                  <li>Pitching/chipping area: Yes</li>
                  <li>Putting green: Yes</li>
                </ul>
                <span className="readmore-link expand" />
              </div>
              {/* facility-policies-info end*/}
            </div>
            {/* tee_golf_left end */}
          </div>
          <div className="col-12 col-md-8">
            {/* tee_search_result_wrapper start  */}
            <div className="tee_search_result_wrapper">
              {/* refine-filters-row start */}
              <div className="refine-filters-row">
                <ul className="box-selector">
                  <li className="refine-hot-deals">
                    <a href="/">
                      <i className="fa fa-fire" aria-hidden="true" />
                      Off
                    </a>
                  </li>
                  <li>
                    <a href="/" data-toggle="modal" data-target="#timerange">
                      <i className="fa fa-clock" aria-hidden="true" /> Time
                    </a>
                  </li>
                  <li>
                    <a href="/" data-toggle="modal" data-target="#pricerange">
                      <i className="fa fa-credit-card" aria-hidden="true" />
                      Price
                    </a>
                  </li>
                  <li>
                    <a href="/" data-toggle="modal" data-target="#golferrange">
                      <i className="fa fa-users" aria-hidden="true" />
                      Golfers
                    </a>
                  </li>
                  <li>
                    <a href="/" data-toggle="modal" data-target="#holesrange">
                      <i className="fa fa-flag" aria-hidden="true" />
                      Holes
                    </a>
                  </li>
                </ul>
              </div>
              {/* refine-filters-row end */}
              {/* tee_search_result_header start */}
              <div className="tee_search_result_header">
                <h2>
                  Showing Tee Times for: Grand Palms Golf Resort on
                  <span>Fri, Mar 26</span>
                </h2>
                {/* select_own_time start  */}
                <div className="select_own_time">
                  <div className="row">
                    <div className="col-md-8 col-sm-6">
                      {/* select_your_time start */}
                      <div className="select_your_time">
                        <div className="calender">
                          <input className="form-control" type="date" />
                        </div>
                      </div>
                      {/* select_your_time end */}
                    </div>
                    <div className="col-md-4 col-sm-6">
                      {/* view-information start */}
                      <div className="view-information">
                        <p>View By:</p>
                        <ul className="view-options">
                          <li>
                            <a href="/" className="selected">
                              <i className="fa fa-th" aria-hidden="true" />
                            </a>
                          </li>
                          <li>
                            <a href="/" className="">
                              <i className="fa fa-list" aria-hidden="true" />
                            </a>
                          </li>
                        </ul>
                      </div>
                      {/* view-information end */}
                    </div>
                  </div>
                </div>
                {/* select_own_time end  */}
              </div>
              {/* tee_search_result_header end */}
              {/* tee_search_result_middle start  */}
              <div className="tee_search_result_middle">
                <div className="ht_deal">
                  {/* hot-deal-zone-container start */}
                  <div className="hot-deal-zone-container">
                    <div className="row">
                      <div className="col-md-12">
                        
                        <h3>
                          <img src={fire} alt=""/> Hot Deals at Grande
                          Vista Golf Club
                        </h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-12">
                        {/* hot-deal-zone-tile start  */}
                        <div className="hot-deal-zone-tile sold text-center">
                          <div className="time_s">
                            <div>
                              10:30<sub>AM</sub>
                            </div>
                          </div>
                          <p className="zone-price text-center">Sold</p>
                        </div>
                        {/* hot-deal-zone-tile end  */}
                        {/* hot-deal-zone-tile start  */}
                        <div className="hot-deal-zone-tile sold text-center">
                          <div className="time_s">
                            <div>
                              10:30<sub>AM</sub>
                            </div>
                          </div>
                          <p className="zone-price text-center">Sold</p>
                        </div>
                        {/* hot-deal-zone-tile end  */}
                        {/* hot-deal-zone-tile start  */}
                        <div className="hot-deal-zone-tile text-center">
                          <div className="time_s">
                            <div>
                              11:30<sub>AM</sub>
                            </div>
                          </div>
                          <p className="zone-price text-center">
                            <sup>$</sup>36<sup>99</sup>
                          </p>
                          <div>
                          </div>
                        </div>
                        {/* hot-deal-zone-tile end  */}
                        <a
                          href="#0"
                          className="hot-deal-zone-more-hd"
                          data-toggle="modal"
                          data-target="#morehdeals"
                        >
                          <img src={fire} alt="" />
                          <br /> More hot deals
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* hot-deal-zone-container end */}
                  {/* s_results_wrapper start */}
                  <div className="s_results_wrapper">
                    {/* search_result_grid_view_only start */}
                    <div className="search_result_grid_view_only">
                      {/* s_results_holder start */}
                      <div className="s_results_holder grid">
                        <div className="row">
                          <div className="col-md-12">
                            <h4>
                              Morning Tee Times from <span> $70.00</span>
                            </h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="facility.html">
                                <div className="time_s hot-sold">
                                  <div>
                                    10:20<sub>AM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">
                                    $70.00
                                    <span>
                                      <i
                                        className="fa fa-info-circle"
                                        
                                        data-toggle="tooltip"
                                        data-placement="top"
                                        aria-hidden="true"
                                        data-original-title="More Rates $70.00-$75.00"
                                      />
                                    </span>
                                  </div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    10:50<sub>AM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$70.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    11:00<sub>AM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$70.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    11:20<sub>AM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$70.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder end */}
                      {/* s_results_holder start */}
                      <div className="s_results_holder grid">
                        <div className="row">
                          <div className="col-md-12">
                            <h4>
                              Mid-day Tee Times from <span>$50.00</span>
                            </h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    12:00<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    12:50<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    1:20<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    2:00<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    2:30<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    2:50<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder end */}
                      {/* s_results_holder start */}
                      <div className="s_results_holder grid">
                        <div className="row">
                          <div className="col-md-12">
                            <h4>
                              Afternoon Tee Times from <span>$50.00</span>
                            </h4>
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-md-12">
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    3:20<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    3:50<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    4:00<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                            {/* top-chip start */}
                            <div className="top-chip grid-view-list">
                              <a href="/">
                                <div className="time_s">
                                  <div>
                                    4:20<sub>PM</sub>
                                  </div>
                                </div>
                                <div className="item-offer">
                                  <div className="price">$50.00</div>
                                  <p className="rate-name">Online Rate</p>
                                  <div className="gtt-detail">
                                    <ul>
                                      <li>
                                        <i className="fa fa-flag" />
                                        <span> 18</span> /
                                      </li>
                                      <li>
                                        <i className="fa fa-users" />
                                        <span> 1</span> /
                                      </li>
                                      <li>
                                        <span>
                                          <img src={golf_cart} alt=""/>
                                        </span>
                                      </li>
                                    </ul>
                                  </div>
                                </div>
                              </a>
                            </div>
                            {/* top-chip end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder end */}
                    </div>
                    {/* search_result_grid_view_only end */}
                    {/* search_result_list_view_only start */}
                    <div className="search_result_list_view_only">
                      {/* s_results_holder_list_view start */}
                      <div className="s_results_holder_list_view">
                        <div className="row">
                          <div className="col-md-8 col-sm-8 list_result_time">
                            <div className="row">
                              <div className="col-md-6 col-sm-6">
                                <p className="time">
                                  <a href="/">
                                    11:00<sub>AM</sub>
                                    <span>Tee Time</span>
                                  </a>
                                </p>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <span className="share-info">
                                  <a href="/">
                                    <i
                                      className="fa fa-share-square"
                                      aria-hidden="true"
                                    />
                                    Share
                                  </a>
                                </span>
                              </div>
                            </div>
                            <p className="tt-detail">
                              <strong>Golfers:</strong> 1
                              <strong>Holes:</strong> 18 <strong>Cart:</strong>
                              Included
                            </p>
                            <div className="s_results_holder_list_footer">
                              <h4>Online Rate</h4>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            {/* srl_btn_holder start */}
                            <div className="srl_btn_holder">
                              <p className="price">
                                <sup>$</sup>44<sup>00</sup>
                              </p>
                              <p className="earn-points">Earn up to 2 pts</p>
                              <a
                                href="/"
                                className="cg_btn1 g_btn facility-book-btn"
                              >
                                Book Now
                              </a>
                            </div>
                            {/* srl_btn_holder end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder_list_view start */}
                      {/* s_results_holder_list_view start */}
                      <div className="s_results_holder_list_view prepaid">
                        <div className="row">
                          <div className="col-md-8 col-sm-8 list_result_time">
                            <div className="row">
                              <div className="col-md-6 col-sm-6">
                                <p className="time">
                                  <a href="/">
                                    10:45<sub>AM</sub>
                                    <span>Tee Time</span>
                                  </a>
                                </p>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <span className="share-info">
                                  <a href="/">
                                    <i
                                      className="fa fa-share-square"
                                      aria-hidden="true"
                                    />
                                    Share
                                  </a>
                                </span>
                              </div>
                            </div>
                            <p className="tt-detail">
                              <strong>Golfers:</strong> 1
                              <strong>Holes:</strong> 18 <strong>Cart:</strong>
                              Included
                            </p>
                            <div className="s_results_holder_list_footer">
                              <h4>
                                Hot Deal <span>(More rates available)</span>
                              </h4>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            {/* srl_btn_holder start */}
                            <div className="srl_btn_holder ">
                              <div className="hot-deal-flame">
                                <img
                                  src={hot_deal_flame_triangle}
                                  alt="hot-deal-flame-triangle"
                                />
                              </div>
                              <p className="price">
                                <sup>$</sup>37<sup>99</sup> - <sup>$</sup>44
                                <sup>00</sup>
                              </p>
                              <p className="earn-points">Earn up to 165 pts</p>
                              <a
                                href="/"
                                className="cg_btn1 g_btn facility-book-btn"
                              >
                                Book Now
                              </a>
                            </div>
                            {/* srl_btn_holder end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder_list_view start */}
                      {/* s_results_holder_list_view start */}
                      <div className="s_results_holder_list_view">
                        <div className="row">
                          <div className="col-md-8 col-sm-8 list_result_time">
                            <div className="row">
                              <div className="col-md-6 col-sm-6">
                                <p className="time">
                                  <a href="/">
                                    11:00<sub>AM</sub>
                                    <span>Tee Time</span>
                                  </a>
                                </p>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <span className="share-info">
                                  <a href="/">
                                    <i
                                      className="fa fa-share-square"
                                      aria-hidden="true"
                                    />
                                    Share
                                  </a>
                                </span>
                              </div>
                            </div>
                            <p className="tt-detail">
                              <strong>Golfers:</strong> 1
                              <strong>Holes:</strong> 18 <strong>Cart:</strong>
                              Included
                            </p>
                            <div className="s_results_holder_list_footer">
                              <h4>Online Rate</h4>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            {/* srl_btn_holder start */}
                            <div className="srl_btn_holder">
                              <p className="price">
                                <sup>$</sup>44<sup>00</sup>
                              </p>
                              <p className="earn-points">Earn up to 2 pts</p>
                              <a
                                href="/"
                                className="cg_btn1 g_btn facility-book-btn"
                              >
                                Book Now
                              </a>
                            </div>
                            {/* srl_btn_holder end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder_list_view start */}
                      {/* s_results_holder_list_view start */}
                      <div className="s_results_holder_list_view">
                        <div className="row">
                          <div className="col-md-8 col-sm-8 list_result_time">
                            <div className="row">
                              <div className="col-md-6 col-sm-6">
                                <p className="time">
                                  <a href="/">
                                    11:00<sub>AM</sub>
                                    <span>Tee Time</span>
                                  </a>
                                </p>
                              </div>
                              <div className="col-md-6 col-sm-6">
                                <span className="share-info">
                                  <a href="/">
                                    <i
                                      className="fa fa-share-square"
                                      aria-hidden="true"
                                    />
                                    Share
                                  </a>
                                </span>
                              </div>
                            </div>
                            <p className="tt-detail">
                              <strong>Golfers:</strong> 1
                              <strong>Holes:</strong> 18 <strong>Cart:</strong>
                              Included
                            </p>
                            <div className="s_results_holder_list_footer">
                              <h4>Online Rate</h4>
                            </div>
                          </div>
                          <div className="col-md-4 col-sm-4">
                            {/* srl_btn_holder start */}
                            <div className="srl_btn_holder">
                              <p className="price">
                                <sup>$</sup>44<sup>00</sup>
                              </p>
                              <p className="earn-points">Earn up to 2 pts</p>
                              <a
                                href="/"
                                className="cg_btn1 g_btn facility-book-btn"
                              >
                                Book Now
                              </a>
                            </div>
                            {/* srl_btn_holder end */}
                          </div>
                        </div>
                      </div>
                      {/* s_results_holder_list_view start */}
                    </div>
                    {/* search_result_list_view_only end */}
                  </div>
                  {/* s_results_wrapper end */}
                </div>
              </div>
              {/* tee_search_result_middle end  */}
            </div>
            {/* tee_search_result_wrapper end  */}
          </div>
        </div>
      </div>
    </div>
  );
};

export { TeeTimePage };
