import { AppService } from './app.service';
export declare class AppController {
    private readonly appService;
    constructor(appService: AppService);
    getCommits(): Promise<import("./interfaces/commits").Commit[]>;
}
