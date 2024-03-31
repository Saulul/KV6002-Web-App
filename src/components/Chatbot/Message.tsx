/*!
 *  @preserve
 *
 * ++++++++++++++++++++++++++++++++++++++
 * Message component for KV6002 project: EventHive
 * ++++++++++++++++++++++++++++++++++++++
 *
 * Creator: Mehrdad Najarian
 * Project: https://github.com/Saulul/KV6002-Web-App
 *
 */
import React from 'react';
import { MessageDto } from "../../models/MessageDto";

interface MessageProps {
    message: MessageDto;
}

const Message: React.FC<MessageProps> = ({ message }) => {
    return (
        <div style={{ textAlign: message.isUser ? "right" : "left", margin: "8px" }}>
            {!message.isUser && <div style={{ fontSize: "0.8em", color: "#888", paddingBottom:"0.25em" }}>Assistant</div>}
            <div
                style={{
                    color: message.isUser ? "#ffffff" : "#000000",
                    backgroundColor: message.isUser ? "#1186fe" : "#eaeaea",
                    padding: "15px",
                    borderRadius: "8px",
                }}
            >
                {message.content.split("\n").map((text, index) => (
                    <React.Fragment key={index}>
                        {text}
                        <br />
                    </React.Fragment>
                ))}
            </div>
        </div>
    );
};

export default Message;