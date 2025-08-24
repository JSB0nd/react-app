function Root() {
    const tasks = ['Помыть посуду', 'Сделать домашнее задание', 'Прочитать книгку'];

    return (
        <>
        <div>
            <h1>Список дел</h1>
            <ul>
                {tasks.forEach((task, index) => (
                    <li key={index}>{task}</li>
                ))}
            </ul>
        </div>
        </>
    );
}