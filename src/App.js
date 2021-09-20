import { Provider } from "react-redux";
import "./App.css";
import { AllocationsContainer } from "./components/allocationsContainer";
import store from "./store";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<div style={{ padding: "2em", minHeight: "60%", width: "50%", backgroundColor: "#fff" }}>
					<AllocationsContainer />
				</div>
			</div>
		</Provider>
	);
}

export default App;
