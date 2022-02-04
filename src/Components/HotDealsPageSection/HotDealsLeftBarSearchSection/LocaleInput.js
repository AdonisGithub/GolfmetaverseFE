import React, { useState } from "react";
import PlacesAutocomplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

const LocationeInput = (props) => {
  const [Address, SetAddress] = useState("");
  const handleChange = (address) => {
    SetAddress(address);
  };

  const handleSelect = (address) => {
    geocodeByAddress(address)
      .then((results) => getLatLng(results[0]))
      .then((latLng) => {
        props.handleChangeLocation({address:address, longitude:latLng.lng, latitude:latLng.lat});
        // props.handleChangeLocation(address,'location');
        // props.handleChangeLocation(latLng.lat,'latitude');
        // props.handleChangeLocation(latLng.lng,'logitude');
        
        console.log("PlacesAutoComplete Success");
      })
      .catch((error) => console.error("Places auto complete Error", error));
  };

  return (
    <div className="row">
      <div className="col-12 col-md-12">
        <br/><h5>Location</h5>
      </div>
      <div className="col-12 col-md-12">
        <PlacesAutocomplete
          value={Address}
          onChange={handleChange}
          onSelect={handleSelect}
        >
          {({
            getInputProps,
            suggestions,
            getSuggestionItemProps,
            loading,
          }) => (
            <div style={{ position: "relative" }}>
              <input
                {...getInputProps({
                  placeholder: "Search Places ...",
                  className: "location-search-input w-100",
                })}
              />
              <div
                className="test"
                style={{
                  position: "absolute",
                  top: 25,
                  left: 0,
                  zIndex: 1000,
                  width: "100%",
                }}
              >
                {loading && <div>Loading...</div>}
                {suggestions.map((suggestion) => {
                  const className = suggestion.active
                    ? "suggestion-item--active"
                    : "suggestion-item";
                  // inline style for demonstration purpose
                  const style = suggestion.active
                    ? { backgroundColor: "#00cc00", cursor: "pointer" }
                    : { backgroundColor: "#eeffe6", cursor: "pointer" };
                  return (
                    <div
                      style={{ width: "100%" }}
                      key={suggestion.description}
                      {...getSuggestionItemProps(suggestion, {
                        className,
                        style,
                      })}
                    >
                      <span>{suggestion.description}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          )}
        </PlacesAutocomplete>
      </div>
    </div>
  );
};
export default LocationeInput;
