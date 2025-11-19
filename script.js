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
