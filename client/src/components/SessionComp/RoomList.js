import React, {Component} from 'react'

class RoomListItem extends Component{
    render(){
        return(
            <ul>
                <button>{this.props.children}</button>
            </ul>
        )
    }
}
class RoomList extends Component{
    
    render(){
        return(
            <>
            {
                this.props.rooms.map((room,index)=>{
                    return(
                    <RoomListItem key={index}>{room.name}</RoomListItem>
                    )
                })
            }
            </>
        )
    }

}
export default RoomList