import { Commit } from './interfaces/commits';
export declare class AppService {
    private apikey;
    private user;
    private repo;
    private githubAuth;
    getCommits(): Promise<Commit[]>;
}
