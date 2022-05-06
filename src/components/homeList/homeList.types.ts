import { IQuery } from './../../commons/types/generated/types';

export interface IPropsHomeListUI{
    homeList?:Pick<IQuery,"fetchUseditems">
    onLoadMore?:() => void
}
