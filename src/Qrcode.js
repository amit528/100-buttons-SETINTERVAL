import React, { Component } from 'react';
import { QrReader } from 'react-qr-reader';
import * as QRCode from 'qrcode';

class AadhaarScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      qrCodeData: null,
    };
  }

  handleScan = (data) => {
    if (data) {
        console.log(data);
      this.setState({
        qrCodeData: data,
      });

      // Parse QR code data using the qrcode library
      QRCode.toDataURL(data, (err, url) => {
        if (err) console.error(err);
        console.log('QR Code Data:', data);
      });
    }
  };

  handleError = (err) => {
    // console.error(err);
  };

  render() {
    return (
      <div>
        <QrReader
          delay={1000}
          onError={this.handleError}
          onScan={this.handleScan}
          style={{ width: '100%' }}
        />
        <div>
          {this.state.qrCodeData && (
            <div>
              <h2>QR Code Data</h2>
              <pre>{JSON.stringify(this.state.qrCodeData, null, 2)}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default AadhaarScanner;
