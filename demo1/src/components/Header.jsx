function Header(props){
    return (
        <>
        <h1> Welcome to my App </h1>
        <div>{props.children}</div>
        </>
    )
}

export default Header