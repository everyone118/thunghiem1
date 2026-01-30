
import React from 'react';
import { Link } from 'react-router-dom';
import { MEMBERS } from '../constants';
import Lantern from '../components/Lantern';
import { Users, Target, Calendar, ArrowRight, Quote } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="animate-in fade-in duration-700">
      {/* Hero Section */}
      <section className="relative h-[65vh] flex items-center justify-center text-center overflow-hidden text-white tet-gradient">
        <div className="absolute inset-0 bg-black/20 z-10"></div>
        
        {/* Decorative elements */}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-4xl opacity-20 pointer-events-none z-0">
          <img src="https://picsum.photos/seed/dragon/1200/400" className="w-full h-auto dragon-frame" alt="" />
        </div>
        <Lantern className="absolute bottom-1/4 right-[10%] md:right-[20%] z-20" />
        
        <div className="relative z-20 px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 drop-shadow-2xl">
            TỔ HỌC TẬP
          </h1>
          <p className="text-xl md:text-2xl mb-12 max-w-2xl mx-auto font-medium drop-shadow-md">
            Cùng nhau học tập, cùng nhau tỏa sáng trong không khí Tết Việt Nam rực rỡ.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-[#ffd700] text-[#3c2f2f] px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 min-w-[200px] justify-center hover:scale-105 transition-transform">
              <Quote className="w-5 h-5" /> "Học tập vui - Tết sum vầy"
            </div>
            <div className="bg-[#ffd700] text-[#3c2f2f] px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 min-w-[200px] justify-center hover:scale-105 transition-transform">
              <Target className="w-5 h-5" /> 100% Kế hoạch hoàn thành
            </div>
            <div className="bg-[#ffd700] text-[#3c2f2f] px-6 py-3 rounded-full font-bold shadow-xl flex items-center gap-2 min-w-[200px] justify-center hover:scale-105 transition-transform">
              <Calendar className="w-5 h-5" /> Thứ 4 hàng tuần
            </div>
          </div>
        </div>
      </section>

      {/* Info Sections */}
      <main className="max-w-7xl mx-auto px-4 py-20 space-y-32">
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#c8102e] mb-2">Ảnh & Thông tin tổ</h2>
            <div className="w-24 h-1.5 bg-[#ffd700] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-24">
            <div className="relative group">
              <div className="absolute -inset-4 bg-[#ffd700] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="https://picsum.photos/seed/group/800/600" 
                alt="Ảnh tập thể" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
              />
            </div>
            <div className="bg-white p-8 rounded-3xl shadow-xl border-l-8 border-[#c8102e]">
              <h3 className="text-2xl font-bold text-[#c8102e] mb-4">Ảnh tập thể</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><strong>Thời gian:</strong> Xuân Bính Ngọ 2026</li>
                <li className="flex gap-2"><strong>Địa điểm:</strong> Sân trường thân yêu</li>
                <li className="flex gap-2"><strong>Số lượng:</strong> 6 chiến binh học tập</li>
              </ul>
              <blockquote className="italic text-lg text-gray-600 border-l-4 border-[#ffd700] pl-4 py-2">
                "Cùng nhau vượt qua mọi thử thách để đạt kết quả tốt nhất trong năm học."
              </blockquote>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-white p-8 rounded-3xl shadow-xl border-r-8 border-[#c8102e]">
              <h3 className="text-2xl font-bold text-[#c8102e] mb-4">Hoạt động Tết</h3>
              <ul className="space-y-3 mb-8">
                <li className="flex gap-2"><strong>Hoạt động chính:</strong> Gói bánh chưng - Gói kiến thức</li>
                <li className="flex gap-2"><strong>Thành tựu:</strong> Giải nhất trang trí báo xuân</li>
                <li className="flex gap-2"><strong>Kế hoạch:</strong> Khai bút đầu xuân, bứt phá kỳ 2</li>
              </ul>
              <blockquote className="italic text-lg text-gray-600 border-l-4 border-[#ffd700] pl-4 py-2">
                "Tết là dịp để gắn kết và khởi đầu mới rực rỡ hơn."
              </blockquote>
            </div>
            <div className="order-1 md:order-2 relative group">
              <div className="absolute -inset-4 bg-[#ffd700] rounded-3xl opacity-20 group-hover:opacity-30 transition-opacity"></div>
              <img 
                src="https://picsum.photos/seed/tet/800/600" 
                alt="Hoạt động Tết" 
                className="rounded-2xl shadow-2xl relative z-10 w-full object-cover h-[400px]"
              />
            </div>
          </div>
        </section>

        {/* Members Grid */}
        <section>
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#c8102e] mb-2">Các thành viên của tổ</h2>
            <div className="w-24 h-1.5 bg-[#ffd700] mx-auto rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MEMBERS.map((member) => (
              <Link 
                key={member.id} 
                to={`/member/${member.id}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2 border-2 border-transparent hover:border-[#ffd700]"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute top-4 right-4 bg-[#c8102e] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {member.role}
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#c8102e] mb-1">{member.name}</h3>
                  <p className="text-[#e6b800] font-semibold text-sm mb-3">Thế mạnh: {member.strength}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.tags.map(tag => (
                      <span key={tag} className="bg-yellow-50 text-yellow-800 text-[10px] uppercase tracking-wider font-bold px-2 py-1 rounded-md border border-yellow-200">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="flex items-center justify-between mt-6 text-[#c8102e] font-bold group-hover:translate-x-1 transition-transform">
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
