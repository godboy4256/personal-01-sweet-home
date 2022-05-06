import { useQuery } from '@apollo/client';
import { IQuery, IQueryFetchUseditemsArgs } from '../../commons/types/generated/types';
import HomeListUI from './homeList.presenter';
import { FETCH_USED_ITEMS } from './homeList.querys';

export default function HomeList() {
    const {data : homeList,fetchMore} = useQuery<Pick<IQuery,"fetchUseditems">,IQueryFetchUseditemsArgs>(FETCH_USED_ITEMS,{
        variables:{
            page : 1
        }
    })
    const onLoadMore = () => {
        if (!homeList) return;
        fetchMore({
          variables: { page: Math.ceil(homeList.fetchUseditems.length / 10) + 1 },
          updateQuery: (prev, { fetchMoreResult }) => {
            if (!fetchMoreResult.fetchUseditems)
              return { fetchUseditems: [...prev.fetchUseditems] };
    
            return {
                fetchUseditems: [
                ...prev.fetchUseditems,
                ...fetchMoreResult.fetchUseditems,
              ],
            };
          },
        });
      };
    return <HomeListUI homeList={homeList} onLoadMore={onLoadMore}/>
}
