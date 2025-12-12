import React from 'react';
import { useLocation } from 'react-router-dom';

const Footer = () => {
    const { pathname } = useLocation();
    const isTabScreen = ['/', '/pass', '/profile', '/detail'].some(
        route => pathname === route || pathname.startsWith(`${route}/`)
    );
    if (pathname.startsWith('/map')) return null;

    return (
        <footer className={`site-footer ${isTabScreen ? 'footer-tab' : 'footer-default'}`}>
            <div className="footer-content">
                {/* Brand and Contact */}
                <div className="footer-main">
                    <h3 className="footer-brand">FLYING JAPAN</h3>
                    <p className="footer-tagline">일본 여행의 모든 혜택을 한 곳에</p>

                    <div className="footer-contacts">
                        <a href="mailto:Recruit@flyingjp.com" className="contact-link">
                            Recruit@flyingjp.com
                        </a>
                    </div>
                </div>

                <div className="footer-right">
                    {/* Links */}
                    <div className="footer-links">
                        <a href="/about/">회사 소개</a>
                        <a href="/careers/">채용</a>
                    </div>

                    {/* Social Links */}
                    <div className="footer-social">
                        <a href="https://cafe.naver.com/d2d2d2" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Naver Cafe">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                <path d="M4 4h4.5l3 5 3-5H19v16h-4.5v-6L12 15l-2.5-3v6H4z"/>
                            </svg>
                        </a>
                        <a href="https://www.threads.com/@flying_jp?hl=ja" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Threads">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M12 3c-4.6 0-8 2.6-8 8s3.4 10 8 10 8-2.6 8-8-3.4-10-8-10z"/>
                                <path d="M9 9.5c1-1.5 4-1.4 5 0 .6.9.8 2.6-.7 3.1-1.3.4-2.3-.8-2.3-2.2 0-2 2.2-3.5 4.6-2.2"/>
                            </svg>
                        </a>
                        <a href="https://www.instagram.com/flying_jp/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Instagram">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                            </svg>
                        </a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p className="copyright">© 2025 FLYING JAPAN. All rights reserved.</p>
            </div>

            <style>{`
                .site-footer {
                    background: #ffffff;
                    border-top: 1px solid #f0f0f0;
                    padding: 22px 20px 6px;
                    margin-top: 16px;
                    margin-bottom: calc(36px + env(safe-area-inset-bottom));
                    transition: padding 0.2s ease, margin 0.2s ease;
                }

                .footer-tab {
                    padding: 16px 16px calc(14px + env(safe-area-inset-bottom));
                    margin-top: 16px;
                }

                .footer-default {
                    padding-bottom: 22px;
                }

                .footer-content {
                    max-width: 1200px;
                    margin: 0 auto;
                    display: flex;
                    flex-direction: column;
                    gap: 14px;
                    padding-bottom: 14px;
                    border-bottom: 1px solid #f0f0f0;
                }

                .footer-tab .footer-content {
                    gap: 14px;
                    padding-bottom: 12px;
                }

                .footer-main {
                    display: flex;
                    flex-direction: column;
                    gap: 8px;
                }

                .footer-tab .footer-main {
                    gap: 8px;
                }

                .footer-brand {
                    font-size: 24px;
                    font-weight: 700;
                    color: #1a1a1a;
                    margin: 0;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    -webkit-background-clip: text;
                    -webkit-text-fill-color: transparent;
                    background-clip: text;
                }

                .footer-tab .footer-brand {
                    font-size: 20px;
                }

                .footer-tagline {
                    margin: 0;
                    color: #666;
                    font-size: 14px;
                    line-height: 1.4;
                }

                .footer-tab .footer-tagline {
                    font-size: 13px;
                }

                .footer-contacts {
                    display: flex;
                    flex-wrap: wrap;
                    align-items: center;
                    gap: 6px;
                    margin-top: 4px;
                    font-size: 13px;
                }

                .footer-tab .footer-contacts {
                    gap: 6px;
                    font-size: 13px;
                }

                .contact-link {
                    color: #667eea;
                    text-decoration: none;
                    transition: color 0.2s ease;
                }

                .contact-link:hover {
                    color: #764ba2;
                    text-decoration: underline;
                }

                .contact-divider {
                    color: #ddd;
                }

                .contact-text {
                    color: #666;
                }

                .footer-right {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-end;
                    gap: 10px;
                    width: 100%;
                }

                .footer-links {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                    align-items: center;
                    gap: 8px;
                    font-weight: 600;
                }

                .footer-links a {
                    padding: 6px 10px;
                    border-radius: 10px;
                    background: #f6f7fb;
                    color: #444;
                    text-decoration: none;
                    transition: background 0.2s ease, color 0.2s ease;
                    font-size: 13px;
                }

                .footer-links a:hover {
                    background: linear-gradient(135deg, rgba(102, 126, 234, 0.12), rgba(118, 75, 162, 0.12));
                    color: #111;
                }

                .footer-social {
                    display: flex;
                    gap: 10px;
                    flex-wrap: wrap;
                    justify-content: flex-end;
                }

                .footer-tab .footer-social {
                    gap: 10px;
                }

                .social-icon {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    width: 38px;
                    height: 38px;
                    border-radius: 50%;
                    background: #f8f9fa;
                    color: #666;
                    text-decoration: none;
                    transition: all 0.3s ease;
                }

                .footer-tab .social-icon {
                    width: 36px;
                    height: 36px;
                }

                .social-icon:hover {
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    color: #ffffff;
                    transform: translateY(-2px);
                    box-shadow: 0 4px 12px rgba(102, 126, 234, 0.25);
                }

                .footer-bottom {
                    max-width: 1200px;
                    margin: 0 auto;
                    padding-top: 16px;
                    text-align: center;
                }

                .footer-tab .footer-bottom {
                    padding-top: 12px;
                }

                .copyright {
                    margin: 0;
                    font-size: 13px;
                    color: #999;
                }

                @media (max-width: 767px) {
                    .site-footer {
                        padding: 20px 16px 12px;
                    }

                    .footer-tab {
                        padding: 14px 14px calc(12px + env(safe-area-inset-bottom));
                    }
                }

                @media (min-width: 768px) {
                    .site-footer {
                        padding: 24px 32px 14px;
                    }

                    .footer-content {
                        flex-direction: row;
                        justify-content: space-between;
                        align-items: flex-start;
                        gap: 18px;
                    }

                    .footer-main {
                        flex: 1;
                    }

                    .footer-links {
                        gap: 12px;
                    }

                    .footer-right { width: auto; align-items: flex-end; }
                    .footer-social { gap: 12px; }
                    .social-icon { width: 40px; height: 40px; }

                    .footer-tab {
                        padding: 20px 32px 16px;
                    }

                    .footer-tab .footer-brand {
                        font-size: 22px;
                    }

                    .footer-tab .social-icon {
                        width: 40px;
                        height: 40px;
                    }
                }
            `}</style>
        </footer>
    );
};

export default Footer;
