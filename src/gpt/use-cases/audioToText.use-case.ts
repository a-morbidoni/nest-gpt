import OpenAI from 'openai';
import * as fs from 'fs';
interface options {
  prompt?: string; // el prompt tiene que estar en el mismo idioma que el audio
  audioFile: Express.Multer.File; // el audio tiene que ser un archivo de audio
}

export const audioToTextUseCase = async (openIa: OpenAI, options: options) => {
  const { prompt, audioFile } = options;
  console.log(audioFile, prompt);
  console.log(audioFile, prompt);

  const response = await openIa.audio.transcriptions.create({
    model: 'whisper-1',
    file: fs.createReadStream(audioFile.path),
    prompt: prompt, // mismo idioma que el audio
    language: 'es', // idioma del audio en iso639-1
    response_format: 'verbose_json', //'vtt' 'srt',
  });
  console.log(response);
  return response;
};
