import { categories } from "../data/categories";
import { Activity } from "../types";
import { ChangeEvent, useState, FormEvent } from "react";
export default function Form() {
    const [activity, setActivity] = useState<Activity>({
        id: "",
        category: 1,
        name: "",
        calories: 0,
    });

    const handleChange = (event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLSelectElement>) => {
        const isNumberField = ["category", "calories"].includes(event.target.id);
        setActivity({
            ...activity,
            [event.target.id]: isNumberField ? Number(event.target.value) : event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        if (isValid()) {
            console.log(activity);
        }
    };

    const isValid = () => {
        const { name, calories } = activity;
        return name.trim().length > 0 && calories > 0;
    };

    return (
        <form className=" bg-white  space-y-3 shadow-lg p-10 rounded-lg " onSubmit={handleSubmit}>
            <p className="text-center font-black text-2xl">Completa los datos</p>
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="category">
                    Categoria
                </label>
                <select
                    id="category"
                    className="border border-slate-300 w-full p-3 rounded-lg"
                    value={activity.category}
                    onChange={handleChange}
                >
                    {categories.map((category) => (
                        <option className="py-3" key={category.id} value={category.id}>
                            {category.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="activity">
                    Actividad
                </label>
                <input
                    id="activity"
                    type="text"
                    placeholder="ej. Comidad, Juego de naranja , Ejercicio..."
                    className="border border-slate-300 w-full p-3 rounded-lg"
                    value={activity.name}
                    onChange={handleChange}
                />
            </div>
            <div className="grid grid-cols-1 gap-3">
                <label className="font-bold" htmlFor="calories">
                    Calorias
                </label>
                <input
                    id="calories"
                    type="number"
                    placeholder="ej. 1000"
                    className="border border-slate-300 w-full p-3 rounded-lg"
                    value={activity.calories}
                    onChange={handleChange}
                />
            </div>
            <input
                type="submit"
                className="w-full bg-black p-3 text-white font-bold rounded-lg uppercase disabled:opacity-10"
                disabled={!isValid()}
                value={activity.category === 1 ? "Guardar Comida" : "Guardar Ejercicio"}
            />
        </form>
    );
}
