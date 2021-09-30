import React, { useEffect, useState } from 'react';
import Candidates from '../Candidates/Candidates';
import './Shop.css'

const Shop = () => {

    const [candidates, setCandidates] = useState([]);

    useEffect(()=>{
        fetch('./mydata.JSON')
        .then(res => res.json())
        .then(data=> setCandidates(data))
    },[])
    return (
        <div className='shop-container'>
            <div className='candidate-container'>
                {/* <h1>All Candidates Details : {candidates.length}</h1> */}
                {
                    candidates.map(candidate => <Candidates candidate={candidate}></Candidates>)
                }
            </div>
            <div className='total-container'>
                <h1>Total Candidates Select :</h1>
                <h1>Total Amount Used :</h1>
            </div>
        </div>
    );
};

export default Shop;