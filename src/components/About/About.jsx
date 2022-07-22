import { Typography } from '@mui/material'
import React from 'react'
import "./About.css"
const About = () => {
    return (
        <div className="about">
            <div className="aboutContainer">
                <Typography>This is a sample quote</Typography>
            </div>
            <div className="aboutContainer2">
                <div>
                    <img src="http://sstarx.in/gauravpic1.jpeg" alt="Gaurav" className='aboutAvatar' />
                    <Typography variant='h4' style={{margin:"1vmax 0", color:"black"}}>Gaurav</Typography>
                    <Typography >Full Stack Developer</Typography>
                    <Typography style={{margin:"1vmax 0", color:"black"}}> I am a Student  </Typography>
                </div>


                <div className='aboutDesc'>
                    <Typography >This is description Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero unde ex quod omnis nisi? Nostrum delectus sunt enim aliquid doloremque et!</Typography>
                </div>
            </div>
        </div>
    )
}

export default About
