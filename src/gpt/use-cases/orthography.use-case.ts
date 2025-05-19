import { OpenAI } from 'openai';

interface options {
  prompt: string;
}

export const orthographyCheckUseCase = async (
  openai: OpenAI,
  options: options,
) => {
  const { prompt } = options;
  const completion = await openai.chat.completions.create({
    model: 'gpt-4.1',
    messages: [
      {
        role: 'system',
        content: `
          Te seran proveidos textos en español con posibles errores ortograficos y gramaticales
          las palabras usadas deben existir en el diccionario de la RAE
          Debes responder en formato JSON,
          tu tarea es corregirlos y retornar informacion sobre la solucion,
          tambien debes dar un porcentaje de acierto del usuario
          
          si no hay errores, debes retornar un mensaje de felicitacion.

          Ejemplo de salida: 
          {
            userScore: number,
            errors: string[], // ['error -> solucion']
            message: string
          }
          
          `,
      },
      {
        role: 'user',
        content: prompt,
      },
    ],
    max_tokens: 150,
    temperature: 0.3,
    response_format:{
      type:'json_object'
    }
  });

  console.log(completion);

  const jsonResponse = JSON.parse(completion.choices[0].message.content as string)

  return jsonResponse;
};
