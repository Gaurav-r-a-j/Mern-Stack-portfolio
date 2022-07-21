import React, { useEffect } from 'react'
import "./Home.css";
import * as THREE from 'three';
// import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import { Typography } from "@mui/material"
import TimeLine from '../TimeLine/TimeLine';

import moonImage from "../../images/moon.jpeg"
import venusImage from "../../images/venus.jpeg"
import spaceImage from "../../images/space.jpg"


const Home = () => {
    useEffect(() => {

        const textureLoader = new THREE.TextureLoader();

        //creating textures
        const moonTexture = textureLoader.load(moonImage);
        const venusTexture = textureLoader.load(venusImage);
        const spaceTexture = textureLoader.load(spaceImage);



        const scence = new THREE.Scene();
        //setting camera
        const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        const canvas = document.querySelector('.homeCanvas')
        const renderer = new THREE.WebGLRenderer({ canvas });
        camera.position.set(4, 4, 8);

        //moon geometry
        const moongeometry = new THREE.SphereGeometry(2, 64, 64);
        const moonmaterial = new THREE.MeshStandardMaterial({ map: moonTexture });
        const moon = new THREE.Mesh(moongeometry, moonmaterial);


        //venus geometry
        const venusgeometry = new THREE.SphereGeometry(3, 64, 64);
        const venusmaterial = new THREE.MeshBasicMaterial({ map: venusTexture });
        const venus = new THREE.Mesh(venusgeometry, venusmaterial);
        venus.position.set(8, 5, 5)



        //setting light
        // const lightHelper = new THREE.PointLightHelper(pointLight);
        const pointLight = new THREE.PointLight(0xffffff, 1);
        pointLight.position.set(8, 5, 5);
        //another dim point light
        const pointLight2 = new THREE.PointLight(0xffffff, 0.1);
        pointLight2.position.set(-8, -5, -5);



        // const controls = new OrbitControls(camera, renderer.domElement);//no need of control in main app

        //adding scenes
        scence.add(moon);
        // scence.add(lightHelper);
        scence.add(venus);
        scence.add(pointLight);
        scence.add(pointLight2);
        scence.background = spaceTexture;

        //
        const constSpeed = 0.01;
        window.addEventListener('mousemove', (e) => {
            //left side screen
            if (e.clientX <= window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;

            }
            //right side screen
            if (e.clientX > window.innerWidth / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }


            //up side screen
            if (e.clientY > window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y += constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y += constSpeed;
            }

            //down side screen
            if (e.clientX <= window.innerHeight / 2) {
                moon.rotation.x -= constSpeed;
                moon.rotation.y -= constSpeed;
                venus.rotation.x -= constSpeed;
                venus.rotation.y -= constSpeed;
            }
        })

        //recursive function for rotating moon
        const animate = () => {
            requestAnimationFrame(animate);
            moon.rotation.y += 0.001;
            venus.rotation.y += 0.001;
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.render(scence, camera);
        }

        animate();

    }, [])

    return (
        <div className='home'>
            <canvas className='homeCanvas'></canvas>

            <div className="homeContainer">
                <Typography variant='h3'> TIME LINE</Typography>
                <TimeLine timelines={[1, 2, 3, 4, 5]} />
            </div>

            <div className="homeSkill">
                <Typography variant='h3'>SKILLS</Typography>
                <div className="homeCubeSkills">
                    <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
                        <img src="https://images.unsplash.com/photo-1657925426569-ad97ff77fe4b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
                        <img src="https://images.unsplash.com/photo-1656464868371-602be27fd4c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1528&q=80" alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
                        <img src="https://images.unsplash.com/photo-1652017659242-2714397b42f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1160&q=80" alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
                        <img src="https://images.unsplash.com/photo-1656686628168-e534ae2c51d5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1830&q=80" alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
                        <img src="https://images.unsplash.com/photo-1656460990797-d8602507b5e1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80" alt="" />
                    </div>

                    <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
                        <img src="https://images.unsplash.com/photo-1614313913007-2b4ae8ce32d6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80" alt="" />
                    </div>

                </div>

                <div className="cubeShadow"></div>
            </div>
        </div>
    )
}

export default Home
