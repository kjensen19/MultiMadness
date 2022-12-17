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
                <label htmlFor='newName'>
                    <input type="text" value={newName} name="newName" onChange={(event) => setNewName(event.target.value)} />
                </label>
                <button onClick={testPost}>TEST POST</button>
            </form>
            <button onClick={testDB}>TEST GET</button>
            <button onClick={testDel}>TEST DEL</button>
            <button onClick={testUpdate}>TEST UPDATE</button>
            <MultiplicationTable multiplier={3}></MultiplicationTable>
        </>
    )
}


export default App