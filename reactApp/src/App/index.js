import React from 'react';
import { connect } from "react-redux";
import { changeName } from '../actions/users'
class App extends React.Component {
    constructor() {
        super()
    }

    render() {
        return (
            <div>
                <h1>{this.props.user.name}</h1>
                <button onClick={() => this.props.changeName('Rahul')}>Change Name</button>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        user: state.user
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeName: (name) => {
            dispatch(changeName(name))
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
