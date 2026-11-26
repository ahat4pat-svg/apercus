/* Fairview Insurance Desk — example business only (not a real agency). */
window.AGENT_KB = {
  id: "fairview-insurance",
  lang: "en",
  name: "Fairview Insurance Desk",
  tagline: "Home, auto, and business cover — on Fairview Street.",
  city: "Portland, Maine",
  address: "9 Fairview Street, Portland, ME 04101 (example address)",
  phone: "(207) 555-0133",
  email: "desk@fairviewinsurance.example",
  website: "https://fairviewinsurance.example",
  timezone: "America/New_York",
  hours: {
    summary: "Monday–Friday 8:30 a.m. to 5:00 p.m. Closed Saturday and Sunday.",
    days: {
      sunday: "Closed",
      monday: "8:30 a.m. – 5:00 p.m.",
      tuesday: "8:30 a.m. – 5:00 p.m.",
      wednesday: "8:30 a.m. – 5:00 p.m.",
      thursday: "8:30 a.m. – 5:00 p.m.",
      friday: "8:30 a.m. – 5:00 p.m.",
      saturday: "Closed"
    }
  },
  services: [
    { id: "auto", name: "Auto insurance quote request", price: "quoted by the desk", duration: "", keywords: ["auto", "car", "vehicle", "truck", "driver"] },
    { id: "home", name: "Home insurance quote request", price: "quoted by the desk", duration: "", keywords: ["home", "house", "renters", "condo", "property"] },
    { id: "business", name: "Small-business insurance quote request", price: "quoted by the desk", duration: "", keywords: ["business", "commercial", "liability", "shop", "office"] },
    { id: "callback", name: "Callback or appointment with an agent", price: "no fee to ask", duration: "", keywords: ["callback", "call back", "appointment", "meet", "talk", "agent"] }
  ],
  stylists: [
    { name: "Jordan Hale", role: "Licensed agent", keywords: ["jordan", "hale"] },
    { name: "Riley Chen", role: "Office desk", keywords: ["riley", "chen"] }
  ],
  policies: {
    booking: "This agent can take a quote or callback request. It does not bind coverage, give advice, or quote a final premium. An agent will follow up.",
    cancellation: "If you already have an appointment with the office and need to move it, I can take that message for the desk.",
    payment: "Premiums and payment methods are handled by the desk after a quote, not in this chat.",
    parking: "Two visitor spots are beside the office, off Fairview Street.",
    kids: "",
    gifts: "We don't sell gift cards."
  },
  faqs: [
    { id: "hours", q: "What are your hours?", a: "The office is open Monday to Friday from 8:30 a.m. to 5:00 p.m. We're closed Saturday and Sunday. I can still take a quote or callback request after hours.", keywords: ["hours", "open", "opening", "close", "closing", "today", "tonight", "weekend", "schedule"] },
    { id: "location", q: "Where are you?", a: "We're at 9 Fairview Street, Portland, ME 04101 — this is an example address for the trial. In a real trial, this would be the office's real street address.", keywords: ["where", "address", "location", "located", "street", "directions", "map", "find"] },
    { id: "parking", q: "Is there parking?", a: "Yes. Two visitor spots are beside the office, off Fairview Street.", keywords: ["parking", "park", "lot", "spots"] },
    { id: "quote", q: "How do I get a quote?", a: "I can take a quote request for the desk: your name, the best phone or email, and whether it's home, auto, or business. An agent will follow up. I won't invent a premium here.", keywords: ["quote", "estimate", "price", "cost", "premium", "how much", "rate"] },
    { id: "callback", q: "Can someone call me back?", a: "Yes. Tell me your name, the best number, and a good time, and I'll pass a callback request to the desk.", keywords: ["callback", "call back", "call me", "phone", "speak", "talk", "appointment"] },
    { id: "advice", q: "What coverage should I get?", a: "I don't give coverage advice in this chat. I can take your question for a licensed agent and have them call you back.", keywords: ["advice", "should i", "coverage", "recommend", "best", "claim", "claims"] },
    { id: "claim", q: "How do I file a claim?", a: "I can take a message for the desk and they'll guide you. If this is an emergency, please call the office or the number on your policy. I can't open a claim myself in this chat.", keywords: ["claim", "claims", "accident", "file", "incident"] },
    { id: "docs", q: "What do you need for a quote?", a: "Usually a name, a way to reach you, and a few basics (address for a home, or year/make/model for a car). The agent will tell you if anything else is needed.", keywords: ["documents", "need", "bring", "info", "information", "driver license"] },
    { id: "cancel", q: "How do I move an appointment?", a: "I can take a message for the desk with the name and the original time, and they'll confirm.", keywords: ["cancel", "cancellation", "reschedule", "move", "change appointment"] },
    { id: "payment", q: "How do I pay a premium?", a: "Payment is handled by the desk after a quote, not in this chat. I can take a question and have someone call you back.", keywords: ["pay", "payment", "bill", "premium", "invoice"] }
  ],
  greeting: "Hi — I'm the Fairview Insurance desk assistant. I can share office hours and take a quote or callback request. I don't give advice or bind coverage. What can I help you with?",
  handoff: "Of course. I'll take a short message for the desk and someone will get back to you. What should I pass on, and what's the best phone or email?",
  outOfScope: "I don't want to guess or give advice on that. I can take a message for a licensed agent, or help with hours or a callback.",
  trial: {
    label: "7-day trial agent",
    preparedBy: "Patrick Lemieux",
    contact: "cabinet-patrick@mail.grokbot.com",
    note: "Example business for this prototype — not a real agency. In a live trial, this agent is customized to the office and the requests go to the owner."
  }
};
