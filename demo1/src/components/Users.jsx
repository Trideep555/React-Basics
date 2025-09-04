function Users(props){
    const HandleClick = (index) => {
        alert(`Username :- ${props.details[index].name} Age:- ${props.details[index].age} Gender:- ${props.details[index].gender}`);

    }
    return(<>
        <table border={1} style={{margin:"auto", marginTop:"50px"}}>
            <tr>
            <th>Name</th>
            <th>Actions</th>    
            </tr>    
            {props.details.map((user, index) => (
                <tr key={index}>
                    <td>{user.name}</td>
                    <td>
                        <button onClick={() => HandleClick(index)}>Show</button>
                        
                    </td>
                </tr>
            ))}
        </table>
        </>)
}

export default Users;