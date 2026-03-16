import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";

export function GiveAttempts(): React.JSX.Element {
    const [numAttempts, setNumAttempts] = useState<number>(3);
    const [attemptsWanted, setAttemptsWanted] = useState<string>("");
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAttemptsWanted(e.target.value);
    };
    const handleUse = () => {
        setNumAttempts((prev) => Math.max(prev - 1, 0));
    };
    const handleGain = () => {
        const parsed = parseInt(attemptsWanted);
        if (!isNaN(parsed) && parsed > 0) {
            setNumAttempts((prev) => prev + parsed);
            setAttemptsWanted("");
        }
    };
    return (
        <div>
            <h3>Give Attempts</h3>
            <div>Attempts left: {numAttempts}</div>
            <Form.Group className="mb-3" controlId="attemptsWanted">
                <Form.Label>Request Attempts:</Form.Label>
                <Form.Control
                    type="number"
                    value={attemptsWanted}
                    onChange={handleInputChange}
                />
            </Form.Group>
            <Button onClick={handleUse} disabled={numAttempts === 0}>
                use
            </Button>
            <Button onClick={handleGain}>gain</Button>
        </div>
    );
}
