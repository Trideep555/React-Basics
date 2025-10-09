import React, { useRef, useState } from 'react'
import './Gallery.css';

function Gallery() {
    // DOM 
    const reference = useRef(null);
    const [gallerydata,setGalleryData] = useState([]);
    const [currentdata , setCurrentData] = useState({ image: "" , subtitle:""});
    const HandleClick = () => {
        reference.current.click();
    }
    const HandleChange = (event) => {
        let value = "";
        if(event.target.id == "image"){
            value = URL.createObjectURL(event.target.files[0]);
        }
        else{
            value = event.target.value;
        }
        setCurrentData({...currentdata,[event.target.id]:value});
    }

    const HandleSubmit = () => {
        setGalleryData([...gallerydata , currentdata])
        setCurrentData({ image : "" , subtitle: ""});
    }

  return (
  <>
  <input type='file' style={{display:"none"}} ref={reference}
  id='image'
  onChange={HandleChange}  />
  <div className='form'>
  <button onClick={HandleClick}>
  <svg
    aria-hidden="true"
    stroke="currentColor"
    stroke-width="2"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      stroke-width="2"
      stroke="#fffffff"
      d="M13.5 3H12H8C6.34315 3 5 4.34315 5 6V18C5 19.6569 6.34315 21 8 21H11M13.5 3L19 8.625M13.5 3V7.625C13.5 8.17728 13.9477 8.625 14.5 8.625H19M19 8.625V11.8125"
      stroke-linejoin="round"
      stroke-linecap="round"
    ></path>
    <path
      stroke-linejoin="round"
      stroke-linecap="round"
      stroke-width="2"
      stroke="#fffffff"
      d="M17 15V18M17 21V18M17 18H14M17 18H20"
    ></path>
    </svg>
    ADD FILE
    </button>
    <div class="coolinput">
    <label for="input" class="text">Subtitle:</label>
    <input type="text" placeholder="Enter Subtitle..." id="subtitle" value={currentdata.subtitle} name="input" class="input" onChange={HandleChange} />
    </div>
    <button onClick={HandleSubmit}>
    Submit
    </button>
   
    </div>
    {currentdata.image != "" && 
     <img src={currentdata.image} height="200" width="200" className='image-preview' />}
    <div>
    <h1>Gallery</h1>
    <div className='images'>
    {gallerydata.length > 0 && gallerydata.map((value,index) => {
    return <div className='image' key={index}>
        <img src={value.image} height="200" width="200" />
        <p>{value.subtitle}</p>
    </div>
    })}
    
   
    </div>
    </div>
    </>
  )
}

export default Gallery