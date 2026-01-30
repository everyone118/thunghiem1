
import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { MEMBERS } from '../constants';
import { Award, Zap, Heart, ArrowLeft, Star, Quote as QuoteIcon } from 'lucide-react';

const MemberDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const member = MEMBERS.find(m => m.id === id);

  if (!member) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-12 animate-in fade-in slide-in-from-bottom-8 duration-500">
      <Link to="/" className="inline-flex items-center gap-2 text-[#c8102e] font-bold mb-8 hover:translate-x-[-4px] transition-transform">
        <ArrowLeft className="w-5 h-5" /> Quay lại trang chủ
      </Link>

      <div className="bg-white rounded-[2rem] shadow-2xl overflow-hidden border border-gray-100">
        <div className="grid md:grid-cols-2">
          {/* Left Column: Image & Basic Info */}
          <div className="p-8 md:p-12 bg-gradient-to-br from-red-50 to-orange-50">
            <div className="relative">
              <div className="absolute -inset-2 bg-gradient-to-r from-[#ffd700] to-[#c8102e] rounded-[2rem] opacity-20 blur-sm"></div>
              <img 
                src={member.imageUrl} 
                alt={member.name} 
                className="relative z-10 w-full rounded-[1.5rem] shadow-xl h-[500px] object-cover"
              />
            </div>
            
            <div className="mt-8 text-center">
              <h1 className="text-3xl font-bold text-[#c8102e] mb-2">{member.name}</h1>
              <div className="bg-[#ffd700] text-[#c8102e] font-bold px-6 py-2 rounded-full inline-block shadow-md">
                {member.role}
              </div>
            </div>
          </div>

          {/* Right Column: Detailed Bio */}
          <div className="p-8 md:p-12 space-y-10">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-6 h-6 text-[#c8102e]" />
                <h2 className="text-xl font-bold text-gray-800">Thế mạnh & Tính cách</h2>
              </div>
              <p className="text-gray-600 leading-relaxed text-lg mb-4">
                {member.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {member.tags.map(tag => (
                  <span key={tag} className="bg-white border-2 border-[#ffd700] text-[#c8102e] font-bold px-4 py-1 rounded-full text-sm">
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-6 h-6 text-[#c8102e]" />
                <h2 className="text-xl font-bold text-gray-800">Thành tựu nổi bật</h2>
              </div>
              <ul className="space-y-3">
                {member.achievements.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 bg-red-50 p-3 rounded-xl border border-red-100">
                    <Star className="w-5 h-5 text-[#ffd700] fill-[#ffd700] shrink-0 mt-0.5" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="bg-gradient-to-r from-[#c8102e] to-red-800 p-8 rounded-2xl text-white shadow-xl relative overflow-hidden">
               <QuoteIcon className="absolute top-4 right-4 w-12 h-12 opacity-10" />
               <div className="flex items-center gap-3 mb-4">
                <Heart className="w-6 h-6 text-[#ffd700]" />
                <h2 className="text-xl font-bold">Châm ngôn sống</h2>
              </div>
              <p className="text-xl italic font-medium">"{member.motto}"</p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MemberDetail;
