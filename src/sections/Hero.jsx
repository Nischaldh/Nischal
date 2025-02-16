import React, {Suspense} from 'react'
import {Canvas} from "@react-three/fiber";
import {PerspectiveCamera} from "@react-three/drei";
import CanvasLoader from "../component/CanvasLoader.jsx";
///import {Leva, useControls} from "leva";
import {useMediaQuery} from "react-responsive";
import {calculateSizes} from "../constants/index.js";

import HeroCamera from "../component/HeroCamera.jsx";
import Button from "../component/Button.jsx";
import MyModel from "../component/MyModel.jsx";


const Hero = () => {
    // const x = useControls('MyModel',{
    //     positionX:{
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //
    //     positionY:{
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //
    //     positionZ:{
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationX:{
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationY:{
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     rotationZ:{
    //         value:2.5,
    //         min:-10,
    //         max:10
    //     },
    //     scale:{
    //         value:0.5,
    //         min:0.01,
    //         max:1
    //     }
    //
    // })
    const isSmall = useMediaQuery({ maxWidth: 440 });
    const isMobile = useMediaQuery({ maxWidth: 768 });
    const isTablet = useMediaQuery({ minWidth: 768, maxWidth: 1024 });

    const sizes = calculateSizes(isSmall,isMobile,isTablet)

    return (
        <section className='min-h-screen w-full flex flex-col relative' id='home'>
        <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
            <p className='sm:text-3xl text-xl font-medium text-white text-center font-generalsans'>Hi, I am Bipul Dhungana <span className='waving-hand'>👋</span></p>
            <p className='hero_tag text-gray_gradient'>Learning, Building, Growing</p>
        </div>
            <div className='w-full h-full absolute inset-0'>
                {/*<Leva />*/}
                <Canvas className='w-full h-full'>
                    <Suspense fallback={<CanvasLoader />}>
                    <PerspectiveCamera makeDefault position={[0,0,30]}/>
                    <HeroCamera isMboile={isMobile}>
                        <MyModel scale={5.5}
                                 position={sizes.deskPosition}


                        />
                    </HeroCamera>
                    
                        <ambientLight intensity={1}/>
                        <directionalLight position={[10,10,10]} intensity={0.5}/>


                    </Suspense>
                </Canvas>

            </div>
            <div className='absolute bottom-7 left-0 right-0 w-full z-10 c-space'>
                <a href='#about' className='w-fit'>
                    <Button name='About me' isBeam containerClass="sm:w-fit w-full sm:min-w-96"/>
                </a>
            </div>
        </section>
    )
}
export default Hero
