import { useState, useEffect, useRef } from "react";
import { spline } from 'https://cdn.skypack.dev/@georgedoescode/spline@1.0.1';
import SimplexNoise from 'https://cdn.skypack.dev/simplex-noise@2.4.0';

export default function Path(props) {
    const {disabled} = props;
    const simplex = new SimplexNoise();
    const noiseStep = 0.005;
    const points = useRef(createInitialPoints(6));
    const [renderedPoints, setRenderedPoints] = useState(points.current);
    const stopAnimation = useRef(false);
    const [stop, setStop] = useState("");
    let animating = false;
    const [className, setClassName] = useState('service-ball-path');

    function createInitialPoints(numPoints) {
        const pointsArr = [];
        const angleStep = (Math.PI * 2) / numPoints;
        const rad = 75;
        for (let i = 1; i <= numPoints; i++) {
            const theta = i * angleStep;
            const x = 100 + Math.cos(theta) * rad;
            const y = 100 + Math.sin(theta) * rad;
            pointsArr.push({
                x: x,
                y: y,
                originX: x,
                originY: y,
                noiseOffsetX: Math.random() * 1000,
                noiseOffsetY: Math.random() * 1000,
            });
        }
        return pointsArr;
    }

    const circle = createInitialPoints(32);
    
    function map(n, start1, end1, start2, end2) {
        return ((n - start1) / (end1 - start1)) * (end2 - start2) + start2;
    }

    function noise(x, y) {
        return simplex.noise2D(x, y);
    }
    
    function animate() {
        // for every point...
        const newAnimatedPoints = [];
        for (let i = 0; i < renderedPoints.length; i++) {
            const point = renderedPoints[i];
    
            // return a pseudo random value between -1 / 1 based on this point's current x, y positions in "time"
            const nX = noise(point.noiseOffsetX, point.noiseOffsetX);
            const nY = noise(point.noiseOffsetY, point.noiseOffsetY);
            // map this noise value to a new value, somewhere between it's original location -20 and it's original location + 20
            const x = map(nX, -1, 1, point.originX - 10, point.originX + 7);
            const y = map(nY, -1, 1, point.originY - 10, point.originY + 7);
    
            // update the point's current coordinates
            point.x = x;
            point.y = y;
    
            // progress the point's x, y values through "time"
            point.noiseOffsetX += noiseStep;
            point.noiseOffsetY += noiseStep;
            newAnimatedPoints.push(point);
        }
    
        setRenderedPoints(newAnimatedPoints);
        if(stopAnimation.current){
            return;
        }
        requestAnimationFrame(animate);
    };

    
    useEffect(() => {
        if(disabled){
            setClassName('service-ball-path selected')
        }
        setClassName('service-ball-path');
    }, [disabled])

    useEffect(() => {
        if(stopAnimation.current){
            return;
        }
        if (!animating){
            animate();
        }
        animating = true;
    },[]);

    useEffect(() => {
        if(disabled){
            stopAnimation.current = true;
            setStop("stoping");  
        }
    }, [disabled])

    function handleMouseEnter(event) {
        stopAnimation.current = true;
        setStop("stoping");
    }

    function handleMouseLeave() {
        stopAnimation.current = false;
        setStop("rendering");
        animate();
    }
    
    return <path stop={disabled ? 'stoping' : stop} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} d={stopAnimation.current ? spline(circle,1 ,true) : spline(renderedPoints, 1, true)} className={className} />;
}