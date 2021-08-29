import { InvalidParamError } from '../../errors'
import { Validation } from '../../../presentation/protocols/validation'

export class CompareFieldsValidation implements Validation {
  constructor (
    private readonly fieldName: string,
    private readonly fieldNameToCompareName: string
  ) {
    this.fieldName = fieldName
    this.fieldNameToCompareName = fieldNameToCompareName
  }

  validate (input: any): Error {
    if (input[this.fieldName] !== input[this.fieldNameToCompareName]) {
      return new InvalidParamError(this.fieldNameToCompareName)
    }
  }
}
