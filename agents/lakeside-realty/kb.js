/* Lakeside Realty Desk — example business only (not a real brokerage). */
window.AGENT_KB = {
  id: "lakeside-realty",
  lang: "en",
  name: "Lakeside Realty Desk",
  tagline: "Buying and selling homes — on Lakeside Avenue.",
  city: "Portland, Maine",
  address: "55 Lakeside Avenue, Portland, ME 04101 (example address)",
  phone: "(207) 555-0188",
  email: "desk@lakesiderealty.example",
  website: "https://lakesiderealty.example",
  timezone: "America/New_York",
  hours: {
    summary: "Monday–Friday 9:00 a.m. to 6:00 p.m., Saturday 10:00 a.m. to 2:00 p.m. Closed Sunday.",
    days: {
      sunday: "Closed",
      monday: "9:00 a.m. – 6:00 p.m.",
      tuesday: "9:00 a.m. – 6:00 p.m.",
      wednesday: "9:00 a.m. – 6:00 p.m.",
      thursday: "9:00 a.m. – 6:00 p.m.",
      friday: "9:00 a.m. – 6:00 p.m.",
      saturday: "10:00 a.m. – 2:00 p.m."
    }
  },
  services: [
    { id: "visit", name: "Property visit request", price: "no fee to ask", duration: "", keywords: ["visit", "viewing", "showing", "tour", "see the house", "open house"] },
    { id: "callback", name: "Callback or first meeting", price: "no fee to ask", duration: "", keywords: ["callback", "call back", "appointment", "meet", "talk", "consultation"] },
    { id: "sell", name: "Home-selling conversation request", price: "quoted after a meeting", duration: "", keywords: ["sell", "selling", "list", "listing", "value", "evaluation"] },
    { id: "buy", name: "Buyer search request", price: "no fee to ask", duration: "", keywords: ["buy", "buying", "buyer", "looking", "search", "offer"] }
  ],
  stylists: [
    { name: "Alex Moreau", role: "Broker", keywords: ["alex", "moreau"] },
    { name: "Camille Reid", role: "Office desk", keywords: ["camille", "reid"] }
  ],
  policies: {
    booking: "This agent can take a visit or callback request. It does not make an offer, set a price, or commit you to a listing. A broker will follow up.",
    cancellation: "If you already have a visit booked and need to move it, I can take that message for the desk.",
    payment: "Fees, if any, are discussed with the broker, not in this chat.",
    parking: "Visitor parking is in front of the office, off Lakeside Avenue.",
    kids: "",
    gifts: "We don't sell gift cards."
  },
  faqs: [
    { id: "hours", q: "What are your hours?", a: "The office is open Monday to Friday from 9:00 a.m. to 6:00 p.m., and Saturday from 10:00 a.m. to 2:00 p.m. We're closed Sunday. I can still take a visit or callback request after hours.", keywords: ["hours", "open", "opening", "close", "closing", "today", "tonight", "weekend", "schedule"] },
    { id: "location", q: "Where are you?", a: "We're at 55 Lakeside Avenue, Portland, ME 04101 — this is an example address for the trial. In a real trial, this would be the office's real street address.", keywords: ["where", "address", "location", "located", "street", "directions", "map", "find"] },
    { id: "parking", q: "Is there parking?", a: "Yes. Visitor parking is in front of the office, off Lakeside Avenue.", keywords: ["parking", "park", "lot", "spots"] },
    { id: "visit", q: "Can I visit a property?", a: "I can take a visit request for the desk: your name, the best phone or email, and which property or area you want to see. A broker will confirm the time. I won't book a lockbox myself.", keywords: ["visit", "viewing", "showing", "tour", "see", "house", "condo"] },
    { id: "callback", q: "Can someone call me back?", a: "Yes. Tell me your name, the best number, and a good time, and I'll pass a callback request to the desk.", keywords: ["callback", "call back", "call me", "phone", "speak", "talk", "appointment"] },
    { id: "sell", q: "I want to sell my house.", a: "I can take that request for a broker, with your name and the best way to reach you. They'll follow up to talk about next steps. I won't invent a sale price here.", keywords: ["sell", "selling", "list", "listing", "value", "evaluation", "worth"] },
    { id: "buy", q: "I'm looking to buy.", a: "I can take a first-search request: your name, how to reach you, and the area or type of home you have in mind. A broker will follow up.", keywords: ["buy", "buying", "buyer", "looking", "search", "offer"] },
    { id: "price", q: "What's my home worth?", a: "I don't invent a value in this chat. I can take a callback request so a broker can discuss a proper evaluation with you.", keywords: ["worth", "price", "value", "evaluation", "appraisal", "how much"] },
    { id: "cancel", q: "How do I move a visit?", a: "I can take a message for the desk with the name and the original time, and they'll confirm.", keywords: ["cancel", "cancellation", "reschedule", "move", "change appointment"] },
    { id: "fees", q: "What are your fees?", a: "Fees are discussed with the broker, not in this chat. I can have someone call you back.", keywords: ["fee", "fees", "commission", "cost", "pay", "payment"] }
  ],
  greeting: "Hi — I'm the Lakeside Realty desk assistant. I can share office hours and take a visit or callback request. I don't set prices or make offers. What can I help you with?",
  handoff: "Of course. I'll take a short message for the desk and someone will get back to you. What should I pass on, and what's the best phone or email?",
  outOfScope: "I don't want to guess or set a price on that. I can take a message for a broker, or help with hours or a callback.",
  trial: {
    label: "7-day trial agent",
    preparedBy: "Patrick Lemieux",
    contact: "cabinet-patrick@mail.grokbot.com",
    note: "Example business for this prototype — not a real brokerage. In a live trial, this agent is customized to the office and the requests go to the owner."
  }
};
