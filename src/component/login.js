import React from 'react'
import firestore from '../database/firebase'
 import firebase from 'firebase/app'
import Showgame from './Showgame'

 class login extends React.Component
 {
    // eslint-disable-next-line no-useless-constructor
    constructor(props)
    {
        super(props)
        this.state={
            user:null
        }
    }
    
    render()
    {

        return(
            // <form onSubmit={this.props.changeuser}>
            <div>
                            <div className="flex-row justify-content-end">
                                        {this.props.users!==""? this.props.users:null }
                                        </div>
                <div className="d-flex justify-content-start">
                            
                                          
                                                 <div className="flex-col">
                                                                     <div>
                                                                     {/* {this.props.users!==""?  null: <input className="form-control" id="user" value={this.props.users} onChange={this.props.changeusers}/>} */}
                                                                     {this.props.users!==""?  null: <input className="form-control" id="user" value={this.props.tempusers} onChange={this.props.changeusers}/>}
                                                                        </div>   
                                                                                    <div>
                                                                                    {this.props.users!==""?       null:<button  onClick={this.props.clickchangeusers} value={this.props.tempusers}>Login user</button>}
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