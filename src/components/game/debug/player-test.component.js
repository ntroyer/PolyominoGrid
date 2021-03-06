import React, { Component } from 'react';
import styled from 'styled-components';
import { MdRotateLeft, MdRotateRight, MdFlip } from 'react-icons/md';
import ReactTooltip from "react-tooltip";
import PolyominoPreview from './polyomino-preview/polyomino-preview.component';
import PolyominoSelector from './polyomino-selector/polyomino-selector';

const RotateLeft = styled(MdRotateLeft)`
    cursor: pointer;
`;

const RotateRight = styled(MdRotateRight)`
    cursor: pointer;
`;

const FlipX = styled(MdFlip)`
    rotate: 90deg;
    cursor: pointer;
`;

const FlipY = styled(MdFlip)`
    cursor: pointer;
`;

const PolyominoSelectorContainer = styled.div`
    display: flex;
    padding-top: 10px;
`;

export default class PlayerTest extends Component {
    constructor(props) {
        super();

        this.rotateLeft = this.rotateLeft.bind(this);
        this.rotateRight = this.rotateRight.bind(this);
        this.flipX = this.flipX.bind(this);
        this.flipY = this.flipY.bind(this);
    }

    rotateLeft() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[1] * -1;
            newPosition[1] = position[0];

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    rotateRight() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[1];
            newPosition[1] = position[0] * -1;

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    flipX() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[0] * -1;
            newPosition[1] = position[1];

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    flipY() {
        let newPolyo = this.props.currentPolyo.map((position) => {
            let newPosition = [];

            newPosition[0] = position[0];
            newPosition[1] = position[1] * -1;

            return newPosition;
        });
        this.props.onPolyoChange(newPolyo);
    }

    render() {
        return (
            <div>
                <div>
                    Current player: Player {this.props.currentPlayer}
                </div>
                <button onClick={() => this.props.onPlayerChange(1)}>Player 1</button>
                <button onClick={() => this.props.onPlayerChange(2)}>Player 2</button>
                <button onClick={() => this.props.onPlayerChange(3)}>Player 3</button>
                <button onClick={() => this.props.onPlayerChange(4)}>Player 4</button>
                <div>
                    Polyomino Controls
                </div>
                <PolyominoPreview 
                    currentPlayer={this.props.currentPlayer}
                    currentPolyo={this.props.currentPolyo}
                    boardX={5} 
                    boardY={5} />
                <PolyominoSelectorContainer>
                    <PolyominoSelector 
                        currentPlayer={this.props.currentPlayer}
                        onPolyoChange={this.props.onPolyoChange} />
                </PolyominoSelectorContainer>
                <div>
                    <button>Get Random Polyomino</button>
                    <RotateLeft data-tip="Rotate Counterclockwise" onClick={this.rotateLeft} />
                    <RotateRight data-tip="Rotate Clockwise" onClick={this.rotateRight} />
                    <FlipX data-tip="Flip Horizontally" onClick={this.flipX} />
                    <FlipY data-tip="Flip Vertically" onClick={this.flipY} />
                </div>
                <ReactTooltip />
            </div>
        )
    }
}