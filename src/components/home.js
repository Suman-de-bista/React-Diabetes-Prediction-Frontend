import React from 'react';
import { useNavigate } from "react-router-dom";
const Home = () => {
    let navigate = useNavigate()
    return (
        <div className='home' id='home'> 
            <h1 className='home-content'>Welcome to Diabetes Prediction System</h1>
            <h3 className='home-content'>Wanna know if you are diagnosed with Diabetes?</h3>
            <button className='home-content btn' onClick={()=> navigate('/predict')} >Predict</button>
        </div>
    );
}
console.log(React.version)
export default Home;
