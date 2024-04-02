import useActivity from "../hooks/useActivity";

export default function CalorieTracker() {
    const { caloriesBurned, caloriesConsumed } = useActivity();
    return (
        <>
            <h2 className="text-center font-bold text-2xl text-white mb-10 ">Resumen de calorias</h2>
            <div className="flex flex-col  md:flex-row md:justify-between gap-20  ">
                <div>
                    <p className="text-center font-bold text-6xl text-white">{caloriesConsumed}</p>
                    <p className="text-center font-bold text-1xl text-white">Consumidas</p>
                </div>
                <div>
                    <p className="text-center font-bold text-6xl text-white">{caloriesBurned}</p>
                    <p className="text-center font-bold text-1xl text-white">Ejercicio</p>
                </div>
                <div>
                    <p className="text-center font-bold text-6xl text-white">{caloriesConsumed - caloriesBurned}</p>
                    <p className="text-center font-bold text-1xl text-white">Diferencia</p>
                </div>
            </div>
        </>
    );
}
