import React from 'react'

export default function Alert(props) {
  const capitalize = (msg)=>{
    const low = msg.toLowerCase();
    return low.charAt(0).toUpperCase() + low.slice(1);
  }
  return (
  props.alert && <div className = {`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
 <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
</div>
  )
}
