 import React, { Component } from 'react'
 import 'emoji-mart/css/emoji-mart.css'
 import { Picker } from 'emoji-mart'

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
    this.setState({clickEmoji:!this.state.clickEmoji})
    
  }

   render() {
     const styles = {
       container: {
         padding: 10,
         borderTop: '1px #589d62 solid',
       },
       form: {
         display: 'flex',
       },
       input: {
         color: 'inherit',
         background: 'none',
         outline: 'none',
         border: 'none',
         flex: 1,
         fontSize: 16,
       },
     }
     return (
       <div style={styles.container}>
         <div>
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
           <Picker onSelect={this.addEmoji}           
            /> : <button onClick={this.toggleEmojiButton}>Emoji</button>
           }
           </span>
         </div>
       </div>
     )
   }
 }

 export default SendMessageForm