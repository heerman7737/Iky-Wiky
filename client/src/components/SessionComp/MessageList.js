import React, { Component } from 'react'
import { ListItemAvatar } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Avatar from '@material-ui/core/Avatar';

class MessagesList extends Component {
 
  render() {
  
    // const fromMe = this.props.fromMe ? 'from-me' : '';

    return (
      <div className="chatContainer" >
    
        <List >
           {this.props.messages.map((message, index) => (

             <ListItem key={index} >
           
                 <ListItemAvatar>
                 <Avatar>
                    
                    {message.sender.name}
                </Avatar>
                 
                 
                 </ListItemAvatar>{' '}
               
               <ListItemText className="messages">
               
               {message.text}
               </ListItemText>
             </ListItem>
           ))}
         </List>
         
       </div>
     )
   }
 }

 MessagesList.defaultProps = {
  fromMe: false
};
 export default MessagesList

