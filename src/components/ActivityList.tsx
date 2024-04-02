import { categories } from "../data/categories";
import useActivity from "../hooks/useActivity";
import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";

export default function ActivityList() {
    const { state, dispatch } = useActivity();

    const getCategoryNameById = (categoryId: number) => {
        const category = categories.find((cat) => cat.id === categoryId);
        if (!category) {
            return "";
        }
        return category.name;
    };

    const handleEdit = (id: string) => {
        dispatch({ type: "set-activeId", payload: { id } });
    };

    const handleDelete = (id: string) => {
        dispatch({ type: "delete-activity", payload: { id } });
    };

    return (
        <>
            <h2 className="text-center font-black text-2xl mb-5">Comida y Actividades</h2>
            {state.activities.length === 0 ? (
                <p className="text-center font-bold text-1xl mb-5">No hay Actividades</p>
            ) : (
                state.activities.map((activity) => (
                    <div key={activity.id} className=" mx-auto bg-slate-200 p-5 flex mb-5 shadow-lg justify-between ">
                        <div className="space-y-3 relative justify-between">
                            <p
                                className={`absolute uppercase font-bold text-white -top-8 -left-8 px-10 py-2 ${
                                    activity.category === 1 ? "bg-orange-600" : "bg-green-600"
                                }`}
                            >
                                {getCategoryNameById(activity.category)}
                            </p>
                            <p className=" text-2xl font-bold capitalize "> {activity.name}</p>
                            <p className=" text-4xl font-black capitalize text-lime-500 ">
                                {" "}
                                {activity.calories} calorias
                            </p>
                        </div>
                        <div className="flex items-center gap-5">
                            <button onClick={() => handleEdit(activity.id)}>
                                {" "}
                                <PencilSquareIcon className="w-6 h-6  " />
                            </button>
                            <button onClick={() => handleDelete(activity.id)}>
                                {" "}
                                <TrashIcon className="w-6 h-6 text-red-700" />
                            </button>
                        </div>
                    </div>
                ))
            )}
        </>
    );
}
