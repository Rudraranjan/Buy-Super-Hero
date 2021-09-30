import React from 'react';
import './Candidates.css';

const Candidates = (props) => {
    console.log(props.candidate);
    const {name, img, employeeCode, region, salary, phoneNumber} = props.candidate;
    return (
        <div className='candidate-continer'>
             <img src={img} alt="" />
             <h1>Name :{name}</h1>
             <h3>Employee Id : {employeeCode}</h3>
             <h3>Region : {region}</h3>
             <h3>Salary : {salary} (INR)</h3>
             <h3>Conatct No : {phoneNumber}</h3>
             <br />
             <br />
             <button onClick={() => props.handleToCart(props.candidate)}              
             className='btn-cart'>Add To Cart</button>

        </div>
    );
};

export default Candidates;