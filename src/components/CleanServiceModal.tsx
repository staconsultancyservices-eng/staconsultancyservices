import React from 'react';
import { X, CheckCircle2, ArrowRight, Phone, MessageSquare } from 'lucide-react';
import { ServiceItem } from '../data/accountingData';

interface CleanServiceModalProps {
  service: ServiceItem | null;
  isOpen: boolean;
  onClose: () => void;
  onInquire: (serviceTitle: string) => void;
}

export const CleanServiceModal: React.FC<CleanServiceModalProps> = ({
  service,
  isOpen,
  onClose,
  onInquire,
}) => {
  if (!isOpen || !service) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="bg-[#101622] border border-slate-700/80 rounded-2xl w-full max-w-lg shadow-2xl overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 py-4 border-b border-slate-800 flex items-center justify-between bg-[#131A28]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center">
              <i className={`${service.iconClass} text-sm`}></i>
            </div>
            <div>
              <span className="text-[10px] font-mono text-cyan-400 uppercase font-semibold">
                {service.tag}
              </span>
              <h3 className="text-sm font-bold text-white leading-tight">{service.title}</h3>
            </div>
          </div>

          <button
            onClick={onClose}
            className="w-8 h-8 rounded-lg bg-slate-800 text-slate-400 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4 text-xs text-slate-300 overflow-y-auto max-h-[70vh]">
          <p className="text-slate-200 text-sm leading-relaxed">{service.shortDesc}</p>

          <div className="p-3 rounded-xl bg-[#0D121B] border border-slate-800 text-slate-400">
            <span className="font-semibold text-slate-300 block mb-0.5">Applicable For:</span>
            <span>{service.scope}</span>
          </div>

          <div>
            <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-2.5">
              Service Inclusions & Deliverables:
            </h4>
            <div className="space-y-2">
              {service.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span className="text-slate-300 leading-snug">{h}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300">
            <span>
              All filings and advisory are processed by <strong>STA Consultancy</strong> following the statutory guidelines for <strong>FY 2026–27</strong>.
            </span>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 bg-[#0D121B] border-t border-slate-800 flex items-center justify-between gap-3">
          <a
            href="tel:7989922049"
            className="px-3.5 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-semibold flex items-center gap-1.5 transition-colors"
          >
            <Phone className="w-3.5 h-3.5 text-cyan-400" />
            <span>Call Team</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onInquire(service.title);
            }}
            className="flex-1 py-2 px-4 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center justify-center gap-1.5 transition-colors cursor-pointer"
          >
            <span>Inquire for this Service</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
};
