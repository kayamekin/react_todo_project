import React, { useState } from 'react'

export const EditTodoForm = ({ editTodo, task }) => {
    const [value, setValue] = useState(task.task);

    // The form is submitted and page refreshing is prevented when the button is clicked.
    const handleSubmit = e => {
        // We pay attention to the page refresh situation.
        e.preventDefault();
        editTodo(value, task.id);
        setValue("");
    }


    return (
        <form className='TodoForm' onSubmit={handleSubmit}>
            {/* Let's update the state we created.*/}

            <input type='text' className='todo-input'
                placeholder='Update Task'
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type='submit' className='todo-btn'>Update Task</button>
        </form>
    )
}
