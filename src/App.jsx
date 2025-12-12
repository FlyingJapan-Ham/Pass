import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import BottomNav from './components/BottomNav';
import Navbar from './components/Navbar';
import Profile from './pages/Profile';
import MapPage from './pages/MapPage';
import PartnerIntro from './pages/PartnerIntro';
import PassIntro from './pages/PassIntro';
import FilterModal from './components/FilterModal';
import Footer from './components/Footer';
import About from './pages/About';
import Careers from './pages/Careers';
import PartnerInquiry from './pages/PartnerInquiry';
import LayoutWrapper from './components/LayoutWrapper';

function App() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const [sortOption, setSortOption] = React.useState('Recommended');
    const [benefitFilter, setBenefitFilter] = React.useState('All');

    const location = useLocation();
    const isMapPage = location.pathname.startsWith('/map');
    const isCareersPage = location.pathname.startsWith('/careers');
    const hideFooter = isMapPage;
    const hideBottomNav = isCareersPage;

    const handleFilterApply = ({ sort, benefit }) => {
        setSortOption(sort);
        setBenefitFilter(benefit);
    };

    return (
        <LayoutWrapper>
            <div className="app-container">
                <Navbar
                    onSearch={setSearchQuery}
                    onFilterClick={() => setIsFilterOpen(true)}
                />
                <main>
                    <Routes>
                        <Route path="/" element={<Home searchQuery={searchQuery} sortOption={sortOption} benefitFilter={benefitFilter} />} />
                        <Route path="/pass" element={<PassIntro />} />
                        <Route path="/map" element={<MapPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/detail/:id" element={<Detail />} />
                        <Route path="/partner-intro" element={<PartnerIntro />} />
                        <Route path="/about/" element={<About />} />
                        <Route path="/careers/" element={<Careers />} />
                        <Route path="/partner-inquiry" element={<PartnerInquiry />} />
                    </Routes>
                </main>
                {!hideFooter && <Footer />}
                {!hideBottomNav && <BottomNav />}
                <FilterModal
                    isOpen={isFilterOpen}
                    onClose={() => setIsFilterOpen(false)}
                    onApply={handleFilterApply}
                    currentSort={sortOption}
                    currentBenefit={benefitFilter}
                />
                <style>{`
                    .app-container {
                        display: flex;
                        flex-direction: column;
                        min-height: 100vh;
                        background-color: #fff;
                    }
                    main {
                        flex: 1;
                        position: relative;
                        display: block;
                        padding-bottom: 0;
                    }
                `}</style>
            </div>
        </LayoutWrapper>
    );
}

export default App;
