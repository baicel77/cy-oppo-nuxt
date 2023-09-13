import { defineStore } from 'pinia'
import type { IDetailState } from './type'
import type { IDeatilType } from '@/service/detail'
import { getOppoDeatilData } from '@/service/detail'

const useDetailStore = defineStore('detail', {
  state: (): IDetailState => ({
    oppoDetail: [],
  }),
  actions: {
    async fetchOppoDetailAction(type: IDeatilType = 'oppo') {
      const { data } = await getOppoDeatilData(type)
      const oppoDetailData = data.value.data
      this.oppoDetail = oppoDetailData
    }
  }
})
export default useDetailStore