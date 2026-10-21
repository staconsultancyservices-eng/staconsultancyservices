export interface ServiceItem {
  id: string;
  title: string;
  category: 'gst' | 'tax' | 'payroll' | 'accounting' | 'registration';
  shortDesc: string;
  iconClass: string;
  tag: string;
  highlights: string[];
  scope: string;
}

export const STA_SERVICES: ServiceItem[] = [
  {
    id: 'gst-services',
    title: 'GST Registration & Return Filing',
    category: 'gst',
    shortDesc: 'End-to-end GST compliance including registration, amendments, monthly/quarterly returns, and reconciliation.',
    iconClass: 'fa-solid fa-file-invoice-dollar',
    tag: 'Core Compliance',
    scope: 'Businesses, Traders, Contractors & Service Providers',
    highlights: [
      'New GST registration & business amendment filings',
      'Monthly & Quarterly GSTR-1 outward supply statements',
      'GSTR-3B summary return preparation & tax payment calculation',
      'Purchase invoice cross-verification against GSTR-2B',
      'Annual return (GSTR-9) preparation & assistance',
    ],
  },
  {
    id: 'itr-filing',
    title: 'Income Tax Return (ITR) Filing',
    category: 'tax',
    shortDesc: 'Strategic tax filing and representation for salaried individuals, businesses, professionals, and firms.',
    iconClass: 'fa-solid fa-landmark',
    tag: 'Direct Tax',
    scope: 'Individuals, Professionals, Proprietors & Firms',
    highlights: [
      'ITR filing for Salaried individuals & Capital gains (ITR-1, ITR-2)',
      'Business & Professional tax returns under Presumptive Taxation (44AD / 44ADA)',
      'Computation of total income, deductions, and advance tax planning',
      'Response to Income Tax notices & rectification requests',
      'Tax-saving advisory for FY 2026–27',
    ],
  },
  {
    id: 'tds-tcs',
    title: 'TDS & TCS Return Filing',
    category: 'tax',
    shortDesc: 'Quarterly withholding tax compliance, challan verification, and Form 16 / 16A issuance.',
    iconClass: 'fa-solid fa-percentage',
    tag: 'Statutory Withholding',
    scope: 'Employers, Contractors & Corporates',
    highlights: [
      'Quarterly Form 24Q (Salary TDS) & Form 26Q (Non-Salary TDS) filing',
      'Challan verification and TRACES portal management',
      'PAN validation and verification of deduction rates',
      'Generation and download of Form 16 (Part A & B) and Form 16A',
      'Correction statements and resolution of TRACES defaults',
    ],
  },
  {
    id: 'payroll-compliance',
    title: 'Payroll, PF, ESI & Professional Tax',
    category: 'payroll',
    shortDesc: 'Comprehensive monthly salary register management, EPFO, ESIC, and state PT remittance compliances.',
    iconClass: 'fa-solid fa-users-gear',
    tag: 'Labour & Payroll',
    scope: 'Startups, MSMEs & Established Employers',
    highlights: [
      'Monthly employee salary register & pay slip generation',
      'EPFO Electronic Challan cum Return (ECR) preparation & filing',
      'ESIC monthly contribution filing & employee registration',
      'State-wise Professional Tax (PT) calculations & monthly returns',
      'Statutory register maintenance adhering to labor laws',
    ],
  },
  {
    id: 'bookkeeping-accounting',
    title: 'Business Bookkeeping & Accounting',
    category: 'accounting',
    shortDesc: 'Systematic recording of business transactions, bank reconciliations, and audit-ready financial statements.',
    iconClass: 'fa-solid fa-book-bookmark',
    tag: 'Financial Records',
    scope: 'Retailers, Wholesalers, Consultants & Small Enterprises',
    highlights: [
      'Posting of sales, purchases, bank, and journal vouchers in Tally / Accounting software',
      'Regular Bank Reconciliation Statements (BRS)',
      'Debtors and Creditors aging analysis and ledger balancing',
      'Preparation of Balance Sheet, Profit & Loss Statement, and Trial Balance',
      'Year-end closing and documentation for statutory audits',
    ],
  },
  {
    id: 'business-registration',
    title: 'Business Setup & Statutory Registrations',
    category: 'registration',
    shortDesc: 'Turnkey assistance for starting and legalizing new business ventures across India.',
    iconClass: 'fa-solid fa-id-card',
    tag: 'Entity Formation',
    scope: 'New Founders & Expanding Businesses',
    highlights: [
      'MSME / Udyam registration for government benefits & subsidies',
      'Partnership Deed drafting and firm registration guidance',
      'Shop & Establishment / Trade License application assistance',
      'Import Export Code (IEC) application and modification',
      'PAN and TAN application for entities',
    ],
  },
];

export interface ComplianceDueItem {
  id: string;
  day: string;
  title: string;
  authority: string;
  cycle: string;
  frequency: string;
}

export const COMPLIANCE_CALENDAR_2026_27: ComplianceDueItem[] = [
  {
    id: 'cal-1',
    day: '07th',
    title: 'TDS / TCS Monthly Payment',
    authority: 'Income Tax Department (Challan 281)',
    cycle: 'Monthly Deposit for preceding month deductions',
    frequency: 'Monthly',
  },
  {
    id: 'cal-2',
    day: '11th',
    title: 'GSTR-1 Outward Supplies',
    authority: 'CBIC / GST Portal',
    cycle: 'Monthly return for registered taxpayers',
    frequency: 'Monthly',
  },
  {
    id: 'cal-3',
    day: '15th',
    title: 'PF & ESI Monthly Remittance',
    authority: 'EPFO & ESIC Portal',
    cycle: 'Statutory employee wage contribution ECR',
    frequency: 'Monthly',
  },
  {
    id: 'cal-4',
    day: '15th',
    title: 'Advance Tax Installment',
    authority: 'Income Tax Department',
    cycle: 'Quarterly tax installments (June, Sept, Dec, March)',
    frequency: 'Quarterly',
  },
  {
    id: 'cal-5',
    day: '20th',
    title: 'GSTR-3B Tax Return & Payment',
    authority: 'CBIC / GST Portal',
    cycle: 'Monthly summary return & ITC setoff',
    frequency: 'Monthly',
  },
  {
    id: 'cal-6',
    day: '31st',
    title: 'Quarterly TDS Returns (24Q / 26Q)',
    authority: 'TRACES / NSDL Portal',
    cycle: 'Quarterly return following end of respective quarter',
    frequency: 'Quarterly',
  },
];
