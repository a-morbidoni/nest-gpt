import OpenAI from 'openai';
import { TranslateDto } from '../dtos';

export const translateUseCase = async (
  openai: OpenAI,
  { text, targetLanguage }: TranslateDto,
) => {
  const completion = await openai.chat.completions.create({
    model: 'gpt-4o-mini',
    messages: [
      {
        role: 'system',
        content: `Traduce el siguiente texto al idioma ${targetLanguage}:${text}`,
      },
    ],
    max_tokens: 100,
    temperature: 0.3,
  });

  console.log(completion);

  return { message: completion.choices[0].message.content };
};
