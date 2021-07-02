import React, { useEffect, useState } from 'react' 


export default function Count () {
  const [count, setCount] = useState(10)
  const [secCount, setSecCount] = useState(500)
  const [countAgain, setCountAgain] = useState(100)

  useEffect(() => {
    setSecCount(secCount + 1)
  }, [countAgain])

  const clickAdd = () => {
    setCount(count + 5)
  }

  const clickSub = () => {
    setCount(count - 1)
  }

  return (
    <div className='home'>
      <p>Learn to count using buttons and useEffect without API</p>
      {count}
      <button onClick={clickAdd}>Click to Add</button>
      <button onClick={clickSub}>Click to Subtract</button>
      {/* <button onClick={() => setCount(count + 5)}>add</button>
      <button onClick={() => setCount(count - 1)}>sub</button> */}
      <br/>
      {countAgain}-
      {secCount}
      <button onClick={() =>setCountAgain(countAgain + 1000)}>add</button>
      <button onClick={() =>setCountAgain(countAgain - 1000)}>sub</button>
      
    </div>
  )
}