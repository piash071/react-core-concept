
import './App.css'
import Counter from './Counter'
import Users from './Users'
import Friends from './Friends'

function App() {
  function handleClick(){
    alert('hey broooo')
  }
  return (
    <>
      <h2>React Core Concepts</h2>
      <Friends></Friends>
      <Users></Users>
      <Counter></Counter>
      <button onClick={handleClick}>Click Me</button>
    </>
  )
}

export default App
