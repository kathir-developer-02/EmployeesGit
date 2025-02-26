import { useContext, useEffect, useState } from "react";
import { AuthContext } from "./newContext";
import './EmployeeForm.css';


const EmployeesForm = ()=>{

  const{employees,setEmployees, editData, handleUpdate, handleReset}=useContext(AuthContext)

  

  const[nameInp,setNameInp]=useState('');
  const[ageInp,setAgeInp]=useState('');
  const[emailInp,setEmailInp]=useState('');
  const[phoneNoInp,setPhoneNoInp]=useState('');

  useEffect(()=>{
    if(editData){
      setNameInp(editData.name);
      setAgeInp(editData.age);
      setEmailInp(editData.emailAddress);
      setPhoneNoInp(editData.phoneNo);
    }
    else{
      setNameInp('');
      setAgeInp('');
      setEmailInp('');
      setPhoneNoInp(''); 
    }
  },[editData]);

  const[count,setCount]=useState(3);
  
  const handleSubmit=(e)=>{
      e.preventDefault();

      if(editData){
        const updateData={
          id: editData.id,
          name: nameInp,
          age: ageInp,
          emailAddress: emailInp,
          phoneNo: phoneNoInp
        }
        
        handleUpdate(updateData);

      } else{
        setCount(count+1);
        const newList={
          id: count,
          name: nameInp,
          age: ageInp,
          emailAddress: emailInp,
          phoneNo: phoneNoInp
        }
        setEmployees([...employees, newList]);
      }
      setNameInp('');
      setAgeInp('');
      setEmailInp('');
      setPhoneNoInp('');  
      
  };


  return(
      <div className="d-flex flex-column align-items-center h-75 mb-4 m-lg-0" >
        <h1 className="p-4"><u>{editData ? 'Update Employee':'Add Employee'}</u></h1>
        <div className="card form-container p-4 p-lg-5  border-danger">
          <form action="" className="d-flex flex-column">
            <label htmlFor="name" className="fs-5 fw-bold">Name</label>
            <input type="text" name="name" className="p-2 rounded" value={nameInp} onChange={(e)=>{setNameInp(e.target.value)}} placeholder="Enter your name" />
            
            <label htmlFor="age" className="fs-5 fw-bold">Age</label>
            <input type="age" name="age" className="p-2 rounded" value={ageInp} onChange={(e)=>{setAgeInp(e.target.value)}} placeholder="Enter your age" />
            
            <label htmlFor="email" className="fs-5 fw-bold">Email_Id</label>
            <input type="email" name="email" className="p-2 rounded" value={emailInp} onChange={(e)=>{setEmailInp(e.target.value)}} placeholder="Enter your email_id" />
            
            <label htmlFor="phoneno" className="fs-5 fw-bold">PhoneNo</label>
            <input type="number" name="phoneno" className="p-2 rounded" value={phoneNoInp} onChange={(e)=>{setPhoneNoInp(e.target.value)}} placeholder="Enter your phoneNo" />
            
           <div className="d-flex justify-content-around align-items-center mt-4">
            <button type="submit" onClick={(e)=>{handleSubmit(e)}} className=" add-btn rounded-pill fs-5 fw-medium">{editData ? 'Update':'Add'}</button>
            <button type="reset" className="reset-btn rounded-pill fs-5 fw-medium" onClick={handleReset}>Reset</button>
           </div>
          </form>
        </div>
        
      </div>
  )
}

export default EmployeesForm;