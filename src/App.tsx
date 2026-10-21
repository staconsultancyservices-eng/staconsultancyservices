import React, { useState } from 'react';
import {
  Phone,
  MessageSquare,
  ShieldCheck,
  CheckCircle2,
  Calendar,
  ArrowRight,
  ChevronRight,
  Building2,
} from 'lucide-react';
import {
  STA_SERVICES,
  COMPLIANCE_CALENDAR_2026_27,
  ServiceItem,
} from './data/accountingData';
import { ContactInquirySection } from './components/ContactInquirySection';
import { CleanServiceModal } from './components/CleanServiceModal';

export default function App() {
  const [activeTab, setActiveTab] = useState<'home' | 'services' | 'advisory'>('home');
  const [selectedService, setSelectedService] = useState<ServiceItem | null>(null);
  const [serviceForInquiry, setServiceForInquiry] = useState<string | undefined>();
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const handleInquireFromService = (serviceTitle: string) => {
    setServiceForInquiry(serviceTitle);
    setActiveTab('advisory');
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
    showToast(`Inquiring for: ${serviceTitle}`);
  };

  return (
    <div className="min-h-screen bg-[#0A0D14] text-slate-100 font-sans antialiased selection:bg-cyan-500 selection:text-slate-900 flex flex-col justify-between">
      {/* Top Header Navigation */}
      <header className="sticky top-0 z-50 bg-[#0B0F17]/95 backdrop-blur-md border-b border-slate-800/80">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">
          {/* Logo & Identity */}
          <div
            onClick={() => setActiveTab('home')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-400 to-blue-600 flex items-center justify-center font-bold text-slate-950 text-sm shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform font-mono">
              STA
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-bold tracking-tight text-white group-hover:text-cyan-400 transition-colors uppercase">
                  STA Consultancy
                </span>
              </div>
              <p className="text-[11px] text-slate-400 font-medium">Taxation & Accounting Services</p>
            </div>
          </div>

          {/* Tab Navigation Controls */}
          <nav className="flex items-center gap-1 sm:gap-2">
            <button
              onClick={() => setActiveTab('home')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'home'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Home
            </button>

            <button
              onClick={() => setActiveTab('services')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'services'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Services
            </button>

            <button
              onClick={() => setActiveTab('advisory')}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeTab === 'advisory'
                  ? 'bg-cyan-500/15 text-cyan-400 border border-cyan-500/30 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
              }`}
            >
              Direct Advisory Desk
            </button>
          </nav>

          {/* Quick Call Action */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="tel:7989922049"
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-[#121824] hover:bg-[#161F2E] border border-slate-700/80 text-cyan-400 text-xs font-mono font-semibold transition-all shadow-sm"
            >
              <Phone className="w-3.5 h-3.5" />
              <span>+91 7989922049</span>
            </a>
          </div>
        </div>
      </header>

      {/* Main Body */}
      <main className="flex-1 max-w-6xl mx-auto px-4 sm:px-6 py-8 md:py-12 w-full">
        {/* ======================================================== */}
        {/* TAB 1: HOME (Clean Dashboard without fake numbers)       */}
        {/* ======================================================== */}
        {activeTab === 'home' && (
          <div className="space-y-14 animate-in fade-in duration-200">
            {/* Sovereign Hero Banner */}
            <section className="relative rounded-3xl bg-gradient-to-br from-[#111726] via-[#0E131F] to-[#0A0E17] border border-slate-800 p-7 md:p-12 overflow-hidden shadow-2xl">
              <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl pointer-events-none"></div>
              <div className="absolute -left-20 -bottom-20 w-80 h-80 rounded-full bg-[#FECE57]/5 blur-3xl pointer-events-none"></div>

              <div className="relative z-10 max-w-2xl space-y-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-400 text-xs font-mono font-semibold">
                  <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
                  <span>STA Team • Financial Year 2026–27</span>
                </div>

                <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white leading-tight">
                  Taxation, Accounting & Regulatory Advisory
                </h1>

                <p className="text-sm md:text-base text-slate-300 leading-relaxed">
                  Dedicated taxation and financial compliance services. We assist businesses, firms, and professionals with timely GST returns, Income Tax filings, TDS governance, and systematic bookkeeping.
                </p>

                {/* Hero Actions */}
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={() => setActiveTab('services')}
                    className="px-5 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all cursor-pointer"
                  >
                    <span>View Our Services</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => setActiveTab('advisory')}
                    className="px-5 py-3 rounded-xl bg-[#151D2C] hover:bg-[#1A2436] text-slate-200 border border-slate-700 font-semibold text-xs flex items-center gap-2 transition-all cursor-pointer"
                  >
                    <span>Contact Advisory Desk</span>
                  </button>

                  <a
                    href="https://wa.me/917989922049?text=Hello%20STA%20Team,%20I%20would%20like%20to%20consult%20regarding%20taxation%20and%20accounting%20services%20for%20FY%202026-27."
                    target="_blank"
                    rel="noreferrer"
                    className="px-4 py-3 rounded-xl bg-[#25D366]/10 hover:bg-[#25D366]/20 border border-[#25D366]/30 text-[#25D366] font-semibold text-xs flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <MessageSquare className="w-4 h-4" />
                    <span>WhatsApp</span>
                  </a>
                </div>
              </div>
            </section>

            {/* Core Practice Pillars (Clean, No Fake Numbers) */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider font-semibold">
                  Practice Framework
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div className="p-5 rounded-2xl bg-[#101622] border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-cyan-400 uppercase tracking-wider block">
                    Focus Areas
                  </span>
                  <h3 className="text-base font-bold text-white">Direct & Indirect Tax</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    GST, Income Tax, TDS/TCS, and state professional taxes handled under updated guidelines.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101622] border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-[#FECE57] uppercase tracking-wider block">
                    Current Period
                  </span>
                  <h3 className="text-base font-bold text-white">FY 2026–27 (AY 27–28)</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Active cycle for monthly GST, payroll remittance, and ongoing financial bookkeeping.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101622] border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-emerald-400 uppercase tracking-wider block">
                    Advisory Model
                  </span>
                  <h3 className="text-base font-bold text-white">Direct Consultation</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Personalized review of your receipts, invoices, and statutory requirements by STA Team.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-[#101622] border border-slate-800 space-y-2">
                  <span className="text-[10px] font-mono text-purple-400 uppercase tracking-wider block">
                    Reach & Support
                  </span>
                  <h3 className="text-base font-bold text-white">Pan-India Support</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    Based in Bangalore, Karnataka with phone, WhatsApp, and remote document coordination.
                  </p>
                </div>
              </div>
            </section>

            {/* Statutory Compliance Calendar for FY 2026–27 (Dates only, zero fake amounts) */}
            <section className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <Calendar className="w-4 h-4 text-cyan-400" />
                    <span className="text-xs text-cyan-400 font-mono uppercase tracking-wider font-semibold">
                      Statutory Dates
                    </span>
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-white">
                    Compliance Due Dates for FY 2026–27
                  </h2>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Monthly statutory deadlines for CBIC (GST), Income Tax (CBDT), and EPFO/ESIC.
                  </p>
                </div>

                <button
                  onClick={() => setActiveTab('advisory')}
                  className="text-xs text-cyan-400 hover:underline font-semibold self-start sm:self-auto flex items-center gap-1 cursor-pointer"
                >
                  <span>Need help filing on time? Inquire →</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
                {COMPLIANCE_CALENDAR_2026_27.map((item) => (
                  <div
                    key={item.id}
                    className="p-4 rounded-xl bg-[#101622] border border-slate-800 hover:border-slate-700 transition-colors flex items-start gap-3.5 shadow-sm"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#161F2E] to-[#0E1420] border border-cyan-500/30 flex flex-col items-center justify-center text-cyan-400 font-mono shrink-0 shadow-inner">
                      <span className="text-xs font-bold leading-none">{item.day}</span>
                      <span className="text-[9px] font-semibold text-slate-400 mt-0.5">CYCLE</span>
                    </div>

                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between gap-2">
                        <h4 className="text-xs font-bold text-white truncate">{item.title}</h4>
                        <span className="text-[9px] font-mono px-1.5 py-0.2 rounded bg-slate-800 text-slate-400 border border-slate-700/60 shrink-0">
                          {item.frequency}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-400 mt-0.5">{item.authority}</p>
                      <p className="text-[10px] text-slate-500 mt-1 leading-snug">{item.cycle}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Quick Inquiry CTA Strip */}
            <section className="p-7 md:p-8 rounded-2xl bg-gradient-to-r from-[#121929] to-[#0E1420] border border-slate-800 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
              <div className="space-y-1.5 text-center md:text-left">
                <h3 className="text-lg md:text-xl font-bold text-white">
                  Have an impending filing or tax notice?
                </h3>
                <p className="text-xs text-slate-300 max-w-xl">
                  Connect with STA Team directly for structured assistance with your GST, ITR, TDS, or accounting records.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('advisory')}
                className="px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer shrink-0 shadow-md"
              >
                <span>Direct Advisory Desk</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </section>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 2: SERVICES (Clear breakdown of what we provide)     */}
        {/* ======================================================== */}
        {activeTab === 'services' && (
          <div className="space-y-8 animate-in fade-in duration-200">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono font-semibold uppercase border border-cyan-500/20">
                <Building2 className="w-3.5 h-3.5" />
                <span>Practice Spectrum • FY 2026–27</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-extrabold text-white tracking-tight mt-2">
                Services Provided by STA Consultancy
              </h2>
              <p className="text-sm text-slate-300 mt-1 max-w-2xl leading-relaxed">
                Click on any service to view complete inclusions, or click &ldquo;Inquire&rdquo; to connect with STA Consultancy directly.
              </p>
            </div>

            {/* Services Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {STA_SERVICES.map((s) => (
                <div
                  key={s.id}
                  className="bg-[#101622] rounded-2xl border border-slate-800 p-6 flex flex-col justify-between hover:border-slate-700 transition-all shadow-lg hover:shadow-cyan-500/5 group"
                >
                  <div className="space-y-3.5">
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center group-hover:scale-105 transition-transform">
                        <i className={`${s.iconClass} text-base`}></i>
                      </div>
                      <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded bg-slate-800 text-slate-300 border border-slate-700/60 uppercase">
                        {s.tag}
                      </span>
                    </div>

                    <div>
                      <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                        {s.title}
                      </h3>
                      <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                        {s.shortDesc}
                      </p>
                    </div>

                    {/* Highlights bullet list */}
                    <div className="pt-2 border-t border-slate-800/80 space-y-1.5">
                      {s.highlights.slice(0, 3).map((item, idx) => (
                        <div key={idx} className="flex items-start gap-2 text-[11px] text-slate-300">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                          <span className="line-clamp-1">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between gap-2">
                    <button
                      onClick={() => setSelectedService(s)}
                      className="text-xs text-slate-400 hover:text-white font-medium flex items-center gap-1 cursor-pointer"
                    >
                      <span>Details</span>
                      <ChevronRight className="w-3.5 h-3.5" />
                    </button>

                    <button
                      onClick={() => handleInquireFromService(s.title)}
                      className="px-3.5 py-1.5 rounded-lg bg-cyan-500/15 hover:bg-cyan-500/25 border border-cyan-500/30 text-cyan-300 text-xs font-semibold transition-colors cursor-pointer flex items-center gap-1"
                    >
                      <span>Inquire Now</span>
                      <ArrowRight className="w-3 h-3" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Inquire Card */}
            <div className="p-6 rounded-2xl bg-[#0E1420] border border-slate-800 text-xs text-slate-300 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-cyan-400 shrink-0" />
                <p>
                  Need customized advisory for your specific business activity? Contact STA Consultancy directly for confidential review.
                </p>
              </div>

              <button
                onClick={() => setActiveTab('advisory')}
                className="px-4 py-2 bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold rounded-xl transition-colors cursor-pointer shrink-0"
              >
                Go to Advisory Desk
              </button>
            </div>
          </div>
        )}

        {/* ======================================================== */}
        {/* TAB 3: DIRECT ADVISORY DESK (Contact Form & Touchpoints) */}
        {/* ======================================================== */}
        {activeTab === 'advisory' && (
          <div className="animate-in fade-in duration-200">
            <ContactInquirySection preselectedService={serviceForInquiry} />
          </div>
        )}
      </main>

      {/* Clean Global Footer */}
      <footer className="w-full bg-[#080B10] border-t border-slate-800/80 text-slate-400 py-8 px-4 sm:px-6 text-xs mt-12">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start gap-2">
              <span className="font-bold text-white text-sm">STA Consultancy</span>
              <span className="text-slate-600">|</span>
              <span className="text-cyan-400 font-mono text-[11px]">Afrid Syed</span>
            </div>
            <p className="text-[11px] text-slate-500">
              Taxation, Accounting, GST & Statutory Advisory Services • Financial Year 2026–27
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 font-mono text-[11px]">
            <a href="tel:7989922049" className="text-slate-300 hover:text-cyan-400 transition-colors">
              Phone: +91 7989922049
            </a>
            <span className="text-slate-700">•</span>
            <a href="mailto:staconsultancyservices@gmail.com" className="text-slate-300 hover:text-cyan-400 transition-colors">
              staconsultancyservices@gmail.com
            </a>
            <span className="text-slate-700">•</span>
            <span className="text-slate-400">Bangalore, Karnataka</span>
          </div>
        </div>
      </footer>

      {/* Floating Toast Notification */}
      {toastMessage && (
        <div className="fixed top-20 right-5 z-50 flex items-center gap-2.5 px-4 py-2.5 rounded-2xl bg-[#121927] border border-cyan-500/50 text-white text-xs font-medium shadow-2xl animate-in slide-in-from-top-4 duration-200">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Service Details Modal */}
      <CleanServiceModal
        service={selectedService}
        isOpen={Boolean(selectedService)}
        onClose={() => setSelectedService(null)}
        onInquire={handleInquireFromService}
      />
    </div>
  );
}
