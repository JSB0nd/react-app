// Props ♻️
function UserCard({ name, age }) {
    return (
        <div>
            <h2>{name}</h2>
            <p>{age} лет</p>
        </div>
    );
}

function App() {
    return (
        <div>
            <h1>Пользователи</h1>
            <UserCard name='Мария' age={25}></UserCard>
            <UserCard name='Леонид' age={35}></UserCard>
            <UserCard name='Иван' age={30}></UserCard>
        </div>
    );
}

export default App;