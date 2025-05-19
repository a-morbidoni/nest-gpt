import { IsNotEmpty } from "class-validator";

import { IsString } from "class-validator";

export class TranslateDto {
  @IsString()
  @IsNotEmpty()
  text: string;

  @IsString()
  @IsNotEmpty()
  targetLanguage: string;
}

