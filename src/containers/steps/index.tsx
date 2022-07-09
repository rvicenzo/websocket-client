import React, { useEffect, useState } from "react";
import socket from "../../io/io";
import Button, { ButtonDiv } from '../../components/Button';
import Item from "../../components/Item";
import { steps } from './constants';

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
        ID: {id}
        <br />
        {steps.map((item, i) =>
            <Item>
                {item.label}
                {
                    item.showButton && <ButtonDiv>
                        <Button onClick={handleClick}>
                            CONFIRMAR
                        </Button>
                    </ButtonDiv>
                }
            </Item>
        )
        }
    </>

}

export default StepsIO;