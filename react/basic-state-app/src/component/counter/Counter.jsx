import {useState} from 'react';


export default function Counter({total, click}) {
    const [number, setNumber] = useState(0);
    const [totlNumber, setTotalNumber] = useState(0);

    function increment() {
        (number < 10) ? setNumber(number + 1) : setNumber(number);
        console.log(`number--> ${number}`);
        
        click(number, '+'); //number:0
        // if(number < 10) {
        //     setNumber(number+1);
        //     setTotalNumber(totlNumber + number);
        // }
        

        // if(number < 10) {
        //     setNumber(number+1); 
        // }else{
        //     // setNumber(10);
        // }
    }

    function decrement(){
        (number > 0 ) ? setNumber(number - 1) : setNumber(0);
        click(number, '-')
    }
    
    
    return(
        <div className="container">
            <div> 
                <span className="number">{number}/</span>
                <span className="total-number">{total}</span>
            </div>
            <button type="button" 

                    className="button" 
                    onClick={increment}>증가(+)</button>
            <button type="button" 
                    className="button" 
                    onClick={decrement}>감소(-)</button>
                    {/* onClick={()=>{ setNumber(number+1) }}>ADD</button>  콜백함수*/}
        </div>
    );
}