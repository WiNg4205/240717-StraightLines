import { useEffect, useRef, useState } from 'react'
import './App.css'

const App = () => {
  const canvasRef = useRef()
  const [context, setContext] = useState()
  const [isDrawing, setIsDrawing] = useState(false)
  const [startingPixel, setStartingPixel] = useState()
  const [score, setScore] = useState(0)

  useEffect(() => {
    const canvas = canvasRef.current
    canvas.height = window.innerHeight
    canvas.width = window.innerWidth
    setContext(canvasRef.current.getContext('2d'))
  }, [])

  const startStroke = (e) => {
    setStartingPixel([e.clientX, e.clientY])
    const canvas = canvasRef.current
    context.clearRect(0, 0, canvas.width, canvas.height)
    setIsDrawing(true);
    context.beginPath();
    context.moveTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
  };

  const draw = (e) => {
    if (!isDrawing) return;

    context.lineTo(e.nativeEvent.offsetX, e.nativeEvent.offsetY);
    context.stroke();
  };

  const finishStroke = (e) => {
    setIsDrawing(false);
    context.closePath();
    const [startX, startY] = startingPixel
    const [endX, endY] = [e.clientX, e.clientY]
    const lineWidth = Math.abs(endX - startX)
    const lineHeight = Math.abs(endY - startY)

    const canvas = canvasRef.current
    const imageData = context.getImageData(0, 0, canvas.width, canvas.height)
    const data = imageData.data;
    let strokeLength = 0;
    for (let i = 0; i < data.length; i += 4) {
      const alpha = data[i + 3]
      if (alpha > 0) {
        strokeLength++;
      }
    }

    // Not a true formula but close enough for most strokes
    const shortestLength = Math.abs(lineHeight - lineWidth) + Math.min(lineWidth, lineHeight)
    setScore(Math.max((strokeLength / shortestLength) / 2, 1))
  };

  return (
    <>
      <h1>Score: {score}</h1>
      <canvas ref={canvasRef}
              width={window.innerWidth}
              height={window.innerHeight}
              onMouseDown={startStroke}
              onMouseMove={draw}
              onMouseUp={finishStroke}
              >
      </canvas>
      
    </>
  )
}

export default App
