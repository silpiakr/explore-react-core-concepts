import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Todo from './Todo'
import Actor from './Actor'
import Singer from './Singer'
import BookStore from './Book'

function App() {

  const books = [
    {id: 1, name: 'Biology', price: 680},
    {id: 2, name: 'Chemistry', price: 400},
    {id: 3, name: 'Math', price: 550},
    {id: 4, name: 'Pysics', price: 430}
  ]
  const actors = ['sakib', 'akib', 'Raj', 'Rakib', 'Salman'];

  const singers = [
    {id: 1, name: 'Dr Mahfujur Rahman', age: 68},
    {id: 2, name: 'Eva Rahman', age: 40},
    {id: 3, name: 'Shuvro Dev', age: 50},
    {id: 4, name: 'Pritom', age: 30}
  ]
  return (
    <>
      <h1>Vite + React</h1>
      <BookStore books={books}></BookStore>

      {/* { 
        books.map(books => <Booksooks books={books}></Booksooks>)
      } */}

      {
        singers.map(singer => <Singer singer ={singer}></Singer>)
      }

      <Actor name={'Nondini'}></Actor>
      {
        actors.map(actor => <Actor name={actor}></Actor>)
      }


      {/* <Todo task='Learn React' isDone ={false}></Todo>
      <Todo task='Explore Core concepts' isDone={true}></Todo>
      <Todo task='Try JSX' isDone={true}></Todo> */}

      {/* <Person></Person>
      <Student></Student>
      <Student grade='7' score='99'></Student>
      <Student grade='12' score='87'></Student>
      <Develpoer></Develpoer>
      <Person></Person>
      <Device name="iPhone" price="50"></Device>
      <Device name="Laptop" price="75"></Device> */}

    </>
  )
}

// function Person(){
//   const age = 25;
//   const money = 200;
//   const person = {name: 'sakib', age: 20}
//   return <h3>I am {person.name} with age: {age + money}</h3>
// }

// const {grade, score} = {grade: '7', score: '99'}

// function Student({grade = 1, score = 0}){
//   console.log(grade, score)
//   return (
//   <div className='student'>
//     <h3>This is a student</h3>
//     <p>Class: {grade}</p>
//     <p>Score: {score}</p>
//   </div>
//   )
// }


// function Develpoer (){
//   const develpoerStyle = {
//     margin: '20px',
//     padding: '20px',
//     border: '2px solid blue',
//     color: 'yellow',
//     borderRadius: '7px'
//   }
//   return (
//     <div style={develpoerStyle}>
//       <h3>Devo loper</h3>
//       <p>Coding</p>
//     </div>
//   )
// }

// function Device(props) {
//   console.log(props)
//   return <h2>This is device: {props.name} price:{props.price}</h2>
// }



export default App
