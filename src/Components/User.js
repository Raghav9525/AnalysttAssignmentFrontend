import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';

function User(props) {
    // state to hide or show client data
    const[flag,setFlag] = useState('true');

    let { id } = useParams();
    const users = props.users; // Assuming you receive an array of users
    console.log(users)
    // Find the user with the matching id
    const user = users.find(user => user.id === parseInt(id, 10));

    if (!user) {
        return <div>User not found</div>;
    }

    return (
        <div class="container mt-4">
            <div id="carouselExampleIndicators" class="carousel slide" >
                <div class="carousel-inner">
                    <div class="carousel-item active">
                        <div className="container box1 p-0 m-0">
                            <div className="row" style={{ padding: '.8% 2% .8% 2%' }}>
                                <div className="container bg-white rounded-4 p-5">
                                    <div className="row">
                                        <div className="mycol col-sm-2 ">{user.name}</div>
                                        <div className="mycol col-sm-2 ">
                                            Contact <br />
                                            {user.phone}
                                        </div>
                                        <div className="mycol col-sm-3 ">
                                            City <br />
                                            {user.address.city}
                                        </div>

                                        <div className="mycol col-sm-2">
                                            <button className="btn btn-danger rounded-pill" type="button"
                                                data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"
                                                onClick={()=>{setFlag(!flag)}}
                                            >
                                            {flag ? "Hide details" : "Show details"}
                                            </button>
                                        </div>
                                    </div>

                                    {/* container to display more detailed  of user */}
                                    {flag &&(
                                        <div id="box3" className="container border border-light border-5 mt-4 rounded-4" >

                                            <div className="">
                                                <b>Description</b> The purpose of this assignment is to evaluate a candidate's ability to work with Node.js and React.js.
                                            </div>
                                            <div className=" box2 container  d-flex">
                            
                                                <div className="container ">
                                                    <div className=" "><b>Name</b> <br />{user.name}</div>
                                                    <div className="">
                                                        <b>Contact</b> <br />
                                                        {user.phone}
                                                    </div>
                                                    <div className="">
                                                        <b>Email</b> <br />
                                                        {user.email}
                                                    </div>
                                                </div>

                                                <div className="container">
                                                    <div className="">
                                                        <b>Address </b><br />
                                                        {user.address.street}, {user.address.city}
                                                    </div>
                                                    <div className="">
                                                        <b>City</b> <br />
                                                        {user.address.city}
                                                    </div>
                                                    <div className="">
                                                        <b>Zipcode</b> <br />
                                                        {user.address.zipcode}
                                                    </div>
                                                    <div className="">
                                                        <b>Website</b> <br />
                                                        {user.website}
                                                    </div>
                                                </div>
                                                {/* </div> */}
                                            </div>
                                        </div>
                                    )}

                                </div>
                            </div>
                        </div>
                     <br />

                    </div>
                </div>


            </div>
            {/* </div> */}
        </div>
    );
}

export default User;
