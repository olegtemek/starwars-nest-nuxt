import { IsString, MaxLength } from 'class-validator';

export class SearchDto {
  @IsString()
  @MaxLength(120)
  query: string;
}
