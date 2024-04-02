import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";
import Form from "./components/Form";
import useActivity from "./hooks/useActivity";
function App() {
    const { state, dispatch } = useActivity();

    return (
        <>
            <header className="text-center py-2 bg-green-600">
                <div className="max-w-4xl mx-auto flex justify-between ">
                    <h1 className=" uppercase font-bold text-3xl py-2  text-white">Contador de Calorias</h1>
                    <button
                        className={`text-white bg-red-600  font-bold rounded-lg uppercase px-2 py-1 ${
                            state.activities.length === 0 ? "hidden" : "block"
                        } `}
                        onClick={() => dispatch({ type: "restart-app" })}
                    >
                        Resetear APP
                    </button>
                </div>
            </header>
            <section className=" bg-lime-500 py-10 px-5">
                <div className="max-w-4xl mx-auto">
                    <Form />
                </div>
            </section>

            <section className=" bg-black py-5  px-5 ">
                <div className="max-w-4xl mx-auto">
                    <CalorieTracker />
                </div>
            </section>
            <section className=" bg-white py-5  px-5 ">
                <div className="max-w-4xl mx-auto">
                    <ActivityList />
                </div>
            </section>
        </>
    );
}

export default App;
