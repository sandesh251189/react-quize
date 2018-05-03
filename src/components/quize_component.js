import React,{Component} from 'react';
import {connect} from 'react-redux';
class Quize extends Component {
  constructor(props){
    super(props);
    this.state={
      counter:0
    }
}
renderQuestiosOp(array){
return array.map(choice=>{
    return <li key={choice}>{choice}</li>
})
}
renderQuestion(){
  return this.props.questions.map(question=>{
    return <li key={question.question}>{question.question}
      <ul>
          {this.renderQuestiosOp(question.choices)}
      </ul>
    </li>
  })
}
  render(){
    console.log(this.props.questions)
    return(
      <div>
      <h4>This is Quize Component</h4>
      User Name: {this.props.userdetails.username}<br />
      Counter:{this.state.counter}
      {this.renderQuestion()}
      </div>


    )
  }
}

function mapStateToProps(state){
  return {
    userdetails:state.userdetails,
    questions:state.questions
  }
}
export default connect(mapStateToProps)(Quize) ;
