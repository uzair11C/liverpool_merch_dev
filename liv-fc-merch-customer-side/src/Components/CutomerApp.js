import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../Header';
import CustomerHome from "./CustomerHome";

function CustomerApp()
{
  return (
    <Router basename="/customerhome">
      <Header />
      <Routes> {/*switch has been renamed to Routes*/}
        <Route path = '/' element={<CustomerHome />}></Route>
      </Routes>
    </Router>
  );
}

export default CustomerApp;