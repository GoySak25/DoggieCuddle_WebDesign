import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Spinner from "../layout/Spinner";
import ProfileItem from "./ProfileItem";
import { getProfiles } from "../../actions/profile";
import Filter from "../Filter/Filter";
import PlaceAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";

let data;
let api_call;
const Profiles = ({ getProfiles, profile: { profiles, loading }, auth }) => {
  useEffect(() => {
    getProfiles();
  }, [getProfiles]);
  const [filterData, setFilterData] = useState({
    breed: "",
    sex: "",
  });
  const [breeds, setBreedData] = useState([{}]);
  const getBreed = async (e) => {
    api_call = await fetch(
      `https://api.TheDogAPI.com/v1/breeds?x-api-key=074bb8ca-12f4-4641-bdc7-da4e635124a0`
    );
    data = await api_call.json();
    setBreedData(data);
  };
  const [coordinates, setCoordinates] = useState({
    lat: null,
    lng: null,
  });
  const [address, setAddress] = useState("");
  const { breed, sex } = filterData;
  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };
  const onChange = (e) => {
    setFilterData({ ...filterData, [e.target.name]: e.target.value });
  };
  return (
    <Fragment>
      {loading ? (
        <Spinner />
      ) : (
        <Fragment>
          <h1 className="large text-primary">Meet all the cuties...........</h1>

          <div className="container ">
            <div className="row">
              <div className="col-md-4">
                <select
                  className="form-control"
                  name="breed"
                  onChange={(e) => onChange(e)}
                  placeholder="*Breed..."
                  onClick={getBreed}
                >
                  <option value="">*Breed...</option>
                  {breeds.map((item) => (
                    <option key={item.id} value={item.name}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="col-md-4">
                <select
                  className="form-control"
                  value={sex}
                  name="sex"
                  onChange={(e) => onChange(e)}
                  placeholder="Sex..."
                >
                  <option value="">Sex...</option>
                  <option value="female">FEMALE</option>
                  <option value="male">MALE</option>
                </select>
              </div>

              <div className="col-md-4">
                <PlaceAutoComplete
                  value={address}
                  onChange={setAddress}
                  onSelect={handleSelect}
                >
                  {({
                    getInputProps,
                    suggestions,
                    getSuggestionItemProps,
                    loading,
                  }) => (
                    <div>
                      <input
                        className="form-control"
                        {...getInputProps({ placeholder: "*location" })}
                        required
                      />
                      <div>
                        {loading ? <div>...loading</div> : null}
                        {suggestions.map((suggestion) => {
                          const style = {
                            backgroundColor: suggestion.active
                              ? "#41b6e6"
                              : "white",
                          };
                          return (
                            <div
                              {...getSuggestionItemProps(suggestion, { style })}
                            >
                              {suggestion.description}
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </PlaceAutoComplete>
              </div>
            </div>
          </div>

          <p className="lead">
            <i className="fab fa-connectdevelop" />
          </p>
          <div className="profiles">
            {profiles.length > 0 ? (
              profiles.map((profile) => (
                <ProfileItem
                  key={profile._id}
                  profile={profile}
                  doggieBreed={filterData.breed.toLocaleLowerCase()}
                  dogSex={filterData.sex}
                  dogLocation={address}
                  cheLogin={auth}
                />
              ))
            ) : (
              <h4>No profiles found...</h4>
            )}
          </div>
        </Fragment>
      )}
    </Fragment>
  );
};

Profiles.propTypes = {
  getProfiles: PropTypes.func.isRequired,
  profile: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  profile: state.profile,
  auth: state.auth,
});

export default connect(mapStateToProps, { getProfiles })(Profiles);
