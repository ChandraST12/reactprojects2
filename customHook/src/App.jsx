import { useState } from "react"
import {InputBox} from "./components/index.js"
import useCurrencyInfo from "./hooks/useCurrencyInfo"

function App() {
  const [amount,setAmount] = useState(0)
  const [from ,setFrom] = useState("usd")
  const [to ,setTo] = useState('inr')
  const [convertedAmount , setConvertedAmount] = useState(0)

  // get currency info using custom hooks
  const currencyInfo = useCurrencyInfo(from);
 const options= Object.keys(currencyInfo)

  const swap = ()=>{
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

//  convert button function
const convert = () => {
  // const converted = amount * currencyInfo[to]; // Calculate the converted amount
  setConvertedAmount(amount * currencyInfo[to]); // Update the state with the converted amount
}

  return (
    <>
      <div className='w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat bg-slate-600'>
      <div className='w-full '>
      <div className='w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30'>
         <form 
         onSubmit={(e)=>{ e.preventDefault();
         convert()}}
         >
         <div className='w-full mb-1 bg-slate-100'>
        <InputBox 
        label="From"
        amount ={amount}
          currencyOptions={options}
          onCurrencyChange={(currency)=>setFrom(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
          selectCurrency ={from}
        />
        </div>
        <div>
        <button
        onClick={swap}
         className='absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5'
        >
          swap
        </button>
      </div>
      <div className='w-full mb-1 bg-slate-100'>
      <InputBox 
      label="To"
      amount ={convertedAmount}
          currencyOptions={options}
         onCurrencyChange={(currency)=>setTo(currency)}
          selectCurrency ={to}
          amountDisable
      />
      </div>

      <button 
      onClick={convert}
      className='w-full bg-blue-600 text-white px-4 py-3 rounded-lg'
      >
        convert {from.toUpperCase()} to {to.toUpperCase()}
      </button>
         </form>
        </div>
        </div>
      </div>
    </>
  )
}

export default App
