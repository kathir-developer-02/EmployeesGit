import './App.css';
import Employees from './components/Employees';
import EmployeesForm from './components/EmployeesForm';
import AuthProvider from './components/newContext';

function App() {

  return (
    <>
    <div className='d-lg-flex justify-content-around'>
      <AuthProvider>
      <EmployeesForm />
        <Employees />
        
      </AuthProvider>

    </div>
    </>

  );
}

export default App;
