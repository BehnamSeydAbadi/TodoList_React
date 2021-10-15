import React from 'react';

class AddTodoItem extends React.Component {
    state = {
        todoItemDecription: ""
    };

    handleOnChanged = ({ currentTarget: input }) => {
        this.setState({ todoItemDecription: input.value });
    }

    handleOnClicked = (onClickedEvent) => {

        const todoItemDecription = this.state.todoItemDecription;

        this.setState({ todoItemDecription: "" });

        onClickedEvent(todoItemDecription);
    }

    render() {
        const { label, buttonText, onClick } = this.props;

        return (
            <div>
                <div className='addItem-description'>{label}</div>
                <span>
                    <input className='addItem-input' type='text' value={this.state.todoItemDecription} onChange={this.handleOnChanged} />
                    <button className="toDoList-button" onClick={() => this.handleOnClicked(onClick)}>{buttonText}</button>
                </span>
            </div>
        );
    }
}

export default AddTodoItem;