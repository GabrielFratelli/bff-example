import { Injectable } from '@nestjs/common';
import {
  Album,
  DataResponse,
  ErrorDataResponse,
  Post,
  Todo,
  User,
} from './types';

const BASE_PATH = 'https://jsonplaceholder.typicode.com';

@Injectable()
export class AppService {
  async getUser(id: string): Promise<DataResponse | ErrorDataResponse> {
    try {
      const userData = await Promise.all([
        fetch(`${BASE_PATH}/users/${id}`),
        fetch(`${BASE_PATH}/posts/?userId=${id}`),
        fetch(`${BASE_PATH}/albums/?userId=${id}`),
        fetch(`${BASE_PATH}/todos/?userId=${id}`),
      ]);

      const [userPromise, postPromise, albumsPromise, todosPromise] = userData;

      const user: User = await userPromise.json();
      const posts: Post[] = await postPromise.json();
      const albums: Album[] = await albumsPromise.json();
      const todos: Todo[] = await todosPromise.json();

      return { user, posts, albums, todos, device: 'WEB' };
    } catch (error) {
      return {
        status: 500,
        message: 'Error on Get User',
        statusCode: 'USER-0001',
      };
    }
  }
}
