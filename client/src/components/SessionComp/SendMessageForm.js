 import React, { Component } from 'react'
 import 'emoji-mart/css/emoji-mart.css'
 import { Picker } from 'emoji-mart'
 import Icon from '@material-ui/core/Icon';
 import TagFaces from '@material-ui/icons/TagFaces'
 class SendMessageForm extends Component {
   constructor(props) {
     super(props)
     this.state = {
       text: '',
       clickEmoji:false
     }
     this.onSubmit = this.onSubmit.bind(this)
     this.onChange = this.onChange.bind(this)
   }

   onSubmit(e) {
     e.preventDefault()
     this.props.onSubmit(this.state.text)
     console.log(this.state.text)
     this.setState({ text: '' })
    console.log(this.state.text)
   }

   onChange(e) {
     this.setState({ text: e.target.value })
     if (this.props.onChange) {
       this.props.onChange()
     }
   }
   addEmoji = (e) => {
    console.log(e.native)
    let emoji = e.native;
    this.setState({
      text: this.state.text + emoji
    })
  }

  toggleEmojiButton=(e)=>{
    e.preventDefault()
    this.setState({clickEmoji:!this.state.clickEmoji}
      
      )
    
  }


   render() {
     const styles = {
       container: {
         padding: 10,
         borderTop: '1px #589d62 solid',
         
       },
       form: {
         display: 'flex',
         flex:8,
       },
       input: {
         color: 'inherit',
         background: 'none',
         outline: 'none',
         border: 'none',
         flex: 1,
         fontSize: 16,
       },
       emojiPicker: {
        position: "absolute",
        bottom: 100,
        right:36,
        cssFloat: "right",
        marginLeft: "200px",
        boxShadow:'5px 5px 20px 0px rgba(0,0,0,0.5)',
      },
      button: {
      top:'5px',
      }
       
     }
     return (
       <div style={styles.container}>
         <div style={{display:'flex', justifyContent:'space-between'}}>
           <form onSubmit={this.onSubmit} style={styles.form}
>
             <input
               type="text"
               placeholder="Type a message here then hit ENTER"
               onChange={this.onChange}
               value={this.state.text}
               style={styles.input}
             />



           </form>
           <span>
            
           {this.state.clickEmoji ?
           <>
           <Picker style={styles.emojiPicker} onSelect={this.addEmoji}           
            />  
            <Icon style={styles.button} 
            
            onClick={this.toggleEmojiButton}><TagFaces/></Icon>
           </>
            :
            <Icon style={styles.button} 
            
            onClick={this.toggleEmojiButton}><TagFaces/></Icon>
           }
           </span>
         </div>
       </div>
     )
   }
 }

 export default SendMessageForm