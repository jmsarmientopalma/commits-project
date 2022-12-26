import { Injectable } from '@nestjs/common';
import { Octokit } from "octokit";
import { Commit } from './interfaces/commits';

@Injectable()
export class AppService {

  apikey: string = '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';
  user: string = 'jmsarmientopalma';
  repo: string = 'commits-project';

  private async githubAuth(userApikey:string) {
    try {
      const octokit = new Octokit({
        auth: userApikey
      })
  
      return octokit; 
    } catch (error) {
      throw error;
    }
  }

  public async getCommits(): Promise<Commit[]> {

    let resp: Commit[];

    try {
      const octokit = await this.githubAuth(this.apikey);
    
      const {data} = await octokit.request(`GET /repos/${this.user}/${this.repo}/commits{?sha,path,author,since,until,per_page,page}`, {
        owner: this.user,
        repo: this.repo
      })

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
    } catch (error) {
      
      console.log('There\'s some errors obtaining commits from the repository.');
      return error;
    
    }
  }
}
