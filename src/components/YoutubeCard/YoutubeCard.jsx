import { Typography } from '@mui/material'
import React from 'react'
import "./YoutubeCard.css"
const YoutubeCard = (
    {url = "#",
    title = "Title Here",
    image,}
    ) => {
  return (
    <div className="youtbeCard">
        <a href={url} target="blank">
            <img src={image} alt="Video" />
            <Typography>{title} </Typography>
        </a>
    </div>
  )
}

export default YoutubeCard








// _blank = always opens a link in a new tab 
// blank = open only one tab for any link one tab will be refreshed only 