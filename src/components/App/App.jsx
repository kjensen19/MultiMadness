import './App.css'
import axios from 'axios'
import { useState } from 'react'
import MultiplicationTable from '../MultiplicationTable/MultTable'



//Test GET route, currently retrieves everything in the test table
const testDB = () => {
    console.log('Click?')
    axios({
        method: 'GET',
        url: '/api/test'
    }).then((response) => {
        console.log('response:', response)
    }).catch((error) => {
        console.log('GET error', error)
    })
}


    



function App(){
    const [newName, setNewName] = useState('');
    const [test, setTest] = useState(12)
    
    const testPost = () => {
        event.preventDefault()
        console.log('name = ', newName)
    }

    const testDel = () => {
        console.log('ID to del:')
    }
    const testUpdate = () => {
        console.log('ID to update:')
    }

    return(
        <>
            <form>
                <label htmlFor='newName'>Please Enter Your Name:
                    <input type="text" value={newName} name="newName" onChange={(event) => setNewName(event.target.value)} />
                </label>
                <button onClick={testPost}>Enter</button>
            </form>
            <button onClick={testDB}>Display High Scores</button>
            <button onClick={testDel}>TEST DEL</button>
            <button onClick={testUpdate}>TEST UPDATE</button>
            <label>What number would you like to practice? <input type='number' value={test} onChange={(event) => {setTest(event.target.value)}}></input></label>
            <MultiplicationTable multiplier={test}></MultiplicationTable>
            <button>Check Answers</button>
        </>
    )
}


export default App