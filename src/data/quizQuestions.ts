import type { QuizQuestion } from '../types/quiz';

export const quizQuestions: QuizQuestion[] = [
  {
    id: 1,
    title: "The Evening After Your Furo Bath",
    question:
      "You've just stepped out of the Furo bath in the evening — relaxed, refreshed, and the last person to bathe today. The wooden tub still holds warm water and the hinoki surface is wet. Before you leave the bath area, what would you do?",
    options: [
      { letter: 'A', text: "Just leave — someone else will clean it tomorrow" },
      { letter: 'B', text: "Drain the tub and wipe the wooden bath dry" },
      { letter: 'C', text: "Refill the tub with fresh water for the next person" },
      { letter: 'D', text: "Cover the tub with the lid and leave the water inside" },
    ],
    correctAnswer: 'B',
    explanation:
      "This is the daily Omoiyari at Izumi. The hinoki wood is alive — left wet overnight, water seeps in, mineral deposits build up, and the wood degrades. Draining and wiping is a two-minute act of care that protects a tub crafted to last decades. The last bather always restores it.",
    whyOthersWrong: {
      A: "Leaving it for the morning isn't 'cleaning later' — it's overnight damage to the wood.",
      C: "The Furo water is drained at the end of the day, never refilled. Each bather showers clean before bathing.",
      D: "Trapped moisture under a lid is exactly what damages the wood over time.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 2,
    title: "When the Ground Begins to Shake",
    question:
      "You're alone in your sleeping room at Izumi, reading. Suddenly the floor shakes. The light fixture sways, and you can hear things rattling in the next room. This is an earthquake. What would your first move be?",
    options: [
      { letter: 'A', text: "Run outside immediately" },
      { letter: 'B', text: "Drop to your hands and knees, take cover under a sturdy table, and hold on until the shaking completely stops" },
      { letter: 'C', text: "Stand in the doorway for stability" },
      { letter: 'D', text: "Open a window to see what's happening outside" },
    ],
    correctAnswer: 'B',
    explanation:
      "Drop, Cover, Hold On is the global standard for earthquake response, and Japan's emergency services teach it explicitly. Falling objects — light fixtures, books, shelving — cause most earthquake injuries indoors, not the building itself. A sturdy table shields your head and core. Wait until the shaking stops before doing anything else.",
    whyOthersWrong: {
      A: "Running outside during shaking is the most dangerous choice — falling roof tiles, glass, and signage cause severe injuries. Wait until the shaking stops, then evacuate calmly.",
      C: "The 'stand in a doorway' advice is outdated. Modern doorways aren't reinforced, and you're exposed to swinging doors and falling debris.",
      D: "Opening a window adds nothing and delays your real response. The window itself can shatter during strong shaking.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 3,
    title: "Setting Your Bags Down",
    question:
      "You arrive at Izumi for the first time after a long journey. Your suitcase is heavy and you want to set it down somewhere safe while you take off your shoes at the Genkan. Where would you place it?",
    options: [
      { letter: 'A', text: "Lean it against the nearest wall — it's out of the way there" },
      { letter: 'B', text: "Lean it against a sliding shoji door so it stays upright" },
      { letter: 'C', text: "Place it on the floor, a small distance away from any wall" },
      { letter: 'D', text: "Stand it upright against the sand-finish wall in the corner" },
    ],
    correctAnswer: 'C',
    explanation:
      "Izumi's walls are finished with jurakukabe — fine coloured sand bound to the surface. The finish is beautiful but cannot be patched. A single scratch from a suitcase corner means the entire wall must be re-skimmed by a craftsperson. Place luggage on the floor with breathing room from any wall.",
    whyOthersWrong: {
      A: "Leaning against any wall risks scratching the sand finish, which is irreparable without a full re-skim.",
      B: "Shoji panels are paper on a wooden lattice. Even a light lean tears the paper.",
      D: "Standing the case against the sand-finish wall is the most damaging option — the corner concentrates pressure on a single point.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 4,
    title: "AEGIS Members Coming for Lunch",
    question:
      "You see in the Teams channel that Watanabe-san, Yamate-san, Saito-san, and Akiyama-san will be coming to Izumi for lunch today. You have no other commitments scheduled. What would you do?",
    options: [
      { letter: 'A', text: "Stay in your sleeping room to give them space — they don't need to see you" },
      { letter: 'B', text: "Go out for the day to give them privacy" },
      { letter: 'C', text: "Be present at Izumi, greet them on arrival, and look for ways to assist" },
      { letter: 'D', text: "Quickly leave for the office before they arrive" },
    ],
    correctAnswer: 'C',
    explanation:
      "Izumi is AEGIS Group's home, and you are their guest. When AEGIS members gather at Izumi, your default — unless you have been excused or are genuinely needed elsewhere — is to be present, greet them with attention, and look for ways to serve. This is the heart of how AIBOS shows up at Izumi.",
    whyOthersWrong: {
      A: "Hiding in your room signals avoidance, not respect. AEGIS members notice when you're not there.",
      B: "Vacating 'for their privacy' treats the visit as something to escape from, when it's something to participate in.",
      D: "Leaving early is avoidance dressed up as politeness. Your presence matters more than your absence ever will.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 5,
    title: "Passing Through a Shoji",
    question:
      "You need to move from the hallway into the Floor 2 living area. There's a shoji panel between the two spaces. How would you slide it open?",
    options: [
      { letter: 'A', text: "Push firmly on the paper to slide it open" },
      { letter: 'B', text: "Grip the wooden frame only, and slide it gently" },
      { letter: 'C', text: "Tap the corner so the panel slides on its own momentum" },
      { letter: 'D', text: "Pull on the paper edge" },
    ],
    correctAnswer: 'B',
    explanation:
      "Shoji panels are washi paper stretched over a wooden lattice frame. The paper is structural but fragile — fingertips push through it easily, and once torn, the panel must be re-papered by a craftsperson. Always grip the wooden frame to slide.",
    whyOthersWrong: {
      A: "Pushing the paper directly is exactly how shoji get punctured. Even gentle pressure stretches and weakens the paper over time.",
      C: "Tapping a corner can crack the lattice joinery — traditional shoji frames aren't built for impact.",
      D: "The paper edge tears almost on touch. Pulling it is the fastest way to damage the panel.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 6,
    title: "Walking Past the Kitchen",
    question:
      "You're walking through the house in the afternoon. As you pass the kitchen, you notice Megu-san is alone, preparing lunch for everyone. You're not currently in the middle of anything urgent. How would you approach this situation?",
    options: [
      { letter: 'A', text: "Quietly leave so as not to disturb her" },
      { letter: 'B', text: "Sit at the dining table and wait for the food to be ready" },
      { letter: 'C', text: "Approach, greet her, and ask where you can help" },
      { letter: 'D', text: "Take a photo and offer praise from a distance" },
    ],
    correctAnswer: 'C',
    explanation:
      "When an AEGIS member is working — especially cooking, which is service to the whole house — standing passively or retreating misreads the moment. Approach, greet warmly, and offer help. Even if there's nothing for you to do, the offer alone is the gesture that matters.",
    whyOthersWrong: {
      A: "'Not disturbing' sounds polite but feels indifferent when someone is serving you.",
      B: "Sitting and waiting positions you as someone to be served, not as a guest in someone's home.",
      D: "Documentation and praise from a distance is observation, not participation.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 7,
    title: "Cleaning a Washroom on Floor 2",
    question:
      "It's your day to clean the washroom on Floor 2 according to the rota. The Three Principles in the Cleaning Manual govern the order of work. In what sequence would you approach the cleaning?",
    options: [
      { letter: 'A', text: "Toilet first, then sink, then floor" },
      { letter: 'B', text: "Floor first, then sink, then toilet" },
      { letter: 'C', text: "Top to bottom; dry surfaces before wet; clean areas before dirty" },
      { letter: 'D', text: "In any order, as long as everything gets done" },
    ],
    correctAnswer: 'C',
    explanation:
      "The Three Principles — Top → Bottom, Dry → Wet, Clean → Dirty — exist because cleaning is sequential. Mop the floor first and dust falls on it. Clean the toilet before the sink, and your sponge contaminates clean surfaces. The principles let you adapt to any space.",
    whyOthersWrong: {
      A: "This is a specific ordering without an underlying principle. It might be right sometimes, wrong other times.",
      B: "Floor before sink means the sink dripping will re-soil what you just cleaned.",
      D: "'Any order' produces the inversion the principles are designed to prevent. Cleaning order is what separates a clean room from a re-contaminated one.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 8,
    title: "Stubborn Residue on the Furo Wood",
    question:
      "During the weekly Furo Bath deep clean, you encounter some stubborn residue that won't easily wipe away with the wood-treating solution. You want to be thorough. Which of these approaches would you absolutely NEVER take?",
    options: [
      { letter: 'A', text: "Apply more of the wood-treating solution and let it soak a little longer" },
      { letter: 'B', text: "Use bleach to disinfect the area thoroughly" },
      { letter: 'C', text: "Wipe more carefully in the direction of the wood grain" },
      { letter: 'D', text: "Pause and ask Miki-san or Megu-san for guidance" },
    ],
    correctAnswer: 'B',
    explanation:
      "Bleach destroys hinoki wood. It strips the natural oils, opens the grain, leaves white patches, and within weeks the bath needs to be replaced. There is no recovering from bleach on traditional Japanese bath wood. When in doubt: more solution, more patience, or ask.",
    whyOthersWrong: {
      A: "More solution and soak time is the correct escalation. This is a fine action.",
      C: "Following the grain is gentle and effective. This is a fine action.",
      D: "Asking AEGIS members is always appropriate when uncertain about traditional surfaces. This is a fine action.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 9,
    title: "Smoke in the Kitchen",
    question:
      "You're upstairs in your room when you smell smoke. You go downstairs and realise there's a fire in the kitchen — small, but actively burning. Several AEGIS members, including Saito-san and Yamate-san, are in the living room. This has happened — what would be your next step?",
    options: [
      { letter: 'A', text: "Try to put it out yourself first, then alert others if it spreads" },
      { letter: 'B', text: "Shout KAJI! (火事!), close doors behind you to slow the spread, evacuate everyone to the gathering point, and call 119 once outside" },
      { letter: 'C', text: "Take photos to document the situation, then evacuate" },
      { letter: 'D', text: "Pack your valuables and important documents, then leave" },
    ],
    correctAnswer: 'B',
    explanation:
      "KAJI! (火事) is the Japanese word for fire — shouting it ensures everyone in the house responds, including AEGIS members and any Japanese-speaking visitors. Closing doors slows oxygen and limits the fire's spread. Call 119 from outside, where you're safe. This sequence — alert, contain, evacuate, then call — is the protocol the Emergency & Safety Guide spells out.",
    whyOthersWrong: {
      A: "Without firefighting equipment and training, attacking a fire delays the call to 119 and risks your life. Fires can grow from manageable to lethal in under a minute.",
      C: "Lives over documentation, always. Photos can be taken from outside if at all.",
      D: "Valuables are replaceable. People are not.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 10,
    title: "Shutting Down the Gas Stove",
    question:
      "You've finished cooking your lunch on the gas stove. The flame is still burning under the pan you've just removed. What would be the proper shut-down sequence?",
    options: [
      { letter: 'A', text: "Walk away — the stove turns off automatically after a few minutes" },
      { letter: 'B', text: "Turn each knob clockwise back to the OFF (止) position until it clicks; confirm every knob is at OFF" },
      { letter: 'C', text: "Cover the burner with a metal lid to extinguish the flame" },
      { letter: 'D', text: "Pour a small amount of water over the burner to be safe" },
    ],
    correctAnswer: 'B',
    explanation:
      "Japanese gas stoves do not shut off automatically. The kanji 止 means 'stop' — you turn the knob clockwise until you feel the click that confirms the gas valve is closed. Then visually check that all knobs are at OFF. A burner left on is both a fire risk and a gas-leak risk.",
    whyOthersWrong: {
      A: "The stove will keep burning for hours if left on. There is no auto-off feature.",
      C: "A metal lid won't reliably extinguish a gas flame and may trap gas if the burner is still feeding it.",
      D: "Water on a hot gas burner can crack the burner head and create steam or grease splatter. Never use water.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 11,
    title: "The AC Remote You Can't Read",
    question:
      "Your sleeping room is too warm. The AC remote on the wall has buttons labelled with kanji, none of which you recognise. What would your first move be?",
    options: [
      { letter: 'A', text: "Press buttons at random until something changes" },
      { letter: 'B', text: "Refer to the Appliances & Utilities Manual to identify the mode buttons — 冷房 = Cooling, 暖房 = Heating — and select cooling" },
      { letter: 'C', text: "Turn the power off and on repeatedly, hoping it resets to a default" },
      { letter: 'D', text: "Give up and open the windows instead" },
    ],
    correctAnswer: 'B',
    explanation:
      "The Appliances & Utilities Manual maps every kanji you'll encounter — 冷房 (cooling), 暖房 (heating), 運転 (on), 停止 (off), and more. This is exactly the kind of moment the manual was written for. Open it, find the AC section, set the mode you need.",
    whyOthersWrong: {
      A: "Random pressing can switch the AC into the wrong mode — heating instead of cooling — or activate timer functions you can't undo.",
      C: "Power-cycling resets nothing meaningful and doesn't teach you the buttons. The next time you need the AC, you'll still be stuck.",
      D: "Open windows in summer Yokkaichi will make the room hotter and more humid, not cooler.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 12,
    title: "Tomorrow's Lunch Menu Is Being Planned",
    question:
      "You have a peanut allergy. You overhear your cooking pair planning tomorrow's lunch menu in the living area. You haven't mentioned the allergy yet. When would you tell them?",
    options: [
      { letter: 'A', text: "Right now — before the menu is finalised, as an act of Omoiyari toward those who will cook" },
      { letter: 'B', text: "Only if peanuts appear in the meal as it's being prepared" },
      { letter: 'C', text: "When the meal is served and you can see what was used" },
      { letter: 'D', text: "Never — managing your own allergy is your responsibility alone" },
    ],
    correctAnswer: 'A',
    explanation:
      "Omoiyari (思いやり) is consideration that arrives early — before someone has to redo work. Telling your cooking pair after they've planned and shopped is consideration delivered too late. Telling them now lets them plan around it cleanly, and that planning is itself a small gift to them.",
    whyOthersWrong: {
      B: "Mid-cooking course corrections waste ingredients and time, and put the cooks on the back foot.",
      C: "At the table is too late. The meal is already prepared. The cooks would have to remake it.",
      D: "Allergies that can put you in hospital aren't an individual matter — they're a community concern. Concealing them is a risk to others, not just yourself.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 13,
    title: "Calling for an Ambulance",
    question:
      "A teammate has suddenly collapsed in the living area. They're conscious but in clear distress. You need to call 119 immediately. What would you say first when the operator answers?",
    options: [
      { letter: 'A', text: "Just describe the address in English" },
      { letter: 'B', text: "Kyuukyuu desu (救急です) — meaning 'I need an ambulance'" },
      { letter: 'C', text: "Hang up if no one answers in English" },
      { letter: 'D', text: "Hello, help please" },
    ],
    correctAnswer: 'B',
    explanation:
      "Kyuukyuu desu (救急です) literally means 'It's an emergency / I need an ambulance.' Saying it first signals to the 119 operator immediately which service you need — 119 in Japan handles both fire and ambulance calls. Once they know you need an ambulance, they can hand you off to an English-speaking line. Opening in Japanese makes everything faster.",
    whyOthersWrong: {
      A: "Starting in English without the trigger word delays dispatch. The operator may not be sure if you need fire, police, or ambulance.",
      C: "Never hang up on emergency services. They will trace and call back, but precious seconds are lost.",
      D: "Polite English is fine but doesn't tell the operator which service you need. 'Kyuukyuu desu' does.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 14,
    title: "Stepping Out for a Walk",
    question:
      "It's a warm afternoon and you decide to take a walk around the neighbourhood for an hour or so. The rest of the team is at the office or running errands. According to the Communication & Whereabouts section of the Emergency & Safety Guide, what would you do before you leave Izumi?",
    options: [
      { letter: 'A', text: "Just leave — you'll be back in an hour" },
      { letter: 'B', text: "Update the designated Teams channel so the Japan team and your colleagues know your whereabouts" },
      { letter: 'C', text: "Tell only one teammate verbally" },
      { letter: 'D', text: "Leave a note on the kitchen counter" },
    ],
    correctAnswer: 'B',
    explanation:
      "If something happens to you — you're injured, lost, or have a medical issue — your team needs to know roughly where to look. A Teams channel update is the agreed-upon record. The Japan team is your first point of contact for issues; them not knowing where you are makes their job impossible.",
    whyOthersWrong: {
      A: "'Just leaving' is invisible to anyone who needs to find you. If you're not back in an hour, nobody knows where to look.",
      C: "A single verbal mention to one person isn't a record. That person may be unreachable, asleep, or away from their phone.",
      D: "A note in the kitchen is invisible to people who aren't at Izumi — including the Japan team, who would be your first call in an emergency.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 15,
    title: "Plugging In Your Hair Dryer",
    question:
      "You unpack and find the hair dryer you brought from Uganda. It's a 240V appliance. You look at the Izumi socket — Type A, 100V. You're tempted to just plug it in with a travel adapter. What would you do?",
    options: [
      { letter: 'A', text: "Plug it in with a socket adapter and use it normally" },
      { letter: 'B', text: "Do not use it — Uganda hair dryers are typically 240V only and will be damaged at Japan's 100V; use a 100V appliance instead, or a step-up transformer" },
      { letter: 'C', text: "Try it briefly; if it doesn't catch fire, it's fine" },
      { letter: 'D', text: "Plug it in for short bursts of 30 seconds at a time" },
    ],
    correctAnswer: 'B',
    explanation:
      "Voltage and socket shape are different things. A socket adapter only changes the plug shape, not the voltage. A 240V appliance plugged into 100V will run weakly, overheat the motor, and burn out — often within minutes. The only safe options are: buy a 100V hair dryer in Japan (cheap at any electronics store), or use a step-up transformer rated for the appliance's wattage.",
    whyOthersWrong: {
      A: "An adapter doesn't change voltage — only plug shape. Burning out the motor is the likely outcome.",
      C: "'Doesn't catch fire' isn't the only failure mode. Internal damage from undervoltage is invisible and irreversible.",
      D: "Short bursts don't avoid the voltage mismatch — they just delay the damage by a few cycles. The appliance will still die.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 16,
    title: "Drying Off at the Smart Toilet",
    question:
      "You've finished using the smart toilet's wash function and want to dry off using the built-in dryer instead of reaching for toilet paper. The control panel beside the seat has four kanji-labelled buttons: おしり, ビデ, 停止, 乾燥. Which one would you press?",
    options: [
      { letter: 'A', text: "おしり (rear wash)" },
      { letter: 'B', text: "ビデ (front wash)" },
      { letter: 'C', text: "停止 (stop)" },
      { letter: 'D', text: "乾燥 (dry)" },
    ],
    correctAnswer: 'D',
    explanation:
      "乾燥 means 'dry' in Japanese — it activates the warm-air dryer on smart toilets. The Appliances & Utilities Manual lists each of the four common buttons so you don't have to guess: おしり (rear wash), ビデ (front wash), 停止 (stop), 乾燥 (dry).",
    whyOthersWrong: {
      A: "おしり means 'rear' — this starts the rear-wash bidet function, not the dryer.",
      B: "ビデ means 'bidet' (front wash) — also a wash function, not the dryer.",
      C: "停止 means 'stop' — this halts whatever function is running, so pressing it before drying would do nothing useful.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 17,
    title: "Setting the Water Heater",
    question:
      "You're filling the Furo bath for the evening soak. You glance at the water heater control panel and notice the temperature is set to 50°C. The Appliances & Utilities Manual gives specific guidance on water heater settings. What would you do?",
    options: [
      { letter: 'A', text: "Leave it at 50°C — hotter water feels more relaxing" },
      { letter: 'B', text: "Lower it — the manual states the water heater should never exceed 48°C, and the Furo bath is best at around 42°C" },
      { letter: 'C', text: "Lower it to 30°C to be safe" },
      { letter: 'D', text: "Raise it to 60°C for thorough sanitation" },
    ],
    correctAnswer: 'B',
    explanation:
      "The Appliances & Utilities Manual sets a hard ceiling of 48°C on the water heater and recommends around 42°C for the Furo bath — comfortable, hot enough for the traditional soak experience, but safe for skin and for the hinoki wood. Higher temperatures risk scalding and accelerate damage to the bath wood over time.",
    whyOthersWrong: {
      A: "50°C exceeds the manual's maximum of 48°C. Even brief contact can cause scalding, and prolonged exposure to higher temperatures degrades the hinoki wood faster.",
      C: "30°C is too cool for the traditional Furo soak experience — the body doesn't reach the warming threshold the bath is designed for.",
      D: "60°C is dangerously hot — it can cause serious burns and severely damages the hinoki wood.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 18,
    title: "A Faint Smell of Gas in the Kitchen",
    question:
      "You walk into the kitchen one morning and notice a faint but unmistakable smell of gas. The room is dim and no one else is around. The first thing you'd be tempted to do is switch on the light to see better. What would you actually do?",
    options: [
      { letter: 'A', text: "Switch on the light to see better, then investigate the source" },
      { letter: 'B', text: "Do NOT operate any electrical switches; open windows and doors for ventilation; leave the house; call the Japan team and the gas emergency number (0120-594-594) from outside" },
      { letter: 'C', text: "Light a match to confirm whether it's really gas" },
      { letter: 'D', text: "Spray air freshener and continue with your morning" },
    ],
    correctAnswer: 'B',
    explanation:
      "Any electrical switch — even a wall light or a fan — can generate a small spark that ignites accumulated gas, causing an explosion. The protocol from the Emergency & Safety Guide is strict and ordered: do not touch switches, ventilate by opening windows and doors, evacuate the house, and call the Japan team and the gas emergency line (0120-594-594) from outside, never from inside.",
    whyOthersWrong: {
      A: "A light switch can spark. This is the single most common cause of gas explosions in homes. Never touch switches when you smell gas.",
      C: "A match is an open flame — exactly what you must not introduce. Gas leaks are confirmed by smell, not by flame.",
      D: "Air freshener doesn't remove gas, and the spray itself may be flammable. Ignoring the smell is the worst response.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 19,
    title: "A Teammate Feeling Dizzy on a Hot Day",
    question:
      "It's mid-August in Yokkaichi and you and a teammate are walking back from the office. They start sweating heavily, look pale, and say they feel dizzy and nauseous. The Emergency & Safety Guide describes this condition. What is it, and how would you respond first?",
    options: [
      { letter: 'A', text: "Common cold — get them to drink hot tea" },
      { letter: 'B', text: "Heatstroke (熱中症 / Netchuushou) — move them to shade or a cool indoor space immediately, give cool water and electrolytes, cool the neck and underarms with a damp cloth, and seek medical help if it doesn't improve quickly" },
      { letter: 'C', text: "Hunger — find a restaurant immediately" },
      { letter: 'D', text: "Tiredness — encourage them to keep walking to push through it" },
    ],
    correctAnswer: 'B',
    explanation:
      "Heatstroke (熱中症, Netchuushou) is a real and serious risk in Japanese summer, particularly humid Yokkaichi summers. The Emergency & Safety Guide lists the signs — heavy sweating, pallor, dizziness, nausea — and the response: cool environment, hydration with electrolytes, cooling on the neck and underarms (where large blood vessels run close to the skin), and medical help if symptoms persist or worsen.",
    whyOthersWrong: {
      A: "A cold doesn't present with heavy sweating, pallor, and dizziness during summer heat. And hot tea would worsen the body's heat load.",
      C: "Hunger doesn't cause this specific pattern of symptoms. Heat is the trigger.",
      D: "Pushing through heatstroke is dangerous — it can escalate quickly to confusion, loss of consciousness, and organ damage. Cooling and rest are non-negotiable.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 20,
    title: "Spilled Water on the Tatami",
    question:
      "You're sitting in the Floor 2 living area with a cup of water. As you set the cup down, it tips and water spills onto the tatami mat. This has happened — what would be your next step?",
    options: [
      { letter: 'A', text: "Leave it — tatami dries on its own and it's only water" },
      { letter: 'B', text: "Blot the water immediately with a clean dry cloth, pressing gently and not rubbing; then air-dry the area or use a fan" },
      { letter: 'C', text: "Pour more water on it to spread it evenly and dilute" },
      { letter: 'D', text: "Use a vacuum cleaner on full suction to extract the water" },
    ],
    correctAnswer: 'B',
    explanation:
      "Tatami is woven igusa (rush) straw. Water seeps in, and if left wet, the mat develops mould and discolouration in days, with a smell that's hard to remove. The Cleaning Manual prescribes blotting (not rubbing — rubbing damages the weave) immediately with a dry cloth, then air-drying. Acting in the first minute matters far more than how you act in the next hour.",
    whyOthersWrong: {
      A: "Tatami trapped moisture is exactly what causes mould and irreversible discolouration. 'It's only water' is the most expensive sentence in this scenario.",
      C: "Spreading water makes a small problem into a large one. The damage zone grows with the wet area.",
      D: "Strong vacuum suction damages tatami weaving — pulling out fibres and breaking the surface. Vacuum tatami only with the brush attachment and gentle suction.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 21,
    title: "Your Sleeping Room After Waking Up",
    question:
      "It's morning and you've just woken up. Your futon is still spread out on the floor with the bedding on top. According to the Cleaning Manual's sleeping room procedure and the morning structure in the Welcome Guide, what would you do before leaving your sleeping room?",
    options: [
      { letter: 'A', text: "Leave it as it is — you'll deal with it in the evening before bed" },
      { letter: 'B', text: "Fold the bedding, fold the futon, and stow them neatly in the closet" },
      { letter: 'C', text: "Shake the futon out the window to air it" },
      { letter: 'D', text: "Throw the futon in the washing machine" },
    ],
    correctAnswer: 'B',
    explanation:
      "Folding and stowing the futon every morning is part of the daily rhythm at Izumi. It airs the bedding (which prevents mould from body moisture), turns the sleeping room into a usable daytime space, and signals respect for the house. The folded futon goes into the closet (oshiire) so the room is open and clean.",
    whyOthersWrong: {
      A: "An unmade futon left out all day collects dust, traps moisture, and turns the sleeping room into a permanently 'bedroom-only' space. It also signals carelessness.",
      C: "Shaking bedding out a window scatters dust and lint outside, which is impolite to neighbours and not allowed in dense Japanese residential areas.",
      D: "Futons are not machine-washable. Washing destroys the cotton batting and the cover stitching. Air them out instead.",
    },
    source: 'Cleaning Manual',
  },
  {
    id: 22,
    title: "Reheating Leftovers in the Microwave",
    question:
      "You want to reheat yesterday's lunch using the kitchen microwave. The food is in a metal container, with a few pieces wrapped in aluminium foil. You're in a hurry. What would you do?",
    options: [
      { letter: 'A', text: "Microwave it as is — 30 seconds shouldn't matter" },
      { letter: 'B', text: "Transfer the food to a microwave-safe ceramic or glass container, and remove all foil before microwaving" },
      { letter: 'C', text: "Add water to the metal container so it microwaves evenly" },
      { letter: 'D', text: "Wrap the whole metal container in more foil for protection" },
    ],
    correctAnswer: 'B',
    explanation:
      "Metal in a microwave reflects the microwaves and causes arcing — visible sparks that can damage the microwave permanently and start a fire. The Appliances & Utilities Manual is explicit: no metal containers, no foil, no metallic-rimmed dishes. Use ceramic or glass containers labelled microwave-safe.",
    whyOthersWrong: {
      A: "Even 30 seconds can cause sparking and fire. There is no 'short enough' duration for metal in a microwave.",
      C: "Adding water to a metal container doesn't change the fact that metal is in the microwave. The arcing problem remains.",
      D: "More foil amplifies the problem. You'd be wrapping a hazard in more hazard.",
    },
    source: 'Appliances & Utilities Manual',
  },
  {
    id: 23,
    title: "Returning to Izumi Late at Night",
    question:
      "It's late — around 1 AM — and you're returning to Izumi after a long evening out. The house is quiet and your teammates are likely asleep. How would you enter and move through the house?",
    options: [
      { letter: 'A', text: "Walk in normally — it's your home too" },
      { letter: 'B', text: "Enter quietly, move with care, use only the minimum light you need, avoid the kitchen and other shared areas unless necessary, and go straight to your sleeping room" },
      { letter: 'C', text: "Turn on all the lights so you can see clearly" },
      { letter: 'D', text: "Call out to check if anyone is still awake to chat" },
    ],
    correctAnswer: 'B',
    explanation:
      "Omoiyari extends to the people you can't see. Your sleeping teammates depend on the quiet of the house. Entering with care, minimising light and movement in shared spaces, and going straight to your room is the late-night expression of consideration that makes shared living work.",
    whyOthersWrong: {
      A: "Walking in normally is fine at 6 PM. At 1 AM, with seven other people sleeping, 'normally' is loud.",
      C: "Lights flooding the house wake people through cracks under doors, especially in a traditional house with thin walls. Minimum light only.",
      D: "Calling out at 1 AM wakes everyone — defeating the entire point of being considerate.",
    },
    source: 'Welcome Guide',
  },
  {
    id: 24,
    title: "Using the Fire Extinguisher",
    question:
      "A small fire has broken out in the kitchen and you've grabbed the fire extinguisher from behind the restaurant counter. The Emergency & Safety Guide describes the PASS technique for using a fire extinguisher. What does PASS stand for?",
    options: [
      { letter: 'A', text: "Push (the lever), Aim (high), Slam (the trigger), Spray (everywhere)" },
      { letter: 'B', text: "Pull (the pin), Aim (at the base of the fire), Squeeze (the handle), Sweep (side to side)" },
      { letter: 'C', text: "Pour (the contents), Apply (to the flames), Spread (evenly), Stop (when empty)" },
      { letter: 'D', text: "Prepare (yourself), Approach (slowly), Stand (back), Spray (at the top)" },
    ],
    correctAnswer: 'B',
    explanation:
      "PASS — Pull the pin, Aim at the base of the fire (not the flames themselves), Squeeze the handle, Sweep the spray side to side — is the universal extinguisher technique. Aiming at the base is critical: the flames are a symptom; the fuel at the base is the cause. Sweeping ensures coverage. The Emergency & Safety Guide notes the extinguishers are mounted behind the restaurant counter and at the mid-staircase corner.",
    whyOthersWrong: {
      A: "Aiming high at the flames wastes the extinguisher's contents. The fire reignites from the unaffected fuel at the base.",
      C: "Extinguishers don't 'pour' — they spray under pressure. And 'spread evenly' isn't a technique; targeted sweeping is.",
      D: "Standing too far back means the spray dissipates before reaching the fire. Approach close enough that the spray hits the base directly — typically 2 to 3 metres.",
    },
    source: 'Emergency & Safety Guide',
  },
  {
    id: 25,
    title: "Unable to Do Your Rota Task Today",
    question:
      "You're feeling unwell and won't be able to complete your assigned cleaning rota task today. What would you do?",
    options: [
      { letter: 'A', text: "Just skip it — someone else will eventually notice and take care of it" },
      { letter: 'B', text: "Post in the Teams channel explaining the situation, find a willing teammate to swap with, and confirm the swap with Andrew (the rota manager)" },
      { letter: 'C', text: "Leave a note in the kitchen explaining you couldn't do it" },
      { letter: 'D', text: "Wait until tomorrow and quietly do double the task to make up for it" },
    ],
    correctAnswer: 'B',
    explanation:
      "The rota is a shared commitment, not an individual task list. When you can't fulfil your part, the swap protocol exists so the work still gets done and the team knows. The three steps — post in Teams, arrange the swap, inform Andrew — keep everyone aligned and prevent silent gaps.",
    whyOthersWrong: {
      A: "Silence about a missed task pushes work onto whoever notices first, often unfairly. The whole point of the rota is that everyone knows where everyone stands.",
      C: "A kitchen note is invisible to teammates who don't pass through the kitchen, and to Andrew if he's not at Izumi that day. Use the agreed channel.",
      D: "'Doing double tomorrow' leaves today's task undone. Hygiene and house upkeep don't pause for personal accounting.",
    },
    source: 'Cleaning Manual',
  },
];
