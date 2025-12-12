import React from 'react';

const roles = [
    {
        id: 'manager',
        title: '[플라잉재팬] 오사카 여행자센터 매니저',
        summary: '센터 운영 총괄, 스케줄/시설 관리, 이벤트 기획',
        location: 'Osaka, Japan',
        type: 'Full-time',
        status: '모집중',
        postedAt: '2025-12-01',
        deadline: '채용 시 마감',
        applyMail: 'Recruit@flyingjp.com',
        applySubject: '[센터매니저 지원_이름]',
        pdf: null,
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
        summary: '여행자센터 운영·응대, 현장 기획/정산, 고객 피드백 반영',
        location: 'Osaka, Japan',
        type: 'Full-time',
        status: '모집중',
        postedAt: '2025-12-01',
        deadline: '채용 시 마감',
        applyMail: 'Recruit@flyingjp.com',
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

const Careers = () => {
    const [openId, setOpenId] = React.useState(null);

    return (
        <div className="careers">
            <header className="hero">
                <p className="eyebrow">Careers</p>
                <h1>여행자의 시간을 아끼는 팀, 플라잉재팬</h1>
                <p className="lede">
                    오사카 여행자센터를 함께 키워갈 동료를 찾습니다. 역할과 책임을 명확히, 정보는 간결하게 담았습니다.
                </p>
            </header>

            <div className="list">
                {roles.map(role => {
                    const expanded = openId === role.id;
                    return (
                        <article key={role.id} className={`card ${expanded ? 'expanded' : ''}`}>
                            <div className="card-head">
                                <div className="titles">
                                    <p className="eyebrow small">{role.type}</p>
                                    <h2>{role.title}</h2>
                                    <p className="summary">{role.summary}</p>
                                </div>
                                <div className="meta-tags">
                                    <span className="pill">{role.location}</span>
                                    <span className="pill soft">{role.type}</span>
                                    <span className={`pill status ${role.status === '모집중' ? 'open' : 'closed'}`}>{role.status}</span>
                                </div>
                                <div className="meta-right">
                                    <span>게시일 {role.postedAt}</span>
                                    <span>마감일 {role.deadline}</span>
                                </div>
                            </div>

                            <div className="card-actions">
                                <button
                                    className="ghost-btn"
                                    onClick={() => setOpenId(expanded ? null : role.id)}
                                    aria-expanded={expanded}
                                >
                                    {expanded ? '닫기' : '자세히'}
                                </button>
                                <a className="primary-btn" href={`mailto:${role.applyMail}?subject=${encodeURIComponent(role.applySubject)}`}>
                                    이메일 지원
                                </a>
                            </div>

                            {expanded && (
                                <div className="detail">
                                    <div className="grid">
                                        {role.sections.map((sec, idx) => (
                                            <div className="block" key={idx}>
                                                <h3>{sec.heading}</h3>
                                                <ul>
                                                    {sec.body.map((item, j) => (
                                                        <li key={j}>{item}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </article>
                    );
                })}
            </div>

            <section className="open-call">
                <h3>원하는 포지션이 없어도 괜찮아요</h3>
                <p>자유 형식의 소개와 이력을 보내주시면 함께할 기회를 찾아봅니다.</p>
                <a className="primary-btn light" href="mailto:Recruit@flyingjp.com?subject=Flying%20Japan%20Open%20Application">
                    Recruit@flyingjp.com
                </a>
            </section>

            <style>{`
                :root {
                    --border: #e8ebf2;
                    --ink: #101320;
                    --muted: #566072;
                    --pill: #f3f5f9;
                    --pill-soft: #f7f7f7;
                    --brand: #2563ff;
                    --open-bg: #e8f5e9;
                    --open-ink: #2e7d32;
                }
                .careers {
                    max-width: 1080px;
                    margin: 0 auto;
                    padding: 32px 18px 120px;
                    color: var(--ink);
                }
                .hero { margin-bottom: 28px; }
                .eyebrow {
                    text-transform: uppercase;
                    letter-spacing: 0.08em;
                    font-weight: 700;
                    font-size: 12px;
                    color: #667eea;
                    margin: 0 0 6px 0;
                }
                .eyebrow.small { color: #6d7890; margin-bottom: 4px; }
                h1 { margin: 0 0 10px 0; font-size: 30px; letter-spacing: -0.02em; }
                .lede { margin: 0; color: var(--muted); line-height: 1.7; font-size: 16px; }

                .list { display: flex; flex-direction: column; gap: 16px; }
                .card {
                    border: 1px solid var(--border);
                    border-radius: 16px;
                    background: #fff;
                    padding: 16px 16px 14px;
                    box-shadow: 0 8px 20px rgba(0,0,0,0.03);
                }
                .card-head {
                    display: grid;
                    grid-template-columns: minmax(0, 1.6fr) minmax(0, 1fr) auto;
                    gap: 12px;
                    align-items: center;
                }
                .titles h2 { margin: 4px 0 6px 0; font-size: 20px; letter-spacing: -0.01em; }
                .titles .summary { margin: 0; color: #3c3f47; line-height: 1.55; font-size: 14px; }
                .meta-tags { display: flex; gap: 8px; flex-wrap: wrap; justify-content: flex-start; }
                .meta-right {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    color: #4e556a;
                    font-weight: 700;
                    font-size: 12.5px;
                    justify-content: flex-end;
                }
                .pill {
                    display: inline-flex;
                    align-items: center;
                    justify-content: center;
                    padding: 7px 11px;
                    border-radius: 12px;
                    background: var(--pill);
                    color: #2f3440;
                    font-weight: 700;
                    font-size: 13px;
                }
                .pill.soft { background: var(--pill-soft); }
                .pill.status.open { background: var(--open-bg); color: var(--open-ink); }
                .pill.status.closed { background: #fce8e6; color: #c62828; }

                .card-actions {
                    display: flex;
                    gap: 8px;
                    flex-wrap: wrap;
                    margin-top: 12px;
                    justify-content: flex-end;
                    width: 100%;
                }
                .ghost-btn, .primary-btn {
                    border-radius: 10px;
                    font-weight: 700;
                    font-size: 13px;
                    padding: 9px 14px;
                    border: 1px solid var(--border);
                    background: #f6f7fb;
                    color: #1c2233;
                    text-decoration: none;
                    cursor: pointer;
                }
                .primary-btn {
                    background: var(--brand);
                    color: #fff;
                    border-color: #1f54d9;
                }
                .primary-btn.light {
                    background: #eef2ff;
                    color: #1f2a44;
                    border-color: #d8defa;
                }

                .detail {
                    margin-top: 12px;
                    padding-top: 12px;
                    border-top: 1px solid var(--border);
                }
                .grid {
                    display: grid;
                    grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
                    gap: 12px 18px;
                }
                .block h3 {
                    margin: 0 0 6px 0;
                    font-size: 15px;
                    font-weight: 800;
                    color: #121420;
                }
                .block ul {
                    margin: 0;
                    padding-left: 18px;
                    color: #2f323b;
                    line-height: 1.6;
                    font-size: 14px;
                }
                .block li { margin-bottom: 6px; }
                .block li:last-child { margin-bottom: 0; }

                .open-call {
                    margin-top: 28px;
                    padding: 16px 18px;
                    border: 1px dashed var(--border);
                    border-radius: 14px;
                    background: #f9faff;
                }
                .open-call h3 { margin: 0 0 6px 0; }
                .open-call p { margin: 0 0 10px 0; color: var(--muted); }

                @media (max-width: 900px) {
                    .card-head {
                        grid-template-columns: 1fr;
                        align-items: flex-start;
                    }
                    .meta-right {
                        justify-content: flex-start;
                    }
                }
                @media (max-width: 640px) {
                    .careers { padding: 26px 14px 100px; }
                    h1 { font-size: 26px; }
                    .titles h2 { font-size: 18px; }
                    .card { padding: 14px 14px 12px; }
                    .card-actions { margin-top: 10px; }
                    .pill { padding: 6px 10px; font-size: 12.5px; }
                    .meta-right { font-size: 12px; }
                    .grid { grid-template-columns: 1fr; }
                }
            `}</style>
        </div>
    );
};

export default Careers;
