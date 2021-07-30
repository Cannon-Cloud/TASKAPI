import { EntityRepository, Repository } from 'typeorm';
import { User } from './auth.entity';
import { AuthCredentialsDto } from './dto/auth-credentials.dto';

@EntityRepository(User)
export class UsersRepository extends Repository<User> {
  async createUser(authCredentialDto: AuthCredentialsDto): Promise<void> {
    const { username, password } = authCredentialDto;

    const user = this.create({
      username,
      password,
    });

    await this.save(user);
  }
}
