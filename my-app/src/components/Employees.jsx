import { useContext } from "react"
import { AuthContext } from "./newContext"
import './Employees.css';


const Employees = ()=>{

  const{employees, handleEdit, handleDelete}=useContext(AuthContext);

  
if(employees.length==0){
  return(
    <div>
      <h1>Records Not Available</h1>
    </div>
  )
}

return(
  <div className="main-box d-flex flex-column align-items-center">
    <h1 className="text-center p-4"><u>Employees Details</u></h1>
    {
      employees.map((item)=>{
        return(      
            <div key={item.id} className="card details-container ps-5 pe-5 pt-4 pb-4 fs-5 mb-5 bg-secondary text-white">
              <p><span className="fw-bold text-info">Name: </span>{item.name}</p>
              <p><span className="fw-bold text-info">Age: </span>{item.age}</p>
              <p><span className="fw-bold text-info">Email_Id: </span>{item.emailAddress}</p>
              <p><span className="fw-bold text-info">PhoneNo: </span>{item.phoneNo}</p>
              <div className="d-flex">
                <button className="rounded bg-warning me-5 ps-3 pe-3" onClick={()=>{handleEdit(item.id)}}>Edit</button>
                <button className="rounded bg-danger text-white ps-3 pe-3" onClick={()=>{handleDelete(item.id)}}>Delete</button>
              </div>

            </div>
        )
      })
    }
  </div>
)
}

export default Employees;