import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Detail from './pages/Detail';
import BottomNav from './components/BottomNav';
import Navbar from './components/Navbar';
import Wishlists from './pages/Wishlists';
import Profile from './pages/Profile';
import MapPage from './pages/MapPage';

import FilterModal from './components/FilterModal';

function App() {
    const [searchQuery, setSearchQuery] = React.useState('');
    const [isFilterOpen, setIsFilterOpen] = React.useState(false);
    const [sortOption, setSortOption] = React.useState('Recommended');

    return (
        <Router>
            <div className="app-container">
                <Navbar
                    onSearch={setSearchQuery}
                    onFilterClick={() => setIsFilterOpen(true)}
                />
                <main>
                    <Routes>
                        <Route path="/" element={<Home searchQuery={searchQuery} sortOption={sortOption} />} />
                        <Route path="/wishlists" element={<Wishlists />} />
                        <Route path="/map" element={<MapPage />} />
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/detail/:id" element={<Detail />} />
                    </Routes>
                </main>
                <BottomNav />
                <FilterModal
                    isOpen={isFilterOpen}
                    onClose={() => setIsFilterOpen(false)}
                    onApply={setSortOption}
                    currentSort={sortOption}
                />
                <style>{`
                    .app-container {
                        display: flex;
                        flex-direction: column;
                        height: 100dvh;
                        overflow: hidden;
                        background-color: #fff;
                    }
                    main {
                        flex: 1;
                        overflow: hidden;
                        position: relative;
                        display: flex;
                        flex-direction: column;
                    }
                `}</style>
            </div>
        </Router>
    );
}

export default App;
