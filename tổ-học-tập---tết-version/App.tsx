
import React from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import Home from './pages/Home';
import MemberDetail from './pages/MemberDetail';
import PetalRain from './components/PetalRain';
import StudyMentor from './components/StudyMentor';
import { MEMBERS } from './constants';

const Header: React.FC = () => {
  const location = useLocation();
  
  return (
    <header className="glass-header sticky top-0 z-[100] shadow-lg text-white">
      <nav className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-black tracking-tighter hover:opacity-80 transition-opacity">
          TỔ <span className="text-[#ffd700]">HỌC TẬP</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-2">
          <Link 
            to="/" 
            className={`px-4 py-2 rounded-full font-bold transition-all ${location.pathname === '/' ? 'bg-[#ffd700] text-[#c8102e]' : 'hover:bg-white/10'}`}
          >
            Trang chủ
          </Link>
          {MEMBERS.map((m, idx) => (
            <Link 
              key={m.id}
              to={`/member/${m.id}`} 
              className={`px-4 py-2 rounded-full font-bold transition-all text-sm ${location.pathname === `/member/${m.id}` ? 'bg-[#ffd700] text-[#c8102e]' : 'hover:bg-white/10'}`}
            >
              TV{idx + 1}
            </Link>
          ))}
        </div>
        
        {/* Mobile simple nav hint */}
        <div className="md:hidden text-xs font-bold text-[#ffd700]">
          XUÂN BÍNH NGỌ 2026
        </div>
      </nav>
    </header>
  );
};

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#c8102e] text-white py-12 px-4 border-t-8 border-[#ffd700]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold mb-2">TỔ HỌC TẬP</h2>
          <p className="opacity-70">Gắn kết đam mê - Chinh phục tri thức</p>
        </div>
        
        <div className="flex gap-8 text-sm font-bold">
          <Link to="/" className="hover:text-[#ffd700]">Trang chủ</Link>
          <a href="#" className="hover:text-[#ffd700]">Kế hoạch tổ</a>
          <a href="#" className="hover:text-[#ffd700]">Thư viện tài liệu</a>
        </div>
        
        <div className="text-center md:text-right text-xs opacity-50">
          <p>&copy; 2026 Tổ Học Tập - Xuân Bính Ngọ. All rights reserved.</p>
          <p>Powered by Gemini AI Technology</p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen flex flex-col relative overflow-hidden">
        {/* Background Elements */}
        <PetalRain />
        
        <Header />
        
        <div className="flex-grow bg-[#fff8e1]/50 relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/member/:id" element={<MemberDetail />} />
          </Routes>
        </div>
        
        <Footer />
        
        {/* AI Floating Assistant */}
        <StudyMentor />
      </div>
    </Router>
  );
};

export default App;
