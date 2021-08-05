import { SignUpController } from './signup'
import { MissingParamError } from '../errors/missing-param-error'

const makeSut = (): SignUpController => {
  return new SignUpController()
}

describe('SignUp Controller', () => {
  test('Should return 400 if no name is provided', () => {
    const systemUnderTest = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        password: 'any_passwod',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = systemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('name'))
  })

  test('Should return 400 if no email is provided', () => {
    const systemUnderTest = makeSut()
    const httpRequest = {
      body: {
        name: 'any_name',
        password: 'any_passwod',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = systemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('email'))
  })

  test('Should return 400 if no password is provided', () => {
    const systemUnderTest = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        name: 'any_name'
      }
    }
    const httpResponse = systemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('password'))
  })

  test('Should return 400 if no password confirmation is provided', () => {
    const systemUnderTest = makeSut()
    const httpRequest = {
      body: {
        email: 'any_email@email.com',
        name: 'any_name',
        password: 'any_passwod'
      }
    }
    const httpResponse = systemUnderTest.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new MissingParamError('passwordConfirmation'))
  })
})
