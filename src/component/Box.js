
    
import Insertgame from '../database/insertgame'
import React from 'react'
class Box extends React.Component{
    constructor(props){
        super(props)
        this.Repeat=this.Repeat.bind(this)
        this.Newboard=this.Newboard.bind(this)
        this.state={
           xmark:3,
           ymark:3,
          board :[],
          tempboard:[],
          gameid:"",
          isend:"",
          statusnumber:"",
          ypoint:"",
          xpoint:"",
          timegame:""
        }  
        
        }
        componentDidMount(){
          
         const a = Array(parseInt(this.props.x)).fill(null).map(row => new Array(parseInt(this.props.y)).fill(null))
         this.setState({board:a})
        }
        
        componentDidUpdate(prevProps){
          
              if(prevProps.x!==this.props.x && prevProps.y!==this.props.y){
          const a = Array(parseInt(this.props.x)).fill(null).map(row => new Array(parseInt(this.props.y)).fill(null))
          this.setState({board:a})
              }
                  
         }
       Repeat=(props) =>{

          let items = [];
          for (let i = 0; i < props.numTimes; i++) {
            items.push(props.children(i));
          }
          return <>{items}</>;
        }
        Box1=({children,onClick,index,sIndex})=>{ 
          return(
              <>
            <div key={sIndex+" "+index} className="box1" onClick={this.XOput.bind(this,sIndex,index)} id={sIndex+"+"+index}  >
                                          <span id={sIndex+"_"+index} className="ox">
                                          {this.state.board[sIndex][index]}
                                          </span>
                                          </div>
            
            </>
            )
          }
          checkAdult= (status) =>{
            return status!==null;
          }
          
           shuffle=(array)=> {
            var currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle...
            while (0 !== currentIndex) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }         
          XOput=(sIndex,index)=>{
         
            const temparrayboard=new Array()
            const endgame = false
            var tempcount=0
            var tempcount2=0
            var tempcount3=0
            if( this.state.board[sIndex][index]===null && this.state.board[sIndex][index]!=="o"){
             
                                    const newboard = this.state.board.slice() //copy the array
                                  
                                    newboard[sIndex][index] = 'x' //execute the manipulations
                                    this.setState({board: newboard}) //set the new state

                                    this.setState(previousstate=>({xpoint:sIndex,ypoint:index,statusnumber:"x",isend:0,timegame:new Date()}))      
                                    Insertgame(this.state,this.props.users,this.props.newgameid,sIndex,index, newboard[sIndex][index])

                                    const result = this.state.board[sIndex].filter(i => i === "x").length;
                                    console.log('number of the found elements: ' + result);
                                    if(result===this.state.board[sIndex].length){
                                      alert("ผู้ชนะคือ x")
                                    }
              for(var check=0;check<this.state.board.length;check++)
              {
                                                                if(this.state.board[check][index]==="x")
                                                                {
                                                                              tempcount++
                                                                                if(tempcount===this.state.board.length)
                                                                                {
                                                                                  alert("ผู้ชนะคือ x")
                                                                                }
                                                                  }
              }
              for(var check3=0;check3<this.state.board.length;check3++)
              {
                                    if(this.state.board[check3][check3]==="x")
                                    {
                                      tempcount2++
                                      if(tempcount2===this.state.board.length)
                                      {
                                        alert("ผู้ชนะคือ x")
                                      }
                                    }
              }
              for(var check4=this.state.board.length,f=0;check4>0;check4--,f++)         
              {

                                if(this.state.board[f][check4-1]==="x")
                                    {
                                              
                                              tempcount3++
                                              console.log("counttempcount3:"+tempcount3)
                                              if(tempcount3===this.state.board.length)
                                              {
                                                alert("ผู้ชนะคือ x")
                                              }
                                    }
                }
                                                                          for(var i =0;i<this.state.board.length;i++){
                                                                                  for( var k=0;k<this.state.board[i].length;k++){
                                                                                                              if(this.state.board[i][k]!=="x"&&this.state.board[i][k]!=="o"){
                                                                                                              temparrayboard.push({newi:i,newy:k})                                                                        
                                                                                                             
                                                                                                              }                                                                                   
                                                                                       }
                                                                         }
                                                                                  if(temparrayboard.length>1){
                                                                                            this.shuffle(temparrayboard)
                                                                                      newboard[temparrayboard[0].newi][temparrayboard[0].newy]="o"
                                                                                      this.setState({board:newboard})
                                                                                      this.setState(previousstate=>({xpoint:sIndex,ypoint:index,statusnumber:"o",isend:0,timegame:new Date()}))      
                                                                                        Insertgame(this.state,this.props.users,this.props.newgameid,sIndex,index,newboard[temparrayboard[0].newi][temparrayboard[0].newy])
                                                                                            }
                                                                                    else 
                                                                                      {
                                                                                        newboard[temparrayboard[0].newi][temparrayboard[0].newy]="o"
                                                                                        this.setState({board:newboard})
                                                                                          alert("จบเกม ไม่มีผู้ชนะ")
                                                                                        }   
                                                                                           
             if(temparrayboard==null){
             alert("จบเกม ไม่มีผู้ชนะ")
             }
           }
          }
                      Newboard=()=>{
                        return (
                            <div>
                              {this.state.board.map((items, index) => {         
                                return (
                                  <div className="d-flex " key={index}>
                                    {items.map((subItems, sIndex) => {
                                      return (          
                                     
                                        <this.Box1 index={index} sIndex={sIndex}>
                                         </this.Box1>
                                     
                                      )
                                    })}
                                  </div>
                                );
                              })}
                            </div>
                        );

                      }        
      render(){
                        return(
                          <div className="d-flex overflow-scroll">
                          <this.Newboard  />
                          </div>
                        )
        
            }
}       
        export default Box

