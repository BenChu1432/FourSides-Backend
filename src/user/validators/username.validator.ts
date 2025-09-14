import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
} from 'class-validator';

export function IsValidUserName(validationOptions?: ValidationOptions) {
  return function (object: Object, propertyName: string) {
    registerDecorator({
      name: 'isValidUserName',
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      validator: {
        validate(value: any, args: ValidationArguments) {
          if (typeof value !== 'string') return false;
          if (value.trim().length === 0) return false;
          if (/\s/.test(value)) return false; // contains whitespace
          if (value.startsWith('@')) return false;
          return true;
        },
        defaultMessage(args: ValidationArguments) {
          return '名稱不能為空、不能包含空格、也不能以 @ 開頭';
        },
      },
    });
  };
}
