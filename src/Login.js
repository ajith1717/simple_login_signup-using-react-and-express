import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';
import PasswordField from 'material-ui-password-field';
import axios from "axios";
import swal from 'sweetalert';


const passWord = {
  width : "150px"
}

const padding = {
  top:"50%",
  left: "50%",
  position : 'absolute',
  transform: "translate(-50%, -50%)",
}

const card = {
  padding: "40px 40px 50px 40px",
  borderRadius : "20px",
  backgrourColor: "silver",

}

class  App extends Component {

 
  constructor(props) {
    super(props)
  
    this.state = {
       name : '',
       email : '',
       password:'',
       message:"",
    }
  }

    changehandlername =(event)=>{
      this.setState ({
        name : event.target.value
      })
    }

    changehandleremail = (event)=>{
      this.setState ({
        email : event.target.value
      })
    }

    changehandlerpassword = (event)=>{
      this.setState({
        password : event.target.value

      })    
    }
  

  // onchange = () => {
  //    var x = document.getElementById("1");
  //    x.type=="password" ? x.type ='text':x.type='password'
    
  // }
  changeHandler= (event)=>{
    // alert (` Your name is ${this.state.name} , ur e-mail id is ${this.state.email} and ur password is ${this.state.password}.`)
    event.preventDefault()
    const userData = {
      email : this.state.email,
      password : this.state.password,
      name: this.state.name
    }

    axios.post("http://localhost:3990/",userData)
    
    // swal({
    //   title: " Account already creatred",
    //   text: "name and e mail is alreay exist!, try again ",
    //   icon: "warning",
    //   buttons: true,
      // dangerMode: true,
    // })


    
    .then(event=>{
      console.log(event.data)
      const dictnary = {}
      if (event.data == "logged in successfully"){
        swal("Good job!", "account logged in  successfully!", "success");
        // dictnary['title'] = "Account  creatred succesfully"
        // dictnary['icon'] = "success"
      }else{
        swal("nope..!", "account logged in failed", "warning");
        // dictnary['title'] = " Account already creatred  "
        // dictnary['icon'] = "warning"
      }

      // swal({
      //   title: dictnary.title ,
      //   icon: "success",
      //   buttons: true,
      //   dangerMode: true,
      // })
      //  swal(event.data)
      })
    
  }

  
  render (){
      console.log(123);
    return (
      <div style={padding} >
        {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSE7Xsb7VFU8GS3CxE5XacrXGmqriwdsGnhpg&usqp=CAU" height="70px" width="70px" /> */}
        <form  >
         <div style={card}>
          <h1>LOGIN</h1>
          <label>NAME :</label>
          {/* <input type="text" className='name'placeholder="enter ur name" required /><br></br> */}
          <input type='text' value={this.state.name} onChange={this.changehandlername} placeholder="enter ur name" ></input><br></br>
  
          <label>e-mail :</label>
          <input type='text' value={this.state.email} onChange={this.changehandleremail} placeholder="enter ur email" ></input><br></br>
  
          <label>PASSWORD:</label>
          {/* <input   id ="1" type="password" className="password" placeholder="password"/> */}
          {/* <input type="password" value={this.state.password} id='1' onChange={this.changehandlerpassword} ></input> */}
          <PasswordField style ={passWord}
            value={this.state.password}
            onChange={this.changehandlerpassword}
            hintText="At least 8 characters"
            floatingLabelText="Enter your password"
            errorText="Your password is too short"
          /><br></br>
          {/* <button onClick={onchange}> </button> <br></br> */}
          <button  onClick={ this.changeHandler}>submit</button>
          {this.state.message}
        </div>
      </form>
      </div>
      
       
    );
  }
  
}

export default App;
