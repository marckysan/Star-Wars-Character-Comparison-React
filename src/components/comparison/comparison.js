import React, { Component } from 'react';
import axios from 'axios';

import classes from './Comparison.css';

import Search from '../Search/Search';
import SearchData from '../Search/SearchData';


class Comparison extends Component {

    state = {
        characterQueried: '',
        name: '',
        gender: '',
        height: '',
        mass: '',
        hair_color: '',
        homeworld: '', 
        starships: '', 
        searching: false
    }


    callbackFunction = (childData, searching) => {
         this.setState({ characterQueried:childData })

        if (this.state.characterQueried === '') {
            return;
        } else {
            const nameSearch = childData;
            const urlSearch = 'https://swapi.dev/api/people/?search=' + nameSearch;
    
            console.log(urlSearch);
    
            axios.get(urlSearch).then(
                response => 
                {   
    
                    var characterStatsindex = response.data['results'];
                    var charStats = characterStatsindex['0']; 
                    var homeWorld = charStats['homeworld'];    
                    
                    // retrieve data for homeworld 
                    axios.get(homeWorld).then(
                        reponse => {
                            var homeworldStatsIndex = response.data['results'];
                            var homeworldStats = homeworldStatsIndex['0'];
                            
                            this.setState({
                                homeworld : homeworldStats['name']
                            })
                        } 
                    )
                    
                    //retrieve data setstate for starships
                    var starshipsArr = charStats['starships'];
                    console.log(starshipsArr);
                    //resets the startship after each search 
                    this.setState( {
                        starships: ''
                    })
                    starshipsArr.forEach(element => 
                        {
                            axios.get(element).then( response => {
                                    const newName = response.data['name'];
                                    const oldName = this.state.starships;
                                    const combinedName = newName + "\n" + oldName;
                        
                                    this.setState( {
                                        starships : combinedName
                                    })
                            }
                            ) 
                        }
                    );
                    
    
                    this.setState({
                        name : charStats['name'],
                        gender : charStats['gender'],
                        height : charStats['height'],
                        mass : charStats['mass'],
                        hair_color : charStats['hair_color'],
                        searching : searching
                    });
                }
            );
        }


       

    }



    render() {


        return (
            <div className = {classes.centraliseContent}>
                <Search
                    parentCallback = {this.callbackFunction} 
                />
                    <SearchData 
                        name = {this.state.name}
                        gender = {this.state.gender}
                        height = {this.state.height}
                        mass = {this.state.mass}
                        hair_color = {this.state.hair_color}
                        homeworld = {this.state.homeworld}
                        starships = {this.state.starships}

                        searching = {this.state.searching}
                        

                    />
            </div>
        )
    }
}

export default Comparison;