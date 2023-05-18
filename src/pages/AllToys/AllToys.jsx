import React, { useEffect } from 'react';

const AllToys = () => {
    useEffect(()=>{
        fetch(`http://localhost:5000/toys`)
        .then(res => res.json())
        .then(data =>{
            console.log(data)
        })
        .catch()
    },[])
    return (
        <div>
            
        </div>
    );
};

export default AllToys;