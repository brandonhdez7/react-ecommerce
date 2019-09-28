import React from 'react'
import axios from 'axios'
import profileAvatar from '../../Images/30818272-anoniem-avatar-profiel-icoon-vector-.png'

class ProfileImage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
          imageURL: profileAvatar,
        };
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.handleUploadImage = this.handleUploadImage.bind(this);
      }

      onChange(e){
        this.setState({[e.target.ImageURL]: e.target.value})
    }

    onSubmit(e){
        e.preventDefault()

        const user = {
            ImageURL: this.state.imageURL,
        }

        register(user).then(res => {
                this.props.history.push(`/profile`)
        })
    }


    
      handleUploadImage(ev) {
        ev.preventDefault();

        const data = new FormData();
        data.append('file', this.uploadInput.files[0]);
        // data.append('filename', this.fileName.value);
    
        fetch('http://localhost:3000/upload', {
          method: 'POST',
          body: data,
        }).then((response) => {
          response.json().then((body) => {
            this.setState({ imageURL: `http://localhost:3000/${body.file}` });
          });
        });
      }


  render () {
    return (
      <div>
    <form onSubmit={this.handleUploadImage}>
        <div className="profileButtons">
          <input className="profileInput1"  ref={(ref) => { this.uploadInput = ref; }} type="file" />
          <button>Upload</button>
        </div>
        <div className="profileImg1">
          <img className="profileImg" src={this.state.imageURL} value={this.state.imageURL} onChange={this.onChange} alt="img" />
        </div>
      </form>
        
      </div>
    )
  }
}

export default ProfileImage;