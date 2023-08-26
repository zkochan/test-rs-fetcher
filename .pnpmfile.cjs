const { fetchTarball } = require('../tarball-fetcher-rs')

module.exports = {
  hooks: {
    fetchers: {
      remoteTarball: ({ defaultFetchers }) => {
        return async (cafs, resolution, opts) => {
          const filesIndex = await fetchTarball(resolution['tarball'], resolution['integrity'])
          return { filesIndex }
        }
      }
    }
  }
}
