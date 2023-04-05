import { useLocation } from "react-router";
import Header from "../../components/Header";

import "./homepage.css";
// import Login from "../login/Login";
// import Register from "../register/Register";

export default function Homepage() {
  const location = useLocation();
  console.log(location);
  return (
    <>
      
      <div className="home">
      <Header />
       
      </div>
    </>
  );
}