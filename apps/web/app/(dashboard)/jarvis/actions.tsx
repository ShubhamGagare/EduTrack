'use server';

//import { Weather } from 'components/Weathe';
import { generateText } from 'ai';
import { createOpenAI, openai } from '@ai-sdk/openai';
import { createAI, createStreamableUI, getMutableAIState, streamUI } from 'ai/rsc';
import { ReactNode } from 'react';
import { z } from 'zod';
import { Weather } from '../../../components/weather';
import { ListOfClasses } from '../../../components/ListOfClasses';
import { ProcessorCard } from '../../../components/ProcessorCard';
import { StudentInfo } from '../../../components/ai-tools/StudentInfo';
import { generateId } from 'ai';

export interface ServerMessage {
  role: 'user' | 'assistant';
  content: string;
}

export interface ClientMessage {
  id: string;
  role: 'user' | 'assistant';
  display: ReactNode;
}



export interface Message {
  role: 'user' | 'assistant';
  content: string;
  display?: ReactNode;
}
const groq = createOpenAI({
  baseURL: 'https://api.groq.com/openai/v1',
  apiKey: process.env.GROQ_API_KEY,
});

export async function continueConversation(
  input: string,
): Promise<ClientMessage> {
  'use server';
  
  const history = getMutableAIState();

  const result  = await streamUI({
    model: groq('llama3-70b-8192'),
    messages: [...history.get(), { role: 'user', content: input }],
    text: ({ content, done }) => {
      if (done) {
        history.done((messages: ServerMessage[]) => [
          ...messages,
          { role: 'assistant', content },
        ]);
      }

      return <div>{content}</div>;
    },
    tools: {
      showWeather: {
        description: 'Show the weather for a given location.',
        parameters: z.object({
          city: z.string().describe('The city to show the weather for.'),
          unit: z
            .enum(['C', 'F'])
            .describe('The unit to display the temperature in'),
        }),
        generate: async ({ city, unit }) => {
          history.done((messages: ServerMessage[]) => [
            ...messages,
            {
              role: 'assistant',
              content: `Showing information for ${city}`,
            },
          ]);
          return `Here's the weather for ${city}!`;
        },
      },
      showListofClasses:{
        description:'Show the list of registers of each class in  the school',
        parameters:z.object({}),
        generate: async () => {
          history.done((messages: ServerMessage[]) => [
            ...messages,
            {
              role: 'assistant',
              content: `Showing information`,
            },
          ]);
          return  <ListOfClasses />
        },
      },
      showStudentInfo:{
        description:'Show the individual student info from name',
        parameters:z.object({
          studentName: z.string().describe('The student name to show the info for.'),
        }),
        generate: async ({studentName}) => {
          history.done((messages: ServerMessage[]) => [
            ...messages,
            {
              role: 'assistant',
              content: `Showing information information student`,
            },
          ]);
          return <StudentInfo studentName={studentName} />||""
        },
      }
    },
  
  });

  // return {
  //   messages: [
  //     ...history,
  //     {
  //       role: 'assistant' as const,
  //       // content:
  //       //   text || toolResults.map(toolResult => toolResult.result).join(),
  //       display:  result.value,
  //     },
  //   ],
  // };
  return {
    id: generateId(),
    role: 'assistant',
    display: result.value,
  };
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});