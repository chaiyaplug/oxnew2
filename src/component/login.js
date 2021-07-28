import React from 'react'
import firestore, { auth, googleprovider,facebookprovider } from '../database/firebase'
 import firebase from 'firebase/app'
import Showgame from './Showgame'
import { Redirect } from 'react-router-dom'

 class login extends React.Component
 {
                    constructor(props)
                    {
                        super(props)
                                                this.state={
                                                                    user:null
                                                                        }
                                                                this.googleloginhander=this.googleloginhander.bind(this)
                                                                this.googlelogouthander=this.googlelogouthander.bind(this)
                                                                this.facebookloginhander=this.facebookloginhander.bind(this)
                   }
  
                
    componentWillUnmount()
    {
        const unsubscribe = auth.onAuthStateChanged((user)=>
        console.log("logout")
        )
        unsubscribe()
    }                            
                componentWillMount(){
                
                            const unsubscribe = auth.onAuthStateChanged((user)=>
                        
                        {
                                            if(user)
                                            {
                                            this.setState({user:user})
                                           
                                            }
                                            else(
                                                this.setState({user:null})
                                            )
                                    console.log(this.state.user)
                            
                        }
                        
                        )
                }

      googleloginhander= ()=>{
             auth.signInWithPopup(googleprovider)
             .then((data)=>
                
                    this.setState({user:data})
                    // var test=JSON.stringify(data)
                // console.log(data.user)
                
             )
                         }

                                googlelogouthander= ()=>{
                                                auth.signOut()
                                                .then((data)=>
                                                {
                                                    this.setState({user:null})
                                                //    console.log(test)
                                                // Redirect()
                                                }
                                                )
                                }
 googleloginhander= ()=>{
             auth.signInWithPopup(googleprovider)
             .then((data)=>
                
                    this.setState({user:data})
                    // var test=JSON.stringify(data)
                // console.log(data.user)
                
             )
                         }

                                googlelogouthander= ()=>{
                                                auth.signOut()
                                                .then((data)=>
                                                {
                                                    this.setState({user:null})
                                                //    console.log(test)
                                                // Redirect()
                                                }
                                                )
                                }
                                facebookloginhander= ()=>{
                                    auth.signInWithPopup(facebookprovider)
                                    .then((data)=>
                                       
                                           this.setState({user:data})
                                           // var test=JSON.stringify(data)
                                       // console.log(data.user)
                                       
                                    )
                                                }

    render()
    {

        return(
            <div>
                            <div className="flex-row justify-content-end">
                                        {this.props.users!==""? this.props.users:null }
                                        </div>
                <div className="d-flex justify-content-start">
                            
                                          
                                                 <div className="flex-col">
                                                                     <div>
                                                                     {/* {this.props.users!==""?  null: <input className="form-control" id="user" value={this.props.users} onChange={this.props.changeusers}/>} */}
                                                                     {this.state.user!==null?  this.state.user.uid:null}
                                                                      {/* <input className="form-control" id="user" value={this.props.tempusers} onChange={this.props.changeusers}/> */}
                                                                        </div>   
                                                                                    <div>
                                                                                    {/* {this.props.users!==""?       null:<button className="btn-grad" onClick={this.props.clickchangeusers} value={this.props.tempusers}>Login user</button>} */}
                                                                                    {this.state.user!==null?       null:<button className="btn-grad" onClick={this.googleloginhander}>Login google</button>}
                                                                                    {this.state.user!==null?       null:<button className="btn-grad" onClick={this.facebookloginhander}>Login facebook</button>}
                                                                                    {this.state.user!==null?   <button className="btn-grad" onClick={()=>this.googlelogouthander()}>Loginout</button>:null}
                                                                                    {/* {this.props.users!==""?       null:<button className="btn-grad" onClick={this.onauthstatechange}>checkstate</button>} */}
                                                                                </div>
                                                                                
                                                                           
                                                                              </div>
                 </div>
                 </div>
            )
    }

 }
 export default login


 // componentDidMount(){
            
    //     // firestore.collection("users").where("numbergame","==",this.props.gameid).get().then((res)=>{
    //         // firestore.collection("users").get()
    //         firestore.collection("users").where("numbergame","==","111").get()
    //         .then((doc)=>{
                
    //                         doc.forEach(doc=>
    //                             {
    //                                 console.log(doc.id)
    //                                 console.log(doc.data())
    //                             })

    //                      }   
    //               )
    //       .catch((err)=>
    //             {
    //               alert(err)
    //             })     
    //      }