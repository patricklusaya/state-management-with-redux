import React from 'react'
import AnotherChildComponent from './notifications/AnotherChildComponent'

export default function ChildComponent({count}) {
  return (
    <div>
     {/* Count : {count} */}
     <AnotherChildComponent />
    </div>
  )
}
