// render the component on the client
"use client";

import { useEffect, useRef } from "react";

export default function Canvas() {
    // reference to canvas element in pages.js
    const canvasRef = useRef(null);
    // reference to the 2D context to use in drawing functions
    const ctxRef = useRef(null);

    // initialize canvas api when the component is mounted
    useEffect(() => {
        const canvas = canvasRef.current;

        if (!canvas) return;

        // context to draw on the canvas
        const ctx = canvas.getContext("2d");
        ctxRef.current = ctx;
    }, []);

    return (
        <canvas
        
        ref={canvasRef}
        // create functions for onMouseUp, onMouseDown, onMouseMove
        width={800}
        height={600}
        className="border border-black rounded-md"
        />
    )
}