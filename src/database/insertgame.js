import React from 'react'

import firestore from '../database/firebase'
 import firebase from 'firebase/app'

const  Insertgame=(props,users,newgameid,sIndex,index,statusnumber)=>{

                                        firestore.collection("game").add(
                                            {
                                                gameid:newgameid,
                                            isend:props.gameid,
                                            users:users,
                                            statusnumber:statusnumber,
                                            xpoint:sIndex,
                                            ypoint:index,
                                            timegame:new Date()
                                        }
                                            )                                                                     
                        }               
                        export default Insertgame
                          // .then((doc)=>
                                                                        // {
                                                                        //     var temparray=0
                                                                        //                         doc.forEach(doc=>
                                                                        //                             {
                                                                                                        
                                                                        //                                 console.log(doc.id)
                                                                        //                                 console.log(doc.data())
                                                                        //                                 this.setState()
                                                                                            
                                                                        //                                 console.log(doc.data().gameid)
                                                                        //                                 console.log(doc.data().orderid)
                                                                        //                                 console.log(doc.data().statusnumber)
                                                                        //                                 temparray +=1
                                                                        //                                 this.setState(temparray=>[temparray,doc.data()])
                                                                                                        
                                                                                                    
                                                                        //                              } )    
                                                                        //   })

                                                                                    
                                                                       
                                                                        //                 .catch((err)=>
                                                                        //                 {
                                                                        //                     alert(err)
                                                                        //                 }     )     