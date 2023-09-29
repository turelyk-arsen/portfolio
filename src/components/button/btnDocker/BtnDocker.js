import React from 'react'
import icon from "./docker.png"
import "./style.css"

export default function BtnDocker ({link}) {
  return (
    <a href={link} target="_blank" rel='noreferrer' className="btn-outline btn-margin">
    <img src={icon} alt="" />
    DockerHub image
  </a>
  )
}