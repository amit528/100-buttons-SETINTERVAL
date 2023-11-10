import React, { Component } from 'react';
import jsQR from 'jsqr';

class AadhaarScanner extends Component {
    state = {
        result: null,
      };
    
  componentDidMount() {
    // Initialize camera and start scanning
    this.setupScanner();
  }

  setupScanner = () => {
    const video = document.getElementById('scanner');
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    const constraints = { video: { facingMode: 'environment' } };

    navigator.mediaDevices.getUserMedia(constraints)
      .then((stream) => {
        video.srcObject = stream;

        const handleScan = () => {
          context.drawImage(video, 0, 0, canvas.width, canvas.height);
          const imageData = context.getImageData(0, 0, canvas.width, canvas.height);
          const code = jsQR(imageData.data, imageData.width, imageData.height);

          if (code) {
            console.log('Scanned data:', code.data);
            this.setState({ result: code.data });
            this.stopScanner();
          } else {
            requestAnimationFrame(handleScan);
          }
        };

        video.onloadedmetadata = () => {
          canvas.width = video.videoWidth;
          canvas.height = video.videoHeight;
          requestAnimationFrame(handleScan);
        };
      })
      .catch((error) => {
        console.error('Error accessing camera:', error);
      });
  };

  stopScanner = () => {
    const video = document.getElementById('scanner');
    const stream = video.srcObject;
    const tracks = stream.getTracks();

    tracks.forEach(track => track.stop());
  };

  render() {
    return (
      <div>
        <video id="scanner" autoPlay playsInline />
        <p>{this.state.result}</p>
      </div>
    );
  }
}

export default AadhaarScanner;
