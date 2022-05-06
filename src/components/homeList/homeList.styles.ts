import styled from "@emotion/styled";


export const HomeListContainer = styled.div`
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
`

export const HomeListTitle = styled.h2`
    font-size: 30px;
    text-align: center;
    padding: 50px 0;
`

export const HomeListUl = styled.ul`
    width: 100%;
    display: flex;
    flex-wrap: wrap;
`

export const HomeListLiImgBox = styled.div`
    width: 100%;
    height: 200px;
    background-color: #000;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    & > img{
        width: 100%;
    }
    & > .none__img{
        width:100%;
        height:100%;
        background-color: #777;
        display: flex;
        color: #fff;
        justify-content: center;
        align-items: center;
    }
`

export const HomeListLiInfoBox = styled.div`
    padding: 5px 10px;
`

export const HomeListLi = styled.li`
    width: 25%;
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    padding:10px;
    transition: .4s;
    border-bottom: 1px solid #ccc;
    cursor: pointer;
    &:hover{
        background-color:rgba(100,100,100,0.2);
    }
    & div > h3{
        width: 100%;
        font-size: 20px;
        padding-bottom: 10px;
        font-weight: 100;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    & div > h4{
        font-size: 18px;
        padding-bottom: 10px;
    }
    & div > h5{
        font-size: 16px;
        color: #777;
        font-weight: 300;
    }
`

