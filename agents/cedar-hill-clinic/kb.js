/* Cedar Hill Clinic — example business only (not a real clinic). */
window.AGENT_KB = {
  id: "cedar-hill-clinic",
  lang: "en",
  name: "Cedar Hill Clinic",
  tagline: "Primary and walk-in care — on Cedar Hill Road.",
  city: "Portland, Maine",
  address: "14 Cedar Hill Road, Portland, ME 04101 (example address)",
  phone: "(207) 555-0194",
  email: "desk@cedarhillclinic.example",
  website: "https://cedarhillclinic.example",
  timezone: "America/New_York",
  hours: {
    summary: "Monday–Friday 8:00 a.m. to 6:00 p.m., Saturday 9:00 a.m. to 1:00 p.m. Closed Sunday.",
    days: {
      sunday: "Closed",
      monday: "8:00 a.m. – 6:00 p.m.",
      tuesday: "8:00 a.m. – 6:00 p.m.",
      wednesday: "8:00 a.m. – 6:00 p.m.",
      thursday: "8:00 a.m. – 6:00 p.m.",
      friday: "8:00 a.m. – 6:00 p.m.",
      saturday: "9:00 a.m. – 1:00 p.m."
    }
  },
  services: [
    { id: "sick", name: "Sick visit", price: "$95", duration: "20–30 min", keywords: ["sick", "cold", "flu", "fever", "visit", "walk-in", "walk in"] },
    { id: "physical", name: "Annual physical", price: "$150", duration: "40 min", keywords: ["physical", "annual", "checkup", "check-up", "exam"] },
    { id: "followup", name: "Follow-up visit", price: "$75", duration: "15–20 min", keywords: ["follow-up", "follow up", "followup", "results"] },
    { id: "vaccine", name: "Vaccination visit", price: "from $40", duration: "15 min", keywords: ["vaccine", "vaccination", "shot", "flu shot", "immunization"] },
    { id: "injury", name: "Minor injury visit", price: "$120", duration: "30 min", keywords: ["injury", "sprain", "cut", "wound", "stitch"] }
  ],
  stylists: [
    { name: "Dr. Elena Cho", role: "Family physician", keywords: ["elena", "cho", "doctor", "physician"] },
    { name: "Sam Ortiz", role: "Nurse practitioner", keywords: ["sam", "ortiz", "nurse", "np"] }
  ],
  policies: {
    booking: "Appointments are recommended. We keep a few same-day slots on weekdays for sick visits. Saturday mornings are reserved for short follow-ups and vaccines.",
    cancellation: "Please give at least 4 hours' notice to cancel or move a visit when you can. No-shows may be charged a $40 fee.",
    payment: "We take most cards, debit, and cash. We can also bill many insurance plans. Bring your card and a photo ID.",
    parking: "Free parking is in the lot beside the clinic, off Cedar Hill Road.",
    kids: "We see children for sick visits and vaccines. Please mention the child's age when you book.",
    gifts: "We do not sell gift cards."
  },
  faqs: [
    { id: "hours", q: "What are your hours?", a: "We're open Monday to Friday from 8:00 a.m. to 6:00 p.m., and Saturday from 9:00 a.m. to 1:00 p.m. We're closed Sunday.", keywords: ["hours", "open", "opening", "close", "closing", "today", "tonight", "weekend", "schedule"] },
    { id: "location", q: "Where are you?", a: "We're at 14 Cedar Hill Road, Portland, ME 04101 — this is an example address for the trial. In a real trial, this would be the clinic's real street address.", keywords: ["where", "address", "location", "located", "street", "directions", "map", "find"] },
    { id: "parking", q: "Is there parking?", a: "Yes. Free parking is in the lot beside the clinic, off Cedar Hill Road.", keywords: ["parking", "park", "lot", "spots", "street parking"] },
    { id: "walkin", q: "Do you take walk-ins?", a: "We keep a few same-day slots on weekdays for sick visits. If those are full, I can take a request for the next opening.", keywords: ["walk-in", "walkin", "walk in", "walk ins", "without appointment", "same day"] },
    { id: "new", q: "Do you take new patients?", a: "Yes. I can take a new-patient appointment request for the desk. You'll need a photo ID and your insurance card, if you have one, at the first visit.", keywords: ["new", "new patient", "accepting", "first visit", "first time"] },
    { id: "cancel", q: "How do I cancel?", a: "Please give at least 4 hours' notice when you can. I can take a cancellation message for the desk right now. No-shows may be charged a $40 fee.", keywords: ["cancel", "cancellation", "reschedule", "move", "change appointment", "postpone"] },
    { id: "payment", q: "How can I pay?", a: "We take most cards, debit, and cash, and we can bill many insurance plans. Bring your card and a photo ID.", keywords: ["pay", "payment", "card", "cash", "insurance", "visa", "debit", "bill"] },
    { id: "insurance", q: "Do you take insurance?", a: "We bill many common plans. The desk can confirm yours when they call you back. I don't want to guess on coverage here.", keywords: ["insurance", "plan", "coverage", "covered", "medicaid", "medicare"] },
    { id: "kids", q: "Do you see children?", a: "Yes, for sick visits and vaccines. Please mention the child's age when you book.", keywords: ["kid", "kids", "child", "children", "pediatric"] },
    { id: "prep", q: "What should I bring?", a: "A photo ID and your insurance card, if you have one. If this is a follow-up, bring any recent results you already have.", keywords: ["bring", "prepare", "what to bring", "id", "documents"] }
  ],
  greeting: "Hi — I'm the Cedar Hill Clinic assistant. I can share hours, services and prices, and I can take an appointment request for the desk. What can I help you with?",
  handoff: "Of course. I'll take a short message for the desk and someone will get back to you. What should I pass on, and what's the best phone or email?",
  outOfScope: "I don't want to guess on that. I can take a message for the desk, or help with hours, prices, or a booking.",
  trial: {
    label: "7-day trial agent",
    preparedBy: "Patrick Lemieux",
    contact: "cabinet-patrick@mail.grokbot.com",
    note: "Example business for this prototype — not a real clinic. In a live trial, this agent is customized to the practice and the appointment requests go to the owner."
  }
};
