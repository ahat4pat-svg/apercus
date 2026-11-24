/* Harbor & Pine Salon — example business only (not a real shop). */
window.AGENT_KB = {
  id: "harbor-pine-salon",
  lang: "en",
  name: "Harbor & Pine Salon",
  tagline: "Hair, color, and calm — on Harbor Street.",
  city: "Portland, Maine",
  address: "88 Harbor Street, Portland, ME 04101 (example address)",
  phone: "(207) 555-0148",
  email: "hello@harborandpine.example",
  website: "https://harborandpine.example",
  timezone: "America/New_York",
  hours: {
    summary: "Tuesday–Friday 9:00 a.m. to 7:00 p.m., Saturday 9:00 a.m. to 4:00 p.m. Closed Sunday and Monday.",
    days: {
      sunday: "Closed",
      monday: "Closed",
      tuesday: "9:00 a.m. – 7:00 p.m.",
      wednesday: "9:00 a.m. – 7:00 p.m.",
      thursday: "9:00 a.m. – 7:00 p.m.",
      friday: "9:00 a.m. – 7:00 p.m.",
      saturday: "9:00 a.m. – 4:00 p.m."
    }
  },
  services: [
    { id: "cut-women", name: "Women's cut and style", price: "$65", duration: "45 min", keywords: ["women", "woman", "ladies", "lady", "haircut", "cut", "trim", "style"] },
    { id: "cut-men", name: "Men's cut", price: "$40", duration: "30 min", keywords: ["men", "man", "mens", "barber", "short", "haircut", "cut", "trim"] },
    { id: "blowout", name: "Blowout", price: "$45", duration: "30 min", keywords: ["blowout", "blow out", "blow-dry", "blowdry", "style only"] },
    { id: "color", name: "Single-process color", price: "from $120", duration: "90–120 min", keywords: ["color", "colour", "dye", "root", "roots", "single process"] },
    { id: "highlights", name: "Highlights or balayage", price: "from $160", duration: "about 2 hours", keywords: ["highlights", "highlight", "balayage", "foils", "babylights"] },
    { id: "treatment", name: "Deep conditioning treatment", price: "$35", duration: "20 min, often added to a cut", keywords: ["treatment", "conditioning", "mask", "olaplex", "repair"] }
  ],
  stylists: [
    { name: "Maya", role: "Owner, color and cuts", keywords: ["maya"] },
    { name: "Jonas", role: "Cuts and blowouts", keywords: ["jonas"] },
    { name: "Priya", role: "Color specialist", keywords: ["priya"] }
  ],
  policies: {
    booking: "Appointments are recommended. We keep two slots each morning for short cuts if you walk in, but color and highlights need a booking.",
    cancellation: "Please give at least 24 hours' notice to cancel or move an appointment. A late cancel may be charged 50% of the service.",
    payment: "We take cash, most cards, and Apple Pay. Gratuity is optional and always appreciated.",
    parking: "Two client spots are behind the shop, off Harbor Street. Street parking is usually easy after 10 a.m.",
    kids: "We happily cut children's hair on Saturday mornings (ages 6+), $30, about 20 minutes.",
    gifts: "Gift cards are available at the desk or by phone, any amount from $40."
  },
  faqs: [
    { id: "hours", q: "What are your hours?", a: "We're open Tuesday to Friday from 9:00 a.m. to 7:00 p.m., and Saturday from 9:00 a.m. to 4:00 p.m. We're closed Sunday and Monday.", keywords: ["hours", "open", "opening", "close", "closing", "today", "tonight", "weekend", "schedule"] },
    { id: "location", q: "Where are you?", a: "We're at 88 Harbor Street, Portland, ME 04101 — this is an example address for the trial. In a real trial, this would be the shop's real street address.", keywords: ["where", "address", "location", "located", "street", "directions", "map", "find"] },
    { id: "parking", q: "Is there parking?", a: "Yes. Two client spots sit behind the shop, off Harbor Street. Street parking is usually easy after 10 a.m.", keywords: ["parking", "park", "lot", "spots", "street parking"] },
    { id: "walkin", q: "Do you take walk-ins?", a: "We keep two slots each morning for short cuts if you walk in. Color and highlights need a booking so we can give you the full time.", keywords: ["walk-in", "walkin", "walk in", "walk ins", "without appointment", "same day"] },
    { id: "cancel", q: "How do I cancel?", a: "Please give at least 24 hours' notice to cancel or move an appointment. I can take a cancellation message for the desk right now. A late cancel may be charged 50% of the service.", keywords: ["cancel", "cancellation", "reschedule", "move", "change appointment", "postpone"] },
    { id: "payment", q: "How can I pay?", a: "We take cash, most cards, and Apple Pay. Tips are optional.", keywords: ["pay", "payment", "card", "cash", "apple pay", "visa", "debit", "tip"] },
    { id: "gift", q: "Do you sell gift cards?", a: "Yes. Gift cards start at $40 and can be bought at the desk or by phone at (207) 555-0148.", keywords: ["gift", "gift card", "giftcard", "voucher", "certificate"] },
    { id: "kids", q: "Do you cut children's hair?", a: "Yes — Saturday mornings, ages 6 and up, $30 for about 20 minutes. I can book that for you.", keywords: ["kid", "kids", "child", "children", "boy", "girl"] },
    { id: "new", q: "What should a new client know?", a: "Come a few minutes early, with dry hair if you're here for a cut only. For color, we'll do a quick consult. If you have a photo of a color you like, bring it.", keywords: ["new", "first", "first time", "consult", "consultation", "bring", "prepare"] },
    { id: "color-policy", q: "Do you do a patch test?", a: "For a first-time color client, we recommend a patch test at least 48 hours before the appointment. We can book the test and the color together.", keywords: ["patch", "allergy", "allergic", "test", "sensitive"] }
  ],
  greeting: "Hi — I'm the Harbor & Pine assistant. I can share hours, services and prices, and I can take an appointment request for the desk. What can I help you with?",
  handoff: "Of course. I'll take a short message for the desk and someone will get back to you. What should I pass on, and what's the best phone or email?",
  outOfScope: "I don't want to guess on that. I can take a message for Maya at the desk, or help with hours, prices, or a booking.",
  trial: {
    label: "7-day trial agent",
    preparedBy: "Patrick Lemieux",
    contact: "cabinet-patrick@mail.grokbot.com",
    note: "Example business for this prototype — not a real salon. In a live trial, this agent is customized to the shop and the booking requests go to the owner."
  }
};
