// import logo from './logo.svg';
import React ,{Useref} from 'react';
import './App.css';
import Box from './component/Box'
 import Header from './component/header'
import Showgame from './component/Showgame'
import Login from './component/login'
class App extends React.Component{

      constructor(props){
        super(props)
        this.state={
                newgameid:"",
                timegame:"",
                users:"",
                 tempusers:"",
                x:3,
                y:3,
                oncheck:true,
                a:3,
                b:3
                
                }
          this.Check=this.Check.bind(this)
          this.Firstmenu=this.Firstmenu.bind(this)
                this.Validate=this.Validate.bind(this)
                this.clickchangeusers=this.clickchangeusers.bind(this)
          this.Changeuser=this.Changeuser.bind(this)
      }

        Changeuser=(e)=>
        { 
           this.setState({tempusers:e.target.value})
    //  alert(this.state.tempusers)

        }
      clickchangeusers=(e)=>
      {
    
          
          // e.preventdefault()
          // var tempusers =document.getElementById('user').value
        
          this.setState({users:e.target.value})
          //  alert(this.state.users)
          var gameid= Math.floor(Math.random() * 1000000)
          // alert(gameid)
          this.setState({newgameid:gameid})
      }

      Firstmenu=()=>{
        

          return(  
            
          <div className="container">
             
          <div className="col">
          โปรแกรม XO สำหรับทดสอบ
          </div>
         
                                    <div className="row">
                                                      <div className="col">
                                                    <span> ใส่จำนวนแกน X </span>
                                                    </div>
                                                    <div className="col">
                                                    <input className="form-control" value={this.state.a}  inputMode="numeric" onChange={(e)=>this.setState({a:e.target.value})}/>
                                                    </div>
                                    </div>
                                    <div className="row">
                                                      <div className="col">
                                                    <span> ใส่จำนวนแกน Y </span>
                                                    </div>
                                                    <div className="col">
                                                    <input className="form-control" value={this.state.b}  inputMode="numeric" onChange={(e)=>this.setState({b:e.target.value})}/>
                                                    </div>
                                    </div>
                                    <div className="row mt-5">
                                                <button className="btn btn-success" onClick={this.Validate}>ตกลง</button>
                                              </div>
                                              {/* <Box x="3" y="3" />  */}
                                           
                                              </div>
                                              )  
      }   
          Validate=()=>{
            if(this.state.a===this.state.b)   {
              this.setState({x:this.state.a,y:this.state.b,oncheck:false})
              }

          }
      Check=()=> 
      {
      return(
      <Box  x={this.state.x} y={this.state.y} users={this.state.users} newgameid={this.state.newgameid}/>    )}
          render(){
                return (
                  
                      <div>
                  <Header/>   
                  
                  <Login  clickchangeusers={this.clickchangeusers} users={this.state.users} changeusers={this.Changeuser} tempusers={this.state.tempusers}/>
                      <this.Firstmenu/>     
                   <this.Check newxclick={this.state.x} newyclick={this.state.y }/>
                   <Showgame newxclick={this.state.x} newyclick={this.state.y}  users={this.state.users}/>
                      </div>
                )
        }
}
export default App;