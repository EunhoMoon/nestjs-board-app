import { IsNotEmpty } from 'class-validator';

export class CreateBoardDtd {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  description: string;
}
