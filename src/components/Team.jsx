import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import TeamDetails from './TeamDetails'
import {trackPromise} from 'react-promise-tracker'
import '../App.css'


export default class Team extends Component {
    constructor(props){
        super(props)
        this.state = {
            team:'',
            data:[],
            description:'',
            league:'',
            alias:'',
            stadium:'',
            stadiumDes:'',
            jersey:'',
            badge:'',
            country:'',
            stadiumCap:'',
            website:'',
            error: false,
            getMore:true,
            getData:true,

        }

    }
    getTeam = async(e) => {
        e.preventDefault();
        const api_call = await trackPromise(fetch(`https://www.thesportsdb.com/api/v1/json/1/searchteams.php?t=${this.state.team}`,
        {method:'GET', timeout:7000000000000}
        
        ))
        const response = await api_call.json()
        if(response.teams == null){
            return this.setState({error:true,
            team:'',
            description: '',
            league:'',
            alias: '',
            stadium: '',
            jersey: '',
            badge: '',
            country: '',
            stadiumCap: '',
            website:'',
        })
        }else{
         return this.setState({
            description: response.teams[0].strDescriptionEN,
            league: response.teams[0].strLeague,
            alias: response.teams[0].strAlternate,
            stadium: response.teams[0].strStadiumDescription,
            jersey: response.teams[0].strTeamJersey,
            badge: response.teams[0].strTeamBadge,
            country: response.teams[0].strCountry,
            stadiumCap: response.teams[0].intStadiumCapacity,
            website: response.teams[0].strWebsite,
            team:'',
            error:false,
            getMore:true,
            getData:true,
            
        })
    }
       
    }
    handleChange =(e)=>{
        this.setState({team:e.target.value})
    }
    
   
    handleClicker=()=>{
        this.setState({getMore:!this.state.getMore})
        console.log(this.state.getMore)
    //    const toggle = {...this.state}
    //     const final = toggle.getMore = !toggle.getMore
    //      this.setState({final})
    //      console.log(final)
        // const toggle = this.state.getMore = !this.state.getMore
        // this.setState({toggle})
        // console.log(toggle)
        
        }
        
    handleClickee=()=>{
        this.setState({getData:!this.state.getData})
        // const toggle = this.state.getData = !this.state.getData
        // this.setState({toggle})
        // console.log(toggle)
        }
       
    render() {
        const {description, stadium, badge, stadiumCap, country,league, alias, error, getMore, 
            getData, website} = this.state
        return (
            <React.Fragment>
                <section>
            <div className='row  center'>
                <div className="col-md-6 offset-md-3">
                <h3 className=' text-white fort text-center'>Search for your Favorite Teams Here</h3>
                <form onSubmit={this.getTeam} className='form-inline'>
                <input onChange={this.handleChange} className='form-control' type="text" placeholder='Your team' value={this.state.team}
                required/>
                <input className='btn btn-primary ml-2' type="submit" value='submit'/>
                </form>
                </div>
            </div><br/>
            </section>
            <TeamDetails
            description={description}
            league={league}
            stadium ={stadium}
            badge={badge}
            country={country}
            alias={alias}
            stadiumCap={stadiumCap}
            error={error}
            handleClicker={this.handleClicker}
            handleClickee={this.handleClickee}
            getMore={getMore}
            getData={getData}
            website={website}

            
            
            
            />
            </React.Fragment>
        )
    }
}
