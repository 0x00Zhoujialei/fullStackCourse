import logo from './logo.svg';
import './App.css';

const Hello = (props) => {
  return (
      <div>
        <p>Hello {props.name}, you are {props.age} years old</p>
      </div>
  )
}

const Footer = () => (
    <div>
      greeting app created by <a href="https://github.com/mluukkai">mluukkai</a>
    </div>
)

const App = () => {
  const name = "Peter"
  const age = 10
  return (
      <>
        <h1>Greetings</h1>
        <Hello name="George" age={26 + 10}/>
        <Hello name={name} age={age}/>
        <Footer />
      </>
  )
}

export default App;
