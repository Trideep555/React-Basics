import { useState } from "react";

function Form(){
    /* const [value , setValue] = useState(0);
    const IncreaseValue = () => {
        setValue(value + 1);
    } */

    /* const [username , setUsername] = useState("");
    const [password , setPassword] = useState("");
    const [msg, setMsg] = useState("");
    const HandleUsername = (event) => {
        setUsername(event.target.value);
    }
    const HandlePassword = (event) => {
        setPassword(event.target.value);
    }
    const HandleSubmit = () => {
        if(username == ""){
            setMsg("Username is required");
            return;
        }
        if(password == ""){
            setMsg("Password is required");
            return;
        }
        setMsg("Form Submitted Successfully");
    } */

        const [formData , setFormData ] = useState({username: "", password: "" , image : ""});
        const [msg, setMsg] = useState("");
        const HandleSubmit = () => {
        if(formData.username == ""){
            setMsg("Username is required");
            return;
        }
        if(formData.password == ""){
            setMsg("Password is required");
            return;
        }
        setMsg("Form Submitted Successfully");
    }
    const HandleChange = (event) => {
        setFormData({...formData , [event.target.id] : event.target.value});
    }
    const HandleFile = (event) => {
        setFormData({...formData , image : URL.createObjectURL(event.target.files[0])});
    }
    return (<>
    {/* <p>Value is  : {value} </p>
    <button onClick = {IncreaseValue}>Increase by 1</button>
     */}
    {/*  <input type="text" placeholder="Username" value={username} onChange={HandleUsername}  /> <br/><br />
     <input type="password" placeholder="Password" value={password} onChange={HandlePassword}  /> <br /><br />
     <button onClick={HandleSubmit}>Submit</button>
     <p>{msg}</p>  */} 
    <input type="text" placeholder="Username" id="username" value={formData.username} onChange={HandleChange}  /> <br/><br />
    <input type="password" placeholder="Password" id="password" value={formData.password} onChange={HandleChange}  /> <br /><br />

    <input type="file" onChange={HandleFile} />
    {formData.image != "" && 
    <img src={formData.image} height="100" width="100" /> }
     <button onClick={HandleSubmit}>Submit</button>
     <p>{msg}</p> 
     
     </>)
}

export default Form;