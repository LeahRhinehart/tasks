import React from "react";
import "./App.css";

import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Leah Rhinehart: CISC275 Tasks: Task 3 Assignment</h1>
            </header>

            <hr />
            <Counter />
            <hr />

            <RevealAnswer />
            <ChangeType />
            <StartAttempt />
            <TwoDice />
            <CycleHoliday />
        </div>
    );
}

export default App;
