"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppService = void 0;
const common_1 = require("@nestjs/common");
const octokit_1 = require("octokit");
const config = require("../config/config.json");
let AppService = class AppService {
    constructor() {
        this.apikey = config.apikey;
        this.user = config.user;
        this.repo = config.repo;
    }
    async githubAuth(userApikey) {
        try {
            const octokit = new octokit_1.Octokit({
                auth: userApikey
            });
            return octokit;
        }
        catch (error) {
            throw error;
        }
    }
    async getCommits() {
        let resp;
        try {
            const octokit = await this.githubAuth(this.apikey);
            const { data } = await octokit.request(`GET /repos/${this.user}/${this.repo}/commits{?sha,path,author,since,until,per_page,page}`, {
                owner: this.user,
                repo: this.repo
            });
            resp = data.map((element) => {
                return {
                    sha: element.sha,
                    authorName: element.commit.author.name,
                    authorEmail: element.commit.author.email,
                    date: element.commit.author.date,
                    message: element.commit.message
                };
            });
            return resp;
        }
        catch (error) {
            console.log('There\'s some errors obtaining commits from the repository.');
            return error;
        }
    }
};
AppService = __decorate([
    (0, common_1.Injectable)()
], AppService);
exports.AppService = AppService;
//# sourceMappingURL=app.service.js.map