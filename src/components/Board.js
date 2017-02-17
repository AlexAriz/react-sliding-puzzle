import React from 'react';

import Slot from './Slot';

const KEY_LEFT = 37;
const KEY_UP = 38;
const KEY_RIGHT = 39;
const KEY_DOWN = 40;

const Board = React.createClass({
  getInitialState() {
    return {
      selectedSlotIndex: 0,
      currentBoard: [ 0, 1, 2, 3, 4, 5, 6, 7, null ]
    };
  },

  componentDidMount() {
    window.addEventListener('keydown', (event) => {this.moveSlot(event.keyCode)})
  },

  onSelectSlot(index) {
    var isSlotEmpty = this.state.currentBoard[index] === null;
    if (!isSlotEmpty) {
      this.setState({selectedSlotIndex: index});
    }
    else {
      this.setState({selectedSlotIndex: null});
    }
  },

  moveSlot(keyCode) {
    var currentSelectedIndex = this.state.selectedSlotIndex;
    var nextSelectedIndex = this.state.selectedSlotIndex;

    switch(keyCode) {
      case KEY_UP:
        if (nextSelectedIndex >= 3) {
          nextSelectedIndex -= 3;
        }
        break;
      case KEY_DOWN:
        if (nextSelectedIndex < 6) {
          nextSelectedIndex += 3;
        }
        break;
      case KEY_RIGHT:
        if ((nextSelectedIndex % 3) !== 2) {
          nextSelectedIndex += 1;
        }
        break;
      case KEY_LEFT:
        if ((nextSelectedIndex % 3) !== 0) {
          nextSelectedIndex -= 1;
        }
        break;
      default:
        break;
    }

    var currentBoard = this.state.currentBoard
    if (currentBoard[nextSelectedIndex] === null) {
      currentBoard[nextSelectedIndex] = currentBoard[currentSelectedIndex];
      currentBoard[currentSelectedIndex] = null;
      this.setState({
        selectedSlotIndex: nextSelectedIndex,
        currentBoard
      });
    }
  },

  render() {
    var slots = [];
    for (var i = 0; i < 9; i++) {
      slots.push(
        <Slot key={i}
          onClick={this.onSelectSlot}
          index={i}
          content={this.state.currentBoard[i]} />
        );
    }

    return (
      <div className="board">
        <div className="slots">
          {
            slots
          }
        </div>
        <h2>A Sliding Puzzle</h2>
      </div>
    );
  }
});

export default Board;