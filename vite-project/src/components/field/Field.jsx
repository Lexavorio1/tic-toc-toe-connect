import { connect } from 'react-redux'
import { setCurrentPlayer } from '../../action'
import styles from './Field.module.css'

export const FieldContainer = ({ cells, isGameEnded, isDraw, dispatch }) => {
  const onCurrentPlayer = (index) => {
    dispatch(setCurrentPlayer(index))
  }
  return (
    <div className="grid grid-cols-3 col-span-5 gap-[8px] w-[300px]">
      {cells.map((cell, index) => (
        <button
          key={index}
          onClick={() => onCurrentPlayer(index)}
          className={`${styles.btn} ${cell ? styles[`btn-${cell}`] : ''}`}
          disabled={cell || isGameEnded || isDraw}
        >
          {cell}
        </button>
      ))}
    </div>
  )
}

const mapStateToProps = (state) => ({
  cells: state.cells,
  isGameEnded: state.isGameEnded,
  isDraw: state.isDraw
})

export const Field = connect(mapStateToProps)(FieldContainer);