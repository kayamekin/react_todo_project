import React, { useState } from "react";

export const TodoForm = ({ addTodo }) => {
    const [value, setValue] = useState("");
    const [showError, setShowError] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!value) {
            setErrorMessage("Üzgünüm. Not kısmını boş bırakmadan ekleme işlemini gerçekleştiremezsiniz.");
            setShowError(true);
        } else {
            addTodo(value);
            setValue("");
        }
    };

    const showErrorPopup = (message) => {
        setErrorMessage(message);
        setShowError(true);
    };

    const hideErrorPopup = () => {
        setShowError(false);
    };

    return (
        <form className="TodoForm" onSubmit={handleSubmit}>
            <input
                type="text"
                className="todo-input"
                placeholder="Bugün neler yapmayı planlıyorsun?"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button type="submit" className="todo-btn">
                Görev ekle
            </button>

            {showError && (
                <>
                    <div className="error-overlay" onClick={hideErrorPopup}></div>
                    <div className="error-popup show">
                        <p className="error-message">{errorMessage}</p>
                        <button className="close-btn" onClick={hideErrorPopup}>Close</button>
                    </div>
                </>
            )}
        </form>
    );
};
