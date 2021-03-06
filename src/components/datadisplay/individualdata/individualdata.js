import React from 'react';

import classes from './Individualdata.css';


const Individualdata = (props) => (
    <tbody>
        <tr>
            <td>
                {props.name}
            </td>
        </tr>
        <tr>
            <td>
                {props.gender}
            </td>
        </tr>
        <tr>
            <td>
                {props.height}
            </td>
        </tr>
        <tr>
            <td>
                {props.mass}
            </td>
        </tr>
        <tr>
            <td>
                {props.hair_color}
            </td>
        </tr>
        <tr>
            <td>
                {props.homeworld}
            </td>
        </tr>
        <tr>
            <td 
             className = {classes.lineBreak}
             style = {
                {
                    display: props.starships === '' ? 'none' : null
                }
            }>
                {props.starships}
            </td>
        </tr>
    </tbody>
);

export default Individualdata;