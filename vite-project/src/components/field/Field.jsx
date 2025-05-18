import { connect } from "react-redux";
import { setCurrentPlayer } from "../../action";
import { Component } from "react";
import styles from "./Field.module.css";
/* функция
export const FieldContainer = ({ cells, isGameEnded, isDraw, dispatch }) => {
  const onCurrentPlayer = (index) => {
    dispatch(setCurrentPlayer(index));
  };
  return (
    <div className="grid grid-cols-3 col-span-5 gap-[8px] w-[300px]">
      {cells.map((cell, index) => (
        <button
          key={index}
          onClick={() => onCurrentPlayer(index)}
          className={`${styles.btn} ${cell ? styles[`btn-${cell}`] : ""}`}
          disabled={cell || isGameEnded || isDraw}
        >
          {cell}
        </button>
      ))}
    </div>
  );
};
*/

export class OldFieldContainer extends Component {
  constructor(props) {
    super(props);
  }
  onCurrentPlayer(index) {
     this.props.dispatch(setCurrentPlayer(index));
  }
  render() {
    const { cells, isGameEnded, isDraw } = this.props;

    return (
      <div className="grid grid-cols-3 col-span-5 gap-[8px] w-[300px]">
        {cells.map((cell, index) => (
          <button
            key={index}
            onClick={() => this.onCurrentPlayer(index)}
            className={`${styles.btn} ${cell ? styles[`btn-${cell}`] : ""}`}
            disabled={cell || isGameEnded || isDraw}
          >
            {cell}
          </button>
        ))}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  cells: state.cells,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw,
});

export const Field = connect(mapStateToProps)(OldFieldContainer);
