import React, {useEffect, useState} from "react";
import {TextField, Button, Container, Grid, CircularProgress, LinearProgress} from "@mui/material";
import Message from "./Message";
import OpenAI from "openai";
import {MessageDto} from "../../models/MessageDto";

const Chat: React.FC = () => {
    const [isWaiting, setIsWaiting] = useState<boolean>(false);
    const [messages, setMessages] = useState<Array<MessageDto>>(new Array<MessageDto>());
    const [input, setInput] = useState<string>("");
    const [assistant, setAssistant] = useState<any>(null);
    const [thread, setThread] = useState<any>(null);
    const [openai, setOpenai] = useState<any>(null);

    useEffect(() => {
        initChatBot();
    }, []);

    useEffect(() => {
        setMessages([
            {
                content: "Hi there! Welcome to Eventhive. I'm your AI-powered personal assistant. How can I help you today?",
                isUser: false,
            },
        ]);
    }, [assistant]);

    const initChatBot = async () => {
        const openai = new OpenAI({
            apiKey: import.meta.env.VITE_OPENAI_API_KEY,
            dangerouslyAllowBrowser: true,
        });

        // Create an assistant
        // const assistant = await openai.beta.assistants.create({
        //     name: "Hockey Expert",
        //     instructions: "You are a hockey expert. You specialize in helping others learn about hockey.",
        //     tools: [{type: "code_interpreter"}],
        //     model: "GPT-3.5-turbo-0125",
        // });

        // Use an existing assistant
        const assistantId = "asst_PVxwIov8xMhHCpEpZnxh7OKz";
        const assistant = await openai.beta.assistants.retrieve(assistantId);

        // Create a thread
        const thread = await openai.beta.threads.create();

        setOpenai(openai);
        setAssistant(assistant);
        setThread(thread);
    };

    const createNewMessage = (content: string, isUser: boolean) => {
        const newMessage = new MessageDto(isUser, content);
        return newMessage;
    };

    const handleSendMessage = async () => {
        messages.push(createNewMessage(input, true));
        setMessages([...messages]);
        setInput("");

        // Send a message to the thread
        await openai.beta.threads.messages.create(thread.id, {
            role: "user",
            content: input,
        });

        // Run the assistant
        const run = await openai.beta.threads.runs.create(thread.id, {
            assistant_id: assistant.id,
        });

        // Create a response
        let response = await openai.beta.threads.runs.retrieve(thread.id, run.id);

        // Wait for the response to be ready
        while (response.status === "in_progress" || response.status === "queued") {
            console.log("waiting...");
            setIsWaiting(true);
            await new Promise((resolve) => setTimeout(resolve, 5000));
            response = await openai.beta.threads.runs.retrieve(thread.id, run.id);
        }

        setIsWaiting(false);

        // Get the messages for the thread
        const messageList = await openai.beta.threads.messages.list(thread.id);

        // Find the last message for the current run
        const lastMessage = messageList.data
            .filter((message: any) => message.run_id === run.id && message.role === "assistant")
            .pop();

        // Print the last message coming from the assistant
        if (lastMessage) {
            console.log(lastMessage.content[0]["text"].value);
            setMessages([...messages, createNewMessage(lastMessage.content[0]["text"].value, false)]);
        }
    };

    // detect enter key and send message
    const handleKeyPress = (e: React.KeyboardEvent<HTMLDivElement>) => {
        if (e.key === "Enter") {
            handleSendMessage();
        }
    };

    // state variable for managing chat window visibility
    const [isChatOpen, setIsChatOpen] = useState<boolean>(false);

    return (
        <div className="fixed bottom-0 right-0 m-6 z-50">
            {/* Button to toggle chat window */}
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={() => setIsChatOpen(!isChatOpen)}
            >
                {isChatOpen ? 'Close Chat' : 'Open Chat'}
            </button>

            {/* Conditional rendering of chat window */}
            {isChatOpen && (
                <div className="bg-white rounded-lg p-2 shadow-lg w-96 h-[50vh] overflow-auto">
                    <Container>
                    <Grid container direction="column" spacing={2} paddingBottom={5}>
                            {messages.map((message, index) => (
                                <Grid item alignSelf={message.isUser ? "flex-end" : "flex-start"} key={index}>
                                    <Message key={index} message={message}/>
                                </Grid>
                            ))}
                            <Grid item>
                                <TextField
                                    label="Type your message"
                                    variant="outlined"
                                    disabled={isWaiting}
                                    fullWidth
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    onKeyDown={handleKeyPress}
                                />
                                {isWaiting && <LinearProgress color="inherit"/>}
                            </Grid>
                            {!isWaiting && (
                                <Grid item>
                                    <Button variant="contained" color="primary" onClick={handleSendMessage}
                                            disabled={isWaiting}>
                                        Send
                                    </Button>
                                </Grid>
                            )}
                        </Grid>
                    </Container>
                </div>
            )}
        </div>
    );
};

export default Chat;