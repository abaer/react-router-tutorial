import React, { PropTypes } from 'react'

/* http://localhost:3000/query?test=hehehe */
export default function QueryExample (props) {
  //const location = props.location
  const params = new URLSearchParams(props.location.search);

  return (
    <div>
      The query param test = {params.get("test")}
    </div>
  )
}