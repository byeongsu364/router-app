import React from 'react'
import { useParams, useNavigate, useLocation } from 'react-router-dom';
import './CommunityDetail.css'

const CommunityDetail = () => {

    const { id } = useParams()
    const nav = useNavigate()
    const { state } = useLocation()
    const data = state;

    return (
        <section className="detail-card">
            <h1>Community Detail</h1>
            <div className="detail-meta">
                <p><span className="label">현재글 ID :</span> <span className="value">{id}</span></p>
                <p><span className="label">제목 :</span> <span className="value">{data?.subject ?? '정보 없음'}</span></p>
                <p><span className="label">작성자 :</span> <span className="value">{data?.writer ?? '정보 없음'}</span></p>
                <p><span className="label">작성날짜 :</span> <span className="value">{data?.date ?? '정보 없음'}</span></p>
                <p><span className="label">조회수 :</span> <span className="value">{data?.views ?? '정보 없음'}</span></p>
            </div>
            <div className="btn-row">
                <button onClick={() => nav(-1)}>뒤로 가기</button>
                <button onClick={() => nav('/')}>홈으로 가기</button>
            </div>
        </section>
    )
}

export default CommunityDetail