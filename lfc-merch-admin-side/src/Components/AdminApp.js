import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from '../Header';
import AdminDashboard from "./AdminDashboard";

function AdminApp()
{
  return (
    <Router basename="/admin-dashboard">
      <Header />
      <Routes> {/*switch has been renamed to Routes*/}
        <Route path = '/' element={<AdminDashboard />}></Route>
      </Routes>
    </Router>
  );
}

export default AdminApp;