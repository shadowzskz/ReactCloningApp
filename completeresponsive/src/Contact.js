import React, { useState } from 'react';
import './App.css';

const Contact = () => {
    const [data, setData] = useState({
      fullname: '',
      phone: '',
      email: '',
      msg: '',
    });

    const inputEvent = (e) => {
        const {name, value} = e.target;

        setData ( (preVal) => {
          return {
            ...preVal,
            [name]: value,
          }
        } )
    };

    const formSubmit = (e) => {
      e.preventDefault();
      alert(`FullName: ${data.fullname}
              Number: ${data.phone}
              Email: ${data.email}
              Message: ${data.msg}
      `)
    };


   return (
     <>
      <div className="my-5">
        <h1 className='text-center'> Contact Us</h1>
      </div>
      <div className="container contact_div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">

            <form onSubmit={formSubmit}>
                <div className="form-group">
                  <label for="exampleInputEmail1">Full Name</label>
                  <input 
                    type="text" 
                    className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="fullname"
                    value={data.fullname}
                    onChange={inputEvent}
                    placeholder="Enter your Name"                     
                  />
                  <br />
                </div>
                
                <div className="form-group">
                  <label for="exampleInputEmail1">Contact Number</label>
                  <input 
                    type="number" 
                    className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="phone"
                    value={data.phone}
                    onChange={inputEvent}
                    placeholder="Enter your Contact"                     
                  />
                  <br />
                </div>
                
                <div className="form-group">
                  <label for="exampleInputEmail1">Email</label>
                  <input 
                    type="email" 
                    className="form-control" 
                    id="exampleInputEmail1" aria-describedby="emailHelp" 
                    name="email"
                    value={data.email}
                    onChange={inputEvent}
                    placeholder="name@example.com"                     
                  />
                  <br />
                </div>

                <div className="form-group">
                  <label for="exampleInputPassword1">Message</label>
                  <textarea 
                  type="text" 
                  className="form-control" 
                  id="exampleFormControlTextarea1" 
                  name="msg"
                  value={data.msg}
                  onChange={inputEvent}
                  placeholder="Enter your message" 
                    rows="3"
                  />
                </div>
                <br />
                <div class='col-12'>
                  <button class="btn btn-outline-primary" type="submit">Submit Us</button>
                </div>   
                <br />             
              </form>

          </div>
        </div>
      </div>
     </>
   )
};

export default Contact;
