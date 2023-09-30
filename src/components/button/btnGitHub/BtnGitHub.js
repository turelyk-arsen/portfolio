import React from 'react'
import gitHub from "./gitHub-black.svg"
import "./style.css"

export default function BtnGitHub({link}) {
  return (
    <a href={link} target="_blank" rel='noreferrer' className="btn-outline">
    <img src={gitHub} alt="" />
    GitHub repository
  </a>
  )
}
