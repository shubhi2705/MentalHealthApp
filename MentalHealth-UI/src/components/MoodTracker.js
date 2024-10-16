import React, { useEffect, useState } from "react";
import { useUser } from "@clerk/clerk-react";
import moment from "moment";
import AddEditModal from "../components/AddEditModal"; // Assuming you will adjust this accordingly

const MoodTracker = ({ userData, updateUser }) => {
    const { user: clerkUser } = useUser();
    const [modalData, setModalData] = useState({ notes: "", moodNumber: 2 });
    const [modalVisibility, setModalVisibility] = useState(false);
    const [isEdit, setIsEdit] = useState(false);

    const getModalData = () => {
        const date = moment();
        const dayOfYear = date.dayOfYear();
        const year = date.year();

        if (userData && userData[year] && userData[year][dayOfYear]) {
            const mood = userData[year][dayOfYear].mood; // Assuming you handle the mood mapping elsewhere
            setModalData({
                notes: userData[year][dayOfYear].notes,
                moodNumber: mood,
            });
            setIsEdit(true);
        } else {
            setModalData({
                notes: "",
                moodNumber: 2,
            });
            setIsEdit(false);
        }
    };

    useEffect(() => {
        if (userData) getModalData();
    }, [userData]);

    const handleModalVisibility = (visibility) => {
        setModalVisibility(visibility);
    };

    return (
        <>
            <div className="py-8 px-4 mt-10 bg-white rounded shadow-md flex flex-col items-center">
                <h3 className="font-bold text-xl text-center">
                    Hey, <span className="text-blue-600">{clerkUser?.firstName} 👋</span>
                </h3>
                <p className="text-base mt-4">
                    {new Date().getHours() < 17 ? "How is your day going?" : "How was your day today?"}
                </p>
                <button
                    className="px-4 py-2 mt-4 bg-blue-600 rounded text-white"
                    onClick={() => handleModalVisibility(true)}
                >
                    {isEdit ? "Edit Mood" : "Add Mood to Calendar"}
                </button>
            </div>
            <AddEditModal
                modalVisibility={modalVisibility}
                setModalVisibility={handleModalVisibility}
                isEdit={isEdit}
                editNote={modalData.notes}
                editMood={modalData.moodNumber}
            />
        </>
    );
};

export default MoodTracker;
