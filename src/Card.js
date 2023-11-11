import React, { Component } from 'react'
import { Card, Button } from 'react-bootstrap'
import AadhaarScanner from './Qrcode'

export default class Card1 extends Component {
   state = {
    showComponent : false
   }

    handleClick = () => {
    // Update the state to show the component
   this.setState({
    showComponent:true
   })
  }
  
  render() {
    const {showComponent} = this.state
    return (
      <div className='d-flex justify-content-center align-items-center' style={{height:"100vh"}}>
        <Card style={{ width: '50rem' }}>
        {!showComponent?<Card.Header>
            Aadhaar is a 12 digit individual identification number issued by the Unique Identification Authority of India on behalf of the Government of India.The number serves as a proof of identity and address, anywhere in India. Aadhaar letter received via India Post and e-Aadhaar downloaded from UIDAI website are equally valid.
            </Card.Header>:null}
  {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
  {/* <AadhaarScanner /> */}
  <Card.Body className='text-center'>
  {showComponent?<AadhaarScanner />:
  <div className='d-flex justify-content-between'>
  Welcome to Aadhaar scanning
  <Button className='btn w-50' onClick={this.handleClick}>Scan</Button>
  </div>
  }
    {/* <Button variant="primary">Go somewhere</Button> */}
  </Card.Body>
  <Card.Footer className='d-flex'>
    Aadhaar scan by &nbsp;
    <a href='http://smksolns.com/'>SMK SOLUTIONS</a>
  </Card.Footer>
</Card>
      </div>
    )
  }
}
