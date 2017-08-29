import React from 'react'

export default function ParamsExample (props) {
  const params = props.match.params
  return (
    <div>
      The city is: {params.id}
    </div>
  )
}