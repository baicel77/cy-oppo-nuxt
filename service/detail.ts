import { IDetail } from '~/store/type'
import cyRequest, { IResultData } from './index'
export type IDeatilType = 'oppo' | 'air' | 'watch' | 'tablet'
export function getOppoDeatilData(type: IDeatilType) {
  return cyRequest.get<IResultData<IDetail[]>>('/oppoDetail', {
    type
  })
}