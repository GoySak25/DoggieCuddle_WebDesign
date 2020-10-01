import React, { Fragment, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addDog } from "../../actions/profile";
import { Button, ButtonToolbar } from "react-bootstrap";
import Modal from "react-modal";
import Map from "../modal/Map";
import PlaceAutoComplete, {
  geocodeByAddress,
  getLatLng,
} from "react-places-autocomplete";
import "./addDog.styles.css";

// Material Start code
import {
  makeStyles,
  TextField,
  InputLabel,
  MenuItem,
  FormHelperText,
  FormControl,
  Select,
  PetsSharpIcon,
  IconButton,
  DeleteIcon,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

//// Material End code

var lati = 42.361145;
var longi = -71.057083;
let data;
let api_call;
const AddDog = ({ addDog, history }) => {
  const [formData, setFormData] = useState({
    dogName: "",
    breed: "",
    sex: "",
    age: "",
    image: null,
    dateOfBirth: "",
    location: "Boston",
  });
  const [breeds, setBreedData] = useState([{}]);
  const [file, setFile] = useState({});
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
  const [mapIsOpen, setMapOpen] = useState(false);
  const [address, setAddress] = useState("");
  const [toDateDisabled, toggleDisabled] = useState(false);
  let fileToUpload = [];
  const { dogName, breed, sex, age, dateOfBirth, image, location } = formData;

  const handleSelect = async (value) => {
    const results = await geocodeByAddress(value);
    const latLng = await getLatLng(results[0]);
    setAddress(value);
    setCoordinates(latLng);
  };

  //location
  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value.toLowerCase() });
  };

  const uploadImage = (e) => {
    fileToUpload = e.target.files[0];
    setFormData({ ...formData, image: fileToUpload });
    console.log("FORMDATA IMAGE" + formData.image);
  };

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lati = position.coords.latitude;
      longi = position.coords.longitude;
    });
  }

  const onSubmit = (e) => {
    e.preventDefault();
    formData.location = address;
    if (formData.sex == "Sex...") {
      alert("Please select valid sex!!");
    } else if (formData.breed == "Breed...") {
      alert("Please select valid breed!!");
    } else {
      const data = new FormData();
      data.append("file", fileToUpload);

      console.log("YOOOO " + fileToUpload);
      // formData.append('file', fileToUpload)
      // setFormData({ ...formData, image: fileToUpload });
      console.log(formData);
      addDog(formData, history);
    }
  };
  const classesUI = useStyles();

  return (
    <Fragment>
      <legend>
        <h2>
          <center>
            <b>Add Your Pet Profile Here</b>
          </center>
        </h2>
      </legend>

      <p className="lead"></p>
      {/* <small>* = required field</small> */}

      <form
        className="classesUI.root"
        onSubmit={(e) => onSubmit(e)}
        encType="multipart/form-data"
      >
        <div>Dog Name *</div>
        <TextField
          id="standard-basic"
          type="text"
          name="dogName"
          value={dogName}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <br />
        <div>Choose Profile Pic *</div>
        <div class="image-upload">
          <label for="file-input">
            <img src="https://i.imgur.com/osv62r8.png" />
          </label>
          <input
            id="file-input"
            name="image"
            type="file"
            onChange={(e) => uploadImage(e)}
            required
          />
        </div>
        <br />
        <br />
        <div>Choose Breed *</div>
        <FormControl className={classesUI.root}>
          <Select
            id="demo-simple-select"
            name="breed"
            onChange={(e) => onChange(e)}
            onClick={getBreed}
          >
            {/* <MenuItem value="">* Breed...</MenuItem> */}
            {breeds.map((item) => (
              <MenuItem key={item.id} value={item.name}>
                {item.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <br />
        <br />
        <div>Choose Gender *</div>
        <FormControl className={classesUI.root}>
          <Select
            id="demo-simple-select"
            value={sex}
            name="sex"
            onChange={(e) => onChange(e)}
            placeholder=""
          >
            <MenuItem value="female">Female</MenuItem>
            <MenuItem value="male">Male</MenuItem>
          </Select>
        </FormControl>
        <br />
        <br />

        <div>Choose Dog Location *</div>
        <div className="form-group">
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
                {/* <input
                  style={{
                    width: "37%",
                    display: "inline-block",
                    marginRight: "21px",
                  }}
                  {...getInputProps({})}
                  required
                /> */}

<TextField
          id="standard-basic"
          // type="date"
          // name="dateOfBirth"
          // value={dateOfBirth}
          // onChange={(e) => onChange(e)}
          {...getInputProps({})}
          required
        />
                <Button
                   className="locationButton"
                  onClick={() => setMapOpen(true)}
                  type="button"
                >
                  Need Help?
                </Button>
                <div>
                  {loading ? <div>...loading</div> : null}
                  {suggestions.map((suggestion) => {
                    const style = {
                      backgroundColor: suggestion.active ? "#41b6e6" : "white",
                      width: "37%",
                    };
                    return (
                      <div {...getSuggestionItemProps(suggestion, { style })}>
                        {suggestion.description}
                      </div>
                    );
                  })}
                </div>
              </div>
            )}
          </PlaceAutoComplete>

          <Modal
            isOpen={mapIsOpen}
            onRequestClose={() => setMapOpen(false)}
            style={{
              overlay: {
                backgroundColor: "grey",
              },
              content: {
                color: "orange",
                top: "100px",
                left: "100px",
                right: "100px",
                bottom: "100px",
                height: "70%",
              },
            }}
          >
            <Map center={{ lat: lati, lng: longi }} height="300px" zoom={15} />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Button
              style={{ float: "right" }}
              type="button"
              onClick={() => setMapOpen(false)}
            >
              Close
            </Button>
          </Modal>
        </div>

        <div>Date of Birth *</div>
        <TextField
          id="standard-basic"
          type="date"
          name="dateOfBirth"
          value={dateOfBirth}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <br />
        <div>Age *</div>
        <TextField
          id="standard-basic"
          name="age"
          value={age}
          onChange={(e) => onChange(e)}
          required
        />
        <br />
        <br />

        <input type="submit" className="btn btn-primary my-1" />
        <Link className="btn btn-light my-1" to="/dashboard">
          Go Back
        </Link>
      </form>
    </Fragment>
  );
};

AddDog.propTypes = {
  addDog: PropTypes.func.isRequired,
};

export default connect(null, { addDog })(withRouter(AddDog));
