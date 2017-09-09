import fetchDdsTexture from './fetch-texture/fetch-dds-texture.js'
import fetchImageTexture from './fetch-texture/fetch-image-texture.js'
import PromiseCache from '../../../../utils/promise-cache.js'

var cache = new PromiseCache()

var fetchTextureByType = {
  '.dds': fetchDdsTexture,
  '.jpg': fetchImageTexture,
  '.jpeg': fetchImageTexture,
  '.jpe': fetchImageTexture,
  '.png': fetchImageTexture,
  '.gif': fetchImageTexture,
  '.svg': fetchImageTexture
}

export default function fetchTexture (url, queue) {

  // internals
  var cacheKey = url

  // try cache
  var promiseFromCache = cache.get(cacheKey)
  if (promiseFromCache) return promiseFromCache

  // get file extension
  var extSearch = url.match(/\.[A-Za-z]+(?=\?|$)/i)
  var type = extSearch ? extSearch[0].toLowerCase() : '.jpg'

  if (!fetchTextureByType[type]) {
    // unknown texture type. fallback to JPG
    console.warn('Unknown texture type ' + type + '. Trying to load as JPG.')
    type = '.jpg'
  }

  var promise = fetchTextureByType[type](url)

  // add to cache
  cache.add(cacheKey, promise)

  return promise

}