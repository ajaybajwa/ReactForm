import './App.css';
import { useState } from 'react';

function App() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    //alert("Submitted Data:");
    document.getElementById("disp").hidden = false;
    document.getElementById("inputform").hidden = true;
    document.getElementById("h1").hidden = false;
    
  }

  return (
    <div className='text-center' id="h1">
      <h1>Please enter the details below</h1><br></br><br></br>
    <form onSubmit={handleSubmit} className="container" id='inputform'>
      <div className="form-outline">
      <label className='form-label'>First Name</label>
      <input 
        className='form-control rounded-1'
        type="text" 
        name="firstname" 
        value={inputs.firstname || ""} 
        onChange={handleChange}
      />
      </div>
      <div className="form-outline">
      <label className='form-label'>Last Name</label>
      <input 
        className='form-control'
        type="text" 
        name="lastname" 
        value={inputs.lastname || ""} 
        onChange={handleChange}
      />
      </div>
      <div className="form-outline">
      <label className='form-label'>Email</label>
      <input 
        className='form-control'
        type="email" 
        name="email" 
        value={inputs.email || ""} 
        onChange={handleChange}
      />
      </div>
      
      <div className="form-outline">
      <label className='form-label'>Date of Birth</label>
      <input 
        className='form-control'
        type="date" 
        name="dob" 
        value={inputs.dob || ""} 
        onChange={handleChange}
      />
      </div>
      <div className="form-outline">
      <label className='form-label'>Gender</label>
      <select className='form-control' name = "gender" value={inputs.gender} onChange={handleChange}>
          <option value="None">Select</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select><br></br>
      
      </div>
        <input type="reset" className='btn btn-danger btn-block' value="Clear"/>
        <input type="submit" className='btn btn-primary btn-block'/>
        
    </form>

<div id="disp" hidden={true}>
<h1>Submitted Data</h1>
<h3> First name is {inputs.firstname}</h3>
<h3> Last name is {inputs.lastname}</h3>
<h3> Email is {inputs.email}</h3>
<h3> Date of birth is {inputs.dob}</h3>
<h3> Gender is {inputs.gender}</h3>
</div>
</div>
  )
}

export default App;
