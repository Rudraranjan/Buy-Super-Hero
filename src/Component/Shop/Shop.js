import React, { useEffect, useState } from 'react';
import Candidates from '../Candidates/Candidates';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {

    const [candidates, setCandidates] = useState([]);
    const [cart, setCart]=useState([]);

    useEffect(()=>{
        fetch('./mydata.JSON')
        .then(res => res.json())
        .then(data=> setCandidates(data))
    },[])

    const handleToCart = (candidate) => {
        const newCart = [...cart,candidate];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='candidate-container'>
                {/* <h1>All Candidates Details : {candidates.length}</h1> */}
                {
                    candidates.map(candidate => <Candidates 
                        key={candidate.key} 
                        candidate={candidate}
                        handleToCart = {handleToCart}></Candidates>)
                }
            </div>
            <div className='total-container'>
               <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;