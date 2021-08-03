import React, { Component } from 'react'
import {RoomContext} from '../context'
export default class FeaturedRoom extends Component {
    constructor(props){
        super(props)
    }
    static contextType = RoomContext         // Context api ony works for class based component
    render() {
        const value = this.context;
        // const name = this.props.data
        const name = value['name']
        // console.log(value.type)
        
        return (
            <div>
                Hello {name} from featured rooms
            </div>
        )
    }
}
