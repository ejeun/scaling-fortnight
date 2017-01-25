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
    super(props)
    this.state = {
      files: {},
      imgURL: '',
      error: '',
    }
    this.handleURLSubmit = this.handleURLSubmit.bind(this)
    this.handleImgUpload = this.handleImgUpload.bind(this)
  }

  // check that the image provided is a supported type by clarifai
  validFile(imageName){
    let lowercaseImageName = imageName.toLowerCase();
    return (
      lowercaseImageName.indexOf(".jpg") != -1 ||
      lowercaseImageName.indexOf(".jpeg") != -1 ||
      lowercaseImageName.indexOf(".png") != -1 ||
      lowercaseImageName.indexOf(".tiff") != -1 ||
      lowercaseImageName.indexOf(".bmp") != -1
    )
  }

  // onClick event for providing a url
  handleURLSubmit(e){
    if(imgurl.value == '') {
        alert('Please enter an image URL!');
        return;
      }

      else if (!this.validFile(imgurl.value)) {
        alert('Supported File Types: JPEG, PNG, TIFF, BMP');
        return;
      }
  }

  // onClick event for taking or choosing a local picture file
  handleImgUpload(e){
    if(filename.value == '') {
        alert('Please browse for a file!');
        return;
      }

      else if (!this.validFile(filename.value)) {
        alert('Supported File Types: JPEG, PNG, TIFF, BMP');
        return;
      }

    this.setState({
      files: e.target.files,
    })

    var files = e.target.files,
        file;
    if (files && files.length > 0) {
      file = files[0];

      try {
        // Get window.URL object
        var URL = window.URL || window.webkitURL;
        // console.log(file)
        this.setState({
          imgURL: URL.createObjectURL(file)
        })

        const fileReader = new FileReader()
        fileReader.readAsDataURL(file)
        fileReader.onload = () => {
          let imgBytes = fileReader.result.split(',')[1]
          // console.log(imgBytes)

          app.models.predict(Clarifai.GENERAL_MODEL, imgBytes)
          .then(response => {
              const predictions = response.outputs[0].data.concepts

              let tags = [];

              predictions.forEach(function(guess){
                if (guess.value > 0.85 &&
                    guess.name !== 'no person'
                  && guess.name !== 'one') {
                  tags.push(guess.name)
                }
              })

              if (tags.length > 7) {
                tags.splice(7)
              }

              this.props.send(this.state.imgURL, tags, this.props.pet)
            },
            function(err) {
              console.error(err);
            }
          )
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
          this.setState({
            error: 'Neither createObjectURL or FileReader are supported',
          })
        }
      }
    }
  }


  render(){
    return (
      <div className="container">
        <button onClick={this.handleURLSubmit}>Predict a URL!</button>
        <input type="text" id="imgurl" placeholder="Image URL" size="80"/>

        <br/><br/>

        <button onClick={this.handleImgUpload}>Upload your own image!</button>
        <input type="file" id="imgupload" placeholder="Filename" accept="image/*" size="80"/>

        <div>
          <img
            id="show-picture"
            className="img-responsive"
            src={this.state.imgURL}
            height="auto"
            width="300"
            ></img>
        </div>

        <span className="mdc-typography--body1"> {/*this.props.newMail.tags && this.props.newMail.tags.map(function(tag, i){
          return (
            <div className="tags" key={i}>{tag}</div>)
        })*/}</span>

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
