// Hooks & useState ⚓

// 1. Реализовать кнопку для уменьшения счетчика (Counter из урока).
// Сделать так, чтобы нельзя было уменьшить в минус. Т.е. 0 и все, ниже нельзя.
// Если количество равное 0 необходимо показать красный текст с надписью
// "Пожалуйста, измените количество, оно не может быть равно 0;

import {useState} from 'react';

export function Counter() {
    const [count, setCount] = useState(0);
    const [warning, setWarning] = useState(false);

    function increase() {
        setWarning(false);
        setCount((prevState) => prevState + 1); // Теперь всё корректно!
    }

    function decrease() {
        if (count === 0) {
            setWarning(true);
            // setCount((prevState) => prevState - 1);
        } else {
            setWarning(false);
            setCount((prevState) => prevState - 1);
        }
    }

    const textStyle = {
        color: 'red',
        fontWeight: 'bold',
        fontSize: '1.2rem',
    };

    return (
        <>
            <button onClick={increase}>Увеличить</button>
            <button onClick={decrease}>Уменьшить</button>
            <p>Счёт: {count}</p>
            {warning && <p style={textStyle}>Пожалуйста, измените количество, оно не может быть равно 0</p>}
        </>
    )
}


//2. По аналогии со вторым примером сделать кнопку получения конкретного поста.
// На странице должно быть поле ввода ID поста.
// При клике на кнопку, нужно взять этот ID из поля, получить по нему данные и показать их на странице.

export function Spa() {
    const [page, setPage] = useState("home");
    const [postId, setPostId] = useState("");
    const [postData, setPostData] = useState([null]);

    // примеры данных
    const posts = [
        {id: 1, title: "Пост 1", body: "Содержимое поста 1"},
        {id: 2, title: "Пост 2", body: "Содержимое поста 2"},
        {id: 3, title: "Пост 3", body: "Содержимое поста 3"},
        {id: 4, title: "Пост 4", body: "Содержимое поста 4"},
        {id: 5, title: "Пост 5", body: "Содержимое поста 5"},
    ];

    function fetchPost() {
        const foundPost = posts.find(post => post.id === Number(postId));
        setPostData(foundPost || null);
    }

    return (
        <div>
            <nav>
                <button onClick={() => setPage("home")}>Главная</button>
                <button onClick={() => setPage("about")}>О нас</button>
            </nav>

            {page === "home" &&  (
                <>
                    <h1>Главная страница</h1>
                    <input placeholder="Номер поста 1-5"
                           value={postId}
                           type="number"
                           min={1}
                           max={5}
                           onChange={(e) => setPostId(e.target.value)}
                    />
                    <button onClick={fetchPost}>Показать пост</button>

                    {postData && (
                        <div>
                            <h2>{postData.title}</h2>
                            <p>{postData.body}</p>
                        </div>
                    )}
                </>
            )}

            {page === "about" && <h1>О нас</h1>}
        </div>
    );
}
