import { Monument } from "../types";

export const monuments: Monument[] = [
  {
    id: "giza-pyramid",
    title: "The Great Pyramid of Giza",
    subtitle: "The last standing wonder of the ancient world",
    location: "Giza Plateau, Cairo",
    coordinates: { x: 45, y: 35 },
    timeline: "c. 2560 BCE (Old Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1539650116574-8efeb43e2750?auto=format&fit=crop&w=1200&q=80",
    description: "Built for the Pharaoh Khufu (Cheops), this monumental tomb stood as the tallest man-made structure on Earth for over 3,800 years.",
    detailedDescription: "The Great Pyramid is a triumph of ancient engineering. Composed of an estimated 2.3 million limestone blocks, each weighing between 2.5 to 15 tons, it was built with astonishing mathematical precision. The sides align almost perfectly with the four cardinal points of the compass. Within its stone massive body lie the King's Chamber, the Queen's Chamber, and the Grand Gallery, connected by a network of steep shafts.",
    quote: "Man fears Time, but Time fears the Pyramids.",
    quoteAuthor: "Ancient Arab Proverb",
    interestingFacts: [
      "It was originally covered in highly polished casing stones of white limestone, reflecting the sun's light like a giant star.",
      "The corners have ball-and-socket joints built into the foundations to withstand thermal expansion and earthquakes.",
      "The precision is so extreme that the maximum deviation of the sides from the true cardinal directions is less than 1/15th of a degree."
    ],
    statistics: [
      { label: "Original Height", value: "146.6", suffix: " m" },
      { label: "Estimated Weight", value: "6,000,000", suffix: " Tons" },
      { label: "Construction Time", value: "20", suffix: " Years" }
    ]
  },
  {
    id: "great-sphinx",
    title: "The Great Sphinx",
    subtitle: "Sentinel of the Giza Plateau",
    location: "Giza Plateau, Cairo",
    coordinates: { x: 46, y: 36 },
    timeline: "c. 2500 BCE (Old Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=1200&q=80",
    description: "A monolithic limestone sculpture of a reclining sphinx—a mythical creature with the body of a lion and the head of a human, believed to represent Pharaoh Khafre.",
    detailedDescription: "Carved directly from the living bedrock of the Giza Plateau, the Sphinx is the oldest known monumental sculpture in Egypt. It faces directly from west to east, greeting the rising sun. For millennia, the Sphinx was buried up to its neck in sand, which protected its body from erosion, preserving the mystery of its underground tunnels and hidden chambers.",
    quote: "I have seen the Sphinx. It is a presence, silent, eternal, keeping watch over the sands of time.",
    quoteAuthor: "Jean-François Champollion",
    interestingFacts: [
      "The Sphinx was originally painted in vibrant colors: the face was red, and parts of the headress were blue and yellow.",
      "Between its massive paws stands the 'Dream Stele', placed by Thutmose IV, who fell asleep in the Sphinx's shadow and was promised the crown if he cleared the sand.",
      "Contrary to popular myth, Napoleon's soldiers did not shoot off the Sphinx's nose; drawings from 1737 show it was already missing."
    ],
    statistics: [
      { label: "Total Length", value: "73", suffix: " m" },
      { label: "Height", value: "20", suffix: " m" },
      { label: "Carved from", value: "1", suffix: " Block" }
    ]
  },
  {
    id: "karnak-temple",
    title: "Karnak Temple Complex",
    subtitle: "The great sanctuary of Amun-Ra",
    location: "El-Karnak, Luxor",
    coordinates: { x: 55, y: 65 },
    timeline: "c. 2000 – 30 BCE (Middle to Ptolemaic)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1623018035782-b26e5d485cd2?auto=format&fit=crop&w=1200&q=80",
    description: "The largest religious complex ever constructed, comprising a vast mix of decayed temples, chapels, pylons, and other buildings.",
    detailedDescription: "Karnak was the heart of the state religion of the New Kingdom. Over thirty pharaohs contributed to its construction, making it an extraordinary archaeological archive of architectural styles. Its most famous feature is the Great Hypostyle Hall, a massive forest of 134 colossal sandstone columns arranged in 16 rows, towering up to 21 meters, heavily decorated with relief carvings.",
    quote: "At Karnak, one feels the crushing scale of Egypt. The pharaohs did not build for men; they built for the heavens.",
    quoteAuthor: "Amelia Edwards",
    interestingFacts: [
      "The Great Hypostyle Hall is large enough to comfortably accommodate the entire Cathedral of Notre Dame.",
      "It contains the giant obelisk of Queen Hatshepsut, a single piece of pink granite weighing over 340 tons, erected to proclaim her divine right to rule.",
      "A sacred lake lies inside the complex, where priests performed purifying rituals under the stars."
    ],
    statistics: [
      { label: "Vast Area", value: "200", suffix: " Acres" },
      { label: "Hypostyle Columns", value: "134", suffix: "" },
      { label: "Ruling builders", value: "30+", suffix: " Pharaohs" }
    ]
  },
  {
    id: "luxor-temple",
    title: "Luxor Temple",
    subtitle: "The temple of pharaoh's coronation",
    location: "East Bank of the Nile, Luxor",
    coordinates: { x: 54, y: 66 },
    timeline: "c. 1400 BCE (New Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1568322422390-0ec4fc9c7f18?auto=format&fit=crop&w=1200&q=80",
    description: "A striking temple in the heart of modern Luxor, dedicated to the rejuvenation of kingship rather than the worship of a specific deity.",
    detailedDescription: "Conceived by Amenhotep III and completed by Ramesses II, Luxor Temple served as the central stage for the annual Opet Festival. During this crucial festival, the statues of Amun, Mut, and Khonsu were carried in grand procession from Karnak to Luxor Temple, reinforcing the pharaoh's divine connection to the gods. An avenue of human-headed sphinxes originally stretched 3 kilometers to connect the two temples.",
    quote: "When dusk falls on the columns of Luxor, the stone glows with an amber warmth that carries the spirit of antiquity.",
    quoteAuthor: "Howard Carter",
    interestingFacts: [
      "The temple has been in continuous use as a place of worship for over 3,400 years, containing an ancient Egyptian sanctuary, a Roman cult temple, and an active mosque.",
      "One of the two massive obelisks carved by Ramesses II for the entrance now stands in the Place de la Concorde in Paris.",
      "The walls boast detailed carvings depicting Ramesses II's epic Battle of Kadesh against the Hittites."
    ],
    statistics: [
      { label: "Avenue Length", value: "3", suffix: " km" },
      { label: "Sphinx Statues", value: "1,050", suffix: "" },
      { label: "Years of Worship", value: "3,400+", suffix: " Years" }
    ]
  },
  {
    id: "abu-simbel",
    title: "Abu Simbel Temples",
    subtitle: "The colossal rock-cut marvels of Ramesses II",
    location: "Aswan Governorate, Southern Egypt",
    coordinates: { x: 58, y: 88 },
    timeline: "c. 1264 BCE (New Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1504198266287-1659872e6590?auto=format&fit=crop&w=1200&q=80",
    description: "Two colossal rock-cut temples carved into a sandstone cliffside to commemorate Pharaoh Ramesses II's victory at the Battle of Kadesh and honor his queen, Nefertari.",
    detailedDescription: "The main temple features four seated 20-meter tall statues of Ramesses II guarding the entrance. The inner sanctuary was engineered with spectacular astronomical alignment: twice a year, on February 22 and October 22, the rays of the rising sun penetrate deep into the temple to illuminate the statues of the sun gods, leaving the god of the underworld, Ptah, in shadow.",
    quote: "The majesty of these colossi surpasses all description. They stand like eternal guardians at the frontier of the ancient world.",
    quoteAuthor: "Florence Nightingale",
    interestingFacts: [
      "In the 1960s, the entire complex was systematically cut into blocks and moved 65 meters higher up the cliff to save it from drowning in Lake Nasser during the construction of the Aswan High Dam.",
      "The relocation was one of the greatest collaborative engineering projects in modern history, involving 50 nations.",
      "October 22 is believed to be Ramesses II's coronation date, and February 22 his birthday."
    ],
    statistics: [
      { label: "Relocation Cost", value: "40", suffix: " Million $" },
      { label: "Colossus Height", value: "20", suffix: " m" },
      { label: "Blocks Moved", value: "16,000", suffix: " Blocks" }
    ]
  },
  {
    id: "valley-kings",
    title: "Valley of the Kings",
    subtitle: "The sacred valley of eternal sleep",
    location: "West Bank of the Nile, Luxor",
    coordinates: { x: 53, y: 65 },
    timeline: "c. 1539 – 1075 BCE (New Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1600577916048-804c9191e36c?auto=format&fit=crop&w=1200&q=80",
    description: "The royal burial ground for pharaohs and powerful nobles of the New Kingdom, carved deep into the desolate limestone hills.",
    detailedDescription: "Chosen for its natural pyramid-shaped mountain peak (El Qurn) and its isolation, the Valley of the Kings contains at least 63 known tombs, including those of Tutankhamun, Seti I, and Ramesses II. The tombs are decorated with extraordinary, colorful frescoes illustrating the Book of the Dead and other sacred texts designed to guide the Pharaoh through the perils of the Underworld.",
    quote: "At last, we have made a discovery that will resonate through history: a tomb, intact, untouched by the hand of the centuries.",
    quoteAuthor: "Howard Carter (upon discovering KV62)",
    interestingFacts: [
      "The walls are painted with plaster containing natural minerals (malachite for green, lapis lazuli for blue) that remain incredibly bright after 3,000 years.",
      "Not all tombs were for Pharaohs; some contained favored royal pets, mummified in exquisite sarcophagi.",
      "The tomb workers lived in a nearby specialized village called Deir el-Medina, leaving behind thousands of letters detailing daily life."
    ],
    statistics: [
      { label: "Known Tombs", value: "63", suffix: "" },
      { label: "Deepest Tomb", value: "100+", suffix: " m" },
      { label: "Years in Use", value: "500", suffix: " Years" }
    ]
  },
  {
    id: "hatshepsut-temple",
    title: "Mortuary Temple of Hatshepsut",
    subtitle: "Djeser-Djeseru: Splendor of splendors",
    location: "Deir el-Bahari, Luxor",
    coordinates: { x: 52, y: 64 },
    timeline: "c. 1479 BCE (New Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1582236359567-27051d95304f?auto=format&fit=crop&w=1200&q=80",
    description: "A breathtaking terraced temple designed by the royal architect Senenmut, harmonizing perfectly with the dramatic limestone cliffs that loom above it.",
    detailedDescription: "This unique structure consists of three grand layered terraces connected by long ramps, originally adorned with lush gardens of frankincense and myrrh trees imported from the legendary Land of Punt. Built to establish Hatshepsut's divine legitimacy as a female pharaoh, the temple's reliefs recount her miraculous birth as the daughter of Amun-Ra and her famous trading expeditions.",
    quote: "Her temple is an architectural masterpiece that seems to grow naturally out of the mountain itself—an early triumph of modern design elements in the ancient world.",
    quoteAuthor: "Sir Gaston Maspero",
    interestingFacts: [
      "Hatshepsut ruled as a full pharaoh, wearing the traditional false beard and kilt of male kings to cement her absolute authority.",
      "After her death, her stepson and successor, Thutmose III, attempted to erase her name and images from the temple walls to restore the male line.",
      "It is considered one of the earliest examples of classical colonnade architecture, pre-dating the Greek Parthenon by nearly a thousand years."
    ],
    statistics: [
      { label: "Terraced Tiers", value: "3", suffix: "" },
      { label: "Colonnade Pillars", value: "80+", suffix: "" },
      { label: "Punt Expedition Ships", value: "5", suffix: " Vessels" }
    ]
  },
  {
    id: "philae-temple",
    title: "Philae Temple of Isis",
    subtitle: "The sacred pearl of the Nile",
    location: "Philae Island, Aswan",
    coordinates: { x: 57, y: 80 },
    timeline: "c. 380 BCE – 100 CE (Ptolemaic and Roman)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=1200&q=80",
    description: "A picturesque temple complex dedicated to the goddess Isis, sitting gracefully on an island in the middle of the Nile near Aswan.",
    detailedDescription: "As the legendary resting place of Osiris's heart, Philae was a major pilgrimage site. It is one of the last outposts where traditional Egyptian religion survived, and where the final hieroglyphic inscription was carved in 394 CE, before the temple was converted into a Christian church by order of Emperor Justinian.",
    quote: "Floating on the blue waters of the Nile, Philae appears like a mirage from a golden age, dedicated to the mother goddess of magic.",
    quoteAuthor: "Arthur Weigall",
    interestingFacts: [
      "Like Abu Simbel, Philae Temple was completely dismantled and moved block-by-block to higher ground on nearby Agilkia Island to prevent permanent flooding by the Aswan Low Dam.",
      "It contains the famous Gate of Hadrian, bearing the last recorded hieroglyphic writing in human history.",
      "Isis was believed to have gathered the scattered limbs of her husband Osiris on this island and restored him to eternal life."
    ],
    statistics: [
      { label: "Islands Involved", value: "2", suffix: "" },
      { label: "Last Hieroglyph Date", value: "394", suffix: " CE" },
      { label: "Total Temple Blocks", value: "40,000", suffix: "" }
    ]
  },
  {
    id: "nile-river",
    title: "The Eternal Nile River",
    subtitle: "The lifeblood of the black land",
    location: "Flows south to north through Egypt",
    coordinates: { x: 50, y: 50 },
    timeline: "Since prehistoric times",
    category: "natural",
    imageUrl: "https://images.unsplash.com/photo-1599818817457-3f829cfbd333?auto=format&fit=crop&w=1200&q=80",
    description: "The longest river in the world, whose annual predictable floods deposited rich black silt, enabling agriculture and the rise of Egyptian civilization.",
    detailedDescription: "The Egyptians called their land 'Kemet' (the Black Land) because of the fertile black soil brought by the Nile's annual inundation ('Hapi'). The river was the primary highway of the country, linking Upper and Lower Egypt. It shaped their calendar, which had three seasons based on the water: Akhet (flooding), Peret (planting), and Shemu (harvest).",
    quote: "Egypt is the gift of the Nile.",
    quoteAuthor: "Herodotus",
    interestingFacts: [
      "The Nile flows from south to north, which is why 'Upper Egypt' refers to the southern part of the country and 'Lower Egypt' to the northern delta.",
      "The ancient Egyptians built 'Nilometers'—stone staircase structures—to measure the height of the floodwaters and predict harvest taxes.",
      "The papyrus reeds growing along the banks were used to create the world's first paper, boats, sandals, and ropes."
    ],
    statistics: [
      { label: "Total Length", value: "6,650", suffix: " km" },
      { label: "Delta Width", value: "240", suffix: " km" },
      { label: "Egypt Population along it", value: "95", suffix: "%" }
    ]
  },
  {
    id: "tutankhamun-tomb",
    title: "Tomb of Tutankhamun",
    subtitle: "A treasure chamber untouched by the centuries",
    location: "Valley of the Kings, Luxor",
    coordinates: { x: 53, y: 64 },
    timeline: "Discovered Nov 4, 1922 (Tomb dates to c. 1323 BCE)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?auto=format&fit=crop&w=1200&q=80",
    description: "The only pharaonic tomb discovered virtually intact, filled with over 5,000 extraordinary treasures, including the legendary solid gold death mask.",
    detailedDescription: "When Howard Carter peer through a small hole into the dark tomb of the boy king, he saw 'wonderful things.' The small tomb (KV62) was packed with gold chariots, alabaster vases, royal thrones, model boats, and the pharaoh's nested sarcophagi. The innermost coffin was made of 110 kilograms of solid gold, enclosing the mummified remains of the young king.",
    quote: "As my eyes grew accustomed to the light, details of the room within emerged slowly from the mist, strange animals, statues, and gold—everywhere the glint of gold.",
    quoteAuthor: "Howard Carter",
    interestingFacts: [
      "Tutankhamun was a relatively minor king who died at age 19; his spectacular treasures give us a hint of what grand tombs like Ramesses II's must have contained before they were plundered.",
      "The tomb was accidentally protected because workers building the tomb of Ramesses VI dumped stone chips over its entrance.",
      "Rumors of the 'Curse of the Pharaohs' spread when Lord Carnarvon, the financial backer of the dig, died of an infected mosquito bite shortly after the opening."
    ],
    statistics: [
      { label: "Catalogued Artifacts", value: "5,398", suffix: " items" },
      { label: "Golden Mask Weight", value: "10.2", suffix: " kg" },
      { label: "Years Undiscovered", value: "3,200", suffix: " Years" }
    ]
  },
  {
    id: "hieroglyphics",
    title: "Sacred Hieroglyphics",
    subtitle: "Medu Netjer: The words of the gods",
    location: "Scribes and Temples nationwide",
    coordinates: { x: 48, y: 40 },
    timeline: "c. 3200 BCE – 394 CE",
    category: "science",
    imageUrl: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&w=1200&q=80",
    description: "A formal writing system combining logographic, syllabic, and alphabetic elements, used primarily for monumental inscriptions on stone walls and tombs.",
    detailedDescription: "Hieroglyphic writing was considered a sacred art. It consists of over 1,000 distinct characters representing animals, plants, objects, and sounds. Scribes trained for years to master this complex script. For daily records and correspondence, they used a faster, cursive script called Hieratic, and later, Demotic.",
    quote: "To speak the name of the dead is to make them live again; and to write their name in stone is to grant them eternity.",
    quoteAuthor: "Egyptian funerary liturgy",
    interestingFacts: [
      "Egyptian hieroglyphs can be written from left to right, right to left, or in vertical columns. You determine the direction by looking at which way the animal or human figures are facing.",
      "The script was completely indecipherable for over 1,400 years, until the discovery of the Rosetta Stone allowed scholars to decode it.",
      "A 'Cartouche' is an oval loop containing the name of a pharaoh, acting as a magical protective amulet."
    ],
    statistics: [
      { label: "Distinct Symbols", value: "1,000+", suffix: "" },
      { label: "Years Untranslated", value: "1,400", suffix: " Years" },
      { label: "First Scribe schools", value: "c. 3000", suffix: " BCE" }
    ]
  },
  {
    id: "egyptian-museum",
    title: "The Egyptian Museum",
    subtitle: "The historic repository of pharaonic treasures",
    location: "Tahrir Square, Cairo",
    coordinates: { x: 47, y: 32 },
    timeline: "Opened in 1902",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1618083707368-b3823daa2726?auto=format&fit=crop&w=1200&q=80",
    description: "The legendary pink museum in Tahrir Square, home to the largest collection of Egyptian antiquities in the world.",
    detailedDescription: "Constructed in 1902 by French architect Marcel Dourgnon, the Egyptian Museum contains over 120,000 masterpieces. It served as the primary vault for the discoveries of the golden age of Egyptology, including the royal mummies, Amarna art, and Tutankhamun's gold sarcophagi, prior to the construction of the Grand Egyptian Museum (GEM).",
    quote: "To walk through the galleries of Tahrir is to feel the weight of five thousand years of human genius surrounding you in silent dignity.",
    quoteAuthor: "Gaston Maspero",
    interestingFacts: [
      "The building was the first purpose-built museum in the Middle East and a pioneer in classical revival architecture.",
      "The basement contains thousands of undocumented artifacts, a literal treasure cave still being explored by archaeologists.",
      "It houses the famous Tanis treasures, which rival Tutankhamun's gold in their preservation and beauty."
    ],
    statistics: [
      { label: "Artifacts on Display", value: "120,000+", suffix: "" },
      { label: "Inauguration Year", value: "1902", suffix: "" },
      { label: "Annual Visitors", value: "2.5", suffix: " Million" }
    ]
  },
  {
    id: "saqqara-pyramid",
    title: "The Step Pyramid of Saqqara",
    subtitle: "The world's first stone monument",
    location: "Saqqara Necropolis, Giza",
    coordinates: { x: 44, y: 38 },
    timeline: "c. 2670 BCE (Old Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1544985363-228cf2748bb7?auto=format&fit=crop&w=1200&q=80",
    description: "Designed by the legendary high priest and architect Imhotep for Pharaoh Djoser, this six-tiered structure marks the birth of stone architecture.",
    detailedDescription: "Before Djoser, Egyptian tombs were flat mud-brick structures called mastabas. Imhotep revolutionized architecture by stacking six mastabas of limestone on top of each other, creating a stair-like monument rising to the heavens. Underneath the pyramid lies an astonishing labyrinth of tunneled shafts, galleries, and royal chambers stretching over six kilometers.",
    quote: "With Djoser, we witness the transition from mud and wood to eternal stone. It is the dawn of monumental engineering.",
    quoteAuthor: "Dr. Mark Lehner",
    interestingFacts: [
      "Its architect, Imhotep, was so highly revered for his genius in engineering, medicine, and philosophy that he was later deified as the god of medicine by later generations.",
      "The subterranean tomb contains thousands of blue glazed faience tiles, designed to mimic the reed mats of the Pharaoh's earthly palace.",
      "The complex contains 'dummy' temples filled with rubble, designed for the spirit of the Pharaoh to use in the afterlife."
    ],
    statistics: [
      { label: "Subterranean Labyrinth", value: "6", suffix: " km" },
      { label: "Pyramid Height", value: "62", suffix: " m" },
      { label: "Pyramid Tiers", value: "6", suffix: " Steps" }
    ]
  },
  {
    id: "red-pyramid",
    title: "The Red Pyramid",
    subtitle: "The first successful true smooth pyramid",
    location: "Dahshur Necropolis, Giza",
    coordinates: { x: 43, y: 41 },
    timeline: "c. 2590 BCE (Old Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1566121318599-73fa41f17e04?auto=format&fit=crop&w=1200&q=80",
    description: "Built by Pharaoh Sneferu, the father of Khufu, this monument is the world's first successful smooth-sided pyramid, constructed from reddish limestone.",
    detailedDescription: "Following the structural failure of the Meidum Pyramid and the awkward angle changes of the Bent Pyramid, Sneferu's engineers learned that a shallower slope of 43 degrees would allow the monument to stand permanently without collapsing. Named for the rusty reddish hue of its exposed limestone core, the Red Pyramid contains three corbelled-vault chambers of soaring stone heights.",
    quote: "Sneferu built on a grand scale, perfecting the geometry that would define the landscape of Egypt for eternity.",
    quoteAuthor: "Zahi Hawass",
    interestingFacts: [
      "The Red Pyramid was originally encased in gleaming white Tura limestone, which took millions of years to strip away, revealing the reddish stone core.",
      "It is the third-largest pyramid in Egypt, surpassed only by the Great Pyramids of Khufu and Khafre at Giza.",
      "The interior chambers feature magnificent 'corbelled' ceilings where each layer of stone projects slightly inward, distributing the immense weight of the pyramid."
    ],
    statistics: [
      { label: "Slope Angle", value: "43", suffix: " Degrees" },
      { label: "Pyramid Height", value: "105", suffix: " m" },
      { label: "Base Width", value: "220", suffix: " m" }
    ]
  },
  {
    id: "bent-pyramid",
    title: "The Bent Pyramid of Dahshur",
    subtitle: "A transitional geometric marvel",
    location: "Dahshur Necropolis, Giza",
    coordinates: { x: 42, y: 40 },
    timeline: "c. 2600 BCE (Old Kingdom)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1590766948560-df140b741309?auto=format&fit=crop&w=1200&q=80",
    description: "An extraordinary pyramid built by Sneferu, featuring a unique dual-angle design that reflects a critical turning point in architectural evolution.",
    detailedDescription: "Sneferu's second pyramid attempt began at a steep angle of 54 degrees. However, mid-construction, as cracks began appearing in the internal chambers due to instability, the master builders realized the pressure was too great. In an emergency correction, they reduced the slope of the upper half to 43 degrees, creating its characteristic bent appearance.",
    quote: "The Bent Pyramid is a stone-carved diary of engineering trial and error. It shows us that even the ancients learned by failing forward.",
    quoteAuthor: "Dr. Miroslav Verner",
    interestingFacts: [
      "It has the best-preserved original polished limestone casing of any pyramid in Egypt, giving us a true glimpse of how bright they once shone.",
      "It has two separate entrances facing north and west, leading to two distinct chambers that connect via a crude tunnel.",
      "Sneferu spent his entire 30-year reign constructing three colossal pyramids to achieve the perfect shape."
    ],
    statistics: [
      { label: "Lower Angle", value: "54", suffix: " deg" },
      { label: "Upper Angle", value: "43", suffix: " deg" },
      { label: "Preserved Casing", value: "85", suffix: "%" }
    ]
  },
  {
    id: "edfu-temple",
    title: "The Temple of Edfu",
    subtitle: "The majestic fortress of Horus",
    location: "Edfu, Upper Egypt",
    coordinates: { x: 56, y: 72 },
    timeline: "c. 237 – 57 BCE (Ptolemaic Period)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1611037684693-017cd1e0a81d?auto=format&fit=crop&w=1200&q=80",
    description: "The most perfectly preserved temple in Egypt, dedicated to the falcon god Horus, providing rich details on late pharaonic architecture.",
    detailedDescription: "Because it was buried under 12 meters of desert sand and silt for nearly two millennia, Edfu escaped destruction and weathering. It boasts intact roofs, soaring pylons, dark inner sanctuaries, and walls entirely covered in historical texts recounting the epic celestial battle between Horus and his uncle Seth.",
    quote: "Entering Edfu is like boarding a time capsule. You step out of the bright modern light into the mysterious, shadowy halls of a living temple.",
    quoteAuthor: "Auguste Mariette",
    interestingFacts: [
      "The temple walls contain a sacred 'laboratory' recipe book, inscribed with detailed ancient formulas for brewing temple incense, perfumes, and oils.",
      "Two massive black granite falcon statues of Horus stand guard at the monumental entrance portal.",
      "It took 180 years of construction under the Ptolemaic kings to complete the entire complex."
    ],
    statistics: [
      { label: "Pylon Height", value: "36", suffix: " m" },
      { label: "Dug out from Sand", value: "1860", suffix: " Year" },
      { label: "Construction Span", value: "180", suffix: " Years" }
    ]
  },
  {
    id: "kom-ombo",
    title: "Temple of Kom Ombo",
    subtitle: "The double sanctuary of Sobek and Horus",
    location: "Kom Ombo, Aswan",
    coordinates: { x: 56, y: 76 },
    timeline: "c. 180 – 47 BCE (Ptolemaic Period)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1590075865003-e48277faa558?auto=format&fit=crop&w=1200&q=80",
    description: "An unusual double temple designed with absolute symmetry along a central axis, dedicated to two rival deities: Sobek the crocodile god and Horus the falcon.",
    detailedDescription: "Perched dramatically on a bend of the Nile, Kom Ombo contains duplicate entrances, halls, and sanctuaries for both gods. The northern half is dedicated to Horus the Elder, and the southern half to Sobek, who symbolized fertility and creation. The temple grounds once contained a sacred crocodile pool where live reptiles were pampered and mummified.",
    quote: "At Kom Ombo, light and shadow play across dual portals, celebrating the balance of raw, wild nature and celestial order.",
    quoteAuthor: "Arthur Weigall",
    interestingFacts: [
      "The temple walls feature some of the oldest medical reliefs in the world, depicting surgical instruments like scalpels, forceps, bone saws, and dental tools.",
      "An adjacent museum houses dozens of beautifully preserved, gilded crocodile mummies discovered in the nearby necropolis.",
      "It features a unique, deep circular Nilometer used to test the clarity and flow of the river's water."
    ],
    statistics: [
      { label: "Symmetrical Axes", value: "2", suffix: "" },
      { label: "Mummified Crocs", value: "300+", suffix: "" },
      { label: "Surgical Instruments", value: "40+", suffix: " depicted" }
    ]
  },
  {
    id: "dendera-temple",
    title: "Dendera Temple Complex",
    subtitle: "The stellar sanctuary of cosmic love",
    location: "Dendera, Qena Governorate",
    coordinates: { x: 53, y: 60 },
    timeline: "c. 125 BCE – 60 CE (Ptolemaic and Roman)",
    category: "monument",
    imageUrl: "https://images.unsplash.com/photo-1571597443372-563b71590a78?auto=format&fit=crop&w=1200&q=80",
    description: "A gorgeous temple complex dedicated to Hathor, goddess of love, joy, and astronomy, featuring some of the most vibrant painted ceilings in Egypt.",
    detailedDescription: "Dendera's hypostyle ceiling was recently cleaned of centuries of black soot, revealing dazzling astronomical calendars, zodiac wheels, and representations of the sky goddess Nut swallowing the sun each night and giving birth to it each dawn.",
    quote: "The colors of Dendera, restored to their original cosmic blues and golds, feel like looking directly into the ancient night sky.",
    quoteAuthor: "Champollion-Figeac",
    interestingFacts: [
      "The ceiling of a chapel contained the 'Dendera Zodiac'—the first complete map of the ancient starry sky, now housed in the Louvre in Paris.",
      "On the temple's rear wall is a giant carving of Cleopatra VII and her son Caesarion, fathered by Julius Caesar.",
      "Crypts hidden in the temple walls feature carvings of the controversial 'Dendera Lightbulbs', which fringe theorists falsely claim depict ancient electrical tubes."
    ],
    statistics: [
      { label: "Pillar Capitals", value: "24", suffix: " Hathor heads" },
      { label: "Crypt Levels", value: "3", suffix: " floors" },
      { label: "Zodiac Stars mapped", value: "12", suffix: " Constellations" }
    ]
  },
  {
    id: "egyptian-astronomy",
    title: "Ancient Egyptian Astronomy",
    subtitle: "Sopdet and the cosmic order of the stars",
    location: "Helwan Observatory & Sacred Temples",
    coordinates: { x: 49, y: 28 },
    timeline: "Over 4000 years of observation",
    category: "science",
    imageUrl: "https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?auto=format&fit=crop&w=1200&q=80",
    description: "An advanced stellar science deeply woven into architecture, agricultural calendars, and mythology.",
    detailedDescription: "The Egyptians mapped the heavens into constellations and 'decans' (groups of stars). Their calendar was strictly aligned with the star Sirius (Sopdet). The day Sirius reappeared on the eastern horizon at dawn after 70 days of absence (the heliacal rising) coincided perfectly with the annual Nile flood, marking the Egyptian New Year (Wepet Renpet).",
    quote: "The sky is a vast scroll, and the scribes of the stars have written the pharaoh's eternal itinerary across the dark heavens.",
    quoteAuthor: "The Pyramid Texts",
    interestingFacts: [
      "The Pyramids of Giza align with the three belt stars of Orion (associated with Osiris) according to the Orion Correlation Theory.",
      "They created the 365-day solar calendar, divided into 12 months of 30 days, with 5 intercalary days added at the end of the year.",
      "The northern shafts of the Great Pyramid aimed directly at the 'Imperishable Stars'—the circumpolar stars that never set, symbolizing immortality."
    ],
    statistics: [
      { label: "Solar Year Days", value: "365", suffix: "" },
      { label: "Constellations mapped", value: "36", suffix: " Decans" },
      { label: "Card-Direction Alignment", value: "99.9", suffix: "% accurate" }
    ]
  },
  {
    id: "egyptian-jewelry",
    title: "The Art of Egyptian Jewelry",
    subtitle: "Goldsmiths of the pharaonic courts",
    location: "Museum vaults and Royal tombs",
    coordinates: { x: 50, y: 35 },
    timeline: "Predynastic to Roman eras",
    category: "concept",
    imageUrl: "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&w=1200&q=80",
    description: "Intricate, symbolic personal adornments made of gold, silver, electrum, lapis lazuli, turquoise, and carnelian, acting as powerful magical amulets.",
    detailedDescription: "Jewelry in Egypt was worn by both men and women of all social classes. It was not merely decorative, but carried immense protective and spiritual energy. Goldsmiths crafted pectorals, heavy collar necklaces (wesekh), signet rings, and tiaras. Gold was called the 'flesh of the gods' because it did not tarnish or decay, symbolizing eternity.",
    quote: "To wear the golden falcon on your breast is to wrap yourself in the protective wings of Horus himself.",
    quoteAuthor: "Egyptian jewelry scholar",
    interestingFacts: [
      "The scarab beetle amulet, symbolizing rebirth, was carved from green jasper and placed over the mummy's heart with a spell pleading it not to betray its owner in the judgment hall.",
      "They invented glassmaking techniques to create colorful glass beads (faience) that mimicked precious gemstones at a fraction of the weight.",
      "The solid gold sandals and toe-stalls found on Tutankhamun's mummy were created exclusively for his spiritual journey to the afterlife."
    ],
    statistics: [
      { label: "Inert Gold Purity", value: "22-24", suffix: " Karats" },
      { label: "Sacred Gems used", value: "4", suffix: " primary colors" },
      { label: "Tomb Amulets required", value: "143", suffix: " pieces" }
    ]
  }
];
