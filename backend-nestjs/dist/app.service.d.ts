import { Commit } from './interfaces/commits';
export declare class AppService {
    apikey: string;
    user: string;
    repo: string;
    private githubAuth;
    getCommits(): Promise<Commit[]>;
}
