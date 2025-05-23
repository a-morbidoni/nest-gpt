import * as path from 'path';
import * as fs from 'fs';
import { Injectable, NotFoundException } from '@nestjs/common';
import {
  orthographyCheckUseCase,
  prosConsDiscusserStreamUseCase,
  prosConsDiscusserUseCase,
  translateUseCase,
} from './use-cases';
import {
  AudioToTextDto,
  OrthographyDto,
  ProsConsDiscusserDto,
  TextToAudioDto,
  TranslateDto,
} from './dtos';
import { OpenAI } from 'openai';
import { textToAudioUseCase } from './use-cases/textToAudio.use-case';
import { audioToTextUseCase } from './use-cases/audioToText.use-case';

@Injectable()
export class GptService {
  private readonly openai: OpenAI = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  // solo va a llamar casos de uso

  async orthographyCheck(orthographyDto: OrthographyDto) {
    return await orthographyCheckUseCase(this.openai, {
      prompt: orthographyDto.prompt,
    });
  }

  async prosConsDiscusser({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDiscusserUseCase(this.openai, { prompt });
  }

  async prosConsDiscusserStream({ prompt }: ProsConsDiscusserDto) {
    return await prosConsDiscusserStreamUseCase(this.openai, { prompt });
  }

  async translate({ text, targetLanguage }: TranslateDto) {
    return await translateUseCase(this.openai, { text, targetLanguage });
  }

  async textToAudio({ prompt, voice }: TextToAudioDto) {
    return await textToAudioUseCase(this.openai, { prompt, voice });
  }

  async textToAudioGet(fileId: string) {
    const filePath = path.resolve(
      __dirname,
      `../../generated/audios/${fileId}.mp3`,
    );

    if (!fs.existsSync(filePath)) {
      throw new NotFoundException(`Archivo ${fileId} no encontrado`);
    }

    return filePath;
  }

  async audioToText(audioFile: Express.Multer.File, audioToTextDto: AudioToTextDto) {
    const { prompt } = audioToTextDto;
    return await audioToTextUseCase(this.openai, {
      audioFile,
      prompt,
    });
  }
}
