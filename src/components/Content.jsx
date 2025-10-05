import React from 'react'
import image from '../assets/cake3.png'
import image1 from '../assets/cake6.jpeg'
import { Button } from '@mui/material'
import Blog from '../pages/Blog'
const Content = () => {
      
    return (
        <>
        <div>
            <img src={image} alt="cake" style={{ width: "50%", height: "600px " }} />
            <img src={image1} alt="cake" style={{ width: "50%", height: "600px " }} />
            <h1 style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)",
                textAlign: "center", fontFamily: "Helvetica, sans-serif", fontWeight: 1000, color: "#faf9faff"
            }} >
                Your sweetest memories start here.
            </h1>

            <Button id='explore' variant="contained" color="success" sx={{bgcolor:"black", padding:2}}
            style={{position: "absolute", top: "70%", left: "50%", transform: "translate(-50%, -50%)",}} >
                Explore More
            
            </Button>
        </div>
        <Blog/>
        
        </>
    )
}

export default Content