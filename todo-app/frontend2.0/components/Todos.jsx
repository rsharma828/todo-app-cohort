
// export function Todos(todos) {
//     return <div>
//         {todos.map((todo)=> {
//             return <div>
//                 {/* <h1>{todo.title}</h1>
//                 <h2>{todo.description}</h2>
//                 <button>{todo.completed == true ? "completed" : "Mark as completed"}</button> */}
//                 <h1>ksfns isks </h1>
//             </div>
//         })
// }
//     </div>
// }


export function Todos({ todos }) {
    if (!todos || !Array.isArray(todos)) {
        // Handle the case where 'todos' is not defined or not an array
        return <div>No todos to display.</div>;
    }

    return (
        <div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h1>{todo.title}</h1>
                    <h2>{todo.description}</h2>
                    <button>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                </div>
            ))}
        </div>
    );
}
