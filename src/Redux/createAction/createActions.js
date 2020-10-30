import { createAction } from "redux-actions";
import * as actions from "./actionsTypes";

export const loginReq = createAction(actions.LOGIN_REQ);
export const loginSuccess = createAction(actions.LOGIN_SUCCESS);
export const loginErr = createAction(actions.LOGIN_ERR);

export const signupReq = createAction(actions.SIGNUP_REQ);
export const signupSuccess = createAction(actions.SIGNUP_SUCCESS);
export const signupErr = createAction(actions.SIGNUP_ERR);

export const listReq = createAction(actions.LIST_REQ);
export const listSuccess = createAction(actions.LIST_SUCCESS);
export const listErr = createAction(actions.LIST_ERR);

export const ListPollRequest = createAction(actions.List_PollRequest);
export const ListPollSuccess = createAction(actions.List_PollSuccess);
export const ListPollError = createAction(actions.List_PollError);

export const CreateNewPollRequest = createAction(actions.Create_NewPollRequest);
export const CreateNewPollSuccess = createAction(actions.Create_NewPollSuccess);
export const CreateNewPollError = createAction(actions.Create_NewPollError);

export const UpdatePollTitleRequest = createAction(actions.Update_PollTitleRequest);
export const UpdatePollTitleSuccess = createAction(actions.Update_PollTitleSuccess);
export const UpdatePollTitleError = createAction(actions.Update_PollTitleError);

export const DeletePollRequest = createAction(actions.Delete_PollRequest);
export const DeletePollSuccess = createAction(actions.Delete_PollSuccess);
export const DeletePollError = createAction(actions.Delete_PollError);

export const DeleteOptionRequest = createAction(actions.Delete_OptionRequest);
export const DeleteOptionSuccess = createAction(actions.Delete_OptionSuccess);
export const DeleteOptionError = createAction(actions.Delete_OptionError);

export const AddNewOptionRequest = createAction(actions.AddNew_OptionRequest);
export const AddNewOptionSuccess = createAction(actions.AddNew_OptionSuccess);
export const AddNewOptionError = createAction(actions.AddNew_OptionError);

export const PollRequest = createAction(actions.Poll_Request);
export const PollSuccess = createAction(actions.Poll_Success);
export const PollError = createAction(actions.Poll_Error);