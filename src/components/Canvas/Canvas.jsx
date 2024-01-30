'use client'

import React from 'react'
import dynamic from 'next/dynamic'

import { useRouter } from 'next/navigation'

// Will only import `react-p5` on client-side
const Sketch = dynamic(() => import('react-p5').then((mod) => mod.default), {
  ssr: false,
})

// let x = 50;
// let y = 50;
let img;
let pixelate = false;
let a = 4;
let canvasWidth = 1000;
let canvasHeight = 1000;
let scale = 1;
let counter = 0;
let shakeIntensity = 1;

const Canvas = () => {
    counter++
    const router = useRouter();

    const preload = (p5) => {
        img = p5.loadImage('https://res.cloudinary.com/dxvof8226/image/upload/v1705831305/Trans_RIB_LOGO_vmvnqi.png');
    }

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(p5.windowWidth, p5.windowHeight).parent(canvasParentRef);
        p5.pixelDensity(a)

    };
    
    const draw = (p5) => {
        // p5.background(0);
        p5.pixelDensity(a);

        if (pixelate) {
            a = a - 0.02
        }
        else {
            a = a;
        }
        if (a < 0.001) {
            router.push('/home')
        }

        

        if (pixelate && counter % 10 === 1) {
            let randX = (Math.floor(Math.random()*shakeIntensity)-(shakeIntensity/2))
            let randY = (Math.floor(Math.random()*shakeIntensity)-(shakeIntensity/2))
            shakeIntensity = shakeIntensity + 3
            p5.translate(randX,randY)
        }

        p5.image(img, (p5.windowWidth-500)/2, (p5.windowHeight-500)/2, 500, 500);
       
        
        // p5.fill(255);
        // p5.ellipse(56, 46, 55, 55)
    };
    
    const mouseClicked = () => {
        pixelate = true
    }

      return <Sketch className={"canvas-container"} setup={setup} draw={draw} preload={preload} mouseClicked={mouseClicked} />;
}

export default Canvas