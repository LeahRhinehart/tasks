import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function ChangeColor(): React.JSX.Element {
    const colors = [
        "red",
        "orange",
        "yellow",
        "green",
        "blue",
        "purple",
        "black",
        "white",
    ];
    const [color, setColor] = useState<string>(colors[0]);
    function updateColor(event: React.ChangeEvent<HTMLInputElement>) {
        setColor(event.target.value);
    }
    return (
        <div>
            <h3>Change Color</h3>
            <Form.Group>
                {colors.map((c) => (
                    <Form.Check
                        key={c}
                        inline
                        type="radio"
                        name="colors"
                        onChange={updateColor}
                        id={`color-${c}`}
                        label={c.charAt(0).toUpperCase() + c.slice(1)}
                        value={c}
                        checked={color === c}
                    />
                ))}
            </Form.Group>

            {}
            <div
                data-testid="colored-box"
                style={{
                    backgroundColor: color,
                }}
            >
                {color}
            </div>
        </div>
    );
}
