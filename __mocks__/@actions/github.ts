class Context {
  get repo(): {owner: string; repo: string} {
    const repository = process.env['GITHUB_REPOSITORY'];
    if (repository) {
      const [owner, repo] = repository.split('/');
      return {owner, repo};
    }
    throw new Error(
      "context.repo requires a GITHUB_REPOSITORY environment variable like 'owner/repo'"
    );
  }
}

export const context = new Context();
export const getOctokit = jest.fn();
