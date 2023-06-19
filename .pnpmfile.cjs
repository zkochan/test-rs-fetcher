const { fetchTarball } = require('../tarball-fetcher-rs')

module.exports = {
  hooks: {
    fetchers: {
      remoteTarball: ({ defaultFetchers }) => {
        return async (cafs, resolution, opts) => {
          // console.log('fetching', resolution.tarball)
          const filesIndex = await fetchTarball(resolution['tarball'])
          // console.log('done fetching', resolution.tarball)
          return { filesIndex, local: true }
        }
      }
    }
  }
}
