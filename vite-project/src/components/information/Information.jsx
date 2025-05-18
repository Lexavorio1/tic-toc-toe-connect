import { connect } from 'react-redux';
import { Component } from "react";
/* функция
export const InfoContainer = ({ currentPlayer, isGameEnded, isDraw }) => {
  if (isGameEnded) return <div className="text-center">Победитель: {currentPlayer}</div>
  if (isDraw) return <div className="text-center">Ничья!</div>;
  return <div>Текущий ход: {currentPlayer}</div>
}*/

export class OldInfoContainer extends Component {
    constructor (props) {
        super(props)
    }
    
    render() {
        const { currentPlayer, isGameEnded, isDraw } = this.props
        if (isGameEnded) return <div className="text-center">Победитель: {currentPlayer}</div>
        if (isDraw) return <div className="text-center">Ничья!</div>;
        return <div>Текущий ход: {currentPlayer}</div>
    }
}

const mapStateToProps = (state) => ({
  currentPlayer: state.currentPlayer,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw
})

export const Info = connect(mapStateToProps)(OldInfoContainer)