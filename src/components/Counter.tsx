import React, { useState } from 'react'
import classes from './Counter.module.scss'

export default function Counter() {
  const [count, setCount] = useState(0)
  return (
    <div>
      <h1 className='title'>{count}</h1>
      <button className={classes.btn} onClick={() => setCount(prev =>prev + 1)}>+</button>
    </div>
  )
}
