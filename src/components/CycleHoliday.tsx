import React, { useState } from "react";
import { Button } from "react-bootstrap";

export function CycleHoliday(): React.JSX.Element {
    type Holiday = "🎄" | "🎃" | "☘️" | "🐰" | "🦃";
    const [holiday, setHoliday] = useState<Holiday>("🎄");
    const nextAlphabetical: Record<Holiday, Holiday> = {
        "🎄": "🐰",
        "🐰": "🎃",
        "🎃": "☘️",
        "☘️": "🦃",
        "🦃": "🎄",
    };
    const nextYear: Record<Holiday, Holiday> = {
        "☘️": "🐰",
        "🐰": "🎃",
        "🎃": "🦃",
        "🦃": "🎄",
        "🎄": "☘️",
    };
    return (
        <div>
            <p>Holiday: {holiday}</p>
            <Button
                onClick={() => {
                    setHoliday(nextAlphabetical[holiday]);
                }}
            >
                Advance by Alphabet
            </Button>
            <Button
                onClick={() => {
                    setHoliday(nextYear[holiday]);
                }}
            >
                Advance by Year
            </Button>
            Cycle Holiday
        </div>
    );
}
