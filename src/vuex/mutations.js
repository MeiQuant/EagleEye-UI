/**
 * Created by alfred on 16/8/17.
 */

export default {
  GET_PLATFORMS (state, data) {
    state.platforms.count = data.data.total
    state.platforms.platformList = data.data.data
  },
  GET_PRODUCTS (state, data) {
    state.product = data
  }
}
