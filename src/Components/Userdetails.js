import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


function Userdetails(props) {
  // creating state to store client data
  const [data, setData] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const navigate = useNavigate();

  // asyn funtion for API call to server

  useEffect(() => {
    
    async function showUser() {
      try {

        const response = await axios.get("https://anallytsttassignment.onrender.com/");
        if (!response.data || response.data.length === 0) {
          console.log("API request failed");
          return;
        }
  
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }
    showUser();

  }, []);

  // send id to User.js to display more details of selected user
  function passData(id) {
    props.getUserData(data);
    navigate(`/user/${id}`);
  }

  // Function to handle the carousel-indicators button click
  function handleIndicatorClick(index) {
    setActiveIndex(index);
  }

  return (
    // display carousel button
    <div className="container mt-4">
      <div className="carousel-indicators p-5">
        {/* get length of user obejct and display that may button */}
        {data.slice(0, Math.ceil(data.length / 3)).map((_, index) => (
          <button
            key={index}
            style={{ color: 'red' }}
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to={index}
            className={activeIndex === index ? 'active' : ''}
            onClick={() => handleIndicatorClick(index)}
            aria-label={`Slide ${index + 1}`}
          >
            <br />
            {index + 1}
          </button>
        ))}
      </div>

            {/* display user Data based on carousal button*/}
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="box1 container p-3">
              {data.slice(activeIndex * 3, (activeIndex + 1) * 3).map((user) => (
                <div className="row" style={{ margin: '0% 0% 0% 0%' }} key={user.id}>
                  <div className="card rounded-4 mt-2">
                    <div className="row p-4 mt-3">
                      <div className="col-sm-2">{user.id}</div>
                      <div className="col-sm-2">{user.name}</div>
                      <div className="col-sm-2">
                        Contact <br />
                        {user.phone}
                      </div>
                      <div className="col-sm-3">
                        City <br />
                        {user.address.city}
                      </div>
                      <div className="col-sm-2">
                        <button
                          className="btn btn-danger rounded-pill"
                          type="button"
                          onClick={() => passData(user.id)}
                        >
                          View Detail
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <br /><br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Userdetails;
