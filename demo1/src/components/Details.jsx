
function Details(p){
    
    return(<>
        <td style={{color: p.color}}>{p.details.name} </td>
        <td> {p.details.age} </td>
        {/* <p style={{color : color}}>{details.name}</p>
 */}
    </>)

}

export default Details;