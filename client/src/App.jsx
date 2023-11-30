import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {

    const [todos, setTodos] = useState([])
    const [newTodo, setNewTodo] = useState('')


    useEffect(() => {
        axios
            .get('http://localhost:5005/api/getAllTodos')
            .then(response => setTodos(response.data))
            .catch(err => console.log(err))
    }, [])

    const handleInputChange = (event) => {
        setNewTodo(event.target.value)
    }

    const handleAddTodo = () => {
        axios
            .post('http://localhost:5005/api/addTodo', { text: newTodo })
            .then(response => {
                setTodos([...todos, response.data])
                setNewTodo('')
            })
            .catch(err => console.log(err))
    }

    return (
        <>
            <div className="container">
                <div className="input-container">
                    <input type="text" value={newTodo} onChange={handleInputChange} className="input-field" />
                    <button onClick={handleAddTodo} className="button"> Add Todo </button>
                </div>

                <div className="card">
                    {
                        todos.map(elm => {
                            return (
                                <div key={elm._id} className="todo-card">
                                    {elm.text}
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default App
