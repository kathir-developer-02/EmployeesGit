import { createContext, useEffect, useState } from "react";


export const AuthContext=createContext();

const AuthProvider = ({children})=>{

  const[employees,setEmployees] = useState([
    {
      id :1,
      name : 'Kathir', 
      age: 23,
      emailAddress :'kathir@gmail.com',
      phoneNo : 5654356575
    },
    {
      id :2,
      name : 'vel', 
      age: 24,
      emailAddress :'vel@gmail.com',
      phoneNo : 5654877634
    }
  ]);

  const[editData,setEditData]=useState('');

  const handleEdit=(id)=>{
    const emp=employees.find((item)=>{return(item.id === id)});
    setEditData(emp);
    
  }


  const handleUpdate=(updatedData)=>{
    
    setEmployees((employees)=>
       employees.map((y)=>
        y.id===updatedData.id? updatedData: y
    ));
    setEditData('');

  };

  const handleReset=()=>{
    setEditData('');
  }

  const handleDelete=(id)=>{
    const deleteData= employees.filter((x)=> x.id !== id);
    setEmployees(deleteData);
  }
  

return(
  <AuthContext.Provider value={{employees, setEmployees, handleEdit, editData, handleUpdate, handleReset, handleDelete}}>
    {children}
  </AuthContext.Provider>
)
}

export default AuthProvider;