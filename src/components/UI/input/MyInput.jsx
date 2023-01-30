import React from 'react'
import classes from "./MyInput.module.scss"

export default function MyInput(props) {
  return (
    <input className={classes.myInput} {...props}/>
  )
}
