import React,{useState} from "react";
import "./App.css";

const App = ()=>{
  const [enterInput, setEnterInput]= useState({
    firstName : "",
    lastName : "",
    email:"",
    password:"",
    phonenumber:""
  });

  const [err,setErr]=useState({});
 let [isSubmited, setIsSubmited]=useState(false);
  const formHandler = (event) =>{
    event.preventDefault();
    setIsSubmited(true)
   const validate=validation(true);
if (validate.isValid===true){
    setEnterInput({  firstName : "",
    lastName : "",
    email:"",
    password:"",
    phonenumber:""
  })
    setIsSubmited(false)
}
     }
  const handleInputChange=(event)=>{
       setErr("");
        setEnterInput({
         ...enterInput,
         [event.target.name]: event.target.value,
       });
       
  }

 const validation = (isSubmit)=>{
let isValid=true;
const validObj = {
  isValid: true,
  message: "",
};
let retData={
  firstName:validObj,
  lastName:validObj,
  email:validObj,
  password:validObj,
  phonenumber:validObj
}
if (isSubmit=== true){
if(!enterInput.firstName){
  retData.firstName={message:"First Name is required.",
  isValid:false}
  isValid=false
}else if(!/^[A-Za-z][A-Za-z0-9_]{3,}$/.test(enterInput.firstName)){
  retData.firstName={message:"Invalid Input field",
  isValid:false}
  isValid=false
  
}
if(!enterInput.lastName){
  retData.lastName={message:"Last Name is required.",
  isValid:false}
  isValid=false
}else if(!/^[A-Za-z][A-Za-z0-9_]{3,}$/.test(enterInput.lastName)){
  retData.lastName={message:"Invalid Input Field",
  isValid:false}
  isValid=false
}
if(!enterInput.email){
  retData.email={message:"Email is required",
  isValid:false}
  isValid=false
}else if(!/\S+@\S+\.\S+/.test(enterInput.email)){
  retData.email={message:"Email is invalid",
  isValid:false}
  isValid=false
}
if(!enterInput.password){
  retData.password={message:"Password is required.",
  isValid:false}
  isValid=false
  
}else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/.test(enterInput.password)){

  retData.password={message:"Please enter atleast 8 charecters, atlease 1 spacial Charecter, 1 uppercase, 1 number",
  isValid:false}
  isValid=false
}
if(!enterInput.phonenumber){
  retData.phonenumber={message:"Phone number is required",
  isValid:false}
  isValid=false

}else if(!/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(enterInput.phonenumber)){
 
  retData.phonenumber={message:"Please enter valid mobile number",
  isValid:false}
  isValid=false
}
}
retData.isValid=isValid
return retData;
 }
 let errorNote=validation(isSubmited)
  return(
    <form onSubmit={formHandler}>
      <div>
      <label>First Name*</label>
      <input type="text" 
      name="firstName"
      value={enterInput.firstName}
      onChange={handleInputChange}
      />
       <p>{errorNote.firstName.message}</p>
      

      <label>Last Name*</label>
      <input type="text"
       name="lastName"
       value={enterInput.lastName}
       onChange={handleInputChange}
       />
      <p>{errorNote.lastName.message}</p>

      <label>Email Id*</label>
      <input type="email"
       name="email"
       value={enterInput.email}
       onChange={handleInputChange}
       />
       <p>{errorNote.email.message}</p>

      <label>Password*</label>
      <input type="password"
       name="password" 
       value={enterInput.password} 
       onChange={handleInputChange}
    />
    <p>{errorNote.password.message}</p>

      <label>Phone Number</label>
      <input type="text"
      name="phonenumber" 
      value={enterInput.phonenumber}
      onChange={handleInputChange}
      />
       <p>{errorNote.phonenumber.message}</p>


      <button type="submit">Submit</button>
      </div>
    </form>
  )

};

export default App;
