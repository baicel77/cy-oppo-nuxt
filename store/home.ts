import { defineStore } from 'pinia'
import type { IHomeState } from './type'
import type { IHomeInfoType } from '@/service/home'
import cyRequest, { IResultData } from '@/service'

const useHomeStore = defineStore('home', {
  state: (): IHomeState => ({
    navbars: [],
    banners: [],
    categorys: [],
  }),
  actions: {
    async fetchHomeInfoAction(type: IHomeInfoType = 'oppo') {
      const { data } = await cyRequest.get<IResultData<IHomeState>>('/home/info', { type })
      const homeInfo = data.value.data
      this.navbars = homeInfo.navbars
      this.banners = homeInfo.banners
      this.categorys = homeInfo.categorys
    }
  }
})
export default useHomeStore