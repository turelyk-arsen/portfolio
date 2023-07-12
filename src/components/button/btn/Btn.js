import React from 'react'
import icon from "./icons8-internet-30.png"
import "./style.css"

export default function Btn ({link}) {
  return (
    <a href={link} target="_blank" rel='noreferrer' className="btn-outline btn-margin">
    <img src={icon} alt="" />
    Go to website
  </a>
  )
}