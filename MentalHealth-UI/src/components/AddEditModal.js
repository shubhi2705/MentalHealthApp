import React, { useEffect, useState } from "react";
import { DatePicker, Modal, Input, message } from "antd";
import moment from "moment";
import { LoadingOutlined } from "@ant-design/icons";

const { TextArea } = Input;

const EditModal = ({ modalVisibility, setModalVisibility, isEdit, editMood, editNote }) => {
    const [date, setDate] = useState(moment());
    const [selected, setSelected] = useState(2);
    const [note, setNote] = useState("");
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (editMood !== undefined) setSelected(editMood);
        if (editNote !== undefined) setNote(editNote);
    }, [editMood, editNote]);

    const moodIcons = [
        { icon: "🙁", text: "Rough day" },
        { icon: "😐", text: "Not good" },
        { icon: "🙂", text: "Not bad" },
        { icon: "😄", text: "Good" },
        { icon: "🤗", text: "Great!" },
    ];

    const addMood = async () => {
        setLoading(true);
        const input = { mood: selected, date: date.dayOfYear(), notes: note };
        // Logic to update user data goes here
        message.success("Mood added successfully!");
        setModalVisibility(false);
        setLoading(false);
    };

    return (
        <Modal
            visible={modalVisibility}
            onCancel={() => setModalVisibility(false)}
            footer={null}
            title={isEdit ? "Edit Mood" : "Add Mood to Calendar"}
        >
            <div className="flex flex-col">
                {!isEdit && (
                    <>
                        <p>Select Date</p>
                        <DatePicker
                            defaultValue={moment()}
                            format="DD/MM/YYYY"
                            onChange={(val) => setDate(val)}
                        />
                    </>
                )}
                <p>How was your day?</p>
                <div className="grid grid-cols-5">
                    {moodIcons.map((icon, i) => (
                        <div key={i} onClick={() => setSelected(i)}>
                            <span>{icon.icon}</span>
                            <span>{icon.text}</span>
                        </div>
                    ))}
                </div>
                <p>Note:</p>
                <TextArea
                    value={note}
                    onChange={(e) => setNote(e.target.value)}
                    placeholder={`Maybe add why your day was ${selected < 2 ? "bad" : "good"}`}
                />
                <button onClick={addMood} disabled={loading}>
                    {loading && <LoadingOutlined />} {isEdit ? "Edit" : "Add"} Mood
                </button>
            </div>
        </Modal>
    );
};

export default EditModal;
