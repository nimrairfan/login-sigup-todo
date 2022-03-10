import react, { useEffect, useState } from 'react';
// import './App.css';
import { db } from '../config/firebase.js'
import { collection, addDoc, getDocs, updateDoc, doc, deleteDoc } from "firebase/firestore"
import 'bootstrap/dist/css/bootstrap.min.css';
// import { button } from 'react-bootstrap';
import banner from '../images/todo image.png'
import '../components/todo.css'

const Todo = () => {

  const [inputValue, setInputValue] = useState("")
  const [todo, setTodo] = useState([])
  const [Refresh, setRefresh] = useState(false)

  useEffect(async () => {
    const dbRef = collection(db, 'todos')
    const getData = await getDocs(dbRef)
    let getTodo = []

    getData.forEach((doc) => {
      // console.log(doc.id)
      // console.log(doc.data())
      getTodo.push({ key: doc.id, todo: doc.data().todo })
    })
    setTodo(getTodo)
    console.log("getTodo", getTodo)
  }, [Refresh])

  const addTodo = async () => {
    const dbRef = collection(db, "todos")
    try {
      const addData = await addDoc(dbRef, {
        todo: inputValue
      });
      console.log(addData)
      setRefresh(!Refresh)
      setInputValue("")
    } catch (error) {
      console.log(error)
    }
  }
  const editTodo = async (key) => {
    const editvalue = prompt("enter value")
    const dbRef = doc(db, "todos", key)
    const updateData = await updateDoc(dbRef, {
      todo: editvalue
    })
    setRefresh(!Refresh)
  }
  const delTodo = async (key) => {
    const dbRef = doc(db, "todos", key)
    const delTodo = await deleteDoc(dbRef)
    setRefresh(!Refresh)

  }
  // const deleteTodo = async() =>{
  //   const dbRef = collection(db, "todos" )
  //   const deleteall = await deleteDoc(dbRef , {
  //     todo : []
  //   })
  // } 
  return (
    <div className="mainbox">
      <div className='banner'>
        <img src={banner} alt="" width="100%" />
      </div>
      <div className='w-50 mx-auto maintodo'>

        <br />
        <input type="text" size='80' className='maininput' value={inputValue}
          onChange={(e) => { setInputValue(e.target.value) }}
          placeholder="Enter Todo" />
        <button className='btn btn-light' onClick={addTodo}>ADD Todo</button>
        {/* <button onClick={deleteTodo}>Delete Todo</button> */}
      </div>

      <div className='list '>
        <ul>
          {todo.map((val, ind) => {
            console.log(val)
            return (
              <div key={ind} className='main-li'>
                <div>
                  <li className=' d-inline-block '> {val.todo}</li>
                </div>
                <div>
                  <button className='btn btn-light ' onClick={() => editTodo(val.key)}>Edit</button>

                  <button className='btn btn-light mx-2' onClick={() => delTodo(val.key)}>Delete</button>
                </div>
              </div>
            )
          })}
        </ul>
      </div>
    </div>
  );
}

export default Todo