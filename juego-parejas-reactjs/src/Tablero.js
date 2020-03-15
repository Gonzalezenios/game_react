import React, { Component } from 'react';

export default class Tablero extends Component {
    render () {
        const cartas = [1,2,3,4,5];
        return (
            <div className="tablero">
                {
                    cartas.map ((carta) => <span>{carta}</span>)
                }
            </div>
        );
    }
};