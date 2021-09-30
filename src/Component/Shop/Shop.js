import React, { useEffect, useState } from 'react';
import Candidates from '../Candidates/Candidates';
import Cart from '../Cart/Cart';
import './Shop.css'

const Shop = () => {

     {/* use state call here */}

    const [candidates, setCandidates] = useState([]);
    const [cart, setCart]=useState([]);

    {/* Fetch data here */}

    useEffect(()=>{
        fetch('./mydata.JSON')
        .then(res => res.json())
        .then(data=> setCandidates(data))
    },[])

    {/* handeling cart on cklick code */}

    const handleToCart = (candidate) => {
        const newCart = [...cart,candidate];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
            <div className='candidate-container'>

                {/*candidate data maping here*/}

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