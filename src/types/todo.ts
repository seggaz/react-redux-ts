export  interface TodoState {
	todos: any[];
	loading: boolean;
	error: null | string;
	page: number;
	limit: number;
}

export enum TodoActionsTypes {
	FETCH_TODOS = 'FETCH_TODOS',
	FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
	FETCH_TODOS_ERROR = 'FETCH_TODOS_ERROR',
	FETCH_TODOS_PAGE = 'FETCH_TODOS_PAGE'
}

interface FetchTodoActions {
	type: TodoActionsTypes.FETCH_TODOS
}
interface FetchTodoSuccessActions {
	type: TodoActionsTypes.FETCH_TODOS_SUCCESS
	payload: any[];
}
interface FetchTodoErrorActions {
	type: TodoActionsTypes.FETCH_TODOS_ERROR
	payload: string;
}
interface SetTodoActions {
	type: TodoActionsTypes.FETCH_TODOS_PAGE
	payload: number;
}

export type TodoAction = 
	FetchTodoActions
		| FetchTodoSuccessActions
		| FetchTodoErrorActions  
		|  SetTodoActions

