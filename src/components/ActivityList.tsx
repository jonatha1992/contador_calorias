import { categories } from "../data/categories";
import useActivity from "../hooks/useActivity";

export default function ActivityList() {
    const { state } = useActivity();

    const getCategoryNameById = (categoryId: number) => {
        const category = categories.find((cat) => cat.id === categoryId);
        if (!category) {
            return "";
        }
        return category.name;
    };

    return (
        <>
            <h2 className="text-center font-black text-2xl mb-5">Comida y Actividades</h2>

            {state.activities.map((activity) => (
                <div key={activity.id} className=" mx-auto bg-slate-200 p-5 flex flex-col shadow-lg justify-between ">
                    <div className="space-y-3 relative">
                        <p className=" text-2xl font-bold capitalize ">{getCategoryNameById(activity.category)}</p>
                        <p className=" text-2xl font-bold capitalize "> {activity.name}</p>
                        <p className=" text-4xl font-black capitalize text-lime-600 "> {activity.calories} calorias</p>
                    </div>
                    <div>
                        <button> Editar</button>
                        <button> Eliminar</button>
                    </div>
                </div>
            ))}
        </>
    );
}
