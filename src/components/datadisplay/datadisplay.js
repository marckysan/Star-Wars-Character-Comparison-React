import React from 'react';
import Auxilliary from '../../hoc/Auxilliary';

import classes from './Datadisplay.css';

import Individualdata from '../Datadisplay/Individualdata/Individualdata';


const DataDisplay = (props) => (
    <Auxilliary >
        <Individualdata 
            name = {props.name}
            gender = {props.gender}
            height = {props.height}
            mass = {props.mass}
            hair_color = {props.hair_color}
            homeworld = {props.homeworld}
            starships = {props.starships}

            className ={classes.datadisplay}
            
        />
    </Auxilliary>

);

export default DataDisplay;