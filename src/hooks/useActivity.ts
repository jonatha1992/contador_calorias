import { useContext } from "react";
import { ActivityContext } from "../context/ActivityContext";
export default function useActivity() {
    const context = useContext(ActivityContext);
    return context;
}
