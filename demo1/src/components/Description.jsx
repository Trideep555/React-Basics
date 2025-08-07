import './Descriptions.css';

function Description(){
    return (
        <>
        <p className={ 5 > 4 ? 'light':'dark' }> This is to learn { "React".substring(0,2) } React </p>
        </>
    )
}

export default Description