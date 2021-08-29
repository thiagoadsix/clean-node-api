import { AccountModel } from '../../../../domain/models'

export const AccountMapper = {
  accountMongoToAccountModel (account: any): AccountModel {
    return {
      id: account._id,
      name: account.name,
      email: account.email,
      password: account.password
    }
  }
}
