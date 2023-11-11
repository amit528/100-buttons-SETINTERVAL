import React,{useState, useEffect} from 'react'
import { Form, Button } from 'react-bootstrap';

export default function UserForm({list}) {
console.log(list);
let data = list?list:"";
const[state, setState] = useState({
    name : data.name,
    aadhaarNo : data.uid,
    gender : data.gender,
    // yob : data.yob
    co : data.co,
    landMark : data.lm,
    vtc : data.vtc,
    po : data.po,
    dist : data.dist,
    taluk : data.subdist,
    state : data.state,
    pc : data.pc,
    dob : data.dob
})

useEffect(() =>{
setState({
    name : data.name,
    aadhaarNo : data.uid,
    gender : data.gender,
    co : data.co,
    landMark : data.lm,
    vtc : data.vtc,
    po : data.po,
    dist : data.dist,
    taluk : data.subdist,
    state : data.state,
    pc : data.pc,
    dob : data.dob

});
console.log("scan");
},[state]);

function handleChange(e){
    console.log(e.target.value);
    const {name , value }= e.target;
    setState({...state,[name]:value});
}

  return (
    <div>
        {/* <form action="">
            <label htmlFor="">Name</label>
            <input type="text" name='name' value={state.name} onChange={handleChange} />
            <label htmlFor="">Aadhaar No</label>
            <input type="text" name='uid' value={state.uid} onChange={handleChange} />
            <label htmlFor="">Gender</label>
            <input type="text" name='gender' value={state.gender} onChange={handleChange} />
            
        </form> */}
        <Form className='row'>
  <Form.Group controlId="formBasicEmail" className='col-lg-6' style={{textAlign : "left"}}>
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="name" value={state.name} onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail" className='col-lg-6' style={{textAlign : "left"}}>
    <Form.Label>Aadhaar Number</Form.Label>
    <Form.Control type="aadhaarNo" placeholder="Enter Aadhaar Number" name="aadhaarNo" value={state.aadhaarNo} onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail" className='col-lg-6' style={{textAlign : "left"}}>
    <Form.Label>State</Form.Label>
    <Form.Control type="state" placeholder="Enter State" name="state" value={state.state} onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail" className='col-lg-6' style={{textAlign : "left"}}>
    <Form.Label>Pin Code</Form.Label>
    <Form.Control type="pc" placeholder="Enter Pincode" name="pc" value={state.pc} onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail" className='col-lg-6' style={{textAlign : "left"}}>
    <Form.Label>Date Of Birth</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="dob" value={state.dob} onChange={handleChange}/>
  </Form.Group>

  {/* <Form.Group controlId="formBasicEmail" className='col-lg-6'>
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="name" onChange={handleChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicEmail"className='col-lg-6'>
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" name="name" onChange={handleChange}/>
  </Form.Group> */}
  <div className='col-lg-6'>
  <Button className='btn btn-primary mt-4' variant="primary" type='submit'>
    Submit
  </Button>
  </div>
</Form>

    </div>
  )
}
