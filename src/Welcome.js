import './App.css';
import React, { useState } from "react";
import { extend, Canvas } from "react-three-fiber";
import { Text } from "troika-three-text";
// import fonts from "./fonts";

extend({ Text });

const text =
    "Shit and also piss :)";


function Welcome() {

    const [rotation, setRotation] = useState([0, 0, 0, 0]);
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

                <text
                    position-z={4}
                    rotation={rotation}
                    text={text}
                    // font={'Arial'}
                    anchorX="center"
                    anchorY="middle"
                //     color="0xff0000"
                //    opacity="0xff0000"
                />


                <text
                    position-z={-180}
                    rotation={rotation}
                    {...opts}
                    text={text}
                    // font={'Arial'}
                    anchorX="center"
                    anchorY="middle"
                   
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
