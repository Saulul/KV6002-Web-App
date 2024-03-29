import React, { useState } from 'react';
import { TextField, Button, Container, Grid } from '@mui/material';
import Message from './Message';

const Chat: React.FC = () => {
    const [messages, setMessages] = useState<string[]>([]);
    const [input, setInput] = useState<string>('');
    const [open, setOpen] = useState<boolean>(false);

    const handleSendMessage = () => {
        setMessages([...messages, input]);
        setInput('');
        // Add logic to handle chatbot response here
    };

    return (
        <Container>
            <div className="fixed bottom-20 right-4 z-50"> {/* Add the Tailwind CSS classes to the div */}
                <Button variant="contained" color="primary" onClick={() => setOpen(!open)}>
                    {open ? 'Close Chat' : 'Open Chat'}
                </Button>
            </div>
            {open && (
                <div className="fixed bottom-36 right-4 z-50 bg-white p-4 rounded-md shadow-lg max-w-xs overflow-auto"> {/* Add the Tailwind CSS classes to the div */}
                    <Grid container direction="column" spacing={2}>
                        <Grid item>
                            {messages.map((message, index) => (
                                <Message key={index} text={message} isUser={index % 2 === 0} />
                            ))}
                        </Grid>
                        <Grid item>
                            <TextField
                                label="Type your message"
                                variant="outlined"
                                fullWidth
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                            />
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="primary" onClick={handleSendMessage}>
                                Send
                            </Button>
                        </Grid>
                    </Grid>
                </div>
            )}
        </Container>
    );
};

export default Chat;