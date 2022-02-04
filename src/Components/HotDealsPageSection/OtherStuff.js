import React from 'react';
import golfer from "../../assets/images/GOLFPUNKS.b2b48526.gif"

const OtherStuff = () =>{
  return(
    <div className="why_hot_deals_box">
      <div className="why_hot_deals_header">
        <img src={golfer} style ={{width:"100%"}} alt=""/>
      </div>
      <div className='why_hot_deals_body'>
        <p>
          There are five classes of GOLGPUNKS and each class has different benefits. 
          The classes are PRO, BREAK 70, BREAK 80, BREAK 90 and BREAK 100. 
          The PRO classes are entitled to 25%, BREAK 70 20%, BREAK 80 15%, BREAK 90 10% and BREAK 100 5% 
          discounts on green fees and pro shop merchandise purchases. 
          All classes have exclusive access and free entry to events and tournaments. 
          The PRO classes receive additional perks and benefits such as complimentary hotel stay during 
          selected events and tournaments.
        </p>
      </div>
    </div>
  );
}
export default OtherStuff;