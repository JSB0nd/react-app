// JSX
function Task01() {
    const tasks = ['Помыть посуду', 'Сделать домашнее задание', 'Прочитать книгку'];

    return (
        <div>
            <h1>Список дел</h1>
            <ul>
                {tasks.map((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
    );
}

export default Task01;