import React,{useRef,useEffect} from 'react'

//destructured our props here to make it cleaner
const ReactRogue = ({width,height,tilesize}) => {
    //created canvas component and passed props from App for width, height and tile size
    //multiplied each side to have that many tiles be the width and height of the canvas

    //using a hook
    const canvasRef = useRef();
    //can update canvas as state changes
    useEffect(() => {
        console.log('Draw to canvas');
        const ctx = canvasRef.current.getContext('2d');
        //clears canvas
        ctx.clearRect(0,0, width * tilesize, height * tilesize);
        ctx.fillStyle='#000';
        ctx.fillRect(12, 22, 16, 16)
    });
    return (
        <canvas 
            ref={canvasRef}
            width={width * tilesize}
            height={height * tilesize}
            style={{border: "1px solid black"}}
        ></canvas>
    )
};

export default ReactRogue