import React from 'react';

const Careers = () => {
    const roles = [
        {
            id: 'manager',
            title: '[플라잉재팬] 오사카 여행자센터 매니저',
            type: 'Full-time',
            location: 'Osaka, Japan',
            status: '모집중',
            desc: '센터 운영 총괄, 스케줄/시설 관리, 이벤트 기획',
            applyMail: 'recruit@flyingjp.com',
            applySubject: '[센터매니저 지원_이름]',
            sections: [
                {
                    heading: '주요 업무',
                    body: [
                        '여행자센터 전반 운영 관리(짐보관, 렌탈, 멤버십, 할인 쿠폰 등 응대/현장 관리)',
                        '현장 이벤트 기획·운영, 정산 및 운영 리포트 작성',
                        '아르바이트 스케줄 관리 및 교육, 시설 관리',
                        '고객 피드백 기반 현장 개선 및 실행',
                    ],
                },
                {
                    heading: '자격 요건',
                    body: [
                        '현장에서 문제를 발견하고 스스로 실행하며 개선하는 분',
                        '다양한 사람을 만나며 주도적으로 일하는 것을 선호하는 분',
                        '서비스 개선·콘텐츠 기획·마케팅·운영 등 다양한 업무를 경험하고 싶은 분',
                    ],
                },
                {
                    heading: '우대 사항',
                    body: [
                        '인력 관리 또는 아르바이트 운영 경험',
                        '온라인 주문/재고 관리 경험, 문서/리포트 작성 능력',
                        '협업 툴(Google Docs, Drive, Asana 등) 사용 능숙, 일본어/영어 기본 소통',
                    ],
                },
                {
                    heading: '근무 조건',
                    body: [
                        '정규직 또는 장기 계약직(협의) / 첫 3개월 수습(급여 동일)',
                        '근무지: 오사카 난바역 도보 3분(에디온 난바 본점 1층), 주 6일 교대제(09-15 / 15-21)',
                        '급여: 월 22만엔(협의) + 연 1회 상여금, 비자 지원(정규직 전환 시), 근무 시작: 26년 1월 초',
                    ],
                },
                {
                    heading: '함께할 경험',
                    body: [
                        '오프라인 브랜드 운영, SNS 콘텐츠/마케팅 기획·실행 참여',
                        '일본 로컬 브랜드와의 협업, 실시간 고객 피드백 반영 경험',
                        '추가 센터 오픈 시 운영 리더로 성장할 수 있는 커리어 설계',
                    ],
                },
            ],
        },
        {
            id: 'staff',
            title: '[플라잉재팬] 오사카 여행자센터 직원',
            type: 'Full-time',
            location: 'Osaka, Japan',
            status: '모집중',
            desc: '여행자센터 운영·응대, 현장 기획/정산, 고객 피드백 반영',
            applyMail: 'recruit@flyingjp.com',
            applySubject: '[센터직원 지원_이름]',
            pdf: '/career-center.pdf',
            sections: [
                {
                    heading: '주요 업무',
                    body: [
                        '여행자센터 전반 운영 관리(짐보관, 렌탈, 멤버십, 쿠폰 등 서비스 응대 및 현장 관리)',
                        '현장 이벤트 기획·운영 관리, 정산 및 운영 업무 기록',
                        '고객 피드백 기반 현장 개선 및 실행',
                    ],
                },
                {
                    heading: '자격 요건',
                    body: [
                        '현장에서 문제를 발견하고 스스로 해결하는 주도적인 분',
                        '사람을 만나며 직접 부딪히는 일을 선호하는 분',
                        '오사카 장기 거주, 기본 일본어 소통 가능자',
                    ],
                },
                {
                    heading: '우대 사항',
                    body: [
                        '고객 응대/매장 관리 경험',
                        '온라인 주문 처리 및 관리 경험(스마트스토어, 쿠팡 등)',
                        '협업툴(Google Docs/Drive, Asana 등) 사용 경험',
                    ],
                },
                {
                    heading: '근무 조건',
                    body: [
                        '정규직 또는 장기 계약직(협의) / 첫 3개월 수습(급여 동일)',
                        '근무지: 오사카 난바역 도보 3분, 근무시간: 주 6일 교대제(09-15 / 15-21)',
                        '급여: 월 20만엔(협의) + 연 1회 상여금, 비자 지원(정규직 전환 시)',
                    ],
                },
            ],
        },
    ];

    const [openId, setOpenId] = React.useState(null);

    return (
        <div className="careers-page">
            <section className="hero">
                <p className="eyebrow">Join the crew</p>
                <h1>여행자의 시간을 아끼는 제품을 만듭니다</h1>
                <p className="lede">
                    Flying Pass는 빠르게 실험하고, 현지 데이터로 개선하며, 파트너와 함께 성장하는 팀입니다.
                    새로운 동료를 기다립니다.
                </p>
            </section>

            <section className="roles">
                <div className="board">
                    <div className="board-head">
                        <span>포지션</span>
                        <span>근무지</span>
                        <span>형태</span>
                        <span>상태</span>
                        <span></span>
                    </div>
                    {roles.map((role, idx) => (
                        <div key={idx} className="board-group">
                            <div className="board-row">
                                <div className="board-title">
                                    <p className="role-type">{role.type}</p>
                                    <h3>{role.title}</h3>
                                    <p className="role-desc">{role.desc}</p>
                                </div>
                                <span className="pill">{role.location}</span>
                                <span className="pill soft">{role.type}</span>
                                <span className={`status ${role.status === '모집중' ? 'open' : 'closed'}`}>{role.status}</span>
                                <div className="row-actions">
                                    <button className="ghost-btn" onClick={() => setOpenId(openId === role.id ? null : role.id)}>
                                        {openId === role.id ? '닫기' : '자세히'}
                                    </button>
                                    <a className="apply-btn" href={`mailto:${role.applyMail}?subject=${encodeURIComponent(role.applySubject)}`}>
                                        지원
                                    </a>
                                </div>
                            </div>
                            {openId === role.id && (
                                <div className="detail-panel">
                                    <div className="detail-header">
                                        <div>
                                            <p className="role-type">{role.type}</p>
                                            <h3>{role.title}</h3>
                                            <p className="detail-lede">{role.desc}</p>
                                        </div>
                                        <div className="row-actions detail-actions-inline">
                                            <button className="ghost-btn" onClick={() => setOpenId(null)}>닫기</button>
                                            <a className="apply-btn" href={`mailto:${role.applyMail}?subject=${encodeURIComponent(role.applySubject)}`}>
                                                지원하기
                                            </a>
                                        </div>
                                    </div>
                                    <div className="detail-grid">
                                        {role.sections.map((sec, i) => (
                                            <div className="detail-card" key={i}>
                                                <h4>{sec.heading}</h4>
                                                <ul>
                                                    {sec.body.map((item, j) => <li key={j}>{item}</li>)}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="detail-actions">
                                        <a className="apply-btn solid" href={`mailto:${role.applyMail}?subject=${encodeURIComponent(role.applySubject)}`}>
                                            이메일 지원
                                        </a>
                                        {role.pdf && (
                                            <a className="apply-btn ghost" href={role.pdf} target="_blank" rel="noopener noreferrer">
                                                PDF 보기
                                            </a>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </section>

            <section className="cta">
                <h3>열린 포지션이 없어도 괜찮아요</h3>
                <p>자유 형식의 지원서를 보내주시면 함께할 기회를 찾아봅니다.</p>
                <a className="apply-inline" href="mailto:partner@flyingjapan.com?subject=Flying%20Pass%20Open%20Application">
                    partner@flyingjapan.com
                </a>
            </section>

            <style>{`
                .careers-page {
                    max-width: 1040px;
                    margin: 0 auto;
                    padding: 32px 20px 120px;
                    color: #111;
                }
                .hero { margin-bottom: 32px; }
                .eyebrow {
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    font-weight: 700;
                    font-size: 12px;
                    color: #667eea;
                    margin-bottom: 8px;
                }
                h1 { font-size: 30px; font-weight: 800; margin: 0 0 10px 0; letter-spacing: -0.02em; }
                .lede { margin: 0; color: #2f3137; line-height: 1.7; font-size: 16px; }
                .roles { display: flex; flex-direction: column; gap: 12px; margin-bottom: 24px; }
                .board {
                    border: 1px solid #edf0f5;
                    border-radius: 14px;
                    background: #fff;
                    box-shadow: 0 4px 14px rgba(0,0,0,0.04);
                    overflow: hidden;
                }
                .board-head, .board-row {
                    display: grid;
                    grid-template-columns: minmax(0, 2.1fr) minmax(0, 1.05fr) minmax(0, 0.95fr) minmax(0, 0.8fr) auto;
                    align-items: flex-start;
                    gap: 16px 14px;
                    padding: 16px 18px;
                }
                .board-group { border-top: 1px solid #f0f2f7; }
                .board-group:first-of-type { border-top: none; }
                .board-head {
                    background: #f7f8fb;
                    font-weight: 700;
                    color: #6d7590;
                    font-size: 12px;
                    text-transform: uppercase;
                    letter-spacing: 0.02em;
                }
                .board-row { background: #fff; transition: background 0.2s ease; }
                .board-row:hover { background: #fdfdff; }
                .board-title h3 { margin: 4px 0 6px 0; font-size: 18px; letter-spacing: -0.01em; }
                .board-title .role-desc { margin: 0; color: #3d4049; line-height: 1.55; font-size: 14px; }
                .role-type { margin: 0; color: #667eea; font-weight: 700; font-size: 11.5px; letter-spacing: 0.05em; text-transform: uppercase; }
                .pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 8px 11px;
                    border-radius: 12px;
                    background: #f3f5fa;
                    color: #313745;
                    font-weight: 700;
                    font-size: 13px;
                }
                .pill.soft { background: #f7f7f7; }
                .status {
                    font-weight: 800;
                    padding: 8px 10px;
                    border-radius: 10px;
                    text-align: center;
                    min-width: 92px;
                    font-size: 13px;
                }
                .status.open { background: #e8f5e9; color: #2e7d32; }
                .status.closed { background: #fce8e6; color: #c62828; }
                .row-actions {
                    display: flex;
                    align-items: center;
                    gap: 10px;
                    justify-content: flex-end;
                    align-self: stretch;
                }
                .ghost-btn {
                    background: #f7f8fd;
                    border: 1px solid #e0e5f5;
                    border-radius: 10px;
                    padding: 8px 12px;
                    font-weight: 700;
                    color: #2f3748;
                    cursor: pointer;
                }
                .apply-btn {
                    background: #2563ff;
                    color: #fff;
                    border-radius: 10px;
                    padding: 10px 16px;
                    font-weight: 700;
                    font-size: 13.5px;
                    text-decoration: none;
                    white-space: nowrap;
                    border: 1px solid #1f54d9;
                }
                .detail-panel {
                    border-top: 1px solid #f0f2f7;
                    background: #f9faff;
                    padding: 16px 18px 20px;
                    border-left: 4px solid #d7def6;
                }
                .detail-header {
                    display: flex;
                    align-items: flex-start;
                    justify-content: space-between;
                    gap: 14px;
                    padding: 0 0 12px 0;
                    border-bottom: 1px solid #e5e9f4;
                    margin-bottom: 14px;
                }
                .detail-header h3 { margin: 4px 0 6px 0; }
                .detail-lede { margin: 0; color: #3a3c44; line-height: 1.55; font-size: 14px; }
                .detail-actions-inline .ghost-btn { padding: 8px 12px; }
                .detail-grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 16px;
                    margin-bottom: 14px;
                }
                .detail-card {
                    background: #fff;
                    border: 1px solid #e2e6f0;
                    border-radius: 12px;
                    padding: 12px 14px;
                    box-shadow: 0 1px 2px rgba(0,0,0,0.02);
                }
                .detail-card h4 {
                    margin: 0 0 8px 0;
                    font-size: 15px;
                    font-weight: 800;
                    color: #111;
                }
                .detail-card ul {
                    margin: 0;
                    padding-left: 18px;
                    color: #30323a;
                    line-height: 1.65;
                    font-size: 14px;
                }
                .detail-card li { margin-bottom: 6px; }
                .detail-card li:last-child { margin-bottom: 0; }
                .detail-actions {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                }
                .apply-btn.solid { background: #2563ff; border-color: #1f54d9; }
                .apply-btn.ghost {
                    background: #f7f8fd;
                    color: #1f2a44;
                    border: 1px solid #dfe3f0;
                }
                .cta {
                    border: 1px dashed #d9def0;
                    border-radius: 14px;
                    padding: 16px 18px;
                    background: #f7f8fd;
                    text-align: left;
                }
                .cta h3 { margin: 0 0 6px 0; }
                .cta p { margin: 0 0 10px 0; color: #4a4a4a; }
                .apply-inline { color: #222; font-weight: 700; text-decoration: none; }
                @media (max-width: 768px) {
                    .board-head { display: none; }
                    .board-row {
                        grid-template-columns: 1fr;
                        align-items: flex-start;
                    }
                    .board-row > span, .board-row > a { justify-self: flex-start; }
                    .row-actions { width: 100%; justify-content: flex-start; }
                    .status { min-width: 0; }
                    .detail-grid { grid-template-columns: 1fr; }
                    .detail-header { flex-direction: column; }
                    .detail-actions-inline { width: 100%; }
                }
                @media (min-width: 768px) {
                    .careers-page { padding: 44px 24px 140px; }
                    h1 { font-size: 32px; }
                }
            `}</style>
        </div>
    );
};

export default Careers;
