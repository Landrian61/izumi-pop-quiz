import type { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "The Last Soak of the Evening",
    question:
      "You're the last person to use the Furo this evening. The tub still holds warm water and the hinoki is wet. You're tired and ready for bed. What do you do before you leave the bath area?",
    options: [
      { letter: 'A', text: "Drain the water and wipe the hinoki dry with a cloth." },
      { letter: 'B', text: "Drain the water and leave the tub to air-dry on its own overnight." },
      { letter: 'C', text: "Leave the warm water in — the moisture stops the wood drying out and cracking." },
      { letter: 'D', text: "Tip most of it out, add a little cold water, and put the lid on." },
    ],
    correctAnswer: 'A',
    explanation:
      "Hinoki is protected by being kept dry, not wet. Standing water and lingering damp swell the grain, leave a mineral film, and invite mould — slowly ruining a tub built to last decades. So the last bather does both things: drains the water AND hand-dries the wood. It's two minutes of Omoiyari toward everyone who bathes after you, this year and in ten years.",
    whyOthersWrong: {
      B: "Air-drying alone leaves droplets and a mineral film sitting in the grain all night. The point of wiping is to lift that moisture out before it soaks in.",
      C: "This sounds sensible but it's the opposite of true — bath hinoki is kiln-dried and sealed by dryness. Trapped water swells and rots it; it doesn't 'keep it supple'.",
      D: "Any standing water under a closed lid holds humidity against the wood until morning. Cold water changes nothing.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 2,
    title: "When the Ground Begins to Shake",
    question:
      "You're alone in your sleeping room when the floor starts to shake. The light fixture sways and you hear things rattling next door. It's an earthquake. What is your first move?",
    options: [
      { letter: 'A', text: "Get under a sturdy table, protect your head and neck, and hold on until the shaking stops." },
      { letter: 'B', text: "Move quickly to the genkan and get outside while it's shaking, before you can be trapped." },
      { letter: 'C', text: "Brace yourself in an interior doorway and grip the frame until it passes." },
      { letter: 'D', text: "Stand in the middle of the room, clear of furniture, ready to react to whatever falls." },
    ],
    correctAnswer: 'A',
    explanation:
      "Drop, Cover, Hold On. Most indoor earthquake injuries come from falling objects — light fixtures, shelving, glass — not from the building itself. A sturdy table shields your head and core, which is what you most need to protect. Stay put until the shaking fully stops, then evacuate calmly.",
    whyOthersWrong: {
      B: "Trying to get out mid-shake is when people are struck by toppling furniture and falling roof tiles — and a traditional Machiya carries heavy clay tiles. Move only once it stops.",
      C: "The doorway rule is outdated. A modern doorframe is no stronger than the rest of the structure, and you're still exposed to the swinging door and flying objects.",
      D: "Standing in the open leaves your head and neck unprotected — exactly what gets hit. Get something solid over you.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 3,
    title: "Setting Your Bags Down",
    question:
      "You arrive at Izumi after a long journey and need to set your heavy suitcase down while you take off your shoes at the genkan. Where do you put it?",
    options: [
      { letter: 'A', text: "Lay it flat on the floor, leaving a gap between it and any wall." },
      { letter: 'B', text: "Stand it upright in the corner, where it's most out of the way." },
      { letter: 'C', text: "Lean it gently against the wooden lattice of the shoji, not the paper." },
      { letter: 'D', text: "Prop it against the smooth clay wall, where the surface looks hardest." },
    ],
    correctAnswer: 'A',
    explanation:
      "Izumi's walls are jurakukabe — fine coloured sand bound to the surface — and the shoji are washi paper on a wooden lattice. Neither can be spot-repaired: a single scuff means a craftsperson re-skims the whole wall or re-papers the whole panel. The safe move is the dull one: set luggage flat on the floor, clear of everything.",
    whyOthersWrong: {
      B: "A corner concentrates the case's weight on one point of the sand finish — the most damaging place to lean it.",
      C: "Even resting weight on the lattice strains the joinery, and the paper tears at the lightest contact. Shoji aren't built to lean things on.",
      D: "'Looks hardest' is the trap — every clay wall here is the same fragile sand finish, and it scratches at a touch.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 4,
    title: "AEGIS Members Coming for Lunch",
    question:
      "The Teams channel says Watanabe-san, Yamate-san, Saito-san and Akiyama-san are coming to Izumi for lunch today. You have nothing else scheduled. How do you handle the day?",
    options: [
      { letter: 'A', text: "Be there to greet them when they arrive, then look for ways to help and join them." },
      { letter: 'B', text: "Tidy the house, then stay in your room so they can host their guests undisturbed." },
      { letter: 'C', text: "Greet them briefly, then head to the office so they have the space to themselves." },
      { letter: 'D', text: "Lay out the lunch for them beforehand, then give them privacy to enjoy it." },
    ],
    correctAnswer: 'A',
    explanation:
      "Izumi is AEGIS Group's home and you are their guest. When AEGIS members gather here, the default — unless you've been excused or are genuinely needed elsewhere — is to be present, greet them with attention, and look for ways to serve. They value your company, not your absence.",
    whyOthersWrong: {
      B: "Tidying is kind, but then disappearing reads as withdrawal. Your presence with them is the whole point.",
      C: "A quick greeting followed by leaving still treats the visit as something to clear out for, rather than to share in.",
      D: "Doing the work then vanishing misses the heart of it — they'd rather have you at the table than a table set by someone who left.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 5,
    title: "Passing Through a Shoji",
    question:
      "You need to move from the hallway into the Floor 2 living area, and there's a shoji panel between them. How do you slide it open?",
    options: [
      { letter: 'A', text: "Grip the wooden frame near the edge and slide it gently along its track." },
      { letter: 'B', text: "Spread a flat palm on the paper and push evenly, so no single point takes the strain." },
      { letter: 'C', text: "Give it one quick, firm push so it glides before it can stick or drag." },
      { letter: 'D', text: "Press low near the bottom rail, where the paper is least delicate." },
    ],
    correctAnswer: 'A',
    explanation:
      "Shoji are washi paper stretched over a wooden lattice. Only the frame is built to be handled — touch the paper and it stretches, weakens, and eventually tears, after which the panel must be re-papered by a craftsperson. Hold the frame, slide slowly.",
    whyOthersWrong: {
      B: "Spreading the pressure doesn't save the paper — any push on the washi deforms and weakens it. The frame exists precisely so you never touch the paper.",
      C: "A quick firm push can slam the panel into the jamb and crack the delicate lattice joints. Slow and smooth, every time.",
      D: "The paper isn't reinforced anywhere — low or high, pressing the panel instead of the frame is what damages it.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 6,
    title: "Megu-san Alone in the Kitchen",
    question:
      "You pass the kitchen in the afternoon and see Megu-san preparing lunch for everyone, on her own. You're not in the middle of anything urgent. What do you do?",
    options: [
      { letter: 'A', text: "Go in, greet her, and ask how you can help." },
      { letter: 'B', text: "Keep her company at the counter so she isn't working alone, and chat while she cooks." },
      { letter: 'C', text: "Leave her undisturbed — the considerate thing is not to crowd someone who's concentrating." },
      { letter: 'D', text: "Wait nearby until she clearly looks like she needs help, then step in." },
    ],
    correctAnswer: 'A',
    explanation:
      "When an AEGIS member is serving the whole house — and cooking is exactly that — the considerate response is to lighten the work, not just observe it. Greet her and offer help. Even if she says there's nothing to do, the offer itself is the gesture that matters.",
    whyOthersWrong: {
      B: "Company is pleasant, but it leaves her doing all the work while you watch. Offer to share the load, don't just fill the air.",
      C: "'Not crowding' can quietly become 'not helping'. Offering help is the warmth that's expected here, even if she declines it.",
      D: "Waiting to be visibly needed makes her carry the burden of asking. Offer first.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 7,
    title: "Cleaning the Floor 2 Washroom",
    question:
      "It's your rota day to clean the Floor 2 washroom. The Cleaning Manual's principles govern the order you work in. Which approach follows them?",
    options: [
      { letter: 'A', text: "Top to bottom; dry areas before wet ones; cleaner areas before dirtier ones." },
      { letter: 'B', text: "Wet areas first while you have fresh water, then the dry surfaces, finishing high to low." },
      { letter: 'C', text: "The dirtiest spots first, so the hardest work is done while you're fresh." },
      { letter: 'D', text: "Bottom to top, so you never tread dirt back onto floors you've finished." },
    ],
    correctAnswer: 'A',
    explanation:
      "The three principles — Top → Bottom, Dry → Wet, Clean → Dirty — exist because cleaning is sequential. Work high to low and gravity carries dust onto surfaces you haven't done yet; work clean to dirty and your cloth never carries grime back onto what's finished. The principles let you adapt to any room.",
    whyOthersWrong: {
      B: "Doing wet areas first splashes onto the dry surfaces you clean later, and working low-to-high drops dust onto finished areas. It inverts both principles.",
      C: "Starting with the filthiest spreads that grime — your cloth and hands then carry it everywhere. Clean → dirty protects what's already done.",
      D: "Bottom to top means dust and drips from higher up land on the floor you just finished. Let gravity work for you: top to bottom.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 8,
    title: "Stubborn Residue on the Furo Wood",
    question:
      "During the weekly Furo deep-clean, a patch of residue won't lift with the usual wood-safe solution. You want to be thorough. Which approach is the right one?",
    options: [
      { letter: 'A', text: "Apply more of the wood-safe solution, let it soak longer, then wipe along the grain." },
      { letter: 'B', text: "Work at it with a stiff brush and a little baking soda to lift it off." },
      { letter: 'C', text: "Wipe it with a diluted bleach solution, then rinse well so none is left behind." },
      { letter: 'D', text: "Use a kitchen degreaser, since it's made to cut through tough residue." },
    ],
    correctAnswer: 'A',
    explanation:
      "Hinoki is soft and oil-rich, and that is what keeps it sound. The safe escalation is gentler and slower: more wood-safe solution, more soaking time, wiping with the grain — and if it still won't shift, ask Miki-san or Megu-san. Patience never damages the wood; chemicals and abrasives do.",
    whyOthersWrong: {
      B: "A stiff brush and abrasive open and scratch the soft grain. Even baking soda abrades hinoki. Stay gentle and go with the grain.",
      C: "Bleach strips the wood's natural oils and leaves white patches that rinsing can't undo. It's the single fastest way to ruin a hinoki bath.",
      D: "Degreasers pull the natural oils out of the wood, drying and cracking it. Only the wood-safe solution belongs on hinoki.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 9,
    title: "Fire on the Stovetop",
    question:
      "You come downstairs and find a fire on the kitchen stovetop — small and contained for now, but burning. Saito-san and Yamate-san are in the next room, and a fire extinguisher is mounted behind the counter. What is your best response?",
    options: [
      { letter: 'A', text: "Shout 「火事!」so others respond and call 119, then use the extinguisher to put the small fire out — keeping your exit clear and getting everyone out if it grows." },
      { letter: 'B', text: "Get everyone out and call 119 from outside; fighting a fire yourself is never the right call, whatever its size." },
      { letter: 'C', text: "Take the extinguisher and put it out right away, focusing fully on the fire before it has any chance to spread." },
      { letter: 'D', text: "Smother it with water from the kitchen sink, then tell the others once the flames are out." },
    ],
    correctAnswer: 'A',
    explanation:
      "A small, contained fire is the one moment when acting can save the house — Izumi is a timber Machiya, and a fire left to grow can take the whole building in minutes. So the order is: raise the alarm first (shout 火事! so others respond and 119 is called), then, because the fire is still small and an extinguisher is right there, put it out with the PASS technique while keeping a clear escape route behind you. The rule that overrides everything: the instant the fire spreads beyond the stovetop, climbs upward, or the room fills with smoke, stop, get everyone out, and let the fire service take over. Fight a fire only when it's small, contained, you have a way out, and help is already coming.",
    whyOthersWrong: {
      B: "Evacuating and calling 119 is exactly right once a fire is spreading, or whenever you're in any doubt — but 'never, whatever its size' means standing by while a fire you could have stopped in ten seconds grows to consume a wooden house. With help present and an extinguisher in reach, a small contained fire should be put out.",
      C: "Fighting it without first shouting means nobody calls 119 and nobody knows to help or get clear. Raising the alarm is always the first move — even when you fully intend to fight the fire yourself.",
      D: "Water spreads burning cooking oil and conducts electricity if the stove or an appliance is live — it can turn a small fire into a flare-up. Use the extinguisher, not the sink.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 10,
    title: "Shutting Down the Gas Stove",
    question:
      "You've finished cooking and lifted the pan off, but the gas flame is still burning. What's the proper way to shut the stove down?",
    options: [
      { letter: 'A', text: "Turn each knob to off until it clicks, and check the flame is fully out on every burner." },
      { letter: 'B', text: "Switch it off at the knob and walk away — the burner's safety sensor cuts the gas shortly after." },
      { letter: 'C', text: "Turn it down to a low simmer so the pilot stays ready for next time." },
      { letter: 'D', text: "Close the main gas tap under the counter and leave the burner knobs as they are." },
    ],
    correctAnswer: 'A',
    explanation:
      "Japanese gas stoves don't shut off on their own. The off mark is 止 (stop) — turn the knob until you feel the click that confirms the gas valve is closed, then look to confirm every knob is off and no flame remains. A burner left on is both a fire risk and a gas-leak risk.",
    whyOthersWrong: {
      B: "There's no sensor that cuts the gas 'shortly after'. The valve closes only when you turn the knob fully off — until then it keeps burning.",
      C: "There's no standing pilot to keep alive. A knob left low means gas is flowing and burning unattended — exactly the hazard you're trying to avoid.",
      D: "Close only the main tap and the burner valves are still open — gas will pour out the moment the tap is reopened, with no flame. Turn the burner knobs off.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 11,
    title: "The AC Remote You Can't Read",
    question:
      "Your sleeping room is too warm. The AC remote's mode button cycles between these settings. Which do you choose to cool the room?",
    options: [
      { letter: 'A', text: "冷房" },
      { letter: 'B', text: "暖房" },
      { letter: 'C', text: "運転" },
      { letter: 'D', text: "停止" },
    ],
    correctAnswer: 'A',
    explanation:
      "冷房 means cooling — this is the mode you want. The Appliances & Utilities Manual maps every AC kanji you'll meet so you never have to guess: 冷房 (cooling), 暖房 (heating), 運転 (run/on), 停止 (stop/off). When you can't read the panel, the manual is the answer — not trial and error.",
    whyOthersWrong: {
      B: "暖房 is heating — the exact opposite, and it would make a warm room worse.",
      C: "運転 just means 'run' — it starts the unit in whatever mode it was last left in, which might well be heating.",
      D: "停止 means 'stop' — it switches the AC off, leaving the room exactly as warm as it is now.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 12,
    title: "Tomorrow's Menu Is Being Planned",
    question:
      "You have a peanut allergy serious enough to send you to hospital. You overhear your cooking pair planning tomorrow's lunch, and you haven't mentioned the allergy yet. When do you raise it?",
    options: [
      { letter: 'A', text: "Now, while they're still planning, so they can build the menu around it from the start." },
      { letter: 'B', text: "Once you see the shopping list, then flag anything with peanuts — no point fussing over a plan that might change." },
      { letter: 'C', text: "Quietly avoid the risky-looking dishes when the meal is served, so nobody has to change plans for you." },
      { letter: 'D', text: "Mention it to whoever does the shopping, but not the cooks, to keep it low-key." },
    ],
    correctAnswer: 'A',
    explanation:
      "Omoiyari is consideration that arrives early — before anyone has to redo their work. Telling your cooking pair now lets them plan and shop cleanly around the allergy, and that smooth planning is itself a small gift to them. A reaction that can hospitalise you isn't a private preference; it's something the people handling your food need to know.",
    whyOthersWrong: {
      B: "A plan becomes a shopping trip fast. Wait and they may already have bought and built the meal around peanuts — consideration delivered too late.",
      C: "Quietly avoiding food at the table risks a severe reaction from cross-contamination you can't see, and leaves the cooks never knowing. This is a safety matter, not tact.",
      D: "The cooks are the ones who pick ingredients and handle cross-contact — they're precisely who must know. Telling only the shopper breaks the chain.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 13,
    title: "Calling for Help on 119",
    question:
      "A teammate collapses and you call 119. The operator answers in Japanese. In Japan, 119 dispatches both fire engines and ambulances. What do you say first to get an ambulance moving fastest?",
    options: [
      { letter: 'A', text: "「救急です」(Kyuukyuu desu)" },
      { letter: 'B', text: "「火事です」(Kaji desu)" },
      { letter: 'C', text: "Start describing the symptoms straight away in clear, simple English." },
      { letter: 'D', text: "Give the Izumi address first, so they know where to send help." },
    ],
    correctAnswer: 'A',
    explanation:
      "「救急です」means 'it's an emergency / I need an ambulance.' Because 119 handles both fire and medical calls, leading with this word tells the operator instantly which service to send, and they can then route you to English-speaking support. The trigger word first makes everything that follows faster.",
    whyOthersWrong: {
      B: "「火事です」means 'it's a fire' — it sends fire engines, not the ambulance your collapsed teammate needs.",
      C: "Operators may not have English to hand immediately; opening in English can stall while they work out which service you need. Say the trigger word first, then accept the English hand-off.",
      D: "The address matters, but only after the operator knows whether you need fire or ambulance. Say 救急です first, then the address.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 14,
    title: "Stepping Out for a Walk",
    question:
      "On a warm afternoon you decide to walk around the neighbourhood for an hour. The rest of the team is at the office or out on errands. Per the Communication & Whereabouts guidance, what do you do before leaving Izumi?",
    options: [
      { letter: 'A', text: "Post your plan in the team's designated Teams channel before you head out." },
      { letter: 'B', text: "Send a quick message to the one teammate you're closest to, so someone knows." },
      { letter: 'C', text: "It's only an hour and you'll have your phone on you — just head out and stay reachable." },
      { letter: 'D', text: "Write your route and return time on the whiteboard by the genkan." },
    ],
    correctAnswer: 'A',
    explanation:
      "If something happens — you're hurt, lost, or unwell — your team needs to know roughly where to look, and the Japan team is your first point of contact for any issue. The designated channel is the agreed record they can all see. A whereabouts note that only some people can reach isn't a record at all.",
    whyOthersWrong: {
      B: "One person can be asleep, in a meeting, or away from their phone. The channel is visible to everyone who might need it — including the Japan team.",
      C: "'Reachable' only helps if someone knows to look and where. A phone in your pocket tells no one your plans if you can't answer it.",
      D: "A note at Izumi is invisible to the Japan team and anyone not in the house — and they're exactly who'd act first in an emergency. Use the channel.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 15,
    title: "Plugging In Your Hair Dryer",
    question:
      "You unpack the hair dryer you brought from Uganda — a 240V appliance. The Izumi socket is 100V. You've got a travel plug adapter in your bag. What do you do?",
    options: [
      { letter: 'A', text: "Don't use it — a 240V-only dryer is harmed by 100V; get a 100V dryer in Japan or a properly rated step-up transformer." },
      { letter: 'B', text: "Use it with the plug adapter — that's what the adapter is for, bridging the two countries' outlets." },
      { letter: 'C', text: "Run it as is — a 240V appliance on 100V just gets less power than it's rated for, which is gentle on it." },
      { letter: 'D', text: "Use it only on the lowest heat setting, which draws less power and stays within what 100V can give." },
    ],
    correctAnswer: 'A',
    explanation:
      "Voltage and plug shape are two different things. A travel adapter only reshapes the pins; it does nothing to the 100V supply. A 240V appliance run on 100V doesn't 'go easy' — the motor stalls and overheats and the heating element misbehaves, often burning out within minutes. The safe options are a 100V dryer (cheap at any Japanese electronics store) or a transformer rated for the wattage.",
    whyOthersWrong: {
      B: "The adapter changes only the pin shape, never the voltage. The dryer still receives the wrong voltage and is still at risk.",
      C: "'Less power is gentle' is a common myth — undervoltage makes a motor stall and overheat. It damages the appliance, it doesn't protect it.",
      D: "The heat setting doesn't change the supply voltage. On the lowest setting it's still a 240V appliance on 100V — still mismatched, still failing.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 16,
    title: "Drying Off at the Smart Toilet",
    question:
      "You've used the smart toilet's wash function and want to dry off with the built-in warm-air dryer instead of paper. The control panel shows four buttons. Which do you press?",
    options: [
      { letter: 'A', text: "乾燥" },
      { letter: 'B', text: "おしり" },
      { letter: 'C', text: "ビデ" },
      { letter: 'D', text: "停止" },
    ],
    correctAnswer: 'A',
    explanation:
      "乾燥 means 'dry' — it runs the warm-air dryer. The Appliances & Utilities Manual lists the four common buttons so you needn't guess: おしり (rear wash), ビデ (front wash), 乾燥 (dry), 停止 (stop).",
    whyOthersWrong: {
      B: "おしり means 'rear' — it starts the rear-wash spray again, not the dryer.",
      C: "ビデ is the front (bidet) wash — another spray function, not drying.",
      D: "停止 means 'stop' — it halts whatever's running, so it won't start the dryer for you.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 17,
    title: "Setting the Water Heater",
    question:
      "You're filling the Furo for the evening soak and glance at the water heater panel — it's set to 50°C. The Appliances & Utilities Manual gives specific guidance on this. What do you do?",
    options: [
      { letter: 'A', text: "Lower it to around 42°C — comfortable for the soak and within the manual's safe limit." },
      { letter: 'B', text: "Leave it at 50°C; a hotter fill just cools to a pleasant temperature by the time you get in." },
      { letter: 'C', text: "Set it to 38°C to be gentle, so there's no risk of scalding anyone at all." },
      { letter: 'D', text: "Raise it briefly to 60°C to sanitise the tub, then let it cool before bathing." },
    ],
    correctAnswer: 'A',
    explanation:
      "The manual caps the heater at 48°C and recommends about 42°C for the Furo — hot enough for the traditional soak, safe for skin, and kind to the hinoki. Around 42°C is the sweet spot the bath is designed for.",
    whyOthersWrong: {
      B: "50°C is above the manual's 48°C ceiling — a scald risk at the tap and hard on the wood, and you can't count on it cooling to safe before someone touches it.",
      C: "38°C is below the soak temperature — pleasant to dip into, but it won't deliver the deep warming the Furo is meant for.",
      D: "60°C can scald badly and accelerates damage to the hinoki. 'It'll cool down' is not a safe plan around a shared bath.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 18,
    title: "A Faint Smell of Gas",
    question:
      "You walk into the kitchen one dim morning and catch a faint but unmistakable smell of gas. No one else is around. What do you do?",
    options: [
      { letter: 'A', text: "Don't touch any switch; open the windows and doors, leave the house, and call the Japan team and the gas line (0120-594-594) from outside." },
      { letter: 'B', text: "Switch off the kitchen light and unplug the appliances to remove ignition sources, then open up to ventilate." },
      { letter: 'C', text: "Find and close the gas tap, then stay to air the room out before the others wake." },
      { letter: 'D', text: "Open the windows, then check the burners and connections to find where it's leaking from." },
    ],
    correctAnswer: 'A',
    explanation:
      "Any electrical switch — even turning one off — can throw a tiny spark, and a spark in a gas-filled room is what causes explosions. The protocol is strict and ordered: don't touch electrics at all, ventilate by opening windows and doors, get out of the house, and call the Japan team and the gas emergency line (0120-594-594) from outside — never from inside.",
    whyOthersWrong: {
      B: "Operating a switch to turn it off can spark just as easily as turning it on — and unplugging does the same. Don't touch any electrics; ventilate and leave.",
      C: "Closing a tap that's right by your exit is fine on the way out, but lingering inside a gas-filled room to 'air it out' is the danger. Outside and on the phone is where you should be.",
      D: "Hunting for the leak keeps you inside, breathing gas beside possible ignition sources. Ventilate, evacuate, and let the gas line guide you from outside.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 19,
    title: "Pale and Dizzy in the August Heat",
    question:
      "It's mid-August in Yokkaichi. Walking back from the office, a teammate starts sweating heavily, turns pale, and says they feel dizzy and sick. What's happening, and what do you do first?",
    options: [
      { letter: 'A', text: "Heatstroke — move them into shade or AC, cool the neck and underarms, and give water with electrolytes; get medical help if they don't improve quickly." },
      { letter: 'B', text: "Heatstroke — keep them walking slowly to the house to lie down, and have them quickly drink a lot of cold water." },
      { letter: 'C', text: "Just dehydration — sit them down where they are and have them drink a large bottle of water straight off." },
      { letter: 'D', text: "Only overheated — rest a few minutes where you are and they'll come right once the dizziness passes." },
    ],
    correctAnswer: 'A',
    explanation:
      "Heavy sweating, pallor, dizziness and nausea in humid summer heat point to heatstroke (熱中症, Netchuushou), which can escalate fast. The response is cooling first — shade or AC, and cooling the neck and underarms where big blood vessels run near the skin — alongside sips of water with electrolytes, and medical help if it doesn't ease quickly.",
    whyOthersWrong: {
      B: "The diagnosis is right but the action is wrong: walking on in the heat makes it worse, and gulping a lot of cold water can bring on cramps and vomiting. Cool the body first; sip, don't chug.",
      C: "This is more than thirst — heavy sweating, pallor and dizziness are heatstroke, and the body must be cooled, not just topped up. Downing a whole bottle at once can make them ill.",
      D: "Resting in the heat keeps the heat load on. Heatstroke can slide into confusion and collapse — cool them immediately, don't wait it out.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 20,
    title: "Spilled Water on the Tatami",
    question:
      "Sitting in the Floor 2 living area, you knock over your cup and water spills across the tatami. What's your next move?",
    options: [
      { letter: 'A', text: "Blot it up at once with a dry cloth, pressing gently along the weave, then air-dry the area or use a fan." },
      { letter: 'B', text: "Rub it briskly with a dry towel until the surface feels dry to the touch." },
      { letter: 'C', text: "Wipe it, then run a warm iron over the spot through a cloth to drive the moisture out." },
      { letter: 'D', text: "Dab it once, then leave a window open and let the breeze finish it off over the day." },
    ],
    correctAnswer: 'A',
    explanation:
      "Tatami is woven igusa rush straw, and water soaks straight into it — left damp, it grows mould and discolours within days, with a smell that's hard to shift. Blot (never rub — rubbing frays the weave) with a dry cloth immediately, then air-dry. What you do in the first minute matters more than anything you do in the next hour.",
    whyOthersWrong: {
      B: "Rubbing frays and flattens the igusa weave, and 'surface dry' isn't dry — moisture is still down in the straw. Blot with gentle pressure to lift it out.",
      C: "A hot iron can scorch the rush straw and set a permanent mark. Heat is not how you dry tatami.",
      D: "A breeze helps only after you've blotted the water out. Left to 'dry over the day', it soaks into the straw core and mould begins — speed is everything.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 21,
    title: "Your Sleeping Room After Waking",
    question:
      "It's morning and you're up. Your futon is still spread on the floor with the bedding on top. Following the daily rhythm at Izumi, what do you do before you leave the room?",
    options: [
      { letter: 'A', text: "Fold the bedding and the futon and stow them in the closet, opening the room up for the day." },
      { letter: 'B', text: "Drape the futon over the windowsill to air in the sun while you're out, and put it away later." },
      { letter: 'C', text: "Leave it spread neatly — folding it daily wears it out, and you'll only lay it back down tonight." },
      { letter: 'D', text: "Fold just the top bedding and leave the futon flat, so it can breathe against the floor." },
    ],
    correctAnswer: 'A',
    explanation:
      "Folding the bedding and futon and stowing them in the oshiire each morning is part of Izumi's daily rhythm. It airs the bedding so body moisture doesn't breed mould, turns the room back into usable daytime space, and signals respect for the house.",
    whyOthersWrong: {
      B: "Hanging bedding out a window scatters dust onto the street below — not done in dense Japanese neighbourhoods — and leaves it exposed all day. Air it indoors and stow it.",
      C: "A futon left down all day traps body moisture against the floor and grows mould, and keeps the room locked as a bedroom. Folding and stowing is the rhythm, and it doesn't wear the futon.",
      D: "Flat against the floor is exactly where moisture collects. A futon airs best folded and put away in the closet, not left breathing on the tatami.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 22,
    title: "Reheating Leftovers",
    question:
      "You want to reheat yesterday's lunch in the kitchen microwave. It's in a metal container with a couple of pieces wrapped in foil, and you're in a hurry. What do you do?",
    options: [
      { letter: 'A', text: "Move the food into a microwave-safe ceramic or glass dish and take off all the foil first." },
      { letter: 'B', text: "Leave it in the metal container but pull off the foil — an open metal bowl heats food fine." },
      { letter: 'C', text: "Use the metal container but on a low power level, so there isn't enough energy to spark." },
      { letter: 'D', text: "Keep the foil on but press it flat and tight, so there are no sharp edges to arc." },
    ],
    correctAnswer: 'A',
    explanation:
      "Metal in a microwave reflects the microwaves and arcs — visible sparks that can permanently damage the oven and start a fire. The Appliances & Utilities Manual is explicit: no metal containers, no foil, no metal-rimmed dishes. Use ceramic or glass labelled microwave-safe.",
    whyOthersWrong: {
      B: "The metal bowl itself reflects microwaves and arcs, foil or no foil. Only non-metal dishes are safe.",
      C: "Lower power doesn't stop metal arcing — it just sparks a little less. The metal is the problem, not the power level.",
      D: "Flattening the foil reduces sharp-edge sparking only slightly; foil still arcs and can ignite. The rule is no foil at all.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 23,
    title: "Coming Home at 1 AM",
    question:
      "It's around 1 AM and you're back at Izumi after a long evening out. The house is dark and your seven teammates are asleep. How do you come in and get to your room?",
    options: [
      { letter: 'A', text: "Come in quietly, use the least light you need, skip the shared rooms, and go straight to your room." },
      { letter: 'B', text: "Take your shoes off outside, then move through normally — sure footing matters more than being silent." },
      { letter: 'C', text: "Put the hallway light on so you can see and not bump into anything, then switch it off at your door." },
      { letter: 'D', text: "Send the group chat a quick note that you're back, so anyone worried can stop wondering, then settle in." },
    ],
    correctAnswer: 'A',
    explanation:
      "Omoiyari extends to the people you can't see. Your sleeping teammates depend on the quiet of the house. Coming in with care, keeping light and movement to a minimum in shared spaces, and going straight to your room is the late-night form of the consideration that makes shared living work.",
    whyOthersWrong: {
      B: "At 1 AM with seven people asleep, quiet is the whole point. 'Normal' movement and footsteps carry through a thin-walled Machiya.",
      C: "Even a hallway light spills under doors and through gaps and wakes light sleepers. Use a phone torch or the minimum light, not the main lights.",
      D: "A buzzing phone and notification can wake people. Unless someone asked you to check in, slip in quietly rather than messaging at 1 AM.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 24,
    title: "Using the Fire Extinguisher",
    question:
      "You've judged the stovetop fire small enough to fight and pulled the extinguisher from behind the counter. The Emergency & Safety Guide teaches the PASS method. How do you actually use it?",
    options: [
      { letter: 'A', text: "Pull the pin, aim at the base of the flames, squeeze the handle, and sweep side to side." },
      { letter: 'B', text: "Pull the pin, aim into the heart of the flames, squeeze the handle, and hold steady on one spot." },
      { letter: 'C', text: "Point it at the fire, spray in short bursts from a safe distance, and edge closer only if you must." },
      { letter: 'D', text: "Aim high above the fire so the spray falls down across all the flames at once." },
    ],
    correctAnswer: 'A',
    explanation:
      "PASS — Pull the pin, Aim at the base of the fire, Squeeze the handle, Sweep side to side. Aiming at the base is the key: the flames are the symptom, but the burning fuel at the base is the cause, and sweeping spreads coverage across it. Get close enough that the agent reaches the base — usually two to three metres. The extinguishers at Izumi are behind the restaurant counter and at the mid-staircase corner.",
    whyOthersWrong: {
      B: "Aiming into the flames instead of the base leaves the burning fuel untouched, so it reignites — and holding one spot lets the rest keep burning. Sweep across the base.",
      C: "Vague bursts from a distance dissipate before they reach the fire and waste the charge. Get close enough to hit the base directly, and sweep.",
      D: "Spraying high hits smoke and flame, not fuel. The fire feeds from the base — that's where the agent has to land.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 25,
    title: "You Can't Do Your Rota Task Today",
    question:
      "You're unwell and can't complete your assigned cleaning rota task today. What do you do?",
    options: [
      { letter: 'A', text: "Post in the team channel, arrange a swap with a willing teammate, and confirm it with Andrew." },
      { letter: 'B', text: "Message Andrew directly that you can't do it today, and leave it with him to sort out." },
      { letter: 'C', text: "Ask whoever's on tomorrow's rota to cover today, and you'll take their day in return." },
      { letter: 'D', text: "Do the parts you can manage now and leave a note about what's left for whoever's next." },
    ],
    correctAnswer: 'A',
    explanation:
      "The rota is a shared commitment, not a personal to-do list. When you can't do your part, the swap protocol keeps the work done and everyone informed: post in the channel, arrange the swap, and confirm it with Andrew, the rota manager. Three steps that close the gap and keep everyone aligned.",
    whyOthersWrong: {
      B: "Telling Andrew is right, but handing him the whole problem skips your part — finding the swap. Post, arrange, then confirm.",
      C: "A direct swap is good, but an informal side-deal that bypasses the channel and Andrew leaves the rota record wrong and others guessing who's on.",
      D: "Half-doing it still leaves the task unfinished and pushes the rest onto whoever happens to read the note. Arrange a proper swap instead.",
    },
    source: 'Cleaning Manual',
  },
];
