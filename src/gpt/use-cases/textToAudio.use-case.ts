import OpenAI from 'openai';
import * as path from 'path';
import * as fs from 'fs/promises';

interface TextToAudioOptions {
  prompt: string;
  voice?: string;
}
export const textToAudioUseCase = async (
  openai: OpenAI,
  { prompt, voice }: TextToAudioOptions,
) => {
  const voices = {
    alloy: 'alloy',
    echo: 'echo',
    fable: 'fable',
    onyx: 'onyx',
    nova: 'nova',
    shimmer: 'shimmer',
    sage: 'sage',
  };

  const selectedVoice = voice ? voices[voice] : voices.nova;
  const folderPath = path.resolve(__dirname, '../../../generated/audios');
  const speechFile = path.resolve(`${folderPath}/${Date.now()}.mp3`);

  await fs.mkdir(folderPath, { recursive: true }); // si no existe la carpeta, la crea

  const mp3 = await openai.audio.speech.create({
    model: 'tts-1',
    voice: selectedVoice,
    input: prompt,
    response_format: 'mp3',
  });

  const buffer = Buffer.from(await mp3.arrayBuffer());
  await fs.writeFile(speechFile, buffer);

  console.log(mp3);

  return speechFile;
};
