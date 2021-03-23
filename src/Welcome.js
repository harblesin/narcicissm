import './App.css';
import React, { useState } from "react";
import { extend, Canvas } from "react-three-fiber";
import { Text } from "troika-three-text";
// import fonts from "./fonts";

extend({ Text });

const text =
    "Shit and also piss :)";


function Welcome(props) {

    const [rotation, setRotation] = useState([0, 0, 0, 0]);
    const [coolRotation, setCoolRotation] = useState([0, 0, 0, 0]);
    const [opts, setOpts] = useState({
        font: "Philosopher",
        fontSize: 12,
        color: "white",
        maxWidth: 300,
        lineHeight: 1,
        letterSpacing: 0,
        textAlign: "justify",
        materialType: "MeshPhongMaterial"
    });

    // Handlers:
    const onMouseMove = e => {
        setRotation([
            ((e.clientY / e.target.offsetHeight - 1) * -Math.PI) / 8,
            ((e.clientX / e.target.offsetWidth - 1) * -Math.PI) / 8,
            0
        ]);

        setCoolRotation([
            ((e.clientY / e.target.offsetHeight - 1) * -Math.PI) * 8,
            ((e.clientX / e.target.offsetWidth - 1) * -Math.PI) * 8,
            0
        ]);

    };


    return (
        <div>
            <Canvas
                style={{
                    position: "fixed",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundColor: "blue"
                }}
                pixelRatio={window.devicePixelRatio}
                onMouseMove={onMouseMove}
            >

                <ambientLight
                    intensity={.3}

                />

                <text
                    position-z={2}
                    rotation={rotation}
                    text={text}
                    // font={'Arial'}
                    anchorX="center"
                    anchorY="middle"
                    color="red"
                //    fillOpacity={0}
                />

                <mesh
                {...props}
                        // ref={mesh}
                        scale={true ? [1.5, 1.5, 1.5] : [1, 1, 1]}
                        // onClick={(e) => setActive(!active)}
                        // onPointerOver={(e) => setHover(true)}
                        // onPointerOut={(e) => setHover(false)}
                        rotation={coolRotation}
                        >
                        <boxBufferGeometry args={[1, .7, 1]} />
                        
                        <meshStandardMaterial
                        color={"purple"}></meshStandardMaterial>
                    </mesh>


                <text
                    position-z={-180}
                    rotation={rotation}
                    {...opts}
                    text={text}
                    // font={'Arial'}
                    anchorX="center"
                    anchorY="middle"
                    fillOpacity={1}
                    strokeOpacity={1}
                    // backgroundColor="white"
                   
                >
                    {opts.materialType === "MeshPhongMaterial" ? (
                        <meshPhongMaterial attach="material" />
                    ) : null}
                </text>

                    <pointLight position={[-100, 0, -160]} />
                    <pointLight position={[0, 0, -170]} />
                    <pointLight position={[100, 0, -160]} />
            </Canvas>

    </div>
  );
}

export default Welcome;
