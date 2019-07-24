import React, {Component} from 'react'
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class RoomListItem extends Component{
    render(){
        return(
            
                <li style={{
                    position:"relative",
                    paddingTop:"10px",
                    paddingLeft:"10px",
                    background:"#b0d3bf",
                    height:"30px", 
                    width:"150px", borderRadius:"8px", marginTop:'5px' , fontWeight:'bold', fontSize:"18px", color:"white"
                }}
                onClick={this.props.onClick} 
                id={this.props.id}
               >
                
                {this.props.name}</li>
            
        )
    }
}
class RoomList extends Component{

    render(){
        return(
            
            <List style={{overflowY : 'auto' }}>
                
            {
                this.props.rooms.map((room,index)=>{
                    return(
                    <ListItem >
                    <RoomListItem 
                    name= {room.name}
                    id={room.id} 
                    onClick={this.props.action} 
                    key={index}>
      
                    </RoomListItem>
                    </ListItem>
                    )
                })
            }
                </List>
           
            
        )
    }
}
export default RoomList