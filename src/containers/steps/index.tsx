import React, { useEffect, useState } from "react";
import socket from "../../io/io";

const StepsIO: React.FC = () => {
    const roomName = "ReceiptDetails";
    const [id, setId] = useState("");
    const [confirmation, setConfirmation] = useState(false);

    useEffect(() => {
        socket.emit("join_room", roomName);
    }, [id]);

    socket.on("connect", () => {
        setId(socket.id);
    });

    useEffect(() => {
        socket.on("received_confirmation", (data) => {
            setConfirmation(data);
        });
    }, [socket]);

    const sendEvent = () => {
        socket.emit("step_confirmation", {
            roomName,
            confirmation: true
        });
    }

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
        setConfirmation(true);
        sendEvent();
    }

    return <>
        <button onClick={handleClick}>CONFIRMAR</button>
        <div>
            ID: {id}
            <br />
            Is Confirmed:
            {confirmation ? "YES" : "NO"}
        </div>
    </>

}

export default StepsIO;