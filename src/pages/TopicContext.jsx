import React, { createContext, useState } from 'react';

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
  const [topic, setTopic] = useState('');
  const [description, setDescription] = useState('');

  console.log("TopicContext"+topic)
  return (
    <TopicContext.Provider value={{ topic, setTopic, description, setDescription }}>
      {children}
    </TopicContext.Provider>
  );
};