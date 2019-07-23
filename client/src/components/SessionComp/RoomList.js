import React, {Component} from 'react'

class RoomListItem extends Component{
    render(){
        return(
            <ul>
                <button onClick={this.props.onClick} id={this.props.id}  >{this.props.children}</button>
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
                    <RoomListItem id={room.id} onClick={this.props.action} key={index}>{room.name}</RoomListItem>
                    )
                })
            }
            </>
        )
    }

}
export default RoomList