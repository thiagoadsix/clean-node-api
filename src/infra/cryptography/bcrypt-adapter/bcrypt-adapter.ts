import bcrypt from 'bcrypt'
import { HashCompare } from '../../../data/protocols/cryptography/hash-compare'
import { Hasher } from '../../../data/protocols/cryptography/hasher'

export class BcryptAdapter implements Hasher, HashCompare {
  private readonly salt: number

  constructor (salt: number) {
    this.salt = salt
  }

  async compare (value: string, hash: string): Promise<boolean> {
    const isValid = await bcrypt.compare(value, hash)
    return isValid
  }

  async hash (value: string): Promise<string> {
    const hash = await bcrypt.hash(value, this.salt)
    return hash
  }
}
