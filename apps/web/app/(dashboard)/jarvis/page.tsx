'use client';

import { useState } from 'react';
import { ClientMessage, Message, continueConversation } from './actions';
import { Avatar, AvatarFallback, AvatarImage, Button, Card, Input, Label } from '@repo/ui';
import { useActions, useUIState } from 'ai/rsc';
import { generateId } from 'ai';
// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export default function Home() {
  const [conversation, setConversation] = useUIState();
  const { continueConversation } = useActions();
  const [input, setInput] = useState<string>('');

  return (
    <div className='flex-col  justify-between h-full w-full px-48 py-8 '>
      <div className='flex-col   justify-start h-[90%] flex-grow min-h-2 space-y-6 overflow-clip'>
        {conversation.length===0 && <div className='flex-col'>
          <Label className='flex text-6xl font-semibold bg-gradient-to-r from-primary to-red-500 inline-block text-transparent bg-clip-text '>Hi there,</Label>
        
          <Label className='flex  text-6xl font-semibold text-slate-500'>How can I help you?</Label>
        </div>}
        {conversation.map((message: ClientMessage, index: number) => (
          <>

            <div key={index} className={`flex space-x-2  ${message.role === "user" ? "justify-end  " : "justify-start "} items-start`}>

              <Avatar className="h-25 w-fit justify-center items-center">
                {message.role === "user" ? ""
                  : <AvatarFallback className="h-10 w-10 bg-gradient-to-r from-violet-400 to-red-400 text-white ">AI</AvatarFallback>
                }
                {/* <AvatarFallback className="h-20 w-20  ">AI</AvatarFallback> */}
              </Avatar>


              <div className={`w-fit p-2 rounded-xl ${message.role === "user" ? "bg-primary text-primary-foreground" : "bg-slate-100"} `}>{message.display}</div>

              <Avatar className="h-25 w-fit justify-center items-center">
                {message.role === "user" ? <AvatarImage className="h-10 w-10  " src={"/avatars/02.png"} />
                  : ""
                }
                {/* <AvatarFallback className="h-20 w-20  ">AI</AvatarFallback> */}
              </Avatar>
            </div>
          </>))}
      </div>

      <div className='flex space-x-4 h-fit mt-auto'>
        <Input
          className='rounded-lg bg-gray-100 '
          type="text"
          value={input}
          onChange={event => {
            setInput(event.target.value);
          }}
        />
        <Button
          onClick={async () => {
            setConversation((currentConversation: ClientMessage[]) => [
              ...currentConversation,
              { id: generateId(), role: 'user', display: input },
            ]);
         
            const message = await continueConversation(input);

            setConversation((currentConversation: ClientMessage[]) => [
              ...currentConversation,
              message,
            ]);

            setInput("")
          }}
        >
          Send Message
        </Button>
      </div>
    </div>
  );
}