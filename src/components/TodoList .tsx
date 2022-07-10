import React from 'react';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { useActions } from '../hooks/useActions';
import { useEffect } from 'react';

const TodoList: React.FC  = () => {
	const {page, error, loading, todos, limit} = useTypedSelector(state => state.todo)
	const {fetchTodos, setTodosPage} = useActions()
	const pages = [1, 2, 3, 4, 5]

	useEffect(() => {
		fetchTodos(page, limit)
	}, [page]) 

	if (loading) {
		return <h1>Идет загрузка!</h1>
	}
	if (error) {
		return <h1>{error}</h1>
	}

	return (
		<div>
			{todos.map(todo =>
				<div key={todo.id}>{todo.id} - {todo.title}</div>
			)}
			<div style={{display: "flex"}}>
				{pages.map(p =>
				<div
					onClick={() => setTodosPage(p)}
					style={{border:p === page ? '2px solid green' : '1px solid gray', padding: 10}}
				>
					{p}
				</div>
			)}
			</div>
		</div>
	);
};

export default TodoList ;