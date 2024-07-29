// src/components/FloatingChatBot.js

import React, { useState } from 'react';
import styled from 'styled-components';
import { FaRobot } from 'react-icons/fa';

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const RobotButton = styled.button`
  background-color: #ff6347;
  border: none;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, background-color 0.3s;

  &:hover {
    transform: scale(1.1);
    background-color: darkorange;
  }
`;

const ChatWindow = styled.div`
  display: ${props => (props.show ? 'block' : 'none')};
  position: absolute;
  bottom: 80px;
  right: 0;
  width: 300px;
  max-height: 400px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  padding: 20px;
  overflow-y: auto;
`;

const ChatHeader = styled.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 10px;
  text-align: center;
  color: #333;
`;

const ChatBody = styled.div`
  font-size: 14px;
  color: #555;
  margin-bottom: 10px;
`;

const FloatingChatBot = () => {
  const [showChat, setShowChat] = useState(false);

  const toggleChat = () => {
    setShowChat((prevShowChat) => !prevShowChat);
  };

  return (
    <ChatBotContainer>
      <RobotButton onClick={toggleChat}>
        <FaRobot color="white" size="30px" />
      </RobotButton>
      <ChatWindow show={showChat}>
        <ChatHeader>Chat en Vivo</ChatHeader>
        <ChatBody>
          ¡Hola! ¿En qué puedo ayudarte hoy?
        </ChatBody>
      </ChatWindow>
    </ChatBotContainer>
  );
};

export default FloatingChatBot;
