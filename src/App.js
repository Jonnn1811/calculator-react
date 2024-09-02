import './App.css';
import './calculator.css'
import { useState, useEffect } from 'react'


function App() {
  const [inputNum, setInputNum] = useState('');
  const [total, setTotal] = useState('');
  const operator = /[\.\+\-\%\*\.\/]/
  const regex = new RegExp(operator);
  const lastCharacter = inputNum.slice(-1)


  const handleValue = (value) => {

    setInputNum((prev) => {
      if (regex.test(value) && lastCharacter.length === 0) {
        return prev
      }
      else {
        return prev + value
      }
    })
  }

  const validationDoubleOperator = () => {
    if (regex.test(inputNum) && regex.test(lastCharacter)) {
      setInputNum(inputNum.slice(0, -1))
    }
  }


  const handleTotal = () => {
    try {
      const result = eval(inputNum);
      const format = new Intl.NumberFormat().format(result);
      setTotal(format);
    }
    catch (err) {
      alert('please input the number properly')
    }
  }


  return (
    <div className='calculator'>
      <p style={{ color: 'white', fontFamily: 'arial' }}>{inputNum}</p>
      <p style={{ color: 'white', fontFamily: 'arial' }}>{total}</p>
      <div className='blackButton'>
        <button className='grayButton'
          onClick={() => {
            setInputNum('')
            setTotal('')
          }}
        >
          C
        </button>
        <button className='grayButton'
          onClick={() => setInputNum(inputNum.slice(0, -1))}
        >
          DE
        </button>
        <button className='grayButton'
          onClick={() => {
            validationDoubleOperator()
            handleValue('%')
            handleTotal()
          }}
        >
          %
        </button>
        <button
          onClick={() => {
            validationDoubleOperator()
            handleTotal()
            handleValue('/')
          }
          }
          className='orangeButton'
        >
          /
        </button>
      </div>
      <div className='blackButton'>
        <button onClick={() => handleValue('7')}>
          7
        </button>
        <button onClick={() => handleValue('8')}>
          8
        </button>
        <button onClick={() => handleValue('9')}>
          9
        </button>
        <button
          onClick={() => {
            validationDoubleOperator()
            handleValue('*')
            handleTotal()
          }
          }
          className='orangeButton'>
          *
        </button>
      </div>
      <div className='blackButton'>
        <button onClick={() => handleValue('4')}>
          4
        </button>
        <button onClick={() => handleValue('5')}>
          5
        </button>
        <button onClick={() => handleValue('6')}>
          6
        </button>
        <button
          onClick={() => {
            validationDoubleOperator()
            handleValue('-')
            handleTotal()
          }}
          className='orangeButton'
        >
          -
        </button>
      </div>
      <div className='blackButton'>
        <button
          onClick={() => handleValue('1')}
        >
          1
        </button>
        <button
          onClick={() => handleValue('2')}
        >
          2
        </button>
        <button
          onClick={() => handleValue('3')}
        >
          3
        </button>
        <button className='orangeButton'
          onClick={() => {
            validationDoubleOperator()
            handleValue('+')
            handleTotal()
          }}
        >
          +
        </button>
      </div>
      <div className='blackButton'>
        <button onClick={() => handleValue('0')}>
          0
        </button>
        <button onClick={() => {
          validationDoubleOperator()
          handleValue('.')
        }}>
          .
        </button>
        <button onClick={() => handleTotal()}>
          =
        </button>
      </div>
    </div>

  );
}

export default App;
