const app = () => {
    const [count, setCount] = Rewrite.useState(0);
    return (
        <div>
            <h1>hello world</h1>
            {count}
            <button onClick={() => setCount(count + 1)}>+</button>
        </div>
    );
};

Rewrite.render(app, document.getElementById("root"));
