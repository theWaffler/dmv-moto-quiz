// =======================================
// CONFIG
// =======================================

const PASS_THRESHOLD = 0.8;   // 80% required to pass in Test Mode
const EXAM_LENGTH    = 25;    // DMV exam length
const MODE_TEST      = "test";
const MODE_STUDY     = "study";

const ALL_QUESTIONS = [
  {
       question: "A rider must ______ when mounting and dismounting a motorcycle.",
    options: [
      "Squeeze the front brake",
      "Squeeze the clutch",
      "Shift gears",
      "Roll on the throttle"
    ],
    correctIndex: 0,
    explanation: "Squeezing the front brake keeps the motorcycle from rolling while you get on or off."
  },
  {
    question: "Why is it good practice to squeeze the clutch before starting a motorcycle?",
    options: [
      "In case you want to shift gears",
      "To keep the motorcycle from lurching forward if it is in gear",
      "So the engine will start",
      "To keep the engine from over-revving"
    ],
    correctIndex: 1,
    explanation: "If the bike is in gear, starting without the clutch can make it jump forward."
  },
  {
    question: "When looking through a curve, what should the rider be looking for?",
    options: [
      "Surface conditions such as sand or gravel",
      "Whether the curve radius is increasing or decreasing",
      "Oncoming vehicles that may be in your lane",
      "Any or all of the above"
    ],
    correctIndex: 3,
    explanation: "You scan for road surface, curve shape, traffic, and other hazards together."
  },
  {
    question: "Is it okay not to dim your headlights if an oncoming driver does not dim theirs?",
    options: [
      "Yes, they need to know they are blinding you",
      "Yes, until they dim theirs",
      "No, now there are two blind drivers",
      "No, but you should honk your horn"
    ],
    correctIndex: 2,
    explanation: "Two drivers with high beams on just doubles the risk. Don’t escalate."
  },
  {
    question: "Central clear vision is approximately:",
    options: [
      "A 3° cone",
      "A 10° cone",
      "A 45° cone",
      "180°"
    ],
    correctIndex: 0,
    explanation: "Central sharp vision is only about a 3° cone; the rest is peripheral."
  },
  {
    question: "Most single-vehicle motorcycle crashes occur at intersections and ______.",
    options: [
      "Stop lights",
      "Bus stops",
      "Curves",
      "Hills"
    ],
    correctIndex: 2,
    explanation: "Single-vehicle motorcycle crashes usually happen in curves."
  },
  {
    question: "What are possible positions of a motorcycle fuel valve on bikes equipped with one?",
    options: [
      "Off",
      "On",
      "Reserve",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Carbureted motorcycles typically have Off, On, and Reserve positions."
  },
  {
    question: "To rev the engine means:",
    options: [
      "Cause the engine RPM to decrease",
      "Cause the engine RPM to increase",
      "Shut off the engine",
      "Start the engine"
    ],
    correctIndex: 1,
    explanation: "Revving the engine means increasing RPM with the throttle."
  },
  {
    question: "Gauntlet gloves:",
    options: [
      "Extend past the wrist",
      "Prevent cold air from going up the sleeves",
      "Are typically worn in colder weather",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Gauntlet gloves extend past the wrist and block cold air, making them good in cold weather."
  },
  {
    question: "The motorcycle throttle is operated by:",
    options: [
      "Pushing it in",
      "Pulling it out",
      "Twisting it toward the rider",
      "Twisting it away from the rider"
    ],
    correctIndex: 2,
    explanation: "Rolling the throttle toward you increases engine RPM."
  },
  {
    question: "Squaring the handlebars means:",
    options: [
      "Handlebars are centered and not turned left or right",
      "Handlebars are turned right",
      "Handlebars are turned left",
      "None of the above"
    ],
    correctIndex: 0,
    explanation: "Squared bars are straight ahead, which is the correct position for straight-line quick stops."
  },
  {
    question: "In the T-CLOCS inspection, the “O” stands for:",
    options: [
      "Objects",
      "Observe",
      "Oil",
      "Okay"
    ],
    correctIndex: 2,
    explanation: "T-CLOCS is a pre-ride checklist; O = Oil and other fluids."
  },
  {
    question: "How can a rider reduce total stopping distance?",
    options: [
      "Covering the controls",
      "Using both brakes progressively without skidding",
      "Practicing braking skills",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Reducing reaction time and using proper braking technique shortens total stopping distance."
  },
  {
    question: "The most common scenario in an intersection crash involving a motorcycle and another vehicle is:",
    options: [
      "A right-turning vehicle in front of the motorcycle",
      "A left-turning vehicle in front of the motorcycle",
      "A vehicle hitting the motorcycle from behind",
      "A head-on collision"
    ],
    correctIndex: 1,
    explanation: "Most multi-vehicle crashes are caused by a car turning left in front of a motorcycle."
  },
  {
    question: "In a quick stop on a surface with good traction, a rear-tire skid could result in:",
    options: [
      "A high-side crash",
      "A low-side crash",
      "A stoppie",
      "A wheelie"
    ],
    correctIndex: 0,
    explanation: "Releasing a misaligned locked rear wheel can violently snap the bike upright, causing a high-side."
  },
  {
    question: "How does riding gear make a rider more comfortable?",
    options: [
      "Allows for good airflow when needed",
      "Keeps the rider warm when needed",
      "Keeps out rain, debris, and cold when needed",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Proper gear regulates temperature and keeps you dry so you can stay focused."
  },
  {
    question: "When using turn signals on a motorcycle, an important thing to remember is:",
    options: [
      "To remember to cancel it",
      "Which direction to push the thumb",
      "To remember to use it",
      "Where the switch is located"
    ],
    correctIndex: 0,
    explanation: "Most bikes don’t have self-canceling signals; forgetting them can mislead other drivers."
  },
  {
    question: "When should a rider begin to turn their head for cornering?",
    options: [
      "At the beginning of the corner",
      "Before they begin to lean",
      "Halfway through the corner",
      "At the end of the turn"
    ],
    correctIndex: 1,
    explanation: "You turn your head and look through the turn before leaning the bike."
  },
  {
    question: "Where should a rider look while swerving?",
    options: [
      "Straight ahead",
      "At the obstacle they are trying to avoid",
      "Through the escape path",
      "At the ground"
    ],
    correctIndex: 2,
    explanation: "If you look at the obstacle, you tend to steer into it. Look through the escape path instead."
  },
  {
    question: "What is the quickest way to stop in a curve?",
    options: [
      "Gradually apply both brakes while staying leaned",
      "Straighten the motorcycle and then brake hard in a straight line",
      "Use only the front brake",
      "Use only the rear brake"
    ],
    correctIndex: 1,
    explanation: "Standing the bike up and then braking in a straight line gives the shortest stop."
  },
  {
    question: "What should you do if you see a deer on the side of the road?",
    options: [
      "Slow down immediately",
      "Steer away from the deer",
      "Steer toward the deer",
      "Honk your horn"
    ],
    correctIndex: 0,
    explanation: "Deer are unpredictable. Slowing immediately reduces impact risk."
  },
  {
    question: "Which safety standard designators might be found on motorcycle helmets?",
    options: [
      "DOT",
      "Snell",
      "ECE",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "DOT is the basic U.S. standard; Snell and ECE are additional common standards."
  },
  {
    question: "Which type of helmet comes off more frequently than any other type in crashes?",
    options: [
      "Modular helmet",
      "Three-quarter helmet",
      "Half-shell helmet",
      "Full-face helmet"
    ],
    correctIndex: 2,
    explanation: "Half-shell helmets offer the least coverage and are more likely to come off in a crash."
  },
  {
    question: "In a crash, the single biggest point of impact on a rider’s head is the:",
    options: [
      "Forehead",
      "Chin",
      "Temple",
      "Back of the head"
    ],
    correctIndex: 1,
    explanation: "NHTSA crash data shows about one-third of impacts are to the chin area."
  },
  {
    question: "What is the primary purpose of the outer shell of a motorcycle helmet?",
    options: [
      "To provide comfort",
      "To resist penetration and disperse energy",
      "To make it fit well",
      "To make a fashion statement"
    ],
    correctIndex: 1,
    explanation: "The outer shell distributes impact force and resists penetration."
  },
  {
    question: "At night or in poor visibility, your face shield or goggles should be:",
    options: [
      "Light tinted",
      "Dark tinted",
      "Yellow or clear",
      "Removed"
    ],
    correctIndex: 2,
    explanation: "Dark tints reduce what you can see; yellow or clear lenses are recommended in low visibility."
  },
  {
    question: "The purpose of motorcycle gloves is to:",
    options: [
      "Provide protection against debris",
      "Provide warmth",
      "Provide grip",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Good gloves combine warmth, abrasion resistance, and good grip."
  },
  {
    question: "When crossing an obstacle, the rider should look:",
    options: [
      "Down at the road in front of the tire",
      "At the obstacle",
      "Straight ahead",
      "Up at the sky"
    ],
    correctIndex: 2,
    explanation: "Looking straight ahead helps the bike track straight over the obstacle."
  },
  {
    question: "Right before front-tire contact with an obstacle, the rider should:",
    options: [
      "Roll on or blip the throttle",
      "Roll off the throttle",
      "Apply the front brake",
      "Apply the rear brake"
    ],
    correctIndex: 0,
    explanation: "A small throttle blip lightens the front end and helps the tire climb the obstacle."
  },
  {
    question: "When riding in the rain, the rider should:",
    options: [
      "Predict less traction",
      "Ride in the tracks of the vehicle ahead",
      "Reduce speed and increase following distance",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Rain reduces traction, especially early on; slow down and give yourself more space."
  },
  {
    question: "Proper posture includes having the right wrist:",
    options: [
      "Higher than the knuckles",
      "Flat or even with the knuckles",
      "Lower than the knuckles",
      "In any comfortable position"
    ],
    correctIndex: 1,
    explanation: "A flat wrist angle lets you reach the brake lever easily without rolling on extra throttle."
  },
  {
    question: "On a cruiser-type motorcycle, about how much of the total stopping power is provided by the front brake?",
    options: [
      "30%",
      "50%",
      "70%",
      "100%"
    ],
    correctIndex: 2,
    explanation: "On many cruisers, roughly 70% of braking force comes from the front brake."
  },
  {
    question: "On a sport bike, approximately what percentage of total stopping power is provided by the rear brake?",
    options: [
      "10%",
      "30%",
      "50%",
      "80%"
    ],
    correctIndex: 0,
    explanation: "Sport bikes rely heavily on the front brake; the rear may provide only about 10%."
  },
  {
    question: "The tachometer on a motorcycle shows:",
    options: [
      "Road speed in miles per hour",
      "Gear position",
      "Engine speed in rotations per minute",
      "Miles driven"
    ],
    correctIndex: 2,
    explanation: "The tachometer measures engine RPM."
  },
  {
    question: "When riding in a group, the inexperienced rider is usually placed:",
    options: [
      "At the tail end of the group",
      "In front of the group",
      "In the middle of the group",
      "Directly behind the leader"
    ],
    correctIndex: 3,
    explanation: "The leader sets the pace based on the least experienced rider, typically just behind them."
  },
  {
    question: "The most effective way to stop quickly is to:",
    options: [
      "Use both brakes simultaneously in a straight line",
      "Use only the front brake",
      "Use only the rear brake",
      "Engine brake only"
    ],
    correctIndex: 0,
    explanation: "Using both brakes in a straight line gives maximum braking power and stability."
  },
  {
    question: "Bright, reflective colors should be worn:",
    options: [
      "Only at night",
      "Only during the day",
      "All the time when riding",
      "Never"
    ],
    correctIndex: 2,
    explanation: "High-visibility gear helps you be seen at all times."
  },
  {
    question: "A good entry speed for a curve is:",
    options: [
      "A speed that lets you roll on or maintain throttle at the beginning of the curve",
      "A speed that lets you brake through the curve",
      "The fastest speed you can take the curve",
      "The slowest speed possible"
    ],
    correctIndex: 0,
    explanation: "Being able to gently roll on the throttle at the start of the curve stabilizes the bike."
  },
  {
    question: "The best place to find the correct pressure for your tires is:",
    options: [
      "The sidewall of the tire",
      "The motorcycle’s owner’s manual",
      "The tire manufacturer’s website",
      "The motorcycle dealer"
    ],
    correctIndex: 1,
    explanation: "The owner’s manual lists the recommended pressures for your specific bike."
  },
  {
    question: "Where is the most likely place for colliding with another vehicle?",
    options: [
      "A curve",
      "A steep hill",
      "An intersection",
      "Nowhere in particular"
    ],
    correctIndex: 2,
    explanation: "Most multi-vehicle crashes involving motorcycles happen at intersections."
  },
  {
    question: "Where do most single-vehicle motorcycle crashes occur?",
    options: [
      "A curve",
      "A steep hill",
      "An intersection",
      "A straight highway"
    ],
    correctIndex: 0,
    explanation: "Single-vehicle motorcycle crashes usually occur in curves when riders misjudge speed."
  },
  {
    question: "Stopping quickly in a curve requires the rider to:",
    options: [
      "Apply both brakes hard while leaned",
      "Lean the opposite way while braking",
      "Progressively apply both brakes until the bike is upright",
      "Use only the rear brake"
    ],
    correctIndex: 2,
    explanation: "You gradually straighten the bike while applying more brake as it comes upright."
  },
  {
    question: "How many escape paths should a rider keep open in a collision trap?",
    options: [
      "1",
      "2",
      "3",
      "More than one"
    ],
    correctIndex: 3,
    explanation: "You always want at least two options if one path suddenly closes."
  },
  {
    question: "When riding in a crosswind, the rider may have to:",
    options: [
      "Use more handgrip pressure into the wind",
      "Use the rear brake",
      "Go faster",
      "Avoid carrying a passenger"
    ],
    correctIndex: 0,
    explanation: "You may need to steer slightly into the wind to maintain your line."
  },
  {
    question: "Why does a motorcycle have an engine cutoff switch?",
    options: [
      "As an emergency backup to the key",
      "To offer another way to turn off the engine",
      "So the rider does not have to take hands off the grips to shut off the engine",
      "To ensure the engine is really off"
    ],
    correctIndex: 2,
    explanation: "The cutoff switch lets you shut the engine down without letting go of the handlebars."
  },
  {
    question: "What does the clutch lever do?",
    options: [
      "Shift gears",
      "Pop a wheelie",
      "Stop the motorcycle",
      "Remove power from the rear wheel"
    ],
    correctIndex: 3,
    explanation: "Pulling the clutch disengages engine power from the rear wheel."
  },
  {
    question: "Which gear should the rider be in when coming to a stop?",
    options: [
      "First",
      "Second",
      "Neutral",
      "Any gear"
    ],
    correctIndex: 0,
    explanation: "Being in first gear lets you move off quickly if needed."
  },
  {
    question: "What is engine braking?",
    options: [
      "Braking while the engine is on",
      "Using only the rear brake",
      "Using only the front brake",
      "Using the engine to slow you by downshifting and easing out the clutch"
    ],
    correctIndex: 3,
    explanation: "Downshifting and letting the clutch out uses engine resistance to slow the bike."
  },
  {
    question: "Which type of helmet provides the most protection in a crash?",
    options: [
      "Half-shell helmet",
      "Three-quarter helmet",
      "Modular (flip-up) helmet",
      "Full-face helmet"
    ],
    correctIndex: 3,
    explanation: "A full-face helmet offers the most coverage, including chin and face."
  },
  {
    question: "When should you check your motorcycle’s tire pressure?",
    options: [
      "Every time before you ride",
      "Once a week",
      "Once a month",
      "Only when it looks low"
    ],
    correctIndex: 0,
    explanation: "Tire pressure and tread should be checked before every ride."
  },
  {
    question: "If you accidentally lock the front wheel when braking, you should:",
    options: [
      "Keep it locked",
      "Release and reapply with less pressure",
      "Apply more rear brake",
      "Accelerate"
    ],
    correctIndex: 1,
    explanation: "Release immediately and re-apply gently to avoid a low-side crash."
  },
  {
    question: "Motorcycle helmets should be:",
    options: [
      "OSHA compliant",
      "FDA compliant",
      "DOT compliant",
      "NFPA compliant"
    ],
    correctIndex: 2,
    explanation: "In the U.S., helmets must at least meet DOT standards."
  },
  {
    question: "Counter-weighting is used:",
    options: [
      "In low-speed tight turns",
      "In high-speed turns",
      "In every turn",
      "When braking"
    ],
    correctIndex: 0,
    explanation: "At low speed, you turn the bars into the turn and lean your body to the outside."
  },
  {
    question: "Why is it important to do a head check when changing lanes?",
    options: [
      "It shows other drivers your intentions",
      "Someone might be in your blind spot",
      "It helps the motorcycle lean",
      "It slows you down"
    ],
    correctIndex: 1,
    explanation: "Mirrors don’t show everything—head checks catch what’s in the blind spot."
  },
  {
    question: "The friction zone on a motorcycle is:",
    options: [
      "Where the motor starts putting power to the rear wheel through the clutch",
      "When the rear wheel spins",
      "Sliding on its side",
      "Popping a wheelie"
    ],
    correctIndex: 0,
    explanation: "It’s the partial-engagement area of the clutch where the bike just begins to move."
  },
  {
    question: "Why should you park your motorcycle in first gear?",
    options: [
      "To keep it from being stolen",
      "To keep it from rolling",
      "So it is easier to start",
      "All of the above"
    ],
    correctIndex: 1,
    explanation: "Leaving it in first helps keep the bike from rolling on an incline."
  },
  {
    question: "What is the rider’s torso position during a swerve?",
    options: [
      "Upright, independent of motorcycle lean",
      "Leaning in the direction of the swerve",
      "Leaning away from the swerve",
      "Leaning forward over the bars"
    ],
    correctIndex: 0,
    explanation: "In a proper swerve the bike moves under you while your torso stays mostly upright."
  },
  {
    question: "Why should you rise up slightly off the seat when crossing over an obstacle?",
    options: [
      "To keep the obstacle from moving",
      "To see better",
      "To use the legs and knees as shock absorbers",
      "To maintain momentum"
    ],
    correctIndex: 2,
    explanation: "Let your legs absorb some of the impact so the bike and your spine take less."
  },
  {
    question: "Why is riding a motorcycle more dangerous than driving a car?",
    options: [
      "Less visibility",
      "Less protection",
      "Less stability",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "You’re smaller, exposed, and on two wheels—crash risk and severity are higher."
  },
  {
    question: "In seconds, what following distance generally provides enough time to stop or swerve in an urgent situation (under about 70 mph)?",
    options: [
      "2 seconds",
      "4 seconds",
      "12 seconds",
      "20 seconds"
    ],
    correctIndex: 1,
    explanation: "A 4-second following distance gives enough time to react and perform an emergency maneuver."
  },
  {
    question: "What are the requirements for wearing a helmet?",
    options: [
      "Passengers only are required to wear helmets.",
      "All motorcycle riders and passengers are required to wear helmets at all times.",
      "Helmets are not required while driving on city streets."
    ],
    correctIndex: 1,
    explanation: "California requires all riders and passengers to wear a U.S. DOT–compliant motorcycle safety helmet at all times."
  },
  {
    question: "Grabbing the front brake or jamming down on the rear brake:",
    options: [
      "Can cause the brakes to lock.",
      "Is the best way to stop in an emergency.",
      "Is the best way to slow down when the streets are wet."
    ],
    correctIndex: 0,
    explanation: "Grabbing or jamming the brakes can lock the wheels and cause a skid."
  },
  {
    question: "Passengers on motorcycles should:",
    options: [
      "Put their feet on the ground when the motorcycle is stopped.",
      "Not ride without a backrest.",
      "Sit as far forward as possible without crowding the rider."
    ],
    correctIndex: 2,
    explanation: "Passengers should sit as far forward as possible without crowding you for balance and control."
  },
  {
    question: "When riding with a group of motorcyclists, a staggered formation:",
    options: [
      "Is recommended at all times.",
      "Should not be used when entering or exiting a highway.",
      "Should be used when riding on curves."
    ],
    correctIndex: 1,
    explanation: "Switch to single-file in curves, intersections, and when entering/exiting freeways."
  },
  {
    question: "Eye protection:",
    options: [
      "Is not needed if your motorcycle has a windshield.",
      "Is only needed when riding in bad weather.",
      "Should give a clear view to either side."
    ],
    correctIndex: 2,
    explanation: "Windshields do NOT protect your eyes; eye protection must give clear side vision."
  },
  {
    question: "A primary cause of single-vehicle motorcycle collisions is:",
    options: [
      "Driving too fast for conditions.",
      "Running wide in a curve or turn and colliding with a fixed object.",
      "Running off the road while avoiding a vehicle."
    ],
    correctIndex: 1,
    explanation: "Most single-vehicle crashes happen when riders enter a curve too fast and run wide."
  },
  {
    question: "The best lane position for a motorcycle:",
    options: [
      "Is always the left part of the lane.",
      "Is always the right part of the lane.",
      "Can vary depending on traffic and road conditions."
    ],
    correctIndex: 2,
    explanation: "There is no single best position; it depends on visibility and space."
  },
  {
    question: "When riding at night you should:",
    options: [
      "Move closer to vehicles ahead to use their lights.",
      "Maintain your normal following distance.",
      "Reduce your speed because hazards are harder to see."
    ],
    correctIndex: 2,
    explanation: "Night riding requires slower speeds due to reduced visibility."
  },
  {
    question: "You should operate the engine cutoff switch and pull in the clutch when:",
    options: [
      "The throttle is stuck.",
      "You lose control in a curve.",
      "The motorcycle starts to wobble."
    ],
    correctIndex: 0,
    explanation: "A stuck throttle requires immediately cutting power."
  },
  {
    question: "To operate a moped you must have at least a ____ license.",
    options: ["Class M1", "Class M2", "Class C"],
    correctIndex: 1,
    explanation: "Class M2 covers mopeds and motorized bicycles."
  },
  {
    question: "Upshifting or downshifting in a curve:",
    options: [
      "Should only be done smoothly.",
      "Is better than shifting before the curve.",
      "Is the best way to control speed."
    ],
    correctIndex: 0,
    explanation: "Shifting mid-curve can cause traction loss unless done smoothly."
  },
  {
    question: "To avoid confusing other drivers you should:",
    options: [
      "Increase following distance.",
      "Ensure your turn signal turns off after a turn.",
      "Use your horn in most situations."
    ],
    correctIndex: 1,
    explanation: "Leaving your signal on is a top cause of motorcycle crashes."
  },
  {
    question: "_____ is a major factor in collisions caused by motorcycles.",
    options: [
      "Following too closely.",
      "Lane splitting.",
      "Improper signaling."
    ],
    correctIndex: 0,
    explanation: "Tailgating reduces reaction time and causes many crashes."
  },
  {
    question: "If your motorcycle wanders on metal bridge gratings you should:",
    options: [
      "Downshift.",
      "Ride in a zig-zag pattern.",
      "Relax and ride straight across."
    ],
    correctIndex: 2,
    explanation: "A slight wandering feel is normal; stay relaxed."
  },
  {
    question: "If you must carry a load it should be:",
    options: [
      "Over or in front of the rear axle.",
      "On the handlebars.",
      "Stacked high behind the seat."
    ],
    correctIndex: 0,
    explanation: "Loads must be forward and low for stability."
  },
  {
    question: "What is the best way to stay out of trouble while riding a motorcycle?",
    options: [
      "Avoid all heavy traffic.",
      "Increase your following distance.",
      "Look well ahead to identify hazards early."
    ],
    correctIndex: 2,
    explanation: "Scanning ahead prevents most emergency situations."
  },
  {
    question: "A motorcycle rider has an advantage over cars when passing parked vehicles because:",
    options: [
      "Motorcycles accelerate faster.",
      "Motorcycles can stop quicker.",
      "The rider can position in the left portion of the lane to avoid opening car doors."
    ],
    correctIndex: 2,
    explanation: "Left lane position helps avoid doors and pedestrians."
  },
  {
    question: "Bright, reflective clothing:",
    options: [
      "Should only be worn at night.",
      "Helps make riders more visible.",
      "Is optional since headlights are enough."
    ],
    correctIndex: 1,
    explanation: "Most crashes happen because drivers “didn’t see the motorcycle.”"
  },
  {
    question: "To execute a turn safely a motorcycle rider must:",
    options: [
      "Lean the motorcycle in the direction of the turn.",
      "Brake during the turn for best control.",
      "Keep the motorcycle upright."
    ],
    correctIndex: 0,
    explanation: "Motorcycles must lean to turn safely."
  },
  {
    question: "Vehicle/motorcycle collisions are most common:",
    options: ["On freeways.", "At night.", "At intersections."],
    correctIndex: 2,
    explanation: "Most multi-vehicle motorcycle crashes occur at intersections."
  },
  {
    question: "Following closely to a vehicle ahead:",
    options: [
      "Helps with drafting to save fuel.",
      "Is a major collision factor.",
      "Helps you see traffic better."
    ],
    correctIndex: 1,
    explanation: "Tailgating is one of the biggest rider-caused crash factors."
  },
  {
    question: "In rain or fog you should:",
    options: [
      "Reduce speed and use low beam lights.",
      "Use high beams.",
      "Maintain normal speed."
    ],
    correctIndex: 0,
    explanation: "High beams reflect water droplets and reduce visibility."
  },
  {
    question: "Your motorcycle side mirrors primarily show:",
    options: [
      "Everything behind you.",
      "Only the lane next to you.",
      "Part of the adjoining lane and most of the lane behind you."
    ],
    correctIndex: 2,
    explanation: "Motorcycle mirrors do not eliminate blind spots."
  },
  {
    question: "When carrying loads you should:",
    options: [
      "Keep them low and forward.",
      "Keep them high for visibility.",
      "Place them behind the rear axle."
    ],
    correctIndex: 0,
    explanation: "Low, forward loads improve handling."
  },
  {
    question: "Before changing lanes to the left you should:",
    options: [
      "Check your left mirror and look to the left.",
      "Check only the mirror.",
      "Speed up instead of checking."
    ],
    correctIndex: 0,
    explanation: "Mirror + shoulder check = safe lane change."
  },
  {
    question: "The best way to fight fatigue while riding is to:",
    options: ["Drink energy drinks.", "Ride faster.", "Take frequent breaks."],
    correctIndex: 2,
    explanation: "Breaks and hydration prevent fatigue."
  },
  {
    question: "A motor-driven cycle is defined as having an engine size of:",
    options: ["Under 150cc.", "Under 200cc.", "Under 100cc."],
    correctIndex: 0,
    explanation: "California defines motor-driven cycles as under 150cc."
  },
  {
    question: "When another vehicle is trying to pass you, you should:",
    options: [
      "Move to the center portion of your lane.",
      "Speed up.",
      "Move to the right edge of the lane."
    ],
    correctIndex: 0,
    explanation: "Center positioning maximizes space around both vehicles."
  },
  {
    question: "To predict how a hazard may affect you, you must know its:",
    options: ["Color.", "Size.", "Speed, distance, and direction."],
    correctIndex: 2,
    explanation: "Hazard prediction requires understanding motion."
  },
  {
    question: "To make good judgments in traffic you first need to:",
    options: [
      "Be able to swerve.",
      "Search and scan ahead.",
      "Know how to brake quickly."
    ],
    correctIndex: 1,
    explanation: "Scanning is the foundation of safe riding."
  },
  {
    question: "To spot vehicles beside you before moving left you should:",
    options: [
      "Check your left mirror only.",
      "Slow down.",
      "Turn your head and look to the left."
    ],
    correctIndex: 2,
    explanation: "Blind spots require a shoulder check."
  },
  {
    question: "Motorized bicycles or mopeds are not allowed to:",
    options: [
      "Operate on freeways and expressways.",
      "Exceed 30 mph.",
      "Ride in bike lanes when authorized."
    ],
    correctIndex: 0,
    explanation: "Freeways are prohibited for mopeds."
  },
  {
    question: "The maximum speed at which Class 2 electric bicycles can provide assistance is:",
    options: ["35 mph", "20 mph", "25 mph"],
    correctIndex: 1,
    explanation: "Class 2 e-bikes assist up to 20 mph."
  },
  {
    question: "When preparing for a long ride you should:",
    options: [
      "Carry as much as possible.",
      "Wear tight clothing.",
      "Ensure the motorcycle is in top mechanical condition."
    ],
    correctIndex: 2,
    explanation: "Mechanical reliability is critical for long trips."
  },
  {
    question: "Convex mirrors on motorcycles make vehicles appear:",
    options: [
      "Closer than they are.",
      "Farther than they are.",
      "Actual size."
    ],
    correctIndex: 1,
    explanation: "Convex mirrors distort distance but increase field of view."
  },
  {
    question: "To be effective, eye or face protection must:",
    options: [
      "Permit room for sunglasses or eyeglasses.",
      "Be loose-fitting.",
      "Be tinted."
    ],
    correctIndex: 0,
    explanation: "Eye protection must allow eyewear and ventilate properly."
  },
  {
    question: "If you need to leave the road to handle an emergency you should:",
    options: [
      "Flash your headlights.",
      "Signal and pull off smoothly.",
      "Swerve quickly."
    ],
    correctIndex: 1,
    explanation: "Smooth, predictable movement prevents loss of control."
  },
  {
    question: "How often should you check hydraulic fluid and coolant levels?",
    options: ["Daily", "Weekly", "Monthly"],
    correctIndex: 1,
    explanation: "Coolant and fluid should be checked weekly."
  },
  {
    question: "The main reason riders crash during turns is:",
    options: [
      "Inexperience.",
      "Going too fast.",
      "Bad weather."
    ],
    correctIndex: 1,
    explanation: "Entering a turn too fast is the #1 cause of corner crashes."
  },

  {
    question: "Define hypothermia.",
    options: [
      "Above normal body temperature",
      "Normal body temperature",
      "Below normal body temperature",
      "Average motorcycle temperature"
    ],
    correctIndex: 2,
    explanation: "Hypothermia is abnormally low body temperature, which can happen to riders without proper gear."
  },
  {
    question: "What should you do about a tailgating driver?",
    options: [
      "Throw objects at them",
      "Brake-check them",
      "Increase distance from the vehicle ahead",
      "Speed up"
    ],
    correctIndex: 2,
    explanation: "By increasing the gap to the vehicle ahead, you give yourself room if the tailgater hits you."
  },
  {
    question: "During daytime riding, how should your headlight be set?",
    options: [
      "Off",
      "On low beam",
      "On high beam when it does not interfere with others",
      "Flashing"
    ],
    correctIndex: 2,
    explanation: "Using high beam during the day improves your visibility if it does not blind others."
  },
  {
    question: "Which type of helmet provides the most protection in a crash?",
    options: [
      "Half-shell helmet",
      "Three-quarter helmet",
      "Modular helmet",
      "Full-face helmet"
    ],
    correctIndex: 3,
    explanation: "Full-face helmets protect the entire head, including the chin and face."
  },
  {
    question: "Where should the inexperienced rider be positioned in a group?",
    options: [
      "At the tail end",
      "In front of the group",
      "In the middle of the group",
      "Directly behind the leader"
    ],
    correctIndex: 3,
    explanation: "The leader should set a pace that suits the least experienced rider, usually right behind them."
  },
  {
    question: "The most effective way to stop quickly is to:",
    options: [
      "Use both brakes simultaneously in a straight line",
      "Use only the front brake",
      "Use only the rear brake",
      "Engine brake only"
    ],
    correctIndex: 0,
    explanation: "Using both brakes in a straight line gives maximum stopping power and stability."
  },
  {
    question: "The best way to become a more skilled rider is to:",
    options: [
      "Take long trips",
      "Attend more training classes",
      "Watch friends ride",
      "Watch videos online only"
    ],
    correctIndex: 1,
    explanation: "Formal training improves your skills and hazard response more efficiently than casual riding."
  },
  {
    question: "Why does a rider change gears?",
    options: [
      "To stop",
      "To start from a stop",
      "To match engine speed to road speed",
      "To go around a curve"
    ],
    correctIndex: 2,
    explanation: "Shifting gears keeps the engine in the correct RPM range for the current road speed."
  },
  {
    question: "When should you check your motorcycle's tire pressure?",
    options: [
      "Every time before you ride",
      "Once a week",
      "Once a month",
      "When it looks low"
    ],
    correctIndex: 0,
    explanation: "Correct tire pressure is critical for traction and handling, so check it before every ride."
  },
  {
    question: "The friction zone is:",
    options: [
      "Where the engine begins transmitting power to the rear wheel",
      "When the rear wheel spins",
      "Sliding on its side",
      "Popping a wheelie"
    ],
    correctIndex: 0,
    explanation: "The friction zone is the part of the clutch lever travel where the engine just begins to move the bike."
  },
  {
    question: "How should the passenger sit on the motorcycle?",
    options: [
      "Holding the back of the seat",
      "Close to the rider, holding their sides or handholds",
      "On the fender",
      "On the fuel tank"
    ],
    correctIndex: 1,
    explanation: "Passengers should sit close to the rider and hold on properly for stability."
  },
  {
    question: "The main cause of motorcycle accidents is:",
    options: [
      "Improper braking",
      "Improper cornering",
      "Other drivers",
      "An interaction of multiple factors"
    ],
    correctIndex: 3,
    explanation: "Crashes usually result from several factors together, not a single cause."
  },
  {
    question: "Neutral on most motorcycles is located:",
    options: [
      "All the way down",
      "Between first and second gear",
      "All the way up",
      "Between second and third gear"
    ],
    correctIndex: 1,
    explanation: "Neutral is typically found between first and second gear."
  },
  {
    question: "A good following distance to give you time to stop or swerve is:",
    options: [
      "2 seconds",
      "4 seconds",
      "12 seconds",
      "20 seconds"
    ],
    correctIndex: 1,
    explanation: "A four-second following distance gives most riders enough time to react to hazards."
  },
  {
    question: "Target fixation means:",
    options: [
      "Not focusing on the road",
      "Being distracted",
      "Looking at one thing too long so you steer toward it",
      "Aiming at a specific object intentionally"
    ],
    correctIndex: 2,
    explanation: "You tend to go where you look, so staring at a hazard can cause you to hit it."
  },
  {
    question: "Countersteering in a normal-speed turn means:",
    options: [
      "Pushing the handlebar on the side you want to go",
      "Pushing opposite the direction you want to go",
      "Pulling the handlebar toward you in the direction you want to go",
      "Pulling opposite the direction you want to go"
    ],
    correctIndex: 0,
    explanation: "Push left to go left, push right to go right—that is countersteering."
  },
  {
    question: "What does the tachometer show?",
    options: [
      "Road speed",
      "Gear position",
      "Engine speed in RPM",
      "Miles traveled"
    ],
    correctIndex: 2,
    explanation: "The tachometer shows engine revolutions per minute."
  },
  {
    question: "Threshold braking is:",
    options: [
      "Barely using the brakes",
      "Using only the front brake",
      "Using only the rear brake",
      "Using both brakes as hard as possible without locking either wheel"
    ],
    correctIndex: 3,
    explanation: "Threshold braking is maximum braking force just short of skidding."
  },
  {
    question: "What is the best lane position at intersections?",
    options: [
      "Always the middle of the lane",
      "There is no single best position",
      "Always the left part of the lane",
      "Always the right part of the lane"
    ],
    correctIndex: 1,
    explanation: "Lane position depends on where you are most visible and have the best escape paths."
  },
  {
    question: "What is hazardous about starting off uphill?",
    options: [
      "Not seeing the other side",
      "The motorcycle may roll backward",
      "Stalling the motorcycle",
      "Spinning the tire"
    ],
    correctIndex: 1,
    explanation: "On a hill the bike can roll back if you don’t control it with the brake and clutch."
  },
  {
    question: "If your motorcycle starts to weave while crossing a metal grate bridge, what should you do?",
    options: [
      "Speed up",
      "Slow down rapidly",
      "Relax and maintain a steady speed",
      "Turn sharply to correct it"
    ],
    correctIndex: 2,
    explanation: "Weaving on metal grates is normal; stay relaxed and keep a steady line."
  },
  {
    question: "Where should you downshift before entering a curve?",
    options: [
      "In the middle of the curve",
      "Before the curve",
      "After exiting the curve",
      "You should never downshift"
    ],
    correctIndex: 1,
    explanation: "Shift before the curve so the bike is stable and in the correct gear."
  },
  {
    question: "If the rear wheel locks up while stopping straight on a good surface, you should:",
    options: [
      "Release the rear brake immediately",
      "Keep it locked until the motorcycle comes to a complete stop",
      "Shift into neutral",
      "Accelerate slightly"
    ],
    correctIndex: 1,
    explanation: "On good traction, keeping the rear wheel locked can prevent a high-side crash."
  },
  {
    question: "What is the best way to avoid hazards?",
    options: [
      "Ride faster",
      "Look well ahead",
      "Ride in the right tire track",
      "Honk often"
    ],
    correctIndex: 1,
    explanation: "Scanning far ahead lets you see and avoid most hazards early."
  },
  {
    question: "Before changing lanes to the left, you should:",
    options: [
      "Only use your mirror",
      "Look over your left shoulder",
      "Speed up",
      "Use your horn"
    ],
    correctIndex: 1,
    explanation: "A head check over your shoulder reveals anything in your blind spot."
  },
  {
    question: "Why is hesitation dangerous when passing?",
    options: [
      "It confuses other drivers",
      "It keeps you in the oncoming lane longer",
      "It reduces your room to react",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Hesitating while passing increases the time you’re exposed to oncoming traffic."
  },
  {
    question: "Your motorcycle headlight should be used:",
    options: [
      "Only at night",
      "Only in fog",
      "At all times, day or night",
      "Only on the highway"
    ],
    correctIndex: 2,
    explanation: "Running your headlight all the time makes you more visible to others."
  },
  {
    question: "What is the best way to swerve?",
    options: [
      "Brake hard then turn",
      "Brake while swerving",
      "Make two quick turns—one to avoid the hazard, one to get back on path",
      "Lean as far as possible and hope"
    ],
    correctIndex: 2,
    explanation: "A proper swerve is a quick dodge followed immediately by a counter-dodge."
  },
  {
    question: "When riding downhill, you should:",
    options: [
      "Shift to a higher gear",
      "Use only the rear brake",
      "Shift to a lower gear and use engine braking",
      "Coast in neutral"
    ],
    correctIndex: 2,
    explanation: "Lower gear plus engine braking helps control speed on descents."
  },
  {
    question: "The best way to handle a tailgater is to:",
    options: [
      "Flash your brake light and increase space ahead of you",
      "Brake suddenly to scare them",
      "Speed away as fast as possible",
      "Ride on the shoulder"
    ],
    correctIndex: 0,
    explanation: "Flash your brake light to warn them and open a bigger space cushion ahead."
  },
  {
    question: "How can a rider increase visibility to others?",
    options: [
      "Wear reflective or bright clothing",
      "Use headlight high beam during the day when appropriate",
      "Choose a good lane position",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Visibility is improved by your clothing, lights, and lane position."
  },
  {
    question: "Which part of the lane is often the most slippery?",
    options: [
      "Left tire track",
      "Right tire track",
      "Center of the lane",
      "All parts are equally slippery"
    ],
    correctIndex: 2,
    explanation: "Oil and fluids from cars tend to collect in the center of the lane."
  },
  {
    question: "How should two motorcycles ride together most of the time?",
    options: [
      "Side by side",
      "In a staggered formation",
      "Single file only",
      "Randomly, depending on preference"
    ],
    correctIndex: 1,
    explanation: "A staggered formation provides better space cushions and visibility."
  },
  {
    question: "If the front tire goes flat, what usually happens?",
    options: [
      "The rear will slide out immediately",
      "Steering becomes heavy and the front may wobble",
      "You can accelerate out of it",
      "You probably won’t notice"
    ],
    correctIndex: 1,
    explanation: "A front flat strongly affects steering and can cause wobbling."
  },
  {
    question: "If your engine locks or 'freezes' in traffic, you should:",
    options: [
      "Honk your horn",
      "Pull in the clutch immediately",
      "Apply only the rear brake",
      "Turn the engine off with the key"
    ],
    correctIndex: 1,
    explanation: "Pulling in the clutch prevents the rear wheel from locking when the engine seizes."
  },
  {
    question: "In a normal stop, you should:",
    options: [
      "Use only the rear brake",
      "Use both brakes evenly",
      "Use only the front brake",
      "Shift to neutral immediately"
    ],
    correctIndex: 1,
    explanation: "Using both brakes together gives smooth, controlled stopping."
  },
  {
    question: "When a dog runs toward your path, you should:",
    options: [
      "Speed up and hit it",
      "Aim for the dog's head",
      "Slow down, then accelerate away",
      "Honk continuously"
    ],
    correctIndex: 2,
    explanation: "Slow first so you can predict its movement, then accelerate past the dog."
  },
  {
    question: "When carrying a load, where should it be placed?",
    options: [
      "As high as possible",
      "As far forward and as low as possible",
      "Behind the rear axle",
      "On the handlebars"
    ],
    correctIndex: 1,
    explanation: "Forward and low placement keeps the motorcycle more stable."
  },
  {
    question: "What is the best lane position for being seen?",
    options: [
      "Always the left tire track",
      "Always the right tire track",
      "Always the center",
      "It depends on the situation"
    ],
    correctIndex: 3,
    explanation: "You choose lane position based on where you’re most visible and safest at that moment."
  },
  {
    question: "What should you avoid when riding over obstacles?",
    options: [
      "Rising slightly off the seat",
      "Keeping the motorcycle straight",
      "Rolling on the throttle a bit",
      "Slamming the brakes right before the obstacle"
    ],
    correctIndex: 3,
    explanation: "Hard braking on an obstacle can make the front wheel lose traction."
  },
  {
    question: "If the motorcycle starts wobbling, you should:",
    options: [
      "Brake hard immediately",
      "Accelerate sharply",
      "Grip the handlebars firmly and gradually slow down",
      "Jump off the motorcycle"
    ],
    correctIndex: 2,
    explanation: "Stabilize the wobble by holding the bars firmly and rolling off the throttle smoothly."
  },
  {
    question: "The best clothing for nighttime riding is:",
    options: [
      "Dark clothes to avoid reflection",
      "Bright or reflective clothing",
      "Loose clothing",
      "Baggy pants and hoodie"
    ],
    correctIndex: 1,
    explanation: "Reflective or bright gear makes you more visible at night."
  },
  {
    question: "In rain, the most slippery time is:",
    options: [
      "Right after the rain starts",
      "After 30 minutes of rain",
      "After 1 hour of rain",
      "After 2 hours of rain"
    ],
    correctIndex: 0,
    explanation: "Oil and residues are lifted by the first minutes of rain, making the road slick."
  },
  {
    question: "When downshifting for a curve, you should:",
    options: [
      "Shift after entering the curve",
      "Shift before the curve",
      "Coast through the curve in neutral",
      "Shift repeatedly in the middle of the curve"
    ],
    correctIndex: 1,
    explanation: "Downshift before the curve so the bike stays stable and you can accelerate out smoothly."
  },
  {
    question: "The engine cutoff switch is used when:",
    options: [
      "Stopping normally",
      "Parking overnight",
      "The throttle is stuck or in another emergency",
      "The ignition key is lost"
    ],
    correctIndex: 2,
    explanation: "Use the kill switch for quick engine shutdown in an emergency like a stuck throttle."
  },
  {
    question: "A motorcycle’s blind spots can be checked by:",
    options: [
      "Mirror checks only",
      "Turning your head to look",
      "Looking at shadows",
      "Listening for other vehicles"
    ],
    correctIndex: 1,
    explanation: "A shoulder check is required to see into blind spots."
  },
  {
    question: "If you are being passed, you should:",
    options: [
      "Move to the center portion of your lane",
      "Speed up to prevent the pass",
      "Move onto the shoulder",
      "Brake suddenly"
    ],
    correctIndex: 0,
    explanation: "Moving to the lane center increases your space cushion from the passing vehicle."
  },
  {
    question: "Hydroplaning occurs when tires:",
    options: [
      "Grip the road better than usual",
      "Ride on top of a film of water",
      "Deflate suddenly",
      "Overheat"
    ],
    correctIndex: 1,
    explanation: "When hydroplaning, tires lose contact with the pavement and you lose traction."
  },
  {
    question: "What is the best way to negotiate a curve?",
    options: [
      "Enter the curve slowly and accelerate out",
      "Enter fast and coast through",
      "Brake in the middle of the curve",
      "Keep the motorcycle upright"
    ],
    correctIndex: 0,
    explanation: "Slow before the curve, look through it, and gently roll on the throttle exiting."
  },
  {
    question: "When should you ride in a single-file formation?",
    options: [
      "On straightaways",
      "In curves or when entering or leaving highways",
      "In city traffic only",
      "Never, always stagger"
    ],
    correctIndex: 1,
    explanation: "Single file is safest in tight conditions like curves and freeway ramps."
  },
  {
    question: "A wobble is most commonly caused by:",
    options: [
      "Improper tire pressure or loading",
      "Cold weather",
      "High beam usage",
      "Wearing loose clothing"
    ],
    correctIndex: 0,
    explanation: "Incorrect tire pressure, loading, or loose parts commonly lead to wobbles."
  },
  {
    question: "If your chain snaps or breaks while riding, you should:",
    options: [
      "Pull in the clutch and coast to a stop",
      "Accelerate hard",
      "Continue riding normally",
      "Jump off immediately"
    ],
    correctIndex: 0,
    explanation: "Pull the clutch to prevent the rear wheel from locking and coast to a safe stop."
  },
  {
    question: "When preparing to turn, you should:",
    options: [
      "Look through the turn where you want to go",
      "Slow down only after entering",
      "Close the throttle in the middle",
      "Brake hard in the middle"
    ],
    correctIndex: 0,
    explanation: "Your motorcycle goes where you look—so look through the turn, not at the ground."
  },
  {
    question: "Fine-tuning your lane position helps you:",
    options: [
      "Be more visible",
      "Avoid hazards",
      "Maintain space cushions",
      "All of the above"
    ],
    correctIndex: 3,
    explanation: "Good lane positioning affects visibility, hazard avoidance, and space around you."
  },
  {
    question: "If a dog runs into your path, you should:",
    options: [
      "Kick the dog",
      "Stop and yell at it",
      "Slow down, then speed up to get past it",
      "Aim directly at it"
    ],
    correctIndex: 2,
    explanation: "Slowing first and then accelerating helps you avoid the dog’s path."
  } 
];

// Your existing ALL_QUESTIONS stays exactly as you have it above this line.

const NEW_QUESTIONS = [
  // 1. Vehicle types / definitions
  {
    question: "According to California law, which of the following best defines a motorcycle?",
    options: [
      "Any two-wheeled vehicle capable of more than $20$ mph",
      "A motor vehicle with a seat or saddle for the rider, designed to travel on not more than three wheels",
      "Any two- or three-wheeled vehicle with pedals",
      "Any motor-driven vehicle that is not a car or truck"
    ],
    correctIndex: 1,
    explanation: "A motorcycle is defined as a motor vehicle with a seat or saddle for the rider, designed to travel on not more than three wheels."
  },
  {
    question: "A motor-driven cycle is defined as a motorcycle with:",
    options: [
      "An engine size of at least $150$ cc",
      "An engine size of less than $150$ cc",
      "An electric motor only",
      "No more than three wheels"
    ],
    correctIndex: 1,
    explanation: "A motor-driven cycle is a motorcycle with a motor size of less than $150$ cc."
  },
  {
    question: "A motorized bicycle or moped is limited to a top speed of no more than:",
    options: [
      "$20$ mph on level ground",
      "$28$ mph on level ground",
      "$30$ mph on level ground",
      "$35$ mph on level ground"
    ],
    correctIndex: 2,
    explanation: "A motorized bicycle or moped is a two- or three-wheeled device capable of no more than $30$ mph on level ground."
  },
  {
    question: "Which of the following is true about Class 3 electric bicycles in California?",
    options: [
      "They may be ridden by anyone with a Class C license",
      "They may be operated by riders $14$ years old or older",
      "The operator must be at least $16$ years old and must wear a bicycle safety helmet",
      "Passengers are allowed if they are wearing helmets"
    ],
    correctIndex: 2,
    explanation: "Class 3 electric bicycle operators must be at least $16$ years old and must wear a bicycle safety helmet; they may not carry passengers."
  },
  {
    question: "A motorized scooter may be operated in California with:",
    options: [
      "Only a Class M1 license",
      "Only a Class M2 license",
      "Any valid California driver license of any class",
      "No license, but a permit is required"
    ],
    correctIndex: 2,
    explanation: "A person holding a valid California driver license of any class may operate a motorized scooter."
  },

  // 2. License classes / permits / CMSP
  {
    question: "A Class M1 license allows you to operate:",
    options: [
      "Only motorized bicycles and scooters",
      "Any two-wheel motorcycle, motor-driven cycle, or motorized scooter and all vehicles allowed with an M2",
      "Only three-wheel motorcycles and sidecar rigs",
      "Only motorcycles with engines $150$ cc or larger"
    ],
    correctIndex: 1,
    explanation: "Class M1 authorizes any two-wheel motorcycle, motor-driven cycle, or motorized scooter, plus all vehicles allowed under Class M2."
  },
  {
    question: "A Class M2 license allows you to operate:",
    options: [
      "Any two-wheel motorcycle",
      "Only three-wheel motorcycles",
      "Any motorized bicycle, moped, or motorized scooter",
      "Only motorcycles with engine sizes under $150$ cc"
    ],
    correctIndex: 2,
    explanation: "Class M2 is limited to motorized bicycles, mopeds, and motorized scooters."
  },
  {
    question: "Which of the following may be operated with only a Class C license (no M1/M2)?",
    options: [
      "A two-wheel motorcycle",
      "A motorcycle with a sidecar attached",
      "A motor-driven cycle on any freeway",
      "Any moped on any roadway"
    ],
    correctIndex: 1,
    explanation: "Class C licensees may operate a motorcycle with a sidecar attached, a three-wheel motorcycle, or a motorized scooter."
  },
  {
    question: "Which of the following is a restriction on a Class M1/M2 instruction permit?",
    options: [
      "You may only ride during daylight on freeways",
      "You may not carry passengers, ride on freeways, or ride at night",
      "You may ride only in residential areas",
      "You may ride only under direct supervision of a licensed instructor"
    ],
    correctIndex: 1,
    explanation: "An M1/M2 permit does not allow carrying passengers, freeway riding, or nighttime riding."
  },
  {
    question: "A motorcycle applicant under $21$ years old must:",
    options: [
      "Take only a written test to get a license",
      "Complete a California Motorcyclist Safety Program (CMSP) training course before receiving a motorcycle instruction permit",
      "Pass only the skills test, not the knowledge test",
      "Show proof of prior out-of-state motorcycle experience"
    ],
    correctIndex: 1,
    explanation: "Under $21$, you must complete an approved CMSP course and receive a DL 389 before DMV will issue a motorcycle instruction permit."
  },
  {
    question: "The Certificate of Completion of Motorcycle Training (DL 389) is valid for:",
    options: [
      "6 months from the issue date",
      "12 months from the issue date",
      "Until the rider turns $21$",
      "It does not expire"
    ],
    correctIndex: 1,
    explanation: "The DL 389 is valid for $12$ months from the issue date."
  },
  {
    question: "Using the California Motorcycle Handbook or electronic devices during the knowledge test is:",
    options: [
      "Allowed if you finish within the time limit",
      "Allowed only if you are over $21$",
      "Strictly prohibited and considered cheating",
      "Allowed if the examiner says it is okay"
    ],
    correctIndex: 2,
    explanation: "Using any testing aids, including handbooks or electronic devices, is considered cheating and will result in test failure and possible action against your driving privilege."
  },

  // 3. Skills test details
  {
    question: "Which of the following is part of the motorcycle skills test pre-trip inspection?",
    options: [
      "Checking your insurance card and registration",
      "Identifying controls such as the starter, kill switch, clutch, and horn",
      "Demonstrating how to change the oil",
      "Proving you can ride for at least 10 minutes"
    ],
    correctIndex: 1,
    explanation: "Before the skills exercises, you must identify key controls on the motorcycle such as the starter, kill switch, clutch, throttle, gear selector, and horn."
  },
  {
    question: "During the serpentine ride exercise in the skills test, you must:",
    options: [
      "Ride a straight line between two cones",
      "Weave through five cones and then begin the circle ride",
      "Perform a U-turn between the cones",
      "Stop at each cone and then proceed"
    ],
    correctIndex: 1,
    explanation: "In the serpentine exercise you weave through a row of five cones, beginning on the right side of the first cone, and then transition directly into the circle ride."
  },
  {
    question: "In the slow ride portion of the skills test, the rider is expected to:",
    options: [
      "Ride as fast as possible in a straight line",
      "Ride slowly between two parallel lines without leaving the tracking path",
      "Ride in circles without using the brakes",
      "Perform an emergency stop inside a box"
    ],
    correctIndex: 1,
    explanation: "The slow ride requires you to ride slowly between two parallel lines, keeping the front tire within the tracking path."
  },
  {
    question: "Which skills test exercise requires you to shift up and down through the gears and perform a U-turn?",
    options: [
      "Serpentine ride",
      "Circle ride",
      "Gear shift ride",
      "Slow ride"
    ],
    correctIndex: 2,
    explanation: "The gear shift ride involves shifting up and down, making a U-turn, and stopping smoothly at the starting point."
  },

  // 4. Gear / protective equipment
  {
    question: "Which statement about DOT certification on a motorcycle helmet is correct?",
    options: [
      "The DOT label can be a removable sticker applied by the seller",
      "The DOT label must be applied by the manufacturer and should not be easily removed",
      "Any helmet sold in a motorcycle shop is automatically DOT compliant",
      "Only full-face helmets are allowed to have DOT labels"
    ],
    correctIndex: 1,
    explanation: "A DOT-compliant helmet must have manufacturer-applied DOT lettering on the back that is not just a removable sticker."
  },
  {
    question: "Which of the following is a warning sign of a non-DOT, novelty-type helmet?",
    options: [
      "Thick, energy-absorbing liner",
      "Heavier overall weight",
      "Very thin liners and padding with minimal coverage",
      "Presence of a face shield"
    ],
    correctIndex: 2,
    explanation: "Novelty helmets often have very thin liners and padding, providing little real protection in a collision."
  },
  {
    question: "Which is true about tinted eye protection or tinted face shields?",
    options: [
      "They are recommended at night for better contrast",
      "They should not be worn at night or in low-light conditions",
      "They are required whenever it rains",
      "They may only be worn by passengers"
    ],
    correctIndex: 1,
    explanation: "Tinted eye protection reduces available light and should not be used at night or when little light is available."
  },
  {
    question: "California law allows the use of earplugs while riding only if:",
    options: [
      "They completely block all outside sound",
      "They are used in both ears, regardless of design",
      "They are specifically designed to reduce harmful noise but still allow you to hear sirens and horns",
      "They are worn in only one ear"
    ],
    correctIndex: 2,
    explanation: "Earplugs or molds must be designed to reduce injurious noise and must not prevent you from hearing sirens or horns."
  },
  {
    question: "Which footwear is most appropriate for motorcycle riding?",
    options: [
      "Flip flops",
      "Over-the-ankle boots with slip-resistant soles",
      "High heels",
      "Barefoot riding to feel the pegs"
    ],
    correctIndex: 1,
    explanation: "Over-the-ankle boots with durable, slip-resistant soles provide protection and ankle support."
  },
  {
    question: "Why is wearing a long-sleeve jacket, long pants, boots, and gloves recommended even in warm weather?",
    options: [
      "To meet a legal requirement",
      "To prevent dehydration and sun/wind burn while still providing protection in a fall",
      "To keep the motorcycle cleaner",
      "To avoid getting a tan"
    ],
    correctIndex: 1,
    explanation: "Protective clothing helps reduce dehydration, windburn, and injury in a crash, even in warm weather."
  },

  // 5. Pre-ride inspection / controls
  {
    question: "Before every ride, you should check all of the following EXCEPT:",
    options: [
      "Tire pressure and tread",
      "Oil and fluid levels",
      "Headlights, taillight, and brake light",
      "Radio volume"
    ],
    correctIndex: 3,
    explanation: "Tires, fluids, and lights must be checked before every ride; radio volume is not a safety item described in the handbook."
  },
  {
    question: "In addition to pre-ride checks, which items should be checked at least weekly?",
    options: [
      "Wheels, cables, fasteners, and fluid levels",
      "Only tire pressure",
      "Only the horn and turn signals",
      "Only chain lubrication"
    ],
    correctIndex: 0,
    explanation: "The handbook recommends checking wheels, cables, fasteners, and fluid levels at least once a week."
  },
  {
    question: "When riding a motorcycle that is new or unfamiliar to you, you should:",
    options: [
      "Ride at normal speeds to get used to it quickly",
      "Test your limits on a busy street",
      "Familiarize yourself with the controls in a controlled area before riding in traffic",
      "Assume all motorcycles handle the same"
    ],
    correctIndex: 2,
    explanation: "You should practice on an unfamiliar motorcycle in a controlled area to learn its controls and handling before entering traffic."
  },

  // 6. Body position / control (new angles)
  {
    question: "To help maintain balance in turns, where should you keep your knees?",
    options: [
      "Away from the tank to allow airflow",
      "Pressed firmly against the gas tank",
      "Pointing outward for cooling",
      "Hanging loosely off the bike"
    ],
    correctIndex: 1,
    explanation: "Keeping your knees against the tank improves stability and balance while turning."
  },
  {
    question: "When riding, why should you avoid pointing your toes downward?",
    options: [
      "It reduces blood flow to your feet",
      "It increases drag and fuel consumption",
      "Your toes may get caught between the road and the footrests",
      "It makes shifting impossible"
    ],
    correctIndex: 2,
    explanation: "Pointing your toes downward can cause them to catch on the road surface or footrests, risking loss of control."
  },
  {
    question: "When is it best to change gears while approaching a turn?",
    options: [
      "After you enter the turn",
      "At the sharpest part of the turn",
      "Before you begin the turn",
      "Only after exiting the turn"
    ],
    correctIndex: 2,
    explanation: "Shifting before a turn keeps the motorcycle stable and avoids sudden power changes while leaned over."
  },

  // 7. Following distance
  {
    question: "The handbook’s basic following-distance rule for normal conditions is at least:",
    options: [
      "A one-second gap",
      "A two-second gap",
      "A four-second gap",
      "Whatever feels comfortable"
    ],
    correctIndex: 1,
    explanation: "Under normal conditions, you should maintain at least a two-second following distance behind another vehicle."
  },

  // 8. Lane use / HOV / toll lanes / lane splitting specifics
  {
    question: "Motorcyclists may use carpool/HOV lanes in California:",
    options: [
      "Only when carrying a passenger",
      "Only during commuting hours",
      "Unless signs specifically prohibit motorcycles",
      "Only with a special motorcycle decal"
    ],
    correctIndex: 2,
    explanation: "Motorcycles are allowed in HOV lanes unless signs specifically prohibit them."
  },
  {
    question: "When using a toll transponder or electronic payment device on a motorcycle, you may NOT place it:",
    options: [
      "In your pocket",
      "In a storage compartment on the motorcycle",
      "On the motorcycle’s windshield",
      "Dangling loosely from your wrist"
    ],
    correctIndex: 3,
    explanation: "A transponder must be secured where the toll reader can detect it, not dangling from your wrist."
  },
  {
    question: "Why is lane splitting (riding between lanes of stopped or slower-moving traffic) considered risky?",
    options: [
      "It is always illegal in California",
      "Vehicles may change lanes or open doors suddenly into your path",
      "It saves too much time and encourages speeding",
      "It only affects other drivers, not the rider"
    ],
    correctIndex: 1,
    explanation: "Lane splitting leaves you vulnerable to vehicles changing lanes, opening doors, or extending hands unexpectedly."
  },

  // 9. SEE strategy / intersections
  {
    question: "In the SEE strategy, what does the 'S' stand for?",
    options: [
      "Stop",
      "Signal",
      "Search",
      "Secure"
    ],
    correctIndex: 2,
    explanation: "SEE stands for Search, Evaluate, and Execute."
  },
  {
    question: "When evaluating hazards using SEE, you should focus on:",
    options: [
      "The color and size of nearby vehicles",
      "The speed, distance, and direction of potential hazards",
      "Only hazards directly in front of you",
      "Only road surface conditions"
    ],
    correctIndex: 1,
    explanation: "To predict how a hazard may affect you, you must know its speed, distance, and direction."
  },
  {
    question: "At a large intersection where a car can turn left across your path, you should:",
    options: [
      "Assume the driver will wait because they see you",
      "Rely on eye contact to guarantee they will yield",
      "Assume the vehicle may enter your path and be prepared to slow or take evasive action",
      "Speed up to get through before the car moves"
    ],
    correctIndex: 2,
    explanation: "Never rely on eye contact. If a vehicle can enter your path, assume it will and be ready to act."
  },
  {
    question: "When approaching a blind intersection with parked vehicles blocking your view, you should first:",
    options: [
      "Ride close to the parked cars to see better",
      "Move to the lane position that brings you into cross traffic’s field of vision as early as possible",
      "Speed up to clear the intersection quickly",
      "Ride in the center of the lane without changing position"
    ],
    correctIndex: 1,
    explanation: "Moving to a lane position that makes you visible sooner (often left portion of the lane) increases your chance of being seen at a blind intersection."
  },
  {
    question: "At a blind intersection with a stop sign, after stopping at the stop line you should:",
    options: [
      "Accelerate quickly into the intersection",
      "Edge forward and stop again where you can see, keeping your front wheel out of the cross lane",
      "Make a U-turn to avoid the intersection",
      "Sound your horn and proceed without looking again"
    ],
    correctIndex: 1,
    explanation: "You should stop at the stop line, then edge forward and stop again where you can see, keeping your front wheel out of the cross traffic lane."
  },

  // 10. Passing parked vehicles / parking / visibility
  {
    question: "When passing a line of parked cars, the safest lane position is usually:",
    options: [
      "As close as possible to the parked cars",
      "In the left portion of your lane away from parked vehicles",
      "In the right portion of your lane near the curb",
      "Directly in the center of the lane close to the cars"
    ],
    correctIndex: 1,
    explanation: "Staying toward the left portion of your lane helps you avoid doors opening and people stepping out from between vehicles."
  },
  {
    question: "When parking a motorcycle at the roadside next to a curb, you should:",
    options: [
      "Park parallel to the curb, in the direction of traffic",
      "Park at a $45$ to $90$ degree angle with a wheel or fender touching the curb",
      "Park facing against traffic for a quicker exit",
      "Park on the sidewalk if space is limited"
    ],
    correctIndex: 1,
    explanation: "The handbook recommends parking at a $45$ to $90$ degree angle to the curb with a wheel or fender touching the curb."
  },

  // 11. Dangerous surfaces / obstacles / tracks / gratings
  {
    question: "If you must ride over an uneven surface or small obstacle, you should:",
    options: [
      "Speed up just before the obstacle and sit down firmly",
      "Slow as much as possible, straighten the motorcycle, rise slightly off the seat, and roll on the throttle just before contact",
      "Apply the front brake firmly as the front wheel hits",
      "Look down at the obstacle until you cross it"
    ],
    correctIndex: 1,
    explanation: "Slow down, keep the motorcycle straight, rise slightly to absorb the shock, and roll on a little throttle to help the front wheel clear the obstacle."
  },
  {
    question: "On very slippery surfaces like ice or packed snow, you should:",
    options: [
      "Use only the front brake",
      "Ride at normal speeds to keep balance",
      "Keep the motorcycle upright and travel at a walking pace, possibly letting your feet skim the surface",
      "Lean the motorcycle heavily into turns"
    ],
    correctIndex: 2,
    explanation: "On extremely slippery surfaces, keep the motorcycle upright, travel very slowly, and if necessary let your feet skim the surface for balance."
  },
  {
    question: "When crossing railroad tracks that run parallel to your lane, you should:",
    options: [
      "Cross them at an angle of at least $45^\\circ$",
      "Ride directly along the tracks",
      "Stop and walk the motorcycle over the tracks",
      "Cross at as shallow an angle as possible"
    ],
    correctIndex: 0,
    explanation: "Move away from the tracks and then cross at an angle of at least $45^\\circ$ to avoid having your tires caught."
  },
  {
    question: "When riding over rain grooves or metal bridge gratings, your motorcycle may:",
    options: [
      "Immediately lose all traction",
      "Weave or wander slightly, which usually is not hazardous",
      "Stop suddenly",
      "High-side without warning"
    ],
    correctIndex: 1,
    explanation: "Grooves and gratings can cause a wandering feeling; stay relaxed, maintain a steady speed, and ride straight across."
  },

  // 12. Mechanical problems
  {
    question: "If a tire suddenly goes flat while you are riding, your first reaction should be to:",
    options: [
      "Apply the brakes firmly and immediately",
      "Grip the handlebars firmly, ease off the throttle, and keep a straight course",
      "Shift rapidly to a lower gear",
      "Swerve to the shoulder"
    ],
    correctIndex: 1,
    explanation: "Hold the handlebars firmly, ease off the throttle, and keep the bike straight, then brake gradually with the tire that is not flat."
  },
  {
    question: "A stuck throttle should be handled by:",
    options: [
      "Shutting off the ignition key only",
      "Braking hard with both brakes",
      "Immediately operating the engine cut-off switch and pulling in the clutch",
      "Downshifting repeatedly"
    ],
    correctIndex: 2,
    explanation: "If the throttle will not free, immediately hit the engine cut-off switch and pull in the clutch to remove power to the rear wheel."
  },
  {
    question: "A motorcycle wobble (front wheel and handlebars shaking side to side) is most often caused by:",
    options: [
      "Using too much front brake",
      "Improper loading, unsuitable accessories, or incorrect tire pressure",
      "Riding too slowly",
      "Use of the engine cut-off switch"
    ],
    correctIndex: 1,
    explanation: "Most wobbles are traced to improper loading, incorrect tire pressure, or unsuitable accessories."
  },
  {
    question: "If your motorcycle develops a wobble, you should:",
    options: [
      "Accelerate hard to ride out of it",
      "Fight the handlebars to stop the movement",
      "Grip the bars firmly, roll off the throttle gradually, and avoid braking",
      "Apply both brakes immediately"
    ],
    correctIndex: 2,
    explanation: "Do not fight the wobble or brake; hold the bars firmly, gradually roll off the throttle, move your weight forward, and leave the road as soon as you can safely."
  },
  {
    question: "If your drive chain or belt breaks while riding, you should:",
    options: [
      "Immediately accelerate",
      "Pull in the clutch and brake to a stop",
      "Turn off the headlight and coast",
      "Continue riding until the next exit"
    ],
    correctIndex: 1,
    explanation: "A broken chain or belt can lock the rear wheel; pull in the clutch and brake to a safe stop."
  },
  {
    question: "Engine seizure (locking up) is usually caused by:",
    options: [
      "Using too much front brake",
      "Using the wrong fuel",
      "Low or no engine oil causing overheating",
      "A dirty air filter"
    ],
    correctIndex: 2,
    explanation: "When an engine is low on oil, internal parts overheat and can seize, locking the rear wheel."
  },

  // 13. Passengers / child passengers / loads / towing
  {
    question: "Before carrying a passenger, your motorcycle must have:",
    options: [
      "Only a larger fuel tank",
      "A seat large enough for two and footrests for the passenger",
      "Special handlebars",
      "A windshield"
    ],
    correctIndex: 1,
    explanation: "A proper passenger seat and footrests are required so the passenger can sit securely with firm footing."
  },
  {
    question: "Which instruction should you give a passenger BEFORE starting the ride?",
    options: [
      "Keep your feet down at stops to help balance",
      "Lean opposite to every turn",
      "Keep both feet on the footrests at all times, even when stopped",
      "Avoid holding onto the rider"
    ],
    correctIndex: 2,
    explanation: "Passengers should keep their feet on the footrests at all times, even when stopped, to avoid upsetting balance."
  },
  {
    question: "When riding with a passenger, you should:",
    options: [
      "Accelerate and brake as you normally would",
      "Ride a little slower and begin slowing sooner for stops",
      "Take curves faster because of the extra weight",
      "Ride closer to other vehicles"
    ],
    correctIndex: 1,
    explanation: "Extra weight makes the motorcycle respond more slowly, so ride slightly slower and start slowing earlier."
  },
  {
    question: "When carrying a load in saddlebags, you should:",
    options: [
      "Load one side heavier to help balance",
      "Distribute the weight as evenly as possible between both sides",
      "Place all heavy items on the right side",
      "Place all light items at the bottom and heavy items on top"
    ],
    correctIndex: 1,
    explanation: "Uneven loads can cause the motorcycle to drift; distribute weight roughly equally in both saddlebags."
  },
  {
    question: "When towing a trailer with a motorcycle in California, which is true?",
    options: [
      "You may use carpool lanes if you maintain the speed limit",
      "You must not exceed $55$ mph and must stay in the right lane (or right two lanes on a four-lane highway)",
      "You may travel in any lane as long as you signal",
      "You must travel at least $45$ mph at all times"
    ],
    correctIndex: 1,
    explanation: "Motorcycles towing trailers may not exceed 55 mph and must remain in the right lane (or right two lanes on a four-lane highway) and are not allowed in carpool lanes."
  },

  // 14. Group riding (new details)
  {
    question: "For safety, a motorcycle group should generally be limited to:",
    options: [
      "No more than two riders",
      "About four or five riders per group before splitting into smaller groups",
      "At least ten riders",
      "As many riders as possible in one group"
    ],
    correctIndex: 1,
    explanation: "Groups larger than four or five riders should be split into smaller groups to make it easier to stay together and for others to pass safely."
  },
  {
    question: "In a proper staggered formation, the second rider should be positioned:",
    options: [
      "Directly beside the leader in the same lane",
      "One second behind the leader in the right portion of the lane",
      "Two seconds behind the leader in the left portion of the lane",
      "Directly behind the leader in the center of the lane"
    ],
    correctIndex: 1,
    explanation: "In a staggered formation the leader rides in the left portion of the lane; the second rider stays about one second behind in the right portion."
  },
  {
    question: "When should a group of riders switch from staggered to single-file formation?",
    options: [
      "On straightaways",
      "When riding curves, turning, or entering/leaving a highway",
      "In city traffic only",
      "Never; staggered is always best"
    ],
    correctIndex: 1,
    explanation: "Single-file formation is recommended in curves, when turning, and when entering or leaving highways."
  },

  // 15. Alcohol / fatigue / law
  {
    question: "In California, it is illegal for a person under 21 years old to ride with a BAC of:",
    options: [
      "0.08% or higher",
      "0.04% or higher",
      "0.01% or higher",
      "Any amount as long as they can ride safely"
    ],
    correctIndex: 2,
    explanation: "California has zero tolerance for under-21 riders: a BAC of $0.01\\%$ or more is illegal."
  },
  {
    question: "Which factor does NOT affect how quickly alcohol raises your blood alcohol concentration (BAC)?",
    options: [
      "How fast you drink",
      "Your body weight",
      "Whether you are tired or sick",
      "The color of your motorcycle"
    ],
    correctIndex: 3,
    explanation: "BAC is affected by how much and how fast you drink and by factors like weight, fatigue, and health—not by your motorcycle’s color."
  },
  {
    question: "Which is a recommended way to reduce fatigue on long rides?",
    options: [
      "Riding more than eight hours without stopping",
      "Taking frequent rest breaks at least every two hours",
      "Drinking alcohol to relax",
      "Using stimulants to stay awake"
    ],
    correctIndex: 1,
    explanation: "The handbook recommends frequent rest breaks—at least every two hours—and limiting total daily riding time."
  },

  // 16. Insurance / evading officers / TREAD LIGHTLY
  {
    question: "You must report a traffic collision to DMV using form SR1 if:",
    options: [
      "There is more than $1{,}000$ in property damage or anyone is injured, no matter how slightly",
      "Only if someone is killed",
      "Only if police respond to the scene",
      "Only if you are at fault"
    ],
    correctIndex: 0,
    explanation: "Any collision with more than $1{,}000$ in damage or any injury must be reported to DMV within 10 days using form SR1."
  },
  {
    question: "Evading a peace officer while riding a motorcycle is:",
    options: [
      "A minor traffic infraction",
      "A misdemeanor punishable by up to one year in county jail",
      "Legal if you believe you are being harassed",
      "Only illegal if you exceed the speed limit"
    ],
    correctIndex: 1,
    explanation: "Willfully fleeing or attempting to evade a peace officer is a misdemeanor punishable by up to a year in county jail, with more severe penalties if injuries or death occur."
  },
  {
    question: "The TREAD LIGHTLY! guidelines mainly apply to:",
    options: [
      "Riding in heavy city traffic",
      "Off-highway and public land riding to minimize environmental damage",
      "Using HOV lanes",
      "Riding in carpool lanes"
    ],
    correctIndex: 1,
    explanation: "TREAD LIGHTLY! encourages responsible off-highway riding, minimizing damage to public lands and wildlife."
  },
  {
    question: "Which action is consistent with TREAD LIGHTLY! principles?",
    options: [
      "Cutting new trails on steep hillsides",
      "Driving across meadows and stream banks to save time",
      "Avoiding soft, wet trails that can be easily torn up",
      "Ignoring gate closures"
    ],
    correctIndex: 2,
    explanation: "Riders are urged to stay off soft, wet roads and trails that are easily damaged and to respect closures and existing trails."
  }
];

const MORE_LEGAL_QUESTIONS = [
  // LICENSE CLASSES / AGE RULES / PERMITS

  {
    question: "A rider who is 15½ to 17 years old and wants an M1 license must:",
    options: [
      "Pass the motorcycle skills test only",
      "Submit a DL 389 and proof of driver education and behind‑the‑wheel training or already hold a Class C license, and pass both driver and motorcycle knowledge tests",
      "Take only the motorcycle knowledge test",
      "Complete only a CMSP course with no DMV testing"
    ],
    correctIndex: 1,
    explanation: "Minors 15½–17 must submit a DL 389, show completion of driver education and driver training (or hold a Class C), and pass both the driver and motorcycle knowledge tests."
  },
  {
    question: "Applicants 18 to 20 years old who want an M1 or M2 license must:",
    options: [
      "Submit a DL 389 and pass both the driver and motorcycle knowledge tests",
      "Take only the motorcycle skills test",
      "Complete driver education but not motorcycle training",
      "Pass the motorcycle skills test only; no written test is required"
    ],
    correctIndex: 0,
    explanation: "Riders 18–20 must submit a DL 389 from a CMSP course and pass both the driver’s knowledge and motorcycle knowledge tests."
  },
  {
    question: "Motorcycle instruction permit holders (M1/M2) must have their permit for at least:",
    options: [
      "3 months before licensing",
      "6 months before being issued a license (for under‑21 riders)",
      "12 months before licensing",
      "There is no minimum time requirement"
    ],
    correctIndex: 1,
    explanation: "Under‑21 riders must hold the motorcycle instruction permit for at least 6 months before being issued a license."
  },
  {
    question: "Which of the following is a restriction that applies to ALL M1/M2 instruction permits?",
    options: [
      "You may not ride more than $55$ mph",
      "You may not ride at night, carry passengers, or ride on freeways",
      "You may only ride on city streets with a posted limit under $35$ mph",
      "You may not leave your home city"
    ],
    correctIndex: 1,
    explanation: "The Class M1/M2 instruction permit does not allow freeway riding, carrying passengers, or riding at night."
  },
  {
    question: "How long is a DL 389 (Certificate of Completion of Motorcycle Training) valid from the date of issue?",
    options: [
      "6 months",
      "12 months",
      "18 months",
      "Until the rider turns 21"
    ],
    correctIndex: 1,
    explanation: "The DL 389 is valid for 12 months from the issue date."
  },
  {
    question: "A motorized scooter may be used for:",
    options: [
      "The DMV motorcycle skills test only",
      "The DMV motorcycle skills test or road test",
      "Normal riding on public roads with any class of driver license",
      "Riding on sidewalks and bike paths only"
    ],
    correctIndex: 2,
    explanation: "A motorized scooter may be driven with any class driver license, but it may not be used to take the motorcycle skills test."
  },

  // SPECIAL CASES: SHORT‑TERM RENTALS, MOPEDS, E‑BIKES

  {
    question: "A person with a valid California driver license of any class may operate a short‑term (48 hours or less) rental motorized bicycle:",
    options: [
      "Only if they have a Class M2 endorsement",
      "Without any special exam or Class M2 endorsement",
      "Only if they pass an on‑the‑spot DMV test",
      "Only if they are at least 25 years old"
    ],
    correctIndex: 1,
    explanation: "The law allows a licensed driver of any class to operate a short‑term rental motorized bicycle (48 hours or less) without a special exam or M2 endorsement."
  },
  {
    question: "Which statement about electric bicycles in California is TRUE?",
    options: [
      "They must be registered and insured like motorcycles",
      "Operators must have a Class M1 license",
      "All classes of electric bicycles are exempt from DMV registration, driver license, and insurance requirements",
      "They may not be ridden in any bicycle lane"
    ],
    correctIndex: 2,
    explanation: "Electric bicycle classes 1, 2, and 3 are exempt from motor vehicle financial responsibility, DL, and license plate requirements."
  },
  {
    question: "Where may a motorized bicycle, moped, or Class 3 electric bicycle NOT be ridden unless local law specifically permits it?",
    options: [
      "On city streets",
      "On bicycle paths or trails, equestrian trails, hiking trails, or recreational trails not adjacent to a road",
      "In the right lane of a freeway",
      "On private driveways"
    ],
    correctIndex: 1,
    explanation: "Mopeds, motorized bicycles, and Class 3 e‑bikes may not be ridden on certain paths or trails unless they are next to a road or local law allows it."
  },

  // ROAD / FREEWAY / LANE RULES

  {
    question: "A motor‑driven cycle (less than $150$ cc) may NOT be operated:",
    options: [
      "On any public street",
      "On a freeway or expressway where signs prohibit motor‑driven cycles",
      "In residential areas",
      "On roads with speed limits under $35$ mph"
    ],
    correctIndex: 1,
    explanation: "Motor‑driven cycles are prohibited on freeways or expressways where signs are posted banning them."
  },
  {
    question: "It is illegal to ride a motor‑driven cycle, moped, motorized bicycle, or electric bicycle on a freeway or expressway:",
    options: [
      "At night",
      "If it has less than $250$ watts of power",
      "Whenever signs are posted prohibiting their operation",
      "Only in the left lane"
    ],
    correctIndex: 2,
    explanation: "These vehicles may not be ridden on a freeway or expressway where signs prohibit their operation."
  },
  {
    question: "When using a carpool (HOV) lane on a freeway, you may enter or exit:",
    options: [
      "By crossing the double parallel lines if traffic is light",
      "Only at designated entry or exit places where the lines are broken",
      "Anywhere within one half mile of your exit",
      "Only when traffic is stopped"
    ],
    correctIndex: 1,
    explanation: "You may not cross double parallel lines; you must enter or exit an HOV lane only where designated."
  },
  {
    question: "When a motorcycle is towing a trailer on a freeway, the rider:",
    options: [
      "May use any lane if traveling at the speed limit",
      "Must not exceed $55$ mph and must remain in the right lane (or right two lanes on a four‑lane highway)",
      "May travel in the HOV lane if carrying a passenger",
      "Must always use hazard flashers"
    ],
    correctIndex: 1,
    explanation: "A motorcycle towing a trailer must stay at or below $55$ mph and remain in the right lane (or right two lanes) and may not use carpool lanes."
  },

  // EQUIPMENT / HELMET / EARPLUG LAWS

  {
    question: "Who is required to wear a U.S. DOT‑compliant motorcycle safety helmet when riding in California?",
    options: [
      "Only riders under $18$ years old",
      "Only riders and passengers under $21$ years old",
      "Only the operator",
      "All riders and passengers when on a motorcycle, motor‑driven cycle, or motorized bicycle"
    ],
    correctIndex: 3,
    explanation: "California Vehicle Code §27803 requires all riders and passengers to wear a U.S. DOT‑compliant motorcycle safety helmet."
  },
  {
    question: "Which of the following is TRUE about modifying a motorized scooter’s exhaust system?",
    options: [
      "It is allowed if it makes the scooter louder",
      "It is allowed if it improves fuel economy",
      "It must not be modified or altered",
      "It is allowed only for scooters with engines under $50$ cc"
    ],
    correctIndex: 2,
    explanation: "The exhaust system of a motorized scooter must not be modified or altered."
  },
  {
    question: "California law regarding headsets or earplugs while riding says you may:",
    options: [
      "Wear any kind of earphones that block all sound",
      "Wear earplugs in both ears only if they are designed to reduce harmful noise and still allow you to hear sirens and horns",
      "Wear ear coverage only in one ear",
      "Never wear any ear protection while riding"
    ],
    correctIndex: 1,
    explanation: "You may use earplugs in both ears if they are specifically designed to reduce injurious noise and do not prevent you from hearing sirens or horns."
  },
  {
    question: "When carrying a passenger, your motorcycle must be equipped with:",
    options: [
      "A backrest and saddlebags",
      "A seat large enough for two and passenger footrests",
      "An engine larger than $500$ cc",
      "A windshield and fairing"
    ],
    correctIndex: 1,
    explanation: "You must have a proper passenger seat and footrests so the passenger can sit and support themselves safely."
  },

  // TESTING / CHEATING

  {
    question: "During the DMV motorcycle knowledge test, using a cell phone, cheat sheet, or handbook is:",
    options: [
      "Permitted if you do not talk to anyone",
      "Permitted only once",
      "Considered cheating and will result in test failure and possible action against your driving privilege",
      "Allowed if other applicants are also using them"
    ],
    correctIndex: 2,
    explanation: "Use of any testing aid is strictly prohibited and may lead to failure and DMV action against your driving privilege."
  },

  // COLLISION / INSURANCE / REPORTING RULES

  {
    question: "Which vehicles are subject to the financial responsibility (insurance) laws in California?",
    options: [
      "Passenger vehicles only",
      "Passenger vehicles and trucks only",
      "Motorcycles must meet the same financial responsibility laws as other motor vehicles",
      "Motorcycles are exempt from insurance requirements"
    ],
    correctIndex: 2,
    explanation: "The financial responsibility provisions of the Vehicle Code apply to motorcycle owners and operators."
  },
  {
    question: "You must file a Report of Traffic Accident Occurring in California (SR1) with DMV when:",
    options: [
      "Police have already written a report",
      "You are at fault but the damage is under $1{,}000$",
      "The collision causes more than $1{,}000$ in property damage to anyone or anyone is injured, no matter how slightly",
      "The collision occurs outside California"
    ],
    correctIndex: 2,
    explanation: "An SR1 must be filed within 10 days if there is more than $1{,}000$ in property damage or any injury, even minor."
  },
  {
    question: "Who is responsible for submitting the SR1 accident report to DMV after a qualifying collision involving a motorcycle?",
    options: [
      "The California Highway Patrol (CHP)",
      "The local police department",
      "You or your insurance/representative; police will not submit it for you",
      "Only the other driver"
    ],
    correctIndex: 2,
    explanation: "CHP or police do not file the SR1 for you; you or your insurance/representative must submit it to DMV."
  },

  // DUI / BAC / IMPAIRMENT

  {
    question: "In California, it is illegal for a rider 21 or older to operate a motorcycle with a BAC of:",
    options: [
      "$0.01\\%$ or above",
      "$0.04\\%$ or above",
      "$0.08\\%$ or above",
      "$0.10\\%$ or above"
    ],
    correctIndex: 2,
    explanation: "For riders 21 and over, riding with a BAC of $0.08\\%$ or more is illegal."
  },
  {
    question: "For a rider under 21 years old, riding with which BAC is illegal in California?",
    options: [
      "$0.01\\%$ or above",
      "$0.04\\%$ or above",
      "$0.08\\%$ or above",
      "Only $0.10\\%$ or above"
    ],
    correctIndex: 0,
    explanation: "Under‑21 riders are subject to zero‑tolerance rules; a BAC of $0.01\\%$ or more is illegal."
  },
  {
    question: "Which of the following best describes how alcohol is eliminated from the body?",
    options: [
      "Exercise can quickly burn off alcohol",
      "Fresh air and coffee can sober you up immediately",
      "Only time eliminates alcohol; on average about one drink per hour is processed",
      "A cold shower will rapidly lower your BAC"
    ],
    correctIndex: 2,
    explanation: "Only time reduces BAC; on average, the body eliminates about one standard drink per hour, though this varies."
  },

  // EVADING OFFICERS / PENALTIES

  {
    question: "Willfully fleeing or attempting to evade a peace officer performing their duties is:",
    options: [
      "A minor traffic violation",
      "A misdemeanor punishable by up to one year in county jail",
      "Legal if you believe you did nothing wrong",
      "Only illegal if the officer is in an unmarked unit"
    ],
    correctIndex: 1,
    explanation: "Evading a peace officer is a misdemeanor punishable by up to one year in county jail under Vehicle Code §2800.1."
  },
  {
    question: "If you cause serious bodily injury to someone while evading a peace officer on your motorcycle, you may be subject to:",
    options: [
      "A small fine but no jail time",
      "Only a license suspension",
      "Imprisonment in state prison for 3, 5, or 7 years, or up to one year in county jail, plus a fine",
      "Only mandatory traffic school"
    ],
    correctIndex: 2,
    explanation: "Causing serious bodily injury while evading an officer can result in 3, 5, or 7 years in state prison or up to one year in county jail and substantial fines (VC §2800.3(a))."
  },
  {
    question: "Causing a death while evading a peace officer is punishable by:",
    options: [
      "A warning and license suspension only",
      "A maximum of 30 days in jail",
      "Imprisonment in state prison for 4, 6, or 10 years",
      "A fine only, with no jail time"
    ],
    correctIndex: 2,
    explanation: "If someone is killed while you are willfully evading a peace officer, you face 4, 6, or 10 years in state prison under VC §2800.3(b)."
  },

  // TREAD LIGHTLY / OFF‑HIGHWAY

  {
    question: "Which of the following is a TREAD LIGHTLY! recommendation for off‑highway riding?",
    options: [
      "Pioneering new trails wherever possible",
      "Crossing stream banks and meadows to save time",
      "Staying off soft, wet roads and trails that are easily torn up",
      "Ignoring regulatory signs on public land"
    ],
    correctIndex: 2,
    explanation: "TREAD LIGHTLY! encourages riders to avoid soft, wet trails that can be damaged and to obey gate closures and regulations."
  },
  {
    question: "When riding on public lands managed by the U.S. Forest Service or BLM, you should:",
    options: [
      "Ignore local travel maps and signs",
      "Obtain a travel map and follow posted regulations",
      "Create your own shortcuts and switchbacks on hills",
      "Ride anywhere unless someone tells you to stop"
    ],
    correctIndex: 1,
    explanation: "You should obtain and follow official travel maps and regulations from agencies such as USFS, BLM, or state parks."
  }
];

// To merge without removing anything:
ALL_QUESTIONS.push(...MORE_LEGAL_QUESTIONS);

// Merge without removing anything
ALL_QUESTIONS.push(...NEW_QUESTIONS);

// =======================================
// STATE VARIABLES
// =======================================

let currentMode  = MODE_TEST;
let questionSet  = [];
let currentIndex = 0;
let score        = 0;
let answered     = false;


// =======================================
// DOM ELEMENTS
// =======================================

const quizCard     = document.getElementById("quiz-card");
const resultCard   = document.getElementById("result-card");
const questionText = document.getElementById("question-text");
const optionsList  = document.getElementById("options-list");
const feedbackEl   = document.getElementById("feedback");
const progressEl   = document.getElementById("progress");
const modeInfoEl   = document.getElementById("mode-info");
const resultTitle  = document.getElementById("result-title");

const checkBtn     = document.getElementById("check-btn");
const nextBtn      = document.getElementById("next-btn");
const scoreText    = document.getElementById("score-text");
const restartBtn   = document.getElementById("restart-btn");

const testModeBtn  = document.getElementById("test-mode-btn");
const studyModeBtn = document.getElementById("study-mode-btn");


// =======================================
// UTILS
// =======================================

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}


// =======================================
// QUIZ INITIALIZATION
// =======================================

function initQuiz(mode) {
  currentMode = mode;

  if (!ALL_QUESTIONS || ALL_QUESTIONS.length === 0) {
    modeInfoEl.textContent = "Error: question bank is empty. Paste your ALL_QUESTIONS array into script.js.";
    quizCard.classList.add("hidden");
    resultCard.classList.add("hidden");
    return;
  }

  if (mode === MODE_TEST) {
    // 25 random questions from the full bank
    questionSet = shuffleArray(ALL_QUESTIONS).slice(0, EXAM_LENGTH);
    modeInfoEl.textContent =
      "Test Mode: 25 randomized questions from the question bank. You must score 80% or higher to pass.";
  } else {
    // All questions in random order
    questionSet = shuffleArray(ALL_QUESTIONS);
    modeInfoEl.textContent =
      "Study Mode: All questions in random order. No pass/fail, but score is shown.";
  }

  currentIndex = 0;
  score        = 0;
  answered     = false;

  quizCard.classList.remove("hidden");
  resultCard.classList.add("hidden");

  renderQuestion();
}


// =======================================
// RENDER QUESTION
// =======================================

function renderQuestion() {
  const q = questionSet[currentIndex];
  const total = questionSet.length;

  progressEl.textContent = `Question ${currentIndex + 1} of ${total}`;
  questionText.textContent = q.question;
  feedbackEl.textContent = "";
  feedbackEl.className = "feedback";
  nextBtn.disabled = true;
  answered = false;

  optionsList.innerHTML = "";

  q.options.forEach((opt, i) => {
    const li = document.createElement("li");
    const label = document.createElement("label");
    const input = document.createElement("input");

    label.classList.add("option-label");
    input.type = "radio";
    input.name = "option";
    input.value = i;
    input.classList.add("option-input");

    label.appendChild(input);
    label.appendChild(document.createTextNode(opt));
    li.appendChild(label);
    optionsList.appendChild(li);
  });
}


// =======================================
// ANSWER HANDLING
// =======================================

function getSelectedOptionIndex() {
  const inputs = document.querySelectorAll(".option-input");
  for (const input of inputs) {
    if (input.checked) return parseInt(input.value, 10);
  }
  return null;
}

function checkAnswer() {
  if (answered) return;

  const q = questionSet[currentIndex];
  const selectedIndex = getSelectedOptionIndex();

  if (selectedIndex === null) {
    feedbackEl.textContent = "Please select an answer.";
    feedbackEl.className = "feedback incorrect";
    return;
  }

  const labels = document.querySelectorAll(".option-label");

  labels.forEach((label, i) => {
    label.classList.remove("option-correct", "option-incorrect");
    if (i === q.correctIndex) label.classList.add("option-correct");
    if (i === selectedIndex && i !== q.correctIndex) {
      label.classList.add("option-incorrect");
    }
  });

  if (selectedIndex === q.correctIndex) {
    score++;
    feedbackEl.textContent = "Correct. " + (q.explanation || "");
    feedbackEl.className = "feedback correct";
  } else {
    feedbackEl.textContent = "Incorrect. " + (q.explanation || "");
    feedbackEl.className = "feedback incorrect";
  }

  answered = true;
  nextBtn.disabled = false;
}

function goToNext() {
  if (!answered) return;

  currentIndex++;

  if (currentIndex >= questionSet.length) {
    showResults();
  } else {
    renderQuestion();
  }
}


// =======================================
// RESULTS
// =======================================

function showResults() {
  quizCard.classList.add("hidden");
  resultCard.classList.remove("hidden");

  const total = questionSet.length;
  const percent = ((score / total) * 100).toFixed(1);

  if (currentMode === MODE_TEST) {
    const passed = (score / total) >= PASS_THRESHOLD;
    resultTitle.textContent = passed ? "PASS" : "FAIL";

    const extra = passed
      ? "You met the 80% passing standard."
      : "You did not reach 80%. Review your weak areas and try again.";

    scoreText.textContent =
      `You scored ${score} out of ${total} (${percent}%).\n${extra}`;
  } else {
    resultTitle.textContent = "Study Mode Complete";
    scoreText.textContent =
      `You answered ${score} out of ${total} correctly (${percent}%).`;
  }
}


// =======================================
// EVENT LISTENERS
// =======================================

checkBtn.addEventListener("click", checkAnswer);
nextBtn.addEventListener("click", goToNext);
restartBtn.addEventListener("click", () => initQuiz(currentMode));

testModeBtn.addEventListener("click", () => initQuiz(MODE_TEST));
studyModeBtn.addEventListener("click", () => initQuiz(MODE_STUDY));


// Start app in Test Mode by default
initQuiz(MODE_TEST);
