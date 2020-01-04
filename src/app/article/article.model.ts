export class Article {
  title: string;
  link: string;
  votes: number;

  // NOTE the votes param is optional, why the ? in votes?: number
  constructor(title: string, link: string, votes?: number) {
    this.title = title;
    this.link = link;
    // NOTE this.votes defaults to 0, thus the || 0
    this.votes = votes || 0;
  }
  voteUp(): void {
    this.votes += 1;
  }

  voteDown(): void {
    this.votes -= 1;
  }
  // NOTE domain() is a utility function that extracts
  // the domain from a URL, which we'll explain shortly
  domain(): string {
    try {
      const domainAndPath: string = this.link.split("//")[1];

      return domainAndPath.split("/")[0];
    } catch (err) {
      return null;
    }
  }
}
