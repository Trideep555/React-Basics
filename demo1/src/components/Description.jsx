import { useState } from 'react';
import './Descriptions.css';
import { useNavigate } from 'react-router-dom';



     
function Description(){
    const [ search ,setSearch ] = useState();
    const navigate = useNavigate();

    const Search = () => {
        navigate(`/search/${search}`);
    }


    const details = [{
        name : "Raju",
        age : 19
    } ,
    {
        name : "Karthik" ,
        age : 25
    } ,
    {
        name : "Rohit",
        age : 22
    }];
    const loading = false;
    return (<>
    {/* {myvar.age > 18 ? <>Welcome {myvar.name} </> : <> You are not eligible to view this website </>}
    {loading && <p>Loading...</p>} */}
    {details.map((data,index) => {
        return(<>
        <p key={index}>{data.name} is {data.age} years old.</p>
        </>)
    })}
    <input type="text" value={search} onChange = {(e) => setSearch(e.target.value)} />
    <button onClick={Search}>Search</button>
    </>)
}

export default Description