import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css';

export default class Contact extends Component {
    render() {
        return (
            <div style={{margin:'60px'}} className='row '>
                <div className='col-md-6 offset-md-3'>
                <form className='form-group'>
                    <label className='text-white' htmlFor="name">Name</label><br/>
                    <input className='form-control'id='name' type="text" placeholder='Your name'/>
                    <label className='text-white' htmlFor="message">Message</label>
                    <textarea className='form-control' name="" id="message" cols="30" rows="10" placeholder='Your Message'></textarea><br/>
                    <button className='btn btn-primary'>Submit</button>
                </form>
                </div>
            </div>
        )
    }
}
