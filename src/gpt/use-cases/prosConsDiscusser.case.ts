import { OpenAI } from 'openai';

interface options {
  prompt: string;
}

export const prosConsDiscusserUseCase = async (
  openai: OpenAI,
  { prompt }: options,
) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      {
        role: 'system',
        content: `
        Se te dará una pregunta y tu tarea es dar una respuesta con pros y contras,
        la respuesta debe de ser en formato markdown,
        los pros y contras deben de estar en una lista,
        
          `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 500,
    temperature: 0.8,
  });

  return completion.choices[0].message;
};
