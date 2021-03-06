import React, { Component } from 'react'
import ContactList from './ContactList/ContactList'
import Filter from './Filter/Filter'


export default class App extends Component {
    state = {
        people: [],
        filter: 'name',
        value: '',

    }

    componentDidMount() {
        fetch("https://venbest-test.herokuapp.com/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        people: result,
                    });
                },
            )
    }

    changeFilter = filter => {
        this.setState({
            filter: filter.target.name,
            value: filter.target.value,
        })
    }

    getVisibleContacts = () => {
        return this.state.people.filter(persone =>
            persone[this.state.filter].toString().toLocaleLowerCase().includes(this.state.value.toString().toLocaleLowerCase()))
        // }

    }


    render() {
        return (
            <>
                <h2>Фильтры</h2>
                <Filter onChange={this.changeFilter} />
                <ContactList data={this.getVisibleContacts()} />
            </>
        )
    }


}
