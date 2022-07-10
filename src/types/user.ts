export interface UserState {
	users: any[];
	loading: boolean;
	error: null | string;
}

export enum UserActionTypes {
	FETCH_USERS = "FETCH_USERS",
	FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
	FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FethUsersAction {
	type: UserActionTypes.FETCH_USERS;
}

interface FethUsersSuccessAction {
	type: UserActionTypes.FETCH_USERS_SUCCESS;
	payload: any[];
}
interface FethUsersErrorAction {
	type: UserActionTypes.FETCH_USERS_ERROR;
	payload: string;
}


export type UserAction = FethUsersAction | FethUsersSuccessAction | FethUsersErrorAction
