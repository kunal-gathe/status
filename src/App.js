import React from "react";
import logo from "./png.png";
import "./App.css";
import { AiFillHome, AiOutlineBell, AiOutlineCiCircle } from "react-icons/ai";

function App() {
  return (
    <>
      <div className="navbar">
        <img className="logo" src={logo} alt="placeholder" />
        <div className="info">
          <ul className="list">
            <li className="item">
              <AiFillHome className="home-icon" /> Home
            </li>
            <li className="item">
              <AiFillHome className="home-icon" />
              About Us
            </li>
            <li className="item">
              <AiFillHome className="home-icon" />
              Our Services
            </li>
            <li className="item">
              <AiFillHome className="home-icon" />
              Calculator
            </li>
            <li className="item">
              <AiFillHome className="home-icon" />
              Cibil Score
            </li>
            <li className="item">
              <AiOutlineBell className="bell-icon" />{" "}
              <AiOutlineBell className="bell-icon de-active" />
            </li>
          </ul>
        </div>
      </div>

      <div className="container">
        <div className="box1">
          <h3 className="heading">Personal Details</h3>
          <div className="flex">
            <div className="input-box">
              <label>Name</label>
              <br />
              <input type="text" />
            </div>
            <div>
              <label>Surname</label>
              <br />
              <input type="text" />
            </div>
          </div>
          <img className="photo" src="https://cdn.pixabay.com/photo/2017/11/19/07/30/girl-2961959_1280.jpg" alt="img"/>
          <label>Aadhar Number</label>
              <br />
              <input type="text" />
              <br />
          <label>Mobile Number</label>
              <br />
              <input type="text" />
              <br />
          <label>Your mM pin For Login</label>
              <br />
              <input type="text" />
              <br />
        </div>
        <div className="box2">
          <h3>Application Status</h3>
          <div className="status">
            <div className="color">
              <AiOutlineCiCircle className="green-ball"/>
              <ul>
                <p>!</p>
                <p>!</p>
                <p>!</p>
                <p>!</p>
              </ul>
              <AiOutlineCiCircle className="blue-ball"/>
              <ul>
                <p>!</p>
                <p>!</p>
                <p>!</p>
                <p>!</p>
              </ul>
              <AiOutlineCiCircle className="gray-ball"/>
            </div>
            <div className="progress">
              <p className="bar pb">Application Submitted</p>
              <p className="bar pi">In Progress</p>
              <p className="bar pb">Approved</p>
            </div>
          </div>
        </div>
      </div>

      <footer>
        <div className="cat-1">
          <h4>Company</h4>
          <p>About Us</p>
          <p>Blog</p>
          <p>Careers</p>
        </div>
        <div className="cat-1">
          <h4>Support</h4>
          <p>Help Center</p>
          <p>Safety Center</p>
          <p>Community Guidelines</p>
        </div>
        <div className="cat-1">
          <h4>Legal</h4>
          <p>Cookies Policy</p>
          <p>Privacy Policy</p>
          <p>Term of Service</p>
          <p>Low Enforcement</p>
        </div>
        <div className="cat-1">
          <h4>Install App</h4>
        </div>
      </footer>
    </>
  );
}

export default App;
