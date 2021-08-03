import React, { Component } from 'react'
import items from './data'
const RoomContext = React.createContext();
class RoomProvider extends Component {
    data={
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true
    };

    componentDidMount() {
        let rooms = this.formatData(items)
    }
    formatData(items){
        let tempItems=items.map(item=>{
            let id = item.sys.id
            let images = item.fields.images.map(image=>{
                return(
                    image.fields.file.url
                );
            })
        })
    }
    render() {
        return (
            <RoomContext.Provider value={{...this.data}}>
                {this.props.children}
            </RoomContext.Provider >
        )
    }
}

const RoomConsumer = RoomContext.Consumer;
export {RoomProvider,RoomConsumer,RoomContext};
