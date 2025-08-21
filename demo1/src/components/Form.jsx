function Form(){
    const clickbtn = (a) => {
        alert(a);
    }
    
    return (<>
    <button onClick={() => clickbtn("Clicked the button")}> Click me</button>

    </>)
}

export default Form;