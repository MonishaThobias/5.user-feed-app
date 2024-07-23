import React from "react";

export default function UserList({item}){

    return(
        <>
        <div className="user-list-container">
            <div className="card">
                <div className="card-header">
                    <h3>User : {item.login.username}</h3>
                </div>
                <div className="card-body">
<div className="row">
    <div className="col">
<h3>{item.name.title} {item.name.first} {item.name.last}</h3>
<p>Email : {item.email}</p>  
<div className="feed-age-section">
<h4><strong>User for {item.registered.age} {" "}
{item.registered.age === 1 ? "year" : "years"}</strong>
</h4> 
<p><strong>Age : </strong> {item.dob.age}</p>
<p><strong>Nationality : </strong> {item.nat}</p>
<p><strong>Phone : </strong> {item.phone}</p>


</div>
    </div>
    <div className="col feed-right">
        <img src={item.picture.medium} alt="User Feed user"/>
        <h4><strong>Address :</strong></h4>
        <p><small>{item.location.street.number} , {item.location.street.name},</small></p>
        <p><small>{item.location.state} , {item.location.country} ,</small></p>
        <p><small>{item.location.postcode}</small></p>

        </div>
</div>
                </div>
            </div>
        </div>
        </>
    );
}