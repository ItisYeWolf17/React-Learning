import { useEffect, useState } from "react"

const FollowMouse = () => {
    //getEventListeners <- This method works for debugging sessions when you need to know when an event was added and how many times.

    const [enabled, setEnabled] = useState(false);
    const [position, setPosition] = useState({x: 0, y: 0});
  
    useEffect(() => {
      console.log('effect', {enabled});
  
      const handleMove = (event) => {
        const {clientX, clientY} = event;
        console.log('handleMove', {clientX, clientY});
        setPosition({x: clientX, y: clientY});
      };
  
      if(enabled){
        window.addEventListener('pointermove', handleMove);
      }
  
      //Clean up, this only runs when the component is unmounted or when the dependencies change.
      return () => {
        window.removeEventListener('pointermove', handleMove);
      }
  
    }, [enabled])

  return (
    <>
        <div style={{
          position: 'absolute',
          backgroundColor: '#09f',
          borderRadius: '50%',
          opacity: 0.3,
          pointerEvents: 'none',
          left: -40,
          top: -40,
          width: 80,
          height: 80,
          transform: `translate(${position.x}px, ${position.y}px)`
        }}>
        </div>
        <button onClick={() => setEnabled(!enabled)}>
          {enabled ? 'Disable' : 'Enable'} mouse tracking 😎
        </button>
    </>
  )
}

function App() {

  return (
    <>
      <main>
        <FollowMouse></FollowMouse>
      </main>
    </>
  )
}

export default App
