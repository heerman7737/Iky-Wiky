import React, {Component} from 'react'
import Chip from '@material-ui/core/Chip';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
class RoomListItem extends Component{
    render(){
        return(
            
                <Chip 
                onClick={this.props.onClick} 
                id={this.props.id}
                label={this.props.children}
                variant="outlined">
                
                </Chip>
            
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
                    <ListItem>
                    <RoomListItem 
                    id={room.id} 
                    onClick={this.props.action} 
                    key={index}>
                    {room.name}
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