import React from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import './BoardDetail.css'

const BoardDetail = () => {
    const { id } = useParams()
    const nav = useNavigate()

    return (
        <section className="board-detail-card">
            <h1>Board Details</h1>
            <p className="board-detail-meta">
                <span className="label">현재글 ID :</span> <span className="value">{id}</span>
            </p>
            <div className="board-btn-row">
                <button onClick={() => nav(-1)}>뒤로 가기</button>
                <button onClick={() => nav('/')}>홈으로 가기</button>
            </div>
        </section>
    )
}

export default BoardDetail
