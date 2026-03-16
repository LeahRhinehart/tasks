import React, { useState } from "react";
import { Form } from "react-bootstrap";

export function EditMode(): React.JSX.Element {
    const [editMode, setEditMode] = useState<boolean>(false);
    const handleEditMode = () => {
        setEditMode((prev) => !prev);
    };
    const [studentName, setStudentName] = useState<string>("Your Name");
    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setStudentName(e.target.value);
    };
    const [isStudent, setIsStudent] = useState<boolean>(true);
    const handleIsStudent = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIsStudent(e.target.checked);
    };
    return (
        <div>
            <h3>Edit Mode</h3>
            <Form.Group>
                <Form.Check
                    type="switch"
                    id="edit-mode-check"
                    label="Edit Mode?"
                    checked={editMode}
                    onChange={handleEditMode}
                />
            </Form.Group>
            {editMode ?
                <Form.Group>
                    <Form.Label>Name:</Form.Label>
                    <Form.Control
                        type="text"
                        value={studentName}
                        onChange={handleChangeName}
                    />
                    <Form.Check
                        type="checkbox"
                        id="is-a-student"
                        label="Is a student?"
                        checked={isStudent}
                        onChange={handleIsStudent}
                    />
                </Form.Group>
            :   <p>
                    {studentName}{" "}
                    {isStudent ? "is a student" : "is not a student"}
                </p>
            }
        </div>
    );
}
