import useActivity from "../hooks/useActivity";
import CalorieDisplay from "./CalorieDisplay";

export default function CalorieTracker() {
    const { caloriesBurned, caloriesConsumed } = useActivity();
    return (
        <>
            <h2 className="text-center font-black text-2xl text-white mb-5 ">Resumen de calorias</h2>
            <div className="flex flex-col  md:flex-row md:justify-between gap-20  ">
                <CalorieDisplay text="Consumidas" calories={caloriesConsumed} />
                <CalorieDisplay text="Quemadas" calories={caloriesBurned} />
                <CalorieDisplay text="Diferencia" calories={caloriesConsumed - caloriesBurned} />
            </div>
        </>
    );
}
