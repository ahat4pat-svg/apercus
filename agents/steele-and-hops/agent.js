(function (root) {
  "use strict";

  var DAYS = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
  var DAY_ALIASES = {
    sun: 0, sunday: 0,
    mon: 1, monday: 1,
    tue: 2, tues: 2, tuesday: 2,
    wed: 3, wednesday: 3,
    thu: 4, thur: 4, thurs: 4, thursday: 4,
    fri: 5, friday: 5,
    sat: 6, saturday: 6,
    weekend: 6, tomorrow: -1, today: -2
  };

  function norm(s) {
    return String(s || "")
      .toLowerCase()
      .replace(/[’']/g, "'")
      .replace(/[^a-z0-9'+$]+/g, " ")
      .replace(/\s+/g, " ")
      .trim();
  }

  function tokens(s) {
    return norm(s).split(" ").filter(function (w) { return w.length > 1 || w === "i"; });
  }

  function includesAny(text, arr) {
    var t = " " + norm(text) + " ";
    return arr.some(function (p) { return t.indexOf(" " + norm(p) + " ") !== -1 || t.indexOf(norm(p)) !== -1; });
  }

  function extractEmail(text) {
    var m = String(text).match(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i);
    return m ? m[0] : null;
  }

  function extractPhone(text) {
    var m = String(text).match(/(?:\+?1[-.\s]?)?(?:\(?\d{3}\)?[-.\s]?)\d{3}[-.\s]?\d{4}/);
    return m ? m[0].trim() : null;
  }

  function extractTime(text) {
    var t = norm(text);
    var m = t.match(/\b(\d{1,2})(?::(\d{2}))?\s*(am|pm)\b/);
    if (m) {
      var h = parseInt(m[1], 10);
      var min = m[2] || "00";
      var ap = String(m[3]||"").toLowerCase();
      if (ap==="am") ap="a.m."; else if (ap==="pm") ap="p.m.";
      return h + ":" + min + " " + ap;
    }
    m = t.match(/\b(\d{1,2}):(\d{2})\b/);
    if (m) return m[1] + ":" + m[2];
    m = t.match(/\b(noon|midday|morning|afternoon|evening|lunch)\b/);
    if (m) {
      var map = { noon: "12:00 p.m.", midday: "12:00 p.m.", morning: "in the morning", afternoon: "in the afternoon", evening: "in the evening", lunch: "around lunchtime" };
      return map[m[1]];
    }
    return null;
  }

  function extractDay(text, now) {
    var t = norm(text);
    now = now || new Date();
    if (/\btoday\b/.test(t)) return formatDay(now);
    if (/\btomorrow\b/.test(t)) {
      var d = new Date(now.getTime() + 86400000);
      return formatDay(d);
    }
    var keys = Object.keys(DAY_ALIASES);
    for (var i = 0; i < keys.length; i++) {
      var k = keys[i];
      if (k === "today" || k === "tomorrow" || k === "weekend") continue;
      if (new RegExp("\\b" + k + "\\b").test(t)) {
        return nextWeekday(now, DAY_ALIASES[k]);
      }
    }
    if (/\bweekend\b/.test(t)) return nextWeekday(now, 6);
    return null;
  }

  function formatDay(d) {
    var name = DAYS[d.getDay()];
    name = name.charAt(0).toUpperCase() + name.slice(1);
    return name + ", " + (d.getMonth() + 1) + "/" + d.getDate();
  }

  function nextWeekday(from, weekday) {
    var d = new Date(from.getTime());
    var add = (weekday - d.getDay() + 7) % 7;
    if (add === 0) add = 7;
    d.setDate(d.getDate() + add);
    return formatDay(d);
  }

  function hasPhrase(t, phrase) {
    var p = norm(phrase);
    if (!p) return false;
    var esc = p.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    return new RegExp("(^| )" + esc + "( |$)").test(t);
  }

  function findService(kb, text) {
    var t = norm(text);
    var best = null;
    var bestScore = 0;
    if (/\b(women'?s?|ladies|lady)\b/.test(t) && /\b(cut|haircut|trim|style)\b/.test(t)) {
      return kb.services.filter(function (s) { return s.id === "cut-women"; })[0] || null;
    }
    if (/\b(men'?s?|man'?s?|barber)\b/.test(t) && /\b(cut|haircut|trim)\b/.test(t)) {
      return kb.services.filter(function (s) { return s.id === "cut-men"; })[0] || null;
    }
    (kb.services || []).forEach(function (s) {
      var score = 0;
      (s.keywords || []).forEach(function (k) {
        if (hasPhrase(t, k)) score += (norm(k).split(" ").length >= 2 ? 3 : 1);
      });
      if (hasPhrase(t, s.name) || t.indexOf(norm(s.name)) !== -1) score += 5;
      if (score > bestScore) { bestScore = score; best = s; }
    });
    if (bestScore >= 2) return best;
    if (/\b(balayage|highlights|foils)\b/.test(t)) return kb.services.filter(function (s) { return s.id === "highlights"; })[0] || best;
    if (/\b(color|colour|dye|roots?)\b/.test(t)) return kb.services.filter(function (s) { return s.id === "color"; })[0] || best;
    if (/\b(blowout|blow dry|blow-dry)\b/.test(t)) return kb.services.filter(function (s) { return s.id === "blowout"; })[0] || best;
    if (/\b(cut|haircut|trim)\b/.test(t)) return { ambiguous: "cut" };
    return bestScore > 0 ? best : null;
  }

  function findStylist(kb, text) {
    var t = norm(text);
    var found = null;
    (kb.stylists || []).forEach(function (s) {
      if (t.indexOf(norm(s.name)) !== -1) found = s;
    });
    return found;
  }

  function scoreFaq(faq, text) {
    var t = norm(text);
    var score = 0;
    (faq.keywords || []).forEach(function (k) {
      if (t.indexOf(norm(k)) !== -1) score += (norm(k).split(" ").length >= 2 ? 3 : 2);
    });
    tokens(faq.q).forEach(function (w) {
      if (w.length > 3 && t.indexOf(w) !== -1) score += 1;
    });
    return score;
  }

  function bestFaq(kb, text) {
    var best = null;
    var bestScore = 0;
    (kb.faqs || []).forEach(function (f) {
      var s = scoreFaq(f, text);
      if (s > bestScore) { bestScore = s; best = f; }
    });
    return bestScore >= 3 ? { faq: best, score: bestScore } : null;
  }

  function intent(text, booking) {
    var t = norm(text);
    if (!t) return "empty";
    if (booking && booking.stage && booking.stage !== "idle") return "booking_continue";
    if (/^(hi|hey|hello|good morning|good afternoon|good evening|howdy)\b/.test(t) && t.split(" ").length <= 4) return "greet";
    if (/^(thanks|thank you|thx|cheers|perfect|great|awesome|ok|okay|cool)\b/.test(t) && t.split(" ").length <= 5) return "thanks";
    if (/\b(bye|goodbye|see you|that'?s all|nothing else)\b/.test(t)) return "bye";
    if (/\b(human|person|someone real|manager|owner|speak to|talk to a|call me|leave a message|take a message|pass a message|pass this on|contact the desk|message for)\b/.test(t)) return "handoff";
    if (/\b(book|booking|appointment|reserve|schedule|availab|have time|can i come|set up a)\b/.test(t)) return "book";
    if (/\b(cancel|reschedule|move my|change my appointment)\b/.test(t)) return "cancel";
    if (/\b(price|prices|pricing|cost|how much|rate|rates|fee)\b/.test(t)) return "prices";
    if (/\b(services?|menu|what do you (do|offer)|options)\b/.test(t)) return "services";
    if (/\b(hours?|open|close|closing|opening|today)\b/.test(t)) return "hours";
    if (/\b(where|address|location|directions|park|parking)\b/.test(t)) return "place";
    return "other";
  }

  function listServices(kb) {
    return (kb.services || []).map(function (s) {
      return "• " + s.name + " — " + s.price + " (" + s.duration + ")";
    }).join("\n");
  }

  function requestId() {
    return "HP-" + Date.now().toString(36).toUpperCase().slice(-6);
  }

  function Agent(kb) {
    this.kb = kb;
    this.history = [];
    this.booking = { stage: "idle" };
    this.inbox = [];
    this.llmUrl = (typeof window !== "undefined" && window.AGENT_API) ? window.AGENT_API : "";
  }

  Agent.prototype.resetBooking = function () {
    this.booking = { stage: "idle" };
  };

  Agent.prototype.reply = function (userText) {
    var self = this;
    var text = String(userText || "").trim();
    var result = this._localReply(text);
    this.history.push({ role: "user", content: text });
    this.history.push({ role: "assistant", content: result.text });
    return Promise.resolve(result);
  };

  Agent.prototype._localReply = function (text) {
    var kb = this.kb;
    var t = norm(text);
    var kind = intent(text, this.booking);
    var chipsDefault = ["Book an appointment", "Hours", "Services & prices", "Leave a message"];

    if (kind === "empty") {
      return { text: "Go ahead — hours, prices, or a booking, whenever you're ready.", chips: chipsDefault };
    }

    if (kind === "greet") {
      return { text: kb.greeting, chips: chipsDefault };
    }

    if (kind === "thanks") {
      return { text: "You're welcome. If you'd like to book, or you have another question, I'm here.", chips: chipsDefault };
    }

    if (kind === "bye") {
      this.resetBooking();
      return { text: "Thanks for stopping by " + kb.name + ". We hope to see you soon.", chips: [] };
    }

    if (kind === "handoff") {
      this.booking = { stage: "message", topic: "desk" };
      return { text: kb.handoff, chips: [] };
    }

    if (this.booking.stage === "message") {
      return this._captureMessage(text);
    }

    if (kind === "booking_continue" || (this.booking.stage && this.booking.stage !== "idle" && kind === "book")) {
      return this._advanceBooking(text);
    }

    if (kind === "book") {
      return this._startBooking(text);
    }

    if (kind === "cancel") {
      this.booking = { stage: "message", topic: "cancellation" };
      return {
        text: kb.policies.cancellation + " Tell me the name on the appointment and the day, and I'll pass it to the desk.",
        chips: []
      };
    }

    if (kind === "hours") {
      var today = DAYS[new Date().getDay()];
      var todayHours = kb.hours.days[today];
      return {
        text: kb.hours.summary + " Today (" + today.charAt(0).toUpperCase() + today.slice(1) + "): " + todayHours + " Would you like to book?",
        chips: ["Book an appointment", "Services & prices"]
      };
    }

    if (kind === "services" || kind === "prices") {
      var svc = findService(kb, text);
      if (svc && !svc.ambiguous) {
        return {
          text: svc.name + " is " + svc.price + ", " + svc.duration + ". Would you like me to take a booking request for that?",
          chips: ["Book " + svc.name, "See all services"]
        };
      }
      if (svc && svc.ambiguous === "cut") {
        return {
          text: "For a cut, we have a women's cut and style at $65 (45 min) and a men's cut at $40 (30 min). Which one should I book, or would you like the full list?",
          chips: ["Women's cut and style", "Men's cut", "See all services"]
        };
      }
      return {
        text: "Here's what we offer right now:\n" + listServices(kb) + "\nI can take a booking request whenever you're ready.",
        chips: ["Book an appointment", "Hours"]
      };
    }

    if (kind === "place") {
      var hit = bestFaq(kb, text);
      var ans = hit ? hit.faq.a : ("We're at " + kb.address + " " + kb.policies.parking);
      if (/\bpark/.test(t)) ans = kb.policies.parking;
      return { text: ans, chips: ["Book an appointment", "Hours"] };
    }

    var svcDirect = findService(kb, text);
    if (svcDirect && !svcDirect.ambiguous && (/\b(how much|price|cost|do you do|do you offer|can you)\b/.test(t) || t.split(" ").length <= 6)) {
      return {
        text: "Yes — " + svcDirect.name + " is " + svcDirect.price + ", " + svcDirect.duration + ". Shall I take a booking request?",
        chips: ["Book " + svcDirect.name, "See all services"]
      };
    }

    var faq = bestFaq(kb, text);
    if (faq) {
      return { text: faq.faq.a, chips: chipsDefault };
    }

    if (svcDirect && !svcDirect.ambiguous) {
      return {
        text: "Yes, we do " + svcDirect.name.toLowerCase() + " (" + svcDirect.price + ", " + svcDirect.duration + "). I can book that, or answer another question.",
        chips: ["Book " + svcDirect.name, "Hours"]
      };
    }

    return { text: kb.outOfScope, chips: chipsDefault };
  };

  Agent.prototype._startBooking = function (text) {
    var kb = this.kb;
    var svc = findService(kb, text);
    var whenDay = extractDay(text);
    var whenTime = extractTime(text);
    var stylist = findStylist(kb, text);
    this.booking = {
      stage: "service",
      service: (svc && !svc.ambiguous) ? svc : null,
      day: whenDay,
      time: whenTime,
      stylist: stylist,
      name: null,
      phone: null,
      email: null
    };

    if (svc && svc.ambiguous === "cut") {
      this.booking.stage = "service";
      return {
        text: "Happy to book a cut. Women's cut and style is $65 (45 min); men's cut is $40 (30 min). Which one is it?",
        chips: ["Women's cut and style", "Men's cut"]
      };
    }
    return this._advanceBooking(text, true);
  };

  Agent.prototype._advanceBooking = function (text, justStarted) {
    var b = this.booking;
    var kb = this.kb;
    var t = norm(text);

    if (/\b(stop|never mind|cancel that|forget it|start over)\b/.test(t)) {
      this.resetBooking();
      return { text: "No problem — I cancelled that booking request. What else can I help with?", chips: ["Hours", "Services & prices", "Leave a message"] };
    }

    if (!justStarted) {
      var svc = findService(kb, text);
      if (svc && !svc.ambiguous) b.service = svc;
      var d = extractDay(text);
      if (d) b.day = d;
      var tm = extractTime(text);
      if (tm) b.time = tm;
      var st = findStylist(kb, text);
      if (st) b.stylist = st;
      var em = extractEmail(text);
      if (em) b.email = em;
      var ph = extractPhone(text);
      if (ph) b.phone = ph;
      if (!b.name && b.stage === "contact") {
        var nameGuess = text.replace(em || "", "").replace(ph || "", "").replace(/[,.]/g, " ").trim();
        nameGuess = nameGuess.replace(/^(my name is|i'm|i am|this is|it's|name is)\s+/i, "").trim();
        if (nameGuess && nameGuess.split(" ").length <= 5 && !extractTime(nameGuess)) b.name = nameGuess;
      }
    }

    if (!b.service) {
      b.stage = "service";
      return {
        text: "Sure — I can take an appointment request. Which service would you like?\n" + listServices(kb),
        chips: (kb.services || []).slice(0, 4).map(function (s) { return s.name; })
      };
    }

    if (!b.day || !b.time) {
      b.stage = "when";
      var missing = !b.day && !b.time ? "a day and a time" : (!b.day ? "which day" : "about what time");
      return {
        text: "Great, " + b.service.name + " (" + b.service.price + ", " + b.service.duration + "). What " + missing + " works for you? We're open Tuesday–Friday 9 to 7, Saturday 9 to 4, closed Sunday and Monday.",
        chips: b.day ? ["10:00 a.m.", "1:00 p.m.", "4:00 p.m."] : ["Thursday morning", "Friday afternoon", "Saturday morning"]
      };
    }

    if (!b.name || !(b.phone || b.email)) {
      b.stage = "contact";
      return {
        text: "I have " + b.service.name + " on " + b.day + " at " + b.time + (b.stylist ? " with " + b.stylist.name : "") + ". What's your name, and a phone number or email the desk can use to confirm?",
        chips: []
      };
    }

    return this._confirmBooking();
  };

  Agent.prototype._confirmBooking = function () {
    var b = this.booking;
    var id = requestId();
    var item = {
      id: id,
      type: "appointment_request",
      service: b.service.name,
      price: b.service.price,
      duration: b.service.duration,
      day: b.day,
      time: b.time,
      stylist: b.stylist ? b.stylist.name : "first available",
      name: b.name,
      phone: b.phone || "",
      email: b.email || "",
      createdAt: new Date().toISOString()
    };
    this.inbox.push(item);
    this.resetBooking();
    return {
      text: "All set — I sent this request to the desk (reference " + id + "). They'll confirm " + item.service + " on " + item.day + " at " + item.time + " for " + item.name + ". This is a request, not a final lock, until the salon confirms. Anything else I can help with?",
      chips: ["Hours", "Gift cards", "That's all"],
      inboxItem: item
    };
  };

  Agent.prototype._captureMessage = function (text) {
    var em = extractEmail(text);
    var ph = extractPhone(text);
    if (!this.booking.body) this.booking.body = "";
    if (em) this.booking.email = em;
    if (ph) this.booking.phone = ph;
    this.booking.body = (this.booking.body ? this.booking.body + " " : "") + text;
    if (!(this.booking.phone || this.booking.email)) {
      return { text: "Got it. What's the best phone or email so the desk can get back to you?", chips: [] };
    }
    var id = requestId();
    var item = {
      id: id,
      type: this.booking.topic || "message",
      body: this.booking.body,
      phone: this.booking.phone || "",
      email: this.booking.email || "",
      createdAt: new Date().toISOString()
    };
    this.inbox.push(item);
    this.resetBooking();
    return {
      text: "I've passed that to the desk (reference " + id + "). Someone will get back to you. Is there anything else?",
      chips: ["Book an appointment", "Hours", "That's all"],
      inboxItem: item
    };
  };

  root.SalonAgent = Agent;
  if (typeof module !== "undefined" && module.exports) {
    module.exports = { Agent: Agent, findService: findService, intent: intent, extractDay: extractDay, extractTime: extractTime };
  }
})(typeof window !== "undefined" ? window : global);
