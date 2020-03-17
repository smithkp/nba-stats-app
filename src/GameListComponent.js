import React from 'react';
import GameCardComponent from './GameCardComponent';
import './App.css';

class GameListComponent extends React.Component{
    constructor(props){
        super(props);
        console.log();

        this.state = {
            error: null,
            isLoaded: false,
            games: []
        };
    
        this.fetchData = this.fetchData.bind(this);
        this.getGames = this.getGames.bind(this);
        this.formattedDate = this.formattedDate.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    componentDidMount(){
        this.fetchData();
        
    }

    formattedDate() {
        const date = new Date();
        let month = (1 + date.getMonth()).toString();
        const day = date.getDate().toString();
        const year = date.getFullYear().toString();

        if(date.getMonth() < 10){
            month = '0' + month;
        }

        return year + '-' + month + '-' +  day;
    }

    fetchData = () =>{
        console.log(this.formattedDate());
        fetch('https://www.balldontlie.io/api/v1/games?dates[]=' + this.formattedDate())
        .then(res => res.json())
        .then(
            (info) => {
            this.setState({
                games: info.data,
                isLoaded:true
            })

        }
        )
        .catch(console.log)
    }

    getGames(){
        const games = this.state.games;
        const gameCards = games.map((game,i) => <li key={i} >
            <GameCardComponent 
            isLoaded={this.state.isLoaded}
            awayTeam={game.visitor_team.name}
            homeTeam={game.home_team.name}
            gameTime={game.status}
            awayScore={game.visitor_team_score}
            homeScore={game.home_team_score} /></li>);
        return gameCards;
    }

    render(){
        if(this.state.isLoaded){
            return(
                <div className="text-center">
                    <ul className="game-list">
                        {this.getGames()}
                    </ul>
                </div>
                
            )
        }
        else{
            return(
                <ul className="game-list">
                    {this.getGames()}
                </ul>
            )
        }
        
    }

}

export default GameListComponent;