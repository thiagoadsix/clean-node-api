import { BcryptAdapter } from '../../../../infra/cryptography/bcrypt-adapter/bcrypt-adapter'
import { AccountMongoRepository } from '../../../../infra/db/mongodb/account/account-mongo-repository'
import { AddAccount } from '../../../../domain/usecases/add-account'
import { DbAddAccount } from '../../../../data/usecases/add-account/db-add-account'

export const makeDbAddAccount = (): AddAccount => {
  const SALT = 12
  const bcryptAdapter = new BcryptAdapter(SALT)
  const accountMongoRepository = new AccountMongoRepository()
  return new DbAddAccount(bcryptAdapter, accountMongoRepository, accountMongoRepository)
}
