import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../Header';
import CustomerHome from "./CustomerHome";

function CustomerApp()
{
  return (
    <Router basename="/customerhome">
      <Header />
      <Routes> {/*switch has been renamed to Routes*/}
        <Route exact path = '/' element={<CustomerHome />}></Route>
        {/* <Route exact path='/about-us' element={<About />} ></Route> */}
      </Routes>
    </Router>
  );
}

export default CustomerApp;