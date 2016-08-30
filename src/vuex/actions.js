/**
 * Created by alfred on 16/8/17.
 */
import api from '../api'

const { platform } = api

export const initPlatforms = ({ dispatch }) => {
  platform.getAllPlatforms(data => {
    dispatch('GET_PLATFORMS', data)
  })
}
