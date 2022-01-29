import './App.css';
import React, {useState} from 'react';
import axios from 'axios';

function App() 
{
  const [user,setUser] = useState({
    FirstName : '',
    LastName : '',
    Email : '',
    ContactNo : 0,
    UserType : '',
    Password : '',
    Country: '',
    County: '',
    City: '',
    Street: 0
  })

  const createUser = () =>
  {
    axios({
      method: 'POST',
      url: `http://localhost:8000/api/${user.UserType}`,
      data:{
              FirstName : user.FirstName,
              LastName : user.LastName,
              Email : user.Email,
              ContactNo : user.ContactNo,
              UserType : user.UserType,
              Password : user.Password,
              Country: user.Country,
              County: user.County,
              City: user.City,
              Street: user.Street
           }
    })
    console.log("POST")
    return(<div></div>)
  }

  return (
    <div className="App">
      <div className='container-fluid'>
        <div style={{textAlign:'center',paddingTop:'20px',paddingBottom:'10px'}} className='row'>
          <h2 style={{fontSize:'50px',color:'#00ff0d'}}>User Sign-Up</h2>
        </div>
        <div className='row'>
          <div className='col-lg-4'>
            <h2>Enter Your First Name:</h2>
            <input type="text" className="form-control" placeholder="First Name" aria-label="First Name" aria-describedby="addon-wrapping"
            onChange={e=> {setUser({...user , FirstName: e.target.value})}} value={user.FirstName} />

            <h2>Enter Your Last Name:</h2>
            <input type="text" className="form-control" placeholder="Last Name" aria-label="Last Name" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , LastName: e.target.value})}} value={user.LastName} />

            <button className='log-tog' onClick={createUser} disabled={false}>Sign-Up</button>
          </div>

          <div className='col-lg-4'>
          <h2>Enter Your Email:</h2>
            <input type="email" className="form-control" placeholder="Email" aria-label="Email" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , Email: e.target.value})}} value={user.Email}/>

            <h2>Enter Your Contact Number:</h2>
            <input type="number" className="form-control" placeholder="Contact Number" aria-label="Contact Number" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , ContactNo: parseInt(e.target.value)})}} value={user.ContactNo}/>

            <h2>Enter Your Role:</h2>
            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Customer" 
              onChange={e=> {setUser({...user , UserType: e.target.value})}} value='customers' />
              <label style={{fontSize:'20px',color:'#fff'}} className="form-check-label" htmlFor="Customer">
                Customer
              </label>
            </div>

            <div className="form-check">
              <input className="form-check-input" type="radio" name="flexRadioDefault" id="Admin" 
              onChange={e=> {setUser({...user , UserType: e.target.value})}} value='admins' />
              <label style={{fontSize:'20px',color:'#fff'}} className="form-check-label" htmlFor="Admin">
                Admin
              </label>
            </div>            

            <h2>Enter Your Password:</h2>
            <input type="password" className="form-control" placeholder="password" aria-label="password" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , Password: e.target.value})}} value={user.Password} />
          </div>

          <div className='col-lg-4'>
            <h2>Enter Your Country of Residence:</h2>
            <input type="text" className="form-control" placeholder="Country" aria-label="Country" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , Country: e.target.value})}} value={user.Country} />

            <h2>Enter Your County/Province/State:</h2>
            <input type="text" className="form-control" placeholder="County/Province/State" aria-label="County" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , County: e.target.value})}} value={user.County} />

            <h2>Enter Your City:</h2>
            <input type="text" className="form-control" placeholder="City" aria-label="City" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , City: e.target.value})}} value={user.City} />
            
            <h2>Enter Your Street Number:</h2>
            <input type="number" className="form-control" placeholder="Street" aria-label="Street" aria-describedby="addon-wrapping" 
            onChange={e=> {setUser({...user , Street: e.target.value})}} value={user.Street} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
