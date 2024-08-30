
import './App.css';
import './calculator.css'
import {useState} from 'react'

function App() {
  const [inputNum, setInputNum ] = useState(0);
  const [total, setTotal ] = useState(0);

  const equalOperator = () =>  
  {
    setTotal(inputNum + inputNum)
  }
  return (
    <div className='calculator'>
      <p style={{color:'white',fontFamily:'arial'}}>{inputNum}</p>
      <p></p>
      <div className='blackButton'>
        <button className='grayButton'>C</button>
        <button className='grayButton'>&plusmn;</button>
        <button className='grayButton'>%</button>s
        <button className='orangeButton'>/</button>
      </div>
      <div className='blackButton'>
        <button onClick={() => setInputNum((prev) => prev + 7)}>
          7
        </button>
        <button onClick={() => setInputNum((prev) => prev + 8)}>
          8
        </button>
        <button onClick={() => setInputNum((prev) => prev + 9)}>
          9
        </button>
        <button
         className='orangeButton'>
          *       
        </button>
      </div>
      <div className='blackButton'>
        <button onClick={() => setInputNum((prev) => prev + 4)}>
          4
        </button>
        <button onClick={() => setInputNum((prev) => prev + 5)}>
          5
        </button>
        <button onClick={() => setInputNum((prev) => prev + 6)}>
          6
        </button>
        <button 
                className='orangeButton'>
          -
        </button>
      </div>
      <div className='blackButton'>
        <button 
          onClick={() => setInputNum((prev) => prev + 1)}
        >
          1
        </button>
        <button 
          onClick={() => setInputNum((prev) => prev + 2)}
        >
          2
        </button>
        <button 
         onClick={() => setInputNum((prev) => prev + 3)}
        >
          3
        </button>
        <button 
          onClick={() => setInputNum((prev) => prev ++)}
          className='orangeButton'
        >
          +
        </button>
      </div>
      <div className='blackButton'>
        <button onClick={() => setInputNum((prev) => prev + '0')}>
          0
        </button>
        <button onClick={() => setInputNum((prev) => prev + '.')}>
          .
        </button>
        <button onClick={equalOperator}>
          =
        </button>
        <button>
          &#x221A;
        </button>
      </div>
    </div>
  );
}

export default App;
