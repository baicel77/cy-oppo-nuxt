import { IHomeState } from '~/store/type'
import cyRequest, { IResultData } from './index'
export type IHomeInfoType = 'oppo' | 'onePlus' | 'intelligent' | 'server'
export function getHomeInfoData(type: IHomeInfoType) {
  return cyRequest.get<IResultData<IHomeState>>('/home/info', {
    type
  })
}