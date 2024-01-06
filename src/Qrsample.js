import React, { Component } from 'react';
// import {QrReader} from 'react-qr-reader';

class AadhaarScanner extends Component {
  state = {
    result: null,
  };

  handleScan = (data) => {
    if (data) {
      // Check if the scanned data matches the provided Aadhaar data
      if (data === AadhaarData) {
        this.setState({ result: data });
      } else {
        console.log('Scanned data does not match Aadhaar data.');
      }
    }
  };

  handleError = (error) => {
    console.error('Error while scanning QR code:', error);
  };

  render() {
    return (
      <div>
        {/* <QrReader
          delay={300}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        /> */}
        {this.state.result && (
          <div>
            <h2>Scanned Aadhaar Data:</h2>
            <p>{this.state.result}</p>
          </div>
        )}
      </div>
    );
  }
}

// Replace this with the actual Aadhaar data you want to detect
const AadhaarData =
  '6979414848205548481619299442879901900893978332594614407044767717485...';

export default AadhaarScanner;
