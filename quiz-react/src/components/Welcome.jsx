import './Welcome.css'
import Quiz from "../img/quiz.svg"  

export const Welcome = () => {
  return (
    <div className='welcome'>
        <h2>Seja Bem Vindo</h2>
        <p>Clique para iniciar</p>
        <button>Iniciar</button>
        <img src={Quiz} alt="Inicio do Quiz" />
    </div>
  )
}

