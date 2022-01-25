import "./scss/style.scss"
import SideBar from "./Components/SideBar";
import DropArea from "./Components/DropArea";

function App() {
    return (
        <div className="App">
            <div className="App-body">
                <SideBar/>
                <DropArea/>
            </div>
        </div>
    );
}

export default App;
