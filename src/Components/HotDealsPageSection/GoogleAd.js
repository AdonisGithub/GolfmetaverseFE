import React from 'react';
import nftimg1 from "../../assets/images/nftimg1.png";
import nftimg2 from "../../assets/images/nftimg2.png";
import nftimg3 from "../../assets/images/nftimg3.png";
import nftimg4 from "../../assets/images/nftimg4.png";
import nftimg5 from "../../assets/images/nftimg5.png";
import nftimg6 from "../../assets/images/nftimg6.png";
import nftimg7 from "../../assets/images/nftimg7.png";
import nftimg8 from "../../assets/images/nftimg8.png";
import nftimg9 from "../../assets/images/nftimg9.png";
import nftimg10 from "../../assets/images/nftimg10.png";
import nftimg11 from "../../assets/images/nftimg11.png";
import nftimg12 from "../../assets/images/nftimg12.png";

const GoogleAd = () =>{
  return(
    <div className="why_hot_deals_box">
      <div className="why_hot_deals_header w-100 nft-images">
        <img className="nftimg_efct" src={nftimg1} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg2} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg3} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg4} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg5} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg6} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg7} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg8} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg9} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg10} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg11} style={{width:"25%"}} alt=""/>
        <img className="nftimg_efct" src={nftimg12} style={{width:"25%"}} alt=""/>
      </div>
      <div className='why_hot_deals_body'>
        <p>
          Our GOLF utility token is on the Binance Smart Chain (BSC) network and
          it will be used in our ecosystem as rewards, for purchase of tee times and pro shop merchandises and
          in our NFT marketplace. 
          GOLF is currently available on PancakeSwap.
        </p>
      </div>
    </div>
  );
}
export default GoogleAd;