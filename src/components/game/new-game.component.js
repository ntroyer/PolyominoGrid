import React, { Component } from 'react';
import styled from 'styled-components';

import Board from "./board/board.component";
import PlayerTest from "./debug/player-test.component";

const Game = styled.div`
    display: flex;
    gap: 10px;
    justify-content: center;
`;

export default class NewGame extends Component {
    constructor(props) {
        super();

        this.state = {
            currentPlayer: 1,
            currentPolyo: [
                [-1, 0], [-1, -1], [1, 0], [0, 1], [0, 2]
            ]
        }

        this.changePlayer = this.changePlayer.bind(this);
        this.changePolyo = this.changePolyo.bind(this);
    }

    changePlayer(player) {
        this.setState(state => ({
            currentPlayer: player
        }));
    }

    changePolyo(polyo) {
        this.setState(state => ({
            currentPolyo: polyo
        }));
    }

    render() {
        return (
            <Game>
                <PlayerTest 
                    currentPlayer={this.state.currentPlayer} 
                    currentPolyo={this.state.currentPolyo}
                    onPlayerChange={this.changePlayer} 
                    onPolyoChange={this.changePolyo}
                />
                <Board 
                    currentPlayer={this.state.currentPlayer}
                    currentPolyo={this.state.currentPolyo}
                    boardX={20}
                    boardY={20}
                />
            </Game>
        )
    }
}