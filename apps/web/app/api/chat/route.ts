// import { openai, } from '@ai-sdk/openai';
// import { convertToCoreMessages, streamText } from 'ai';
// import { NextApiRequest, NextApiResponse } from 'next';
// import { z } from 'zod';

// const handler = async (
//   request: NextApiRequest,
//   response: NextApiResponse,
// ) => {
//   console.log("body--->"+JSON.stringify(request.body))

//   const { messages } =  await request.body;
//   console.log("message--->"+JSON.stringify(messages))
//   const result :any= await streamText({
//     model: openai('gpt-4-turbo'),
//     messages: convertToCoreMessages(messages),
//     tools: {
//       // server-side tool with execute function:
//       getWeatherInformation: {
//         description: 'show the weather in a given city to the user',
//         parameters: z.object({ city: z.string() }),
//         execute: async ({}: { city: string }) => {
//           return {
//             value: 24,
//             unit: 'celsius',
//             weeklyForecast: [
//               { day: 'Monday', value: 24 },
//               { day: 'Tuesday', value: 25 },
//               { day: 'Wednesday', value: 26 },
//               { day: 'Thursday', value: 27 },
//               { day: 'Friday', value: 28 },
//               { day: 'Saturday', value: 29 },
//               { day: 'Sunday', value: 30 },
//             ],
//           };
//         },
//       },
//       // client-side tool that starts user interaction:
//       askForConfirmation: {
//         description: 'Ask the user for confirmation.',
//         parameters: z.object({
//           message: z.string().describe('The message to ask for confirmation.'),
//         }),
//       },
//       // client-side tool that is automatically executed on the client:
//       getLocation: {
//         description:
//           'Get the user location. Always ask for confirmation before using this tool.',
//         parameters: z.object({}),
//       },
//     },
//   });

//   result.pipeDataStreamToResponse(response);
// }

// export { handler as GET, handler as POST };