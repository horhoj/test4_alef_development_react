import * as yup from 'yup';
import {
  VALIDATION_ERROR_REQUIRED,
  VALIDATION_ERROR_TYPE_NUMBER,
} from '../config/validation';

const VALIDATION_ERROR_MIN_AGE =
  'Введите кол-во лет ( >= 0, 0 для новорожденного)';

export const UserDataSchema = yup.object({
  name: yup.string().required(VALIDATION_ERROR_REQUIRED),
  age: yup
    .number()
    .typeError(VALIDATION_ERROR_TYPE_NUMBER)
    .min(0, VALIDATION_ERROR_MIN_AGE)
    .required(VALIDATION_ERROR_REQUIRED),
  children: yup
    .array()
    .of(
      yup.object({
        id: yup.number().required(),
        name: yup.string().required(VALIDATION_ERROR_REQUIRED),
        age: yup
          .number()
          .typeError(VALIDATION_ERROR_TYPE_NUMBER)
          .min(0, VALIDATION_ERROR_MIN_AGE)
          .required(VALIDATION_ERROR_REQUIRED),
      }),
    )
    .required(),
});

export interface UserDataEntity extends yup.Asserts<typeof UserDataSchema> {}
