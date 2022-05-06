import React from 'react';
import { v4 as uuidv4 } from "uuid";
import InfiniteScroll from "react-infinite-scroller";
import { IPropsHomeListUI } from './homeList.types';
import * as S from './homeList.styles';


export default function HomeListUI(props:IPropsHomeListUI) {
    return (
        <S.HomeListContainer>
            <S.HomeListTitle>빈 집 목록</S.HomeListTitle>
            <InfiniteScroll
                loadMore={props.onLoadMore || (() => {})}
                hasMore={true}
                pageStart={1}
            >
            <S.HomeListUl>
            {
                props.homeList && props.homeList?.fetchUseditems?.map((el:any) => {
                    return (
                    <S.HomeListLi id={el._id} key={uuidv4()}>
                        <S.HomeListLiImgBox>
                            {
                                el.images[0] && el.images[0].includes('codecamp-file-storage') ?
                                <img src={`https://storage.googleapis.com/${el.images[0]}`} /> :
                                <div className='none__img'>이미지가 없습니다.</div>
                            }
                        </S.HomeListLiImgBox>
                        <S.HomeListLiInfoBox>
                            <h3>{el.name}</h3>
                            <h4>{el.price} 원</h4>
                            <h5>
                                {el.useditemAddress?.address || "서울 독산동 로젠빌라 609호"}
                            </h5>  
                        </S.HomeListLiInfoBox>
                    </S.HomeListLi>
                    )
                })
            }
            </S.HomeListUl>
            </InfiniteScroll>
        </S.HomeListContainer>
    );
}
