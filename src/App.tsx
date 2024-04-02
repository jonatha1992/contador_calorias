import ActivityList from "./components/ActivityList";
import CalorieTracker from "./components/CalorieTracker";
import Form from "./components/Form";

function App() {
    return (
        <>
            <header className="text-center py-2 bg-green-600">
                <div className="max-w-4xl mx-auto  ">
                    <h1 className=" uppercase font-bold text-2xl text-white">Contador de Calorias</h1>
                </div>
            </header>
            <section className=" bg-lime-500 py-20 px-5">
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
