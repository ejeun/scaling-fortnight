import React from 'react';
import {connect} from 'react-redux';

// keys are in seperate file and is added to the .gitignore so that our account secrets arenot exposed through github or deployment
import keys from '../keys.js';

// require the client
var Clarifai = require('clarifai');
// instantiate a new Clarifai app passing in your clientId and clientSecret
var app = new Clarifai.App(
  keys.CLIENT_ID,
  keys.CLIENT_SECRET
);

/* ----- COMPONENT ----- */

export class imageAPI extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      files: {},
      holdingURL: '',
      imgURL: '',
      tags: [],
      loading: false,
      error: '',
    };

    this.handleURLChange = this.handleURLChange.bind(this);
    this.handleURLSubmit = this.handleURLSubmit.bind(this);
    this.handleImgUpload = this.handleImgUpload.bind(this);
    this.validFile = this.validFile.bind(this);
    this.useClarifaiAPI = this.useClarifaiAPI.bind(this);
    this.storeTags = this.storeTags.bind(this);
  }

  // check that the image provided is a supported type by clarifai
  validFile(imageName){
    let lowercaseImageName = imageName.toLowerCase();
    return (
      lowercaseImageName.indexOf(".jpg") !== -1 ||
      lowercaseImageName.indexOf(".jpeg") !== -1 ||
      lowercaseImageName.indexOf(".png") !== -1 ||
      lowercaseImageName.indexOf(".tiff") !== -1 ||
      lowercaseImageName.indexOf(".bmp") !== -1
    )
  }

  useClarifaiAPI(input){
    // clarifai provides this shortcut way of sending a req with the correct headers (ie. instead of sending a post request to the 3rd party server ourselves and getting the response) you only need to provide either the image in bytes OR a url for the image
    // https://developer.clarifai.com/guide/predict

    app.models.predict(Clarifai.GENERAL_MODEL, input)
    .then(response => {
      const predictions = response.outputs[0].data.concepts

      let tags = [];

      predictions.forEach(guess => {
        if (guess.value > 0.80 &&
            guess.name !== 'no person'
          && guess.name !== 'one') {
          tags.push(guess.name)
        }
      })

      // if (tags.length > 7) {
      //   tags.splice(7)
      // }

      // logging in browser so you can see what's happening
      // for clarifying purposes only
      //  - jenny

      console.log(
        'this is the whole response that clarifai sends back ',
        response
      )
      console.log(
        'inside the response, the outputs array has data on the words associated with the input image, which i call predictions ',
        predictions
        )
      console.log(
        'i like to filter that array of objects down to just single words of at least 80% certainty',
        tags
      )

      // this changes the local state, which will
      this.storeTags(tags);
    },
    err => {
      console.error(err);
    })
  }

  storeTags(tags){
    this.setState({
      tags: tags,
      loading: false,
    });
  }

  handleURLChange(e){
    this.setState({
      holdingURL: e.target.value,
      tags: [],
    })
  }

  // onClick event for providing a url
  handleURLSubmit(e){
    e.preventDefault();

    this.setState({
      imgURL: this.state.holdingURL,
      loading: true,
      tags: [],
    });

    if (!this.state.imgURL.length) {
      this.setState({
        error: 'Please enter an image URL!'
      })
    }

    else if (!this.validFile(this.state.imgURL)) {
      this.setState({
        error: 'Supported File Types: JPEG, PNG, TIFF, BMP'
      })
    }

    else {
      this.useClarifaiAPI(this.state.imgURL)
    }
  }

  // onClick event for taking or choosing a local picture file
  handleImgUpload(e){
    // get the file off of the submit event
    var files = e.target.files,
        file;

    if (files && files.length > 0) {

      file = files[0];

      this.setState({
        file: file,
        loading: true,
        tags: [],
      })

      try {
        // Get window.URL object
        var URL = window.URL || window.webkitURL;

        this.setState({
          imgURL: URL.createObjectURL(file)
        })

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        // you only have access to the read file inside of this callback(?)function
        fileReader.onload = () => {

          const imgBytes = fileReader.result.split(',')[1]
          this.useClarifaiAPI(imgBytes)
        }
      }
      catch (err) {
        try {
          // Fallback if createObjectURL is not supported
          var fileReader = new FileReader();
          fileReader.onload = function (event) {
            this.setState({
              imgURL: event.target.result,
            })
          };
          fileReader.readAsDataURL(file);
        }
        catch (err) {
          // Display error message

        }
      }
    }
  }

// check for file compatability before app crashes because of a PNG or GIF...
/*     if(filename.value == '') {
            alert('Please browse for a file!');
            return;
          }

          else if (!this.validFile(filename.value)) {
            alert('Supported File Types: JPEG, PNG, TIFF, BMP');
            return;
          }*/

  render(){
    return (
      <div className="container">
        <form onSubmit={this.handleURLSubmit}>
          <input
            type="submit"
            value="Use this image URL"
            size="80"
          />
          <input
            type="text"
            id="imgurl"
            placeholder="Image URL"
            onChange={this.handleURLChange}
          />
        </form>

        <br/><br/>

        <input
          type="file"
          id="take-picture"
          accept="image/*"
          onChange={this.handleImgUpload}
        ></input>

        <div>
          <img
            id="show-picture"
            className="img-responsive"
            src={this.state.imgURL}
            height="auto"
            width="300"
            ></img>
        </div>

        <span className="mdc-typography--body1">
          tags: {this.state.tags.length && !this.state.loading ?
          this.state.tags.map(function(tag, i){
            return (
              <div className="tags" key={i}>{tag}</div>
            )
          }) : <div className="tags">{this.state.loading && 'processing your image...'}</div>
        }</span>

      </div>
    )
  }
}

/* ----- CONTAINER ----- */

const stateToProps = (state) => {
  return {}
};

const dispatchToProps = (dispatch) => {
  return {}
};

export default connect(stateToProps, dispatchToProps)(imageAPI);
