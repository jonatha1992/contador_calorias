import { Activity } from "../types/index";

export type ActivityActions =
    | { type: "save-activity"; payload: { newActivity: Activity } }
    | { type: "set-activeId"; payload: { id: Activity["id"] } }
    | { type: "delete-activity"; payload: { id: Activity["id"] } }
    | { type: "restart-app" };

export type ActivityState = {
    activities: Activity[];
    activeId: Activity["id"];
};

const localStorageActivities = (): Activity[] => {
    try {
        const activities = localStorage.getItem("activities");
        if (!activities) return [];
        const parsed = JSON.parse(activities);
        return Array.isArray(parsed) ? parsed : [];
    } catch (err) {
        console.error("Error al leer activities de localStorage:", err);
        return [];
    }
};

export const initialState: ActivityState = {
    activities: localStorageActivities(),
    activeId: "",
};

export const activityReducer = (state: ActivityState = initialState, action: ActivityActions) => {
    if (action.type === "save-activity") {
        let updatedActivities: Activity[] = [];
        if (state.activeId) {
            updatedActivities = state.activities.map((activity) =>
                activity.id === state.activeId ? action.payload.newActivity : activity
            );
        } else {
            updatedActivities = [...state.activities, action.payload.newActivity];
        }
        return {
            ...state,
            activities: updatedActivities,
            activeId: "",
        };
    }

    if (action.type === "set-activeId") {
        return {
            ...state,
            activeId: action.payload.id,
        };
    }

    if (action.type === "delete-activity") {
        return {
            ...state,
            activities: state.activities.filter((activity) => activity.id !== action.payload.id),
            activeId: state.activeId === action.payload.id ? "" : state.activeId,
        };
    }

    if (action.type === "restart-app") {
        return {
            activities: [],
            activeId: "",
        };
    }

    return state;
};
