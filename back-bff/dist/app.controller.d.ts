import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getUser(id: string): Promise<import("./types").DataResponse | import("./types").ErrorDataResponse>;
}
