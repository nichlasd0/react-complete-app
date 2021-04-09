import React, {Component, useState} from 'react';
import './App.css';
import Person from './Person/Person';
import classes from './App.css'

class App extends Component {
    state = {
        persons: [
            {id: '1', name: 'Max', age: 28},
            {id: '2', name: 'Magda', age: 34},
            {id: '3', name: 'Nichlas', age: 31}
        ],
        otherState: 'some other value',
        showPersons: false
    }


    deletePersonHandler = (personIndex) => {
        const persons = [...this.state.persons];
        persons.splice(personIndex, 1);
        this.setState({persons: persons});
    }
    nameChangedHandler = (event, id) => {
        const personIndex = this.state.persons.findIndex(p => {
            return p.id === id;
        });
        const person = {
            ...this.state.persons[personIndex]
        };
        person.name = event.target.value;
        const persons = [...this.state.persons];
        persons[personIndex] = person;


        this.setState({
            persons: persons
        });
    }
    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState({showPersons: !doesShow});
    }

    render() {
        let btnClass = '';
        let persons = null;
        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map((person, index) => {
                        return <Person
                            click={() => this.deletePersonHandler(index)}
                            name={person.name}
                            age={person.age}
                            key={person.id}
                            changed={(event) => this.nameChangedHandler(event, person.id)}/>
                    })}
                </div>
            );
            btnClass = classes.Red;
        }
        let classes = [];
        if (this.state.persons.length <= 2) {
            classes.push('red');
        }
        if (this.state.persons.length <= 1) {
            classes.push('bold');
        }

        return (

            <div className={classes.App}>
                <h1>Hello</h1>
                <p className={assignedClasses.join(' ')}>this is working</p>
                <button className={btnClass.join(' ')} onClick={this.togglePersonsHandler}>
                    Toggle persons
                </button>
                {persons}
            </div>

        );
    }

    //return React.createElement('div',{className: 'App'}, null, React.createElement('h1', null, 'Working?'));
}

export default App;

