import React from 'react'
import { useSelector } from 'react-redux'

export default function AnotherChildComponent() {

  const counterState = useSelector((state) =>state.counter);
  console.log('counter state',counterState)
  const count = counterState.value;
  return (
    <div>
      Count on notifications : {count}
    </div>
  )
}
