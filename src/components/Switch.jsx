const Switch = ({ text, onClick }) => {
    return (
        <div className='todoList-element sort-container'>
            <span className='description sort-description'>
                {text}
            </span>
            <label className='switch pointer'>
                <input type='checkbox' onClick={onClick} /> <div></div>
            </label>
        </div>
    );
}

export default Switch;