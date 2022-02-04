import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import abtban from "../../assets/images/abtban.jpg";

const Carousel = () =>{
  return(
    <CarouselProvider
        naturalSlideWidth={50}
        naturalSlideHeight={50}
        totalSlides={3}
    >
        <Slider>
            <Slide index={0}><img src={abtban} alt=""/></Slide>
            <Slide index={1}><img src={abtban} alt=""/></Slide>
            <Slide index={2}><img src={abtban} alt=""/></Slide>
        </Slider>
        <ButtonBack>Back</ButtonBack>
        <ButtonNext>Next</ButtonNext>
    </CarouselProvider>
  );
}
export default Carousel;