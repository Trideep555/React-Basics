import './Descriptions.css';

function add(a,b){
    return a+b;
}


     
function Description(){
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
    </>)
}

export default Description