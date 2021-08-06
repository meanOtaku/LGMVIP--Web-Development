import React from "react";

function Card(props){
    return (
        <div className="term">
            <dt>
                <span className="emoji" role="img" aria-label="Tense Biceps">
                    <img src={props.avatar} alt="" />
                </span>
                
                <br/>
                <div className="name">
                    {props.first_name}
                                        
                    {props.last_name}
                </div>
            </dt>
            <dd>
                <span className="email">{props.email}</span>
            </dd>
        </div>
    )
}

export default Card;