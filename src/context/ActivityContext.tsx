import { createContext, useReducer, Dispatch, ReactNode, useMemo } from "react";
import { ActivityState, ActivityActions, activityReducer, initialState } from "../reducers/activity-reducers";

type ActivityProviderProps = {
    children: ReactNode;
};

type activityContextProps = {
    state: ActivityState;
    dispatch: Dispatch<ActivityActions>;
    caloriesConsumed: number;
    caloriesBurned: number;
};
export const ActivityContext = createContext<activityContextProps>(null!);

export default function ActivityProvider({ children }: ActivityProviderProps) {
    const [state, dispatch] = useReducer(activityReducer, initialState);

    useMemo(() => localStorage.setItem("activities", JSON.stringify(state.activities)), [state.activities]);

    const caloriesConsumed = useMemo(
        () =>
            state.activities.reduce(
                (total, actitivity) => (actitivity.category === 1 ? total + actitivity.calories : total),
                0
            ),
        [state.activities]
    );

    const caloriesBurned = useMemo(
        () =>
            state.activities.reduce(
                (total, actitivity) => (actitivity.category === 2 ? total + actitivity.calories : total),
                0
            ),
        [state.activities]
    );

    return (
        <ActivityContext.Provider value={{ state, dispatch, caloriesConsumed, caloriesBurned }}>
            {children}
        </ActivityContext.Provider>
    );
}
