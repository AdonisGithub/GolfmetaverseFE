import React from "react";
import abt_ban1 from "../../assets/images/abt_ban1.png";
import flg_rd from "../../assets/images/flg_rd.png";

const HotProductHolder = (props) => {
  return (
    <div className="col-12 col-sm-6 col-lg-4 p-2">
      <div className="hot_product_holder">
        <a href="/teetime">
          <div className="efct_zom">
            <img
              src={`${props.data.sold === false ? abt_ban1 : flg_rd}`}
              className="w-100"
              alt=""
            />
            <p
              className={`${
                props.data.sold === false
                  ? "featured-course"
                  : "private-course"
              }`}
            >
              {`${props.data.sold === false ? "Featured" : "private"}`}
            </p>
            <div className="wishlist_div">
              <i className="fa fa-heart heart" />
            </div>
          </div>
          {/* text_block start */}
          <div className="text_block">
            <h4>{props.data.clubname}</h4>
            {/* rating_info start*/}
            <div className="rating-info">
              <span
                className="course-rating"
                itemProp="aggregateRating"
                itemScope
                itemType="http://schema.org/AggregateRating"
                title=""
              >
                <svg id="star-svg-container">
                  <defs>
                    <linearGradient>
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
                    <linearGradient>
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
                    <linearGradient>
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
                    <linearGradient>
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
                    <linearGradient>
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
                <span itemProp="reviewCount">{props.data.review}</span>
                <span className="golfer-reviews">Reviews</span>
              </div>
            </div>
            {/* rating_info end */}
            {/* hot-time-zone_boxes start*/}
              <div className="hot-time-zone_boxes d-flex justify-content-around">
                <div className="hot-time-zone-tile text-center ">
                  <div className="time_s">
                    <div>
                      <span>{(props.data.time-props.data.time%60)/60}</span>:
                      <span>{props.data.time% 60}</span>
                    </div>
                  </div>
                  <p className="zone-price text-center">
                    <sup>$</sup>
                    <sub>{props.data.price}</sub>
                  </p>
                </div>
                <div className="hot-golfer_hole-tile text-center">
                  <div className="golfer">
                    <div>
                      <sup>{props.data.golfer}</sup>
                      <span>Golfers</span>
                    </div>
                  </div>
                  <p className="hole text-center">
                    <sup>{props.data.hole}</sup>
                    <sub>Holes</sub>
                  </p>
                </div>
              </div>

            {/* hot-time-zone_boxes end*/}
          </div>
          {/* text_block end */}
        </a>
      </div>
    </div>
  );
};
export default HotProductHolder;
