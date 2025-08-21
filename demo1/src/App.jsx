import './App.css'
import Header from './components/Header'
import Description from './components/Description'
import Details from './components/Details'
import Form from './components/Form'


function App() {
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
  return (
    <>
     <Header> 
      <h3>
      This is a header . Lets show it in a child
</h3>
     </Header>
     <table border="1">
      <tr>
        <td>Name</td>
        <td>Age</td>
        
      </tr>
      {details.map((data, index) => {
        return (
          <tr key={index}>
          <Details details={data}  />
          </tr>
        )
      })}

     </table>
     {/* <Details details={details}  />
      */}{/* <Description />
      */}<Form />
    </>
  )
}



export default App
