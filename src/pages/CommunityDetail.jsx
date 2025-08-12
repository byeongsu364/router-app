import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';

const CommunityDetail = () => {

    const { id } = useParams()
    const nav = useNavigate()
    const { state } = useLocation()
    const data = state;

    return (
        <section>
            <h1>상세보기</h1>
            <p>현재글 ID : {id}</p>
            <p>제목 : {data?.subject ?? '정보 없음'}</p>
            <p>작성자 : {data?.writer ?? '정보 없음'}</p>
            <p>작성날짜 : {data?.date ?? '정보 없음'}</p>
            <p>조회수 : {data?.views ?? '정보 없음'}</p>

            <button onClick={() => nav(-1)}>뒤로 가기</button>
            <button onClick={() => nav('/')}>홈으로 가기</button>
        </section>
    )
}

export default CommunityDetail