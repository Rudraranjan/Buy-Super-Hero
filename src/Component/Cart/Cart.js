import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    let total = 0;       
    for(const candidate of cart){
        total = total+ candidate.salary;
               
    }
    return (
        <div className='cart-container'>
             <h1>Total Candidates Select : {props.cart.length}</h1>
             <h1>Total Salary of Candidates : {total}</h1>
             <h3>Candidate Name : </h3>
             <ul>
                 {cart.map(candidate =><li className='li'>{candidate.name}</li>)}
             </ul>
        </div>
    );
};

export default Cart;