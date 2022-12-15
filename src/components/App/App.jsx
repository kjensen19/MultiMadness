import './App.css'
import axios from 'axios'

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
    return(
        <button onClick={testDB}>TEST</button>
    )
}


export default App