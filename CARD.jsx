import React from "react"
import ReactDOM from "react-dom"




function Card(pro){
  return(
<div>
<h1 className="heading">My Contacts</h1>
      <div className="card">
        <div className="top">
          <h2>{pro.nname}</h2>
          <img
            src={pro.photo}
            alt="avatar_img"
          />
        </div>
        <div className="bottom">
          <p>{pro.no}</p>
          <p>{pro.mail}</p>
        </div>
      </div>

</div>


  )

}

export default Card;