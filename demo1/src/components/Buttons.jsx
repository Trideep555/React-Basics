import { useRef } from 'react'
import './Buttons.css'
function Buttons() {
    const fileRef = useRef();
   const HandleClick= () => {
    fileRef.current.click();
   }
  return (
    <>
    <input type="file" className="file" ref={fileRef} accept='image/*' />
    <button className="my-btn" onClick={HandleClick} >Upload File</button>
    </>
  )
}

export default Buttons