import React, { Component } from 'react';
import PlayerInput from './PlayerInput'
import {trackPromise} from 'react-promise-tracker'



class PlayerData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            playMaker:'',
            description:'',
            playName:'',
            dateOb:'',
            club:'',
            shirtN:'',
            wage:'',
            favKit:'',
            birthCountry:'',
            agent:'',
            country:'',
            position:'',
            picture:'',
            pic2:'',
            pic3: '',
            error: false,
            description1:'' ,
        playName1: '',
        dateOb1: '',
        club1: '',
        shirtN1: '',
        wage1: '',
        favKit1: '',
        birthCountry1: '',
        agent1: '',
        country1: '',
        position1: '',
        picture1: '',
        pic21: '',
        pic31: '',
        }
        this.getData = this.getData.bind(this)
    }
handleChange =(e)=>{
this.setState({
    playMaker: e.target.value
})
};
handleReset =()=>{
return this.getData = [];
}
getData = async (e) =>{
    e.preventDefault();
    const api_call = await trackPromise(fetch(`https://www.thesportsdb.com/api/v1/json/1/searchplayers.php?p=${this.state.playMaker}`,{
        method:'GET'
    }))
     const response = await api_call.json()
    if(response.player === null){
        return this.setState({
            playMaker : '',
            description: '',
            playName: '',
            dateOb: '',
            club: '',
            shirtN: '',
            wage: '',
            favKit: '',
            birthCountry: '',
            agent: '',
            country: '',
            position: '',
            picture: '',
            pic2: '',
            pic3:'',
            errorData: true,
            data: [],
            description1:'' ,
        playName1: '',
        dateOb1: '',
        club1: '',
        shirtN1: '',
        wage1: '',
        favKit1: '',
        birthCountry1: '',
        agent1: '',
        country1: '',
        position1: '',
        picture1: '',
        pic21: '',
        pic31: '',
        errorData1: true,
        description2:'' ,
        playName2: '',
        dateOb2: '',
        club2: '',
        shirtN2: '',
        wage2: '',
        favKit2: '',
        birthCountry2: '',
        agent2: '',
        country2: '',
        position2: '',
        picture12: '',
        pic22: '',
        pic32: '',
        errorData2: true,


        })
    }else{
     this.setState({
            playMaker : '',
            description: response.player[0].strDescriptionEN,
            playName: response.player[0].strPlayer,
            dateOb: response.player[0].dateBorn,
            club: response.player[0].strTeam,
            shirtN: response.player[0].strNumber,
            wage: response.player[0].strWage,
            favKit: response.player[0].strKit,
            birthCountry: response.player[0].strBirthLocation,
            agent: response.player[0].strAgent,
            country: response.player[0].strNationality,
            position: response.player[0].strPosition,
            picture: response.player[0].strCutout,
            pic2: response.player[0].strThumb,
            pic3: response.player[0].strRender,
            data:response,
            errorData: false,
            description1:'',
        playName1: '',
        dateOb1: '',
        club1: '',
        shirtN1: '',
        wage1: '',
        favKit1:  '',
        birthCountry1: '',
        agent1: '',
        country1: '',
        position1: '',
        picture1:  '',
        pic21: '',
        pic31: '',
        errorData1: false,
        })
        if(response.player[1]){
        this.setState({
            description1:response.player[1].strDescriptionEN ,
        playName1: response.player[1].strPlayer,
        dateOb1: response.player[1].dateBorn,
        club1: response.player[1].strTeam,
        shirtN1: response.player[1].strNumber,
        wage1: response.player[1].strWage,
        favKit1:  response.player[1].strKit,
        birthCountry1: response.player[1].strBirthLocation,
        agent1: response.player[1].strAgent,
        country1: response.player[1].strNationality,
        position1: response.player[1].strPosition,
        picture1:  response.player[1].strCutout,
        pic21: response.player[1].strThumb,
        pic31: response.player[1].strRender,
        errorData1: false,
    })
    }else{
        return null;
    }
        if(response.player[2]){
            this.setState({
        description2:response.player[2].strDescriptionEN ,
        playName2: response.player[2].strPlayer,
        dateOb2: response.player[2].dateBorn,
        club2: response.player[2].strTeam,
        shirtN2: response.player[2].strNumber,
        wage2: response.player[2].strWage,
        favKit2:  response.player[2].strKit,
        birthCountry2: response.player[2].strBirthLocation,
        agent2: response.player[2].strAgent,
        country2: response.player[1].strNationality,
        position2: response.player[2].strPosition,
        picture2:  response.player[2].strCutout,
        pic22: response.player[2].strThumb,
        pic32: response.player[2].strRender,
        errorData2: false,
    })
    }else{
        return null;
    }
     
     
    }
    
 }
 
 

    render() {
    const {position, picture, country, agent, wage, favKit, dateOb, description, birthCountry
    ,club, shirtN, playMaker, errorData, pic2,pic3, playName, 
    position1, picture1, country1, agent1, wage1, favKit1, dateOb1, description1, birthCountry1
    ,club1, shirtN1, playMaker1, pic21,pic31, playName1, errorData1,
    position2, picture2, country2, agent2, wage2, favKit2, dateOb2, description2, birthCountry2
    ,club2, shirtN2, playMaker2, pic22,pic32, playName2, errorData2, handleReset} = this.state
        return (
            <div>
            <PlayerInput
            getData={this.getData}
            handleChange={this.handleChange}
            country={country}
            wage={wage}
            club={club}
            picture={picture}
            agent={agent}
            favKit={favKit}
            dateOb={dateOb}
            description={description}
            birthCountry={birthCountry}
            shirtN={shirtN}
            position={position}
            playMaker={playMaker}
            errorData={errorData}
            pic2={pic2}
            pic3={pic3}
            playName={playName}
            country1={country1}
            wage1={wage1}
            club1={club1}
            picture1={picture1}
            agent1={agent1}
            favKit1={favKit1}
            dateOb1={dateOb1}
            description1={description1}
            birthCountry1={birthCountry1}
            shirtN1={shirtN1}
            position1={position1}
            playMaker1={playMaker1}
            pic21={pic21}
            pic31={pic31}
            playName1={playName1}
            errorData1={errorData1}
            country2={country2}
            wage2={wage2}
            club2={club2}
            picture2={picture2}
            agent2={agent2}
            favKit2={favKit2}
            dateOb2={dateOb2}
            description2={description2}
            birthCountry2={birthCountry2}
            shirtN2={shirtN2}
            position2={position2}
            playMaker2={playMaker2}
            pic22={pic22}
            pic32={pic32}
            playName2={playName2}
            errorData2={errorData2}
            handleReset={handleReset}
            



            />
            </div>
        );
    }
}
export default PlayerData;
