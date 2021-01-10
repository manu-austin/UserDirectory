import React from "react";
import "./EmployeeCard.css";


function EmployeeCard(props) {

    return (

        <div className='container'>
                    <div className='row User'>
                            <div className='col-sm'>
                                <img src={props.picture} alt={props.firstName}/>
                            </div>
                            <div className='col-sm'>
                                <p>{props.firstName}</p>
                            </div>
                            <div className='col-sm'>  
                                <p>{props.lastName}</p>
                            </div>
                            <div className='col-sm'>
                                <p>{props.email}</p>
                            </div>
                            <div className='col-sm'>
                                <p>{props.phone}</p>
                            </div>
                    </div>
        </div>
        
    );
}

export default EmployeeCard;