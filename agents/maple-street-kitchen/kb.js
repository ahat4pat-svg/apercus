/* Maple Street Kitchen — example business only (not a real restaurant). */
window.AGENT_KB = {
  id: "maple-street-kitchen",
  lang: "en",
  name: "Maple Street Kitchen",
  tagline: "Simple plates, open kitchen — on Maple Street.",
  city: "Portland, Maine",
  address: "42 Maple Street, Portland, ME 04101 (example address)",
  phone: "(207) 555-0177",
  email: "hello@maplestreetkitchen.example",
  website: "https://maplestreetkitchen.example",
  timezone: "America/New_York",
  hours: {
    summary: "Tuesday–Thursday 11:30 a.m. to 9:00 p.m., Friday–Saturday 11:30 a.m. to 10:00 p.m., Sunday 10:00 a.m. to 2:00 p.m. Closed Monday.",
    days: {
      sunday: "10:00 a.m. – 2:00 p.m. (brunch)",
      monday: "Closed",
      tuesday: "11:30 a.m. – 9:00 p.m.",
      wednesday: "11:30 a.m. – 9:00 p.m.",
      thursday: "11:30 a.m. – 9:00 p.m.",
      friday: "11:30 a.m. – 10:00 p.m.",
      saturday: "11:30 a.m. – 10:00 p.m."
    }
  },
  services: [
    { id: "lunch", name: "Lunch plates", price: "$16–$24", duration: "", keywords: ["lunch", "noon", "midday", "plate"] },
    { id: "dinner", name: "Dinner plates", price: "$22–$34", duration: "", keywords: ["dinner", "evening", "supper", "main"] },
    { id: "brunch", name: "Sunday brunch", price: "$14–$22", duration: "", keywords: ["brunch", "breakfast", "sunday"] },
    { id: "reserve", name: "Table reservation", price: "no booking fee", duration: "", keywords: ["reservation", "reserve", "table", "book", "booking", "party"] },
    { id: "catering", name: "Catering or group order", price: "from $18 a person, quoted by the kitchen", duration: "", keywords: ["cater", "catering", "group", "party", "office", "takeout", "take-out"] }
  ],
  stylists: [
    { name: "Noor Haddad", role: "Chef-owner", keywords: ["noor", "haddad", "chef"] },
    { name: "Leo Park", role: "Front of house", keywords: ["leo", "park"] }
  ],
  policies: {
    booking: "Reservations are recommended on Friday and Saturday evenings, and for parties of 6 or more. We hold a reserved table for 15 minutes.",
    cancellation: "Please let us know as soon as you can if your plans change, especially for a party of 6 or more.",
    payment: "We take cards, debit, and cash. A 18% service charge is added for parties of 8 or more.",
    parking: "Street parking is on Maple Street. A public lot is one block west, on Pine.",
    kids: "Children are welcome. We have two simple kids' plates at $12.",
    gifts: "Gift cards are available at the desk, from $25."
  },
  faqs: [
    { id: "hours", q: "What are your hours?", a: "We're open Tuesday to Thursday 11:30 a.m. to 9:00 p.m., Friday and Saturday 11:30 a.m. to 10:00 p.m., and Sunday brunch 10:00 a.m. to 2:00 p.m. We're closed Monday.", keywords: ["hours", "open", "opening", "close", "closing", "today", "tonight", "weekend", "schedule", "brunch"] },
    { id: "location", q: "Where are you?", a: "We're at 42 Maple Street, Portland, ME 04101 — this is an example address for the trial. In a real trial, this would be the restaurant's real street address.", keywords: ["where", "address", "location", "located", "street", "directions", "map", "find"] },
    { id: "parking", q: "Is there parking?", a: "Street parking is on Maple Street, and a public lot is one block west on Pine.", keywords: ["parking", "park", "lot", "spots", "street parking"] },
    { id: "reserve", q: "Do I need a reservation?", a: "It's a good idea on Friday and Saturday evenings, and for parties of 6 or more. I can take a reservation request for the desk right now.", keywords: ["reservation", "reserve", "table", "book", "walk-in", "walk in", "wait"] },
    { id: "menu", q: "What's on the menu?", a: "Lunch plates run about $16 to $24, dinner $22 to $34, and Sunday brunch $14 to $22. The exact dishes change a little each week. I can take a question for the kitchen if you have an allergy or a dish in mind.", keywords: ["menu", "food", "dishes", "eat", "specials", "vegetarian", "vegan", "allergy", "gluten"] },
    { id: "catering", q: "Do you cater?", a: "Yes, for groups, from about $18 a person. Tell me the date, the headcount, and any diet notes, and I'll send a catering request to the desk.", keywords: ["cater", "catering", "group", "office", "party", "takeout", "order"] },
    { id: "cancel", q: "How do I cancel a table?", a: "Please let us know as soon as you can, especially for a party of 6 or more. I can take that message for the desk.", keywords: ["cancel", "cancellation", "reschedule", "change reservation"] },
    { id: "payment", q: "How can I pay?", a: "We take cards, debit, and cash. A 18% service charge is added for parties of 8 or more.", keywords: ["pay", "payment", "card", "cash", "visa", "debit", "tip"] },
    { id: "kids", q: "Do you have a kids' menu?", a: "Yes — two simple kids' plates at $12. Children are welcome.", keywords: ["kid", "kids", "child", "children", "high chair"] },
    { id: "gift", q: "Do you sell gift cards?", a: "Yes, from $25, at the desk.", keywords: ["gift", "gift card", "giftcard", "voucher"] }
  ],
  greeting: "Hi — I'm the Maple Street Kitchen assistant. I can share hours, menu and prices, and I can take a reservation or catering request for the desk. What can I help you with?",
  handoff: "Of course. I'll take a short message for the desk and someone will get back to you. What should I pass on, and what's the best phone or email?",
  outOfScope: "I don't want to guess on that. I can take a message for Leo at the desk, or help with hours, the menu, or a reservation.",
  trial: {
    label: "7-day trial agent",
    preparedBy: "Patrick Lemieux",
    contact: "cabinet-patrick@mail.grokbot.com",
    note: "Example business for this prototype — not a real restaurant. In a live trial, this agent is customized to the kitchen and the requests go to the owner."
  }
};
