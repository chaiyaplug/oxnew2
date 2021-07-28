
import React from 'react'
import axios from 'axios'
import firestore from '../database/firebase'
 import firebase from 'firebase/app'
class Showgame extends React.Component{
    constructor(props){
        super(props)
            this.state={
               
                max:this.props.newxclick,
                users:this.props.users,
                temparray:[
                   { userid:"",
                    gameid:"",
                    timegame:null
                }
                ]
            }
            this.arraymaprange=this.arraymaprange.bind(this)
            this.Changevideo=this.Changevideo.bind(this)
            this.Fetchlistgame=this.Fetchlistgame.bind(this)
    }   
    
    // componentDidMount(){

    //     // firestore.collection("users").where("numbergame","==",this.props.gameid).get().then((res)=>{
    //         // firestore.collection("users").get()
    //         // firestore.collection("game").where("userid","==",this.state.user).get()
    //         firestore.collection("game").where("users","==",this.props.users).orderBy("timegame", "asc").get()
    //         .then((doc)=>{
    //                     let temparraynew=[]
    //                         doc.forEach(doc=>
    //                             {
    //                                 // console.log(doc.id)
    //                                 //  console.log(doc.data().userid)
    //                                 //  var a =doc.data().timegame
    //                                 //  console.log(a.tostring())
    //                                 // this.setState({...this.state.temparray,userid:doc.data().userid,gameid:doc.data().gameid})
    //                             //    console.log(doc.data().timegame.toString())
                               
    //                                 temparraynew=[...temparraynew,{userid:doc.data().users,gameid:doc.data().gameid,statusnumber:doc.data().statusnumber,xpoint:doc.data().xpoint,ypoint:doc.data().ypointdoc,timegame:doc.data().timegame}]
    //                             //    let date= new Date(this.state.timegame)
    //                             })
    //                             this.setState({temparray:temparraynew})
    //                             console.log(this.state.temparray)
    //                             // this.arraymaprange()
    //                      }   
    //               )
    //       .catch((err)=>
    //             {
    //               alert(err)
    //             })     
    //      }
        componentWillUnmount(){
            this.unsub()
        }
      
        componentDidUpdate(previosprop){
      
            if(previosprop.users!==this.props.users){
                console.log("showgame:"+this.props.users)

                    this.unsub= firestore.collection("game").where("users","==",this.props.users).onSnapshot(
                        
                                (doc)=>{
                                    doc.docChanges().forEach((change) => {
                                                    if (change.type === "added") {
                                                        console.log("New city: ", change.doc.data());
                                                    }
                                                    if (change.type === "modified") {
                                                        console.log("Modified city: ", change.doc.data());
                                                    }
                                                    if (change.type === "removed") {
                                                        console.log("Removed city: ", change.doc.data());
                                                    }

                                                })
                                                
                                    let temparraynew=[]
                                                                doc.forEach(doc=>
                                                                    {
                                                                        
                                                                        console.log(doc.id)
                                                                        console.log(doc.data())
                                                                        this.setState()
                                                            
                                                                        console.log(doc.data().gameid)
                                                                        console.log(doc.data().orderid)
                                                                        console.log(doc.data().statusnumber)
                                                                        // temparraynew +=1
                                                                        temparraynew=[...temparraynew,{userid:doc.data().users,gameid:doc.data().gameid,statusnumber:doc.data().statusnumber,xpoint:doc.data().xpoint,ypoint:doc.data().ypointdoc,timegame:doc.data().timegame}]
                                                                        this.setState({temparray:temparraynew})
                                                                        alert(doc.data().isend)
                                                                    
                                                                    })
                    
                                            }   
                                  
                            ,(err)=>
                                {
                                    alert(err)
                                }
                   )    
            
        }
    }
         Fetchlistgame=()=>
         {

                
            return(
                            this.state.temparray.map((user)=>
                            
                                   {
                                                if(new Date(user.timegame).toISOString!==null)
                                                {   
                                                    return(
                                                    
                                                            <ul key={user.uid}>   
                                                            
                                                                        <li>status: {user.statusnumber} xpoint:{user.xpoint} ypoint:{user.xpoint} xpoint:{user.xpoint}    status:{user.statusnumber}
                                                                        {/* timegame:{user.timegame.toDate().toString()} */}
                                                                          {/* { new firebase.firestore.fromMillis(user.timegame.milliseconds)} */}
                                                                        </li>
                                                                        
                                                                </ul>
                                                    )
                                                }
                                                else{
                                                    return(
                                                    
                                                        <ul key={user.uid}>   
                                                        
                                                                    <li>status: {user.statusnumber} xpoint:{user.xpoint} ypoint:{user.xpoint} xpoint:{user.xpoint}    status:{user.statusnumber}/</li>
                                                                    {/* timegame:  {new Date(user.timegame).toISOString}   </li> */}
                                                                    
                                                            </ul>
                                                        )

                                                    }                                 
                                    }
                    ))
         }
         
        Changevideo=(e)=>
        { 
            console.log(e.target.value)
            // alert(          e.target.value)
    // <this.Box1 index={a} sIndex={y}>
    // </this.Box1>
}
         arraymaprange=()=>{
         
                                    return(
                                                    this.state.temparray.map((a, i)=>{
                                                                                            // console.log('test');
                                                                                            //     console.log(a.userid,a.orderid,a.gameid)
                                                                                                                        return (
                                                                                                                            <ul key={a.uid}>
                                                                                                                                <li>
                                                                                                                                gameid:  {a.gameid}
                                                                                                                                </li>
                                                                                                                                <li>
                                                                                                                                gameid:  {a.userid}
                                                                                                                                </li>
                                                                                                                                <li>
                                                                                                                                <this.Fetchlistgame user={a.userid}/>
                                                                                                                                </li>
                                                                                                                    
                                                                                                                                  
                                                                                                                            </ul>
                                                                                                                                )
                                                                                         }
                                                                                )
                                                                                       
                                        )
                        }

    render(){

        return(
            
                        <div className="container">
                                        <div className="row"> 
                                        
                                        <label for="customRange2" class="form-label">เลื่อนเพื่อดู การเคลื่อนที่ของลำดับการกด</label>
                                            
                                        </div>        
                                            <this.arraymaprange/>                                    
                        </div>

            
        )


    }
   
}

export default Showgame
  //  componentDidUpdate(previosprop){
      
        //     if(previosprop.users!==this.props.users){
        //         console.log("showgame:"+this.props.users)

        //             firestore.collection("game").where("users","==",this.props.users).get()
        //         .then((doc)=>{
        //             let temparraynew=[]
        //                         doc.forEach(doc=>
        //                             {
                                        
        //                                 console.log(doc.id)
        //                                 console.log(doc.data())
        //                                 this.setState()
                               
        //                                 console.log(doc.data().gameid)
        //                                 console.log(doc.data().orderid)
        //                                 console.log(doc.data().statusnumber)
        //                                 // temparraynew +=1
        //                                 temparraynew=[...temparraynew,{userid:doc.data().users,gameid:doc.data().gameid,statusnumber:doc.data().statusnumber,xpoint:doc.data().xpoint,ypoint:doc.data().ypointdoc,timegame:doc.data().timegame}]
        //                                 this.setState({temparray:temparraynew})
                                         
                                      
        //                             })
    
        //                      }   
        //               )
        //       .catch((err)=>
        //             {
        //               alert(err)
        //             })     
        //     }
        // }