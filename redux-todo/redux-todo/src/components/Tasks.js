import React, { Component } from 'react';
import { connect} from 'react-redux';
import { addNewTask, toggleTask } from '../actions';
import "../App.css"

class Tasks extends Component {
    state = {
        task: '',
    }

    handleChange = e => {
        console.log(this.state)
        this.setState({[e.target.name]: e.target.value})
    }

    addTask = (e) => {
        e.preventDefault();
        if(this.state.task === '') {
            alert('new task must not be empty!');
        }
        this.props.addNewTask(this.state.task);
        this.setState({task: ''});
    }

    toggleTask = (e, index) => {
        console.log(index)
        e.preventDefault();
        this.props.toggleTask(index);
      }
    render() {
        console.log(this.props.tasks);
        return (
            <>
            <ul>
                <h1>Redux To-Do List</h1>
                {this.props.tasks.map((item, index) => {
                    return (
                        <li className={item.complete ? 'completed-task': 'task'} onClick={(e) => this.toggleTask(e, index)} key={index}>
                            {item.task}
                        </li>
                    )
                })}
            </ul>
            <form onSubmit={this.addTask}>
                <input name="task" value={this.state.task} onChange={this.handleChange}/>
                <button>Submit</button>
            </form>
            </>
        );
    }
}

const mapStateToProps = state => {
    return {
        tasks: state.tasks
    }
}

export default connect(mapStateToProps, { addNewTask, toggleTask })(Tasks);