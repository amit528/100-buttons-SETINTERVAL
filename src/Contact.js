import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import React, { useState, useRef } from "react";

const ContactForm = () => {
  const formRef = useRef(null)
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if (name === "") {
  //     alert("Name is Required");
  //     return;
  //   } else if (email === "") {
  //     alert("Email is required");
  //     return;
  //   } else if (message === "") {
  //     alert("Description is required");
  //     return;
  //   }
  //   // console.log(name,email,phone,description)
  //   let formData = new FormData()
  //    const data = {
  //     Name: name,
  //     Email: email,
  //     Message: message,
  //   };
  //   formData.append("userData",data)
  //   fetch(
  //     "https://sheets.googleapis.com/v4/spreadsheets/1iaMLI0UwY1PyYP4bduhjo4IinGtgf429OwJlVqeQFas/values/powellsindia:append?key=YOUR_GOOGLE_SHEETS_API_KEY",z
  //     {
  //       method: "POST",
  //       body: formData,
  //       mode:'no-cors',
  //       headers: {
  //         Authorization:
  //           "1iaMLI0UwY1PyYP4bduhjo4IinGtgf429OwJlVqeQFas",
  //       },
  //     }
  //   )
  //     .then((response) => response.json())
  //     .then((response) => {
  //       console.log(response);
  //       alert("Thanks for contacting us... we will get back to you soon");
  //       setEmail("");
  //       setName("");
  //       setMessage("");
  //     })
  //     .catch((err) => {
  //       //  console.log(err.message);
  //       alert("Something went wrong");
  //     });
  // };

  const handleSubmit = (e) =>{
    e.preventDefault()
    fetch("https://script.google.com/macros/s/AKfycbyGQGdfFa932DnINfV6_NkWtrqGh95gK_V_TSbFbXlzvooFzpssVGMrFr_58IIrQvnHGQ/exec", {
    method: 'POST', 
    body: new FormData(formRef.current),
    }).then(res => {
       alert("success")
        
    })
    .catch(err => console.log(err))
}
  return (
    <>
      <Container>
        <Form className="contactForm" ref={formRef} onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter Name"
              value={name}
              name="Name"
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email Id</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              name="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="Description">
            <Form.Label>Messege</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Submit
          </Button>
          {/* <Button variant="danger" type="Cancel" style={{ marginLeft: "20px" }}>
            Cancel
          </Button> */}
        </Form>
      </Container>
    </>
  );
};
export default ContactForm;