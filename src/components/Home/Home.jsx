import React, { useEffect } from 'react'
import "./Home.css";
import * as THREE from 'three';

const Home = () => {
    useEffect ( () =>{
        const scence = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector('.homeCanvas')
        const renderer = new THREE.WebGLRenderer({ canvas });
        
        renderer.setSize(window.innerWidth,window.innerHeight);
        renderer.render(scence,camera)
    },[])

  return (
    <div className='home'>
      <canvas className='homeCanvas'></canvas>
    </div>
  )
}

export default Home
