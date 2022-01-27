import { useState } from 'react';
import LoginForm from './LoginForm';
import CustomerApp from './Components/CutomerApp'
import Footer from './Footer';
// import { reactLocalStorage } from 'reactjs-localstorage';
import './App.css'

function App() {

  const adminUser = 
  {
    id: 1,
    email : "admin@admin.com",
    password : "admin"
  }

  const [user, setUser] = useState({id:0,email:""});
  const [error , setError] = useState("");

  const Login = details => 
  {
    console.log(details);
    if(details.id === adminUser.id && details.password === adminUser.password)
    {
      console.log("Logged In!");
      setUser(
        {
          id: parseInt(details.id),
          email: details.email
        }
      )
    }
    else
    {
      console.log("Details do not match!");
      setError("Details do not match!");
    }
  }

  const Logout = () =>
  {
    console.log("Logged out!");
    setUser(
      {
        id:null, email:""
      }
    )
  }

  return (
    <>
        <div>
          {
            (user.id !== null && user.password !== "") 
            ?
            (<>
              <CustomerApp />
              <button className="log-tog" onClick={Logout}>Logout</button>
              <Footer />
              </>
            ) 
            :
            (<LoginForm Login={Login} error={error} />)
          }
        </div>
    </>
  );
}

export default App;