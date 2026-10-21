import React, { useState } from 'react';
import {
  Phone,
  Mail,
  MessageSquare,
  Clock,
  ShieldCheck,
  Send,
  CheckCircle2,
  MapPin,
  Calendar,
} from 'lucide-react';
import { STA_SERVICES } from '../data/accountingData';

interface ContactInquirySectionProps {
  preselectedService?: string;
  id?: string;
}

export const ContactInquirySection: React.FC<ContactInquirySectionProps> = ({
  preselectedService,
  id = 'contact',
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState(preselectedService || 'GST Registration & Return Filing');
  const [contactMode, setContactMode] = useState<'Call' | 'WhatsApp' | 'Email'>('WhatsApp');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // Sync if preselectedService changes
  React.useEffect(() => {
    if (preselectedService) {
      setService(preselectedService);
    }
  }, [preselectedService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id={id} className="scroll-mt-16 space-y-8">
      {/* Section Header */}
      <div>
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase border border-cyan-500/20">
          <Phone className="w-3.5 h-3.5" />
          <span>Direct Advisory Desk • FY 2026–27</span>
        </div>
        <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-2">
          Contact STA Team
        </h2>
        <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
          We provide dedicated taxation and accounting consultancy. For any service, reach out directly or submit your details below to schedule a discussion.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Contact Form Container (7 cols) */}
        <div className="lg:col-span-7 bg-[#111724] border border-slate-800 rounded-2xl p-6 md:p-8 shadow-xl relative overflow-hidden">
          <div className="absolute -top-16 -right-16 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none"></div>

          {isSubmitted ? (
            <div className="py-10 text-center space-y-4 animate-in fade-in">
              <div className="w-16 h-16 rounded-full bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-white">Inquiry Received</h3>
              <p className="text-xs text-slate-300 max-w-md mx-auto leading-relaxed">
                Thank you, <span className="text-white font-semibold">{name}</span>! STA Team has received your inquiry regarding{' '}
                <span className="text-cyan-400 font-semibold">{service}</span>. We will connect with you via{' '}
                <span className="text-white font-semibold">{contactMode}</span> at{' '}
                <span className="text-cyan-400 font-mono font-semibold">{phone}</span> shortly.
              </p>
              <div className="pt-4">
                <button
                  type="button"
                  onClick={() => {
                    setIsSubmitted(false);
                    setMessage('');
                  }}
                  className="px-5 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold transition-colors cursor-pointer"
                >
                  Submit Another Inquiry
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Your Name <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter full name"
                    className="w-full px-3.5 py-2.5 bg-[#0C111A] border border-slate-700/80 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Contact Phone Number <span className="text-rose-400">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="e.g. 9876543210"
                    className="w-full px-3.5 py-2.5 bg-[#0C111A] border border-slate-700/80 rounded-xl text-white text-xs font-mono placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Email Address <span className="text-slate-500 text-[10px]">(Optional)</span>
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="name@business.com"
                    className="w-full px-3.5 py-2.5 bg-[#0C111A] border border-slate-700/80 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                    Service Required
                  </label>
                  <select
                    value={service}
                    onChange={(e) => setService(e.target.value)}
                    className="w-full px-3.5 py-2.5 bg-[#0C111A] border border-slate-700/80 rounded-xl text-white text-xs focus:outline-none focus:border-cyan-400 transition-colors"
                  >
                    {STA_SERVICES.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="General Tax Consultation">General Tax Consultation</option>
                    <option value="Other Advisory">Other Accounting / Compliance</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Preferred Mode of Contact
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {(['WhatsApp', 'Call', 'Email'] as const).map((mode) => (
                    <button
                      key={mode}
                      type="button"
                      onClick={() => setContactMode(mode)}
                      className={`py-2 px-3 rounded-xl text-xs font-semibold flex items-center justify-center gap-1.5 transition-all cursor-pointer border ${
                        contactMode === mode
                          ? 'bg-cyan-500/15 border-cyan-400 text-cyan-300'
                          : 'bg-[#0C111A] border-slate-700/60 text-slate-400 hover:text-slate-200'
                      }`}
                    >
                      {mode === 'WhatsApp' && <MessageSquare className="w-3.5 h-3.5 text-[#25D366]" />}
                      {mode === 'Call' && <Phone className="w-3.5 h-3.5 text-cyan-400" />}
                      {mode === 'Email' && <Mail className="w-3.5 h-3.5 text-amber-400" />}
                      <span>{mode}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-slate-300 mb-1.5">
                  Message / Details of Requirement
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Briefly describe your business or tax situation..."
                  className="w-full px-3.5 py-2.5 bg-[#0C111A] border border-slate-700/80 rounded-xl text-white text-xs placeholder-slate-500 focus:outline-none focus:border-cyan-400 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-slate-950 font-bold text-xs flex items-center justify-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting...</span>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span>Submit Request to STA Team</span>
                  </>
                )}
              </button>

              <p className="text-[11px] text-slate-500 text-center">
                Your communication is kept confidential. Direct consultation is scheduled based on availability.
              </p>
            </form>
          )}
        </div>

        {/* Direct Touchpoints (5 cols) */}
        <div className="lg:col-span-5 space-y-4">
          <div className="p-6 rounded-2xl bg-[#111724] border border-slate-800 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-cyan-400" />
              <span>Direct Touchpoints</span>
            </h3>

            <div className="space-y-3">
              <a
                href="tel:7989922049"
                className="p-3.5 rounded-xl bg-[#0D121B] border border-slate-800 hover:border-cyan-500/50 flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-cyan-500/10 flex items-center justify-center text-cyan-400 group-hover:scale-105 transition-transform">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-cyan-300">Call Directly</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">+91 7989922049</p>
                  </div>
                </div>
                <span className="text-[11px] text-cyan-400 font-semibold group-hover:underline">Call Now →</span>
              </a>

              <a
                href="https://wa.me/917989922049?text=Hello%20STA%20Team,%20I%20would%20like%20to%20inquire%20about%20your%20taxation%20and%20accounting%20services%20for%20FY%202026-27."
                target="_blank"
                rel="noreferrer"
                className="p-3.5 rounded-xl bg-[#0D121B] border border-slate-800 hover:border-[#25D366]/50 flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-[#25D366]/10 flex items-center justify-center text-[#25D366] group-hover:scale-105 transition-transform">
                    <MessageSquare className="w-4 h-4" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-white group-hover:text-[#25D366]">WhatsApp Chat</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5">+91 7989922049</p>
                  </div>
                </div>
                <span className="text-[11px] text-[#25D366] font-semibold group-hover:underline">Message →</span>
              </a>

              <a
                href="mailto:staconsultancyservices@gmail.com"
                className="p-3.5 rounded-xl bg-[#0D121B] border border-slate-800 hover:border-amber-500/50 flex items-center justify-between transition-all group cursor-pointer"
              >
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-lg bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-xs font-semibold text-white group-hover:text-amber-300">Email Address</p>
                    <p className="text-[11px] text-slate-400 font-mono mt-0.5 truncate max-w-[190px]">
                      staconsultancyservices@gmail.com
                    </p>
                  </div>
                </div>
                <span className="text-[11px] text-amber-400 font-semibold group-hover:underline">Write →</span>
              </a>
            </div>
          </div>

          <div className="p-5 rounded-2xl bg-[#111724] border border-slate-800 space-y-3 text-xs text-slate-300">
            <div className="flex items-start gap-3">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Consulting Hours</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Monday – Saturday: 09:30 AM – 07:00 PM</p>
                <p className="text-[10px] text-cyan-400 mt-0.5">Sunday: Priority for statutory due dates</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
              <MapPin className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Practice Location</p>
                <p className="text-slate-400 text-[11px] mt-0.5">Bangalore, Karnataka</p>
                <p className="text-[10px] text-slate-400">Serving clients Pan-India with online documentation</p>
              </div>
            </div>

            <div className="flex items-start gap-3 pt-3 border-t border-slate-800/80">
              <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
              <div>
                <p className="font-semibold text-white">Advisory Assurance</p>
                <p className="text-slate-400 text-[11px] mt-0.5">
                  Handled with rigorous compliance to current CBDT & CBIC statutory circulars for FY 2026–27.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
