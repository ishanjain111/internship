import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
    var [status,setStatus] = useState([]);

    function send(event){
        event.preventDefault();
        const element = document.querySelector('#check');
        axios.post('https://heroku-deployment-react-flask.herokuapp.com/api', { message: element.value } ).then (res => {
            axios.get('https://heroku-deployment-react-flask.herokuapp.com/api').then(result => {
                setStatus(result.data);
                console.log(result.data)
            });
        });
    }

    return (
        <div>
        <form>
            <h1>heroku-deployment-react-flask</h1>
            <input type="text" id="check" /><br/><br/>
            <button onClick={send}>Send</button>
            <ul>
                {status.map(item => <li key={status.indexOf(item)}>{item.message}</li>)}
            </ul>
        </form>
        </div>
    );
}
export default App;