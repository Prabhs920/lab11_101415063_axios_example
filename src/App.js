import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

class PersonList extends Component {
    state = {
        persons: []
    };

    componentDidMount() {
        axios.get('https://randomuser.me/api/?results=10')
            .then(res => {
                const persons = res.data.results;
                this.setState({ persons });
            });
    }

    render() {
        return (
            <div className="container mt-5">
                <h1 className="text-center mb-4">User List</h1>
                <div className="row">
                    {this.state.persons.map((person) => (
                        <div key={person.login.uuid} className="col-md-6 mb-4">
                            <div className="card bg-info text-white">
                                <div className="card-body">
                                    <div className="d-flex">
                                        <img
                                            src={person.picture.large}
                                            alt={person.name.first}
                                            className="rounded-circle me-3"
                                            style={{ width: '80px', height: '80px' }}
                                        />
                                        <div>
                                            <h5 className="card-title">
                                                {person.name.title} {person.name.first} {person.name.last}
                                            </h5>
                                            <p className="mb-1"><strong>User Name:</strong> {person.login.username}</p>
                                            <p className="mb-1"><strong>Gender:</strong> {person.gender.toUpperCase()}</p>
                                            <p className="mb-1"><strong>Email:</strong> {person.email}</p>
                                        </div>
                                    </div>
                                    <hr />
                                    <p><strong>Address:</strong> {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}, ${person.location.country}`}</p>
                                    <p><strong>Phone:</strong> {person.phone}</p>
                                    <p><strong>Birth Date and Age:</strong> {`${new Date(person.dob.date).toLocaleDateString()} (${person.dob.age})`}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}

export default PersonList;
