/* Ridge Auto Garage — example business only (not a real shop). */
window.AGENT_KB = {
  id: "ridge-auto-garage",
  lang: "en",
  name: "Ridge Auto Garage",
  tagline: "Maintenance and repair — on Ridge Avenue.",
  city: "Portland, Maine",
  address: "210 Ridge Avenue, Portland, ME 04101 (example address)",
  phone: "(207) 555-0162",
  email: "shop@ridgeautogarage.example",
  website: "https://ridgeautogarage.example",
  timezone: "America/New_York",
  hours: {
    summary: "Monday–Friday 8:00 a.m. to 5:00 p.m., Saturday 8:00 a.m. to 12:00 p.m. Closed Sunday.",
    days: {
      sunday: "Closed",
      monday: "8:00 a.m. – 5:00 p.m.",
      tuesday: "8:00 a.m. – 5:00 p.m.",
      wednesday: "8:00 a.m. – 5:00 p.m.",
      thursday: "8:00 a.m. – 5:00 p.m.",
      friday: "8:00 a.m. – 5:00 p.m.",
      saturday: "8:00 a.m. – 12:00 p.m."
    }
  },
  services: [
    { id: "oil", name: "Oil change", price: "from $59", duration: "about 45 min", keywords: ["oil", "oil change", "lube", "filter"] },
    { id: "brakes", name: "Brake inspection or pads", price: "inspection $40, pads from $220/axle", duration: "1–2 hours", keywords: ["brake", "brakes", "pads", "rotors", "squeak"] },
    { id: "tires", name: "Tire rotation or replacement", price: "rotation $35, tires quoted", duration: "45–90 min", keywords: ["tire", "tires", "rotation", "alignment", "flat"] },
    { id: "inspect", name: "State inspection", price: "$35", duration: "30–45 min", keywords: ["inspection", "inspect", "sticker", "safety", "emissions"] },
    { id: "diag", name: "Check-engine / diagnostic", price: "$90, applied to the repair if you stay", duration: "about 1 hour", keywords: ["check engine", "diagnostic", "light", "scan", "code"] }
  ],
  stylists: [
    { name: "Dana Ruiz", role: "Shop lead", keywords: ["dana", "ruiz"] },
    { name: "Chris Bell", role: "Technician", keywords: ["chris", "bell"] }
  ],
  policies: {
    booking: "Appointments are recommended, especially on Saturdays. You can drop the car in the morning and we'll call you with a time estimate.",
    cancellation: "Please give at least a few hours' notice if you need to move a visit, so we can offer the bay to someone else.",
    payment: "We take cards, debit, and cash. We'll call you before any work beyond the initial inspection or posted service.",
    parking: "Customer parking is in front of the bay doors, off Ridge Avenue.",
    kids: "The waiting area is small. You're welcome to wait, or we can drop you a call or text when the car is ready.",
    gifts: "We don't sell gift cards."
  },
  faqs: [
    { id: "hours", q: "What are your hours?", a: "We're open Monday to Friday from 8:00 a.m. to 5:00 p.m., and Saturday from 8:00 a.m. to 12:00 p.m. We're closed Sunday.", keywords: ["hours", "open", "opening", "close", "closing", "today", "tonight", "weekend", "schedule"] },
    { id: "location", q: "Where are you?", a: "We're at 210 Ridge Avenue, Portland, ME 04101 — this is an example address for the trial. In a real trial, this would be the shop's real street address.", keywords: ["where", "address", "location", "located", "street", "directions", "map", "find"] },
    { id: "parking", q: "Is there parking?", a: "Yes. Customer parking is in front of the bay doors, off Ridge Avenue.", keywords: ["parking", "park", "lot", "spots"] },
    { id: "walkin", q: "Do you take walk-ins?", a: "Sometimes, for a quick oil change or a drop-off, if a bay is free. Appointments are safer on weekdays after 10 a.m. and on Saturday. I can take a request either way.", keywords: ["walk-in", "walkin", "walk in", "without appointment", "same day", "drop off", "drop-off"] },
    { id: "quote", q: "Can I get a quote?", a: "Yes. For oil changes, inspections, and posted services, the prices above are a starting point. For brakes, tires, or a check-engine light, I can take the year, make, model, and the problem, and the shop will call you with a quote.", keywords: ["quote", "estimate", "how much", "price", "cost", "pricing"] },
    { id: "cancel", q: "How do I cancel?", a: "Please give at least a few hours' notice if you can. I can take a cancellation message for the shop right now.", keywords: ["cancel", "cancellation", "reschedule", "move", "change appointment", "postpone"] },
    { id: "payment", q: "How can I pay?", a: "We take cards, debit, and cash. We'll call you before any work beyond the initial inspection or a posted service.", keywords: ["pay", "payment", "card", "cash", "visa", "debit"] },
    { id: "wait", q: "Can I wait while you work?", a: "Yes, the waiting area is small. Or we can call or text you when the car is ready.", keywords: ["wait", "waiting", "lounge", "stay", "pickup", "ready"] },
    { id: "loaner", q: "Do you have a loaner or shuttle?", a: "We don't keep a loaner. For longer jobs, we'll give you a time window so you can plan a ride. I don't want to promise a shuttle I can't confirm.", keywords: ["loaner", "rental", "shuttle", "ride", "drop off"] },
    { id: "makes", q: "What cars do you work on?", a: "Most common makes, gas and light diesel. If you have a heavy-duty or European model, tell me the year, make, and model and I'll have the shop confirm they can take it.", keywords: ["make", "model", "bmw", "ford", "toyota", "diesel", "european", "what cars"] }
  ],
  greeting: "Hi — I'm the Ridge Auto assistant. I can share hours, services and typical prices, and I can take a visit or quote request for the shop. What can I help you with?",
  handoff: "Of course. I'll take a short message for the shop and someone will get back to you. What should I pass on, and what's the best phone or email?",
  outOfScope: "I don't want to guess on that. I can take a message for Dana at the shop, or help with hours, prices, or a visit.",
  trial: {
    label: "7-day trial agent",
    preparedBy: "Patrick Lemieux",
    contact: "cabinet-patrick@mail.grokbot.com",
    note: "Example business for this prototype — not a real garage. In a live trial, this agent is customized to the shop and the requests go to the owner."
  }
};
