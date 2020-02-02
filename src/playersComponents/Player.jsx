import React, { Component } from 'react'
import PlayerAtrribute from './PlayerAtrribute'
import PlayerData from './PlayerData'


export default class Player extends Component {
    
    render() {
        return (
            <React.Fragment>
                <PlayerAtrribute/>
                <PlayerData/>
                
            </React.Fragment>
        )
    }
}
