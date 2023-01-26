import { Priority } from "../../../models/priority";
import { RootState } from "../../../store";

export interface NotificationState {
    priority: Priority;
}
  
export const initialState: NotificationState = {
priority: 'low',
};
  