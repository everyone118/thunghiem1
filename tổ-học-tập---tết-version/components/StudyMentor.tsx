
import React, { useState, useRef, useEffect } from 'react';
import { getStudyAdvice } from '../services/geminiService';
import { MessageSquare, Send, X, Bot, User, Sparkles } from 'lucide-react';

const StudyMentor: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<{ role: 'user' | 'bot'; text: string }[]>([
    { role: 'bot', text: 'Chúc mừng năm mới! Sứ Giả Xuân Học Tập đã sẵn sàng hỗ trợ bạn. Bạn cần giúp gì về bài vở hay kế hoạch học tập không?' }
  ]);
  const [loading, setLoading] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input;
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setLoading(true);

    const botReply = await getStudyAdvice(userMsg);
    setMessages(prev => [...prev, { role: 'bot', text: botReply }]);
    setLoading(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-[1000]">
      {!isOpen ? (
        <button
          onClick={() => setIsOpen(true)}
          className="w-16 h-16 bg-[#c8102e] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform border-4 border-[#ffd700]"
        >
          <Sparkles className="w-8 h-8 animate-pulse" />
        </button>
      ) : (
        <div className="w-[350px] sm:w-[400px] h-[500px] bg-white rounded-2xl shadow-2xl border-2 border-[#c8102e] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4">
          <div className="bg-[#c8102e] p-4 flex justify-between items-center text-white">
            <div className="flex items-center gap-2">
              <Bot className="w-6 h-6 text-[#ffd700]" />
              <span className="font-bold">Sứ Giả Xuân Học Tập</span>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-red-700 p-1 rounded">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-orange-50">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl shadow-sm ${
                  m.role === 'user' 
                    ? 'bg-[#c8102e] text-white rounded-tr-none' 
                    : 'bg-white text-gray-800 border border-gray-100 rounded-tl-none'
                }`}>
                  <div className="flex items-center gap-2 mb-1 opacity-70 text-xs">
                    {m.role === 'user' ? <User className="w-3 h-3" /> : <Bot className="w-3 h-3" />}
                    <span>{m.role === 'user' ? 'Bạn' : 'Sứ Giả Xuân'}</span>
                  </div>
                  <p className="text-sm whitespace-pre-wrap">{m.text}</p>
                </div>
              </div>
            ))}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm flex gap-1">
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.15s]"></div>
                  <div className="w-2 h-2 bg-red-400 rounded-full animate-bounce [animation-delay:-0.3s]"></div>
                </div>
              </div>
            )}
            <div ref={chatEndRef} />
          </div>

          <div className="p-4 bg-white border-t flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Nhập câu hỏi học tập..."
              className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2 focus:ring-[#c8102e] text-sm"
            />
            <button
              onClick={handleSend}
              disabled={loading}
              className="bg-[#ffd700] text-red-900 p-2 rounded-full hover:bg-yellow-400 disabled:opacity-50"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default StudyMentor;
