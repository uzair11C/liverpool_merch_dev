import { useState } from 'react';
import LoginForm from './LoginForm';
import AdminApp from './Components/AdminApp'
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

  const [user, setUser] = useState({id:"",name:"", email:""});
  const [error , setError] = useState("");

  // useEffect(() => 
  // {
  //   const loggedInUser = reactLocalStorage.get('user')
  //   if (loggedInUser)
  //   {
  //     const foundUser = JSON.parse(loggedInUser)
  //     setCurrentUser(foundUser)
  //   }
  // }, [])

  const Login = details => 
  {
    console.log(details);
    if(details.email === adminUser.email && details.password === adminUser.password)
    {
      console.log("Logged In!");
      setUser(
        {
          id: details.id,
          name: details.name,
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
        id:"",name:"", email:""
      }
    )
  }

  return (
    <>
        <div>
          {
            (user.email !== "" && user.password !== "") 
            ?
            (<>
              <AdminApp />
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