import React,{useState} from 'react';


const Predict = () => {
    const [currentState, setCurrentState] = useState(0);
    // const [data, setData] = useState([{
    //     Pregnencies:0,
    //     Glucose:0,
    //     BloodPressure:0,
    //     SkinThickness:0,
    //     Insulin:0,
    //     BMI:0,
    //     DiabetesPedigreeFunction:0,
    //     Age:0
    // }])
    const arr = ['Pregnencies', 'Glucose','BloodPressure','SkinThickness','Insulin','BMI','DiabetesPedigreeFunction','Age'];

    const handleNext = ()=>{
            setCurrentState(currentState+1);
    }
    const handlePrevious = ()=>{
        setCurrentState(currentState-1);
    }
    
    return (
        <div className='common predict' id='predict'>
            <div className="doc-img">
                <img src="images/doctor1.png" alt="cover" />
            </div>
            <div className="predict-content">
            <div className="qno">{currentState+1}/8 Question</div>
                <div className='label'>{arr[currentState]}</div>
                <input type="number" placeholder={arr[currentState]} />
                <div className="btns">
                {currentState < 7 ?<button onClick={handleNext} className='next np'>Next</button>: <button className='submit previous'>Submit</button> }
                {currentState === 0 ? <div></div>: <button onClick={handlePrevious} className='previous np'>Previous</button> }
                </div>
            </div>
        </div>
    );
}

export default Predict;
