import React from 'react';
import './App.css';

class GameCardComponent extends React.Component{

    constructor(props){
        super(props);
        console.log();

        this.state = {
            error: null,
            isLoaded: false,
            games: []
        };
    
        this.fetchData = this.fetchData.bind(this);
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
            });

            console.log(this.state.games[0].id);

        },
        (error) => {
            this.setState({
                isLoaded: true,
                error
            });
        }
        );  
    }



    render(){
        console.log(this.state.games)

        return(
            
            <div className="card">
                <div className="card-body">
                    <h4 className="card-title">{}</h4>
                    <h6 className="card-subtitle mb-4">52 - 71</h6>
                    <h6 className="card-text">Leaders</h6>
                    <ul className="card-stats">
                        <li className="card-stat">
                            <h6 className="card-text">PTS:   {} -  {}<br/></h6>
                        </li>
                        <li className="card-stat">
                            <h6 className="card-text">REB:  {} -  {}<br/></h6>
                        </li>
                        <li className="card-stat">
                            <h6 className="card-text">AST:   {} -  {}<br/></h6>
                        </li>
                    </ul>
                    <a href="#" className="btn btn-primary">Boxscore</a>
                </div>
            </div>
        )
    }
}

export default GameCardComponent;