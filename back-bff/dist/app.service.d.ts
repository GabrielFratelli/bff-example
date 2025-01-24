import { DataResponse, ErrorDataResponse } from './types';
export declare class AppService {
    getUser(id: string): Promise<DataResponse | ErrorDataResponse>;
}
