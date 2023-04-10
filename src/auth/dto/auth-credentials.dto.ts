import { IsString, Matches, MaxLength, MinLength } from 'class-validator';

const PASSWORD_MESSAGE =
  '비밀번호는 4-20자 사이의 숫자와 알파벳 대/소문자만 입력 가능합니다.';

export class AuthCredentialsDto {
  @IsString()
  @MinLength(4)
  @MaxLength(20)
  username: string;

  @IsString()
  @MinLength(4, {
    message: PASSWORD_MESSAGE,
  })
  @MaxLength(20, {
    message: PASSWORD_MESSAGE,
  })
  @Matches(/^[a-zA-Z0-9]*$/, {
    message: PASSWORD_MESSAGE,
  })
  password: string;
}
