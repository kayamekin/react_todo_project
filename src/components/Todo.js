import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';

export const Todo = ({ task, deleteTodo, editTodo }) => {
    const [completed, setCompleted] = useState(false);

    // Toggles the completed state of the task when the "Tamam" button is clicked
    const toggleCompleted = () => {
        setCompleted(!completed);
    };

    return (
        <div className="Todo">
            <p className={completed ? "completed" : ""}>
                {task.task}
            </p>
            <div className='icon_buttons'>
                {/* Renders a FontAwesome icon for editing the task when clicked */}
                <FontAwesomeIcon className="icon_pen_to_square icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />
                {/* Renders a FontAwesome icon for deleting the task when clicked */}
                <FontAwesomeIcon className="icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
                {/* Renders a button for toggling the completed state of the task when clicked */}
                <FontAwesomeIcon className="icon" icon={faCheck} onClick={toggleCompleted} ></FontAwesomeIcon>
            </div>
        </div>
    );
};
