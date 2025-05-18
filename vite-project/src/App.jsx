import { Field } from './components'
import { Info } from './components'
import { store } from './store'

export const App = () => {
  const restart = () => {
    store.dispatch({ type: 'RESTART_GAME' })
  }

  return (

      <div className="flex flex-col text-center justify-center g-[15px]">
        <Info />
        <button className='border-black border-solid border-2 m-[20px] outline outline-offset-2 outline-blue-500'
         onClick={restart}>Начать заново</button>
        <Field />
      </div>

  )
}