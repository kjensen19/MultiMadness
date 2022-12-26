import './App.css'
import axios from 'axios'
import { useState } from 'react'
import MultiplicationTable from '../MultiplicationTable/MultTable'
import Clock from './Timer/Clock'



//Test GET route, currently retrieves everything in the test table
const testDB = () => {
    console.log('List of scores from the DB')
    //Need to add to data: name, multiplier
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
        //Use to add new scores to DB when test is complete
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
            <label>What number would you like to practice? 
                <input type='number' value={test} onChange={(event) => {setTest(event.target.value)}} />
            </label>
            <Clock />
            <MultiplicationTable multiplier={test}></MultiplicationTable>
            <button>Check Answers</button>
        </>
    )
}


export default App