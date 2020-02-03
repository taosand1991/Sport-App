import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css'
import '../App.css'

class TeamDetails extends Component {

    render(){
    const {description, country, stadium, badge, error, handleClickee, handleClicker, getData,
        getMore, league, stadiumCap, website} = this.props
        this.getWebsite =()=>{
            if(website){
                return <p className='list-group-item mt-2 list-group-item-warning'><span id='go'>WEBSITE </span>&nbsp; <a href={website}><b>{'http://'+website}</b></a></p>

            }else{
                return null;
            }
        }
    this.getData =()=>{
        if(getMore){
            return <p id='ontop' className='card-body ml-2 '>{description.substring(0, 500) + '...'}</p> 
        }else{
            return <p id='ontop' className='card-body ml-2 '>{description}</p>
        }
    }
    const text = this.getData()

    this.getStadium =()=>{
        if(getData){
            return <p id='ontop' className='card-body ml-2 '>{stadium.substring(0, 500) + '...'}</p> 
        }else{
            return <p id='ontop' className='card-body ml-2 '>{stadium}</p>
        }
    }
    const stadia = this.getStadium()
    

    return (
        <React.Fragment>
        {description && country && stadium && badge &&
        <section>
            <div className='row'>
                <div className="col-12 col-sm-6 col-md-6 col-xl-4">
                    <div className="card m-2">
                        <div className='card-header'>
                        <h4 className='text-center'>Team History</h4>
                        </div>
                        {text}
                    
                    <a onClick={handleClicker} className='btn btn-outline-primary '
                    >{getMore ? 'Read More': 'Read Less'}</a>
                    
                    </div>
                </div>
                
                <div className=" col-12 col-sm-6 col-md-6 col-xl-4">
                    <div  className="card m-2">
                        <div className='card-header'>
                        <h4 className='text-center'>Team Statistics</h4>
                        </div>
                        <div id='ontop1'>
                    <img className='card-img-top mt-3' src={badge} alt='No pics'></img> 
                    <p className='list-group-item mt-2 list-group-item-secondary'><span id='go'>LEAGUE COUNTRY</span>   <b>{country}</b></p>
                    <p className='list-group-item mt-2 list-group-item-success'><span id='go'>LEAGUE</span>  <b>{league}</b></p>
                    <p className='list-group-item mt-2 list-group-item-primary'><span id='go'>STADIUM CAPACITY</span>  <b>{parseInt(stadiumCap).toLocaleString()}</b></p>
                    {this.getWebsite()}
                    </div>
                    </div>
                </div>
                <div className="col-12 col-sm-6 col-md-6 col-xl-4" id='scroll'>
                    <div className="card m-2">
                    <div className='card-header'>
                        <h4 className='text-center'>Stadium History</h4>
                        </div>
                    <div >{stadia}</div>
                    
                    <a onClick={handleClickee} className='btn btn-outline-success '
                    >{getData ? 'Read More': 'Read Less'}</a>
                    </div>
                </div>
            </div>
            </section>
            }
            <div>
                {error &&
                <React.Fragment>
                <div className="row">
                    <div className="col-md-6 offset-md-3">
                    <div className='alert alert-danger'>there is no team with that 
                name on this server
                </div>
                    </div>
                </div>
                 
                </React.Fragment>}
            </div>
            
            </React.Fragment>
    );
}
}

export default TeamDetails;
