import React, {useState} from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {
    const [personsState, setPersonsState] = useState({
        persons: [
            {name: 'Max', age: 28},
            {name: 'Magda', age: 34},
            {name: 'Nichlas', age: 31}
        ],
        otherState: 'some other value'
    });

    const [otherState, setOtherState] = useState('some other value');

     const switchNameHandler = (newName) => {
        console.log('was clicked');
        setPersonsState({
            persons: [
                {name: newName, age: 28},
                {name: 'Magda', age: 34},
                {name: 'Nichlas', age: 32}
            ],
            otherState: personsState.otherState
        })
    }
    const nameChangedHandler = (event) => {
        setPersonsState({
            persons: [
                {name: 'Max', age: 28},
                {name: event.target.value, age: 34},
                {name: 'Nichlas', age: 32}
            ]
    })
     }
     const style = {
         backgroundColor: 'white',
         font: 'inherit',
         border: '1px solid blue',
         padding: '8px',
         cursor: 'pointer'
     };
    return (
        
        <div className="App">
            <h1>Hello</h1>
            <p>this is working</p>
            <button 
                style={style}
                onClick={() => switchNameHandler('Maximilian!!!')}>Switch Name</button>
            <Person 
                name={personsState.persons[0].name} 
                age={personsState.persons[0].age}/>
            <Person 
                name={personsState.persons[1].name} 
                age={personsState.persons[1].age}
            click={switchNameHandler.bind(this, 'Max')}
            changed={nameChangedHandler }>My Hobbies: Racing</Person>
            <Person 
                name={personsState.persons[2].name} 
                age={personsState.persons[2].age}/>
        </div>
    );
    //return React.createElement('div',{className: 'App'}, null, React.createElement('h1', null, 'Working?'));
}

export default app;

