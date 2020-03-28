import React from 'react'

const BandPage = (props) => {
  return (
    <div>
      <h1>{props.name}</h1>
      <img src={props.imgSrc} />
      <h2>Album Name: {props.albumName}</h2>
      <h3> Year Released: {props.albumYear}</h3>
    </div>
  )
}

export default BandPage
