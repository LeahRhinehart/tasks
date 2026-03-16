import React from "react";
import "./App.css";

import { Counter } from "./components/Counter";
import { RevealAnswer } from "./components/RevealAnswer";
import { ChangeType } from "./components/ChangeType";
import { StartAttempt } from "./components/StartAttempt";
import { TwoDice } from "./components/TwoDice";
import { CycleHoliday } from "./components/CycleHoliday";
import { DoubleHalf } from "./bad-components/DoubleHalf";
import { ChooseTeam } from "./bad-components/ChooseTeam";
import { ColoredBox } from "./bad-components/ColoredBox";
import { ShoveBox } from "./bad-components/ShoveBox";
import { CheckAnswer } from "./form-components/CheckAnswer";
import { GiveAttempts } from "./form-components/GiveAttempts";
import { EditMode } from "./form-components/EditMode";
import { ChangeColor } from "./form-components/ChangeColor";
import { MultipleChoiceQuestion } from "./form-components/MultipleChoiceQuestion";

function App(): React.JSX.Element {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Leah Rhinehart: CISC275 Tasks: Task 3 Assignment</h1>
            </header>
            <hr />

            <ChooseTeam />
            <hr />
            <ColoredBox />
            <hr />
            <ShoveBox />
            <hr />
            <Counter />
            <hr />
            <RevealAnswer />
            <ChangeType />
            <StartAttempt />
            <TwoDice />
            <CycleHoliday />
            <DoubleHalf />
            <CheckAnswer expectedAnswer="42" />
            <GiveAttempts />
            <EditMode />
            <ChangeColor />

            {/* Provide options and expectedAnswer for MultipleChoiceQuestion */}
            <MultipleChoiceQuestion
                options={["Alpha", "Beta", "Gamma", "Delta"]}
                expectedAnswer="Beta"
            />
        </div>
    );
}

export default App;
