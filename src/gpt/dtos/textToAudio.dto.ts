import { IsNotEmpty, IsOptional } from 'class-validator';

import { IsString } from 'class-validator';

export class TextToAudioDto {
  @IsString()
  @IsNotEmpty()
  prompt: string;

  @IsOptional()
  @IsString()
  voice: string;
}
