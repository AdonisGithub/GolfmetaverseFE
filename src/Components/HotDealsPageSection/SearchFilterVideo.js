import React from 'react';

const SearchFilterVideo = () =>{
    return(
        <div className="search_filters_video">
        <iframe
          width="100%"
          height={145}
          src="https://www.youtube.com/embed/Dy6jkEA511Q"
          //src="https://localhost:3000/"
          title="YouTube video player"
          frameBorder={0}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    );
}
export default SearchFilterVideo;