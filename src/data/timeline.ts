import { TimelineEvent } from "../types";

export const timelineEvents: TimelineEvent[] = [
  {
    id: "predynastic",
    era: "Predynastic Egypt",
    period: "Prehistory to Unification",
    dateRange: "c. 5000 – 3100 BCE",
    summary: "The foundation of agricultural communities along the Nile banks, leading to the development of early chiefdoms and the invention of proto-hieroglyphic writing.",
    details: [
      {
        year: "c. 5000 BCE",
        title: "First Settlements",
        description: "Neolithic farming communities emerge in the fertile Faiyum oasis and Delta regions, cultivating wild wheat and barley."
      },
      {
        year: "c. 3500 BCE",
        title: "Naqada Culture",
        description: "Technological advancements in pottery, copper-working, and trade with the Near East establish regional power centers."
      },
      {
        year: "c. 3200 BCE",
        title: "Proto-Writing",
        description: "The earliest known hieroglyphs are carved on bone and ivory tags in the royal cemetery of Abydos (Tomb U-j)."
      }
    ]
  },
  {
    id: "early-dynastic",
    era: "Early Dynastic",
    period: "Dynasties I – II",
    dateRange: "c. 3100 – 2686 BCE",
    summary: "The legendary unification of Upper and Lower Egypt under King Narmer, establishing Memphis as the national capital and inaugurating the divine kingship.",
    details: [
      {
        year: "c. 3100 BCE",
        title: "The Narmer Palette",
        description: "King Narmer (or Menes) defeats northern rivals, unites Upper and Lower Egypt, and wears the unified Double Crown (Pschent)."
      },
      {
        year: "c. 3000 BCE",
        title: "Memphis Founded",
        description: "Memphis is founded at the apex of the Nile Delta, serving as the administrative head of the newly unified state."
      },
      {
        year: "c. 2800 BCE",
        title: "Royal Abydos Tombs",
        description: "Pharaohs build elaborate mud-brick mastaba tombs at Abydos, laying the groundwork for complex royal funerary liturgies."
      }
    ]
  },
  {
    id: "old-kingdom",
    era: "The Old Kingdom",
    period: "Dynasties III – VI (The Pyramid Age)",
    dateRange: "c. 2686 – 2181 BCE",
    summary: "An era of peace, absolute central government authority, and monumental stone architecture, culminating in the construction of the Giza Pyramids.",
    details: [
      {
        year: "c. 2670 BCE",
        title: "The Step Pyramid of Saqqara",
        description: "High priest Imhotep stacks mastabas to create Pharaoh Djoser's Step Pyramid, initiating the era of monumental stone architecture."
      },
      {
        year: "c. 2600 BCE",
        title: "Sneferu's Geometric Trials",
        description: "Pharaoh Sneferu builds the Meidum, Bent, and Red Pyramids, refining engineering formulas to achieve the first true smooth-sided pyramid."
      },
      {
        year: "c. 2560 BCE",
        title: "The Great Pyramid of Giza",
        description: "Pharaoh Khufu commissions the Great Pyramid of Giza, the largest stone building in the ancient world, standing 146 meters tall."
      }
    ]
  },
  {
    id: "middle-kingdom",
    era: "The Middle Kingdom",
    period: "Dynasties XI – XII (The Classical Golden Age)",
    dateRange: "c. 2055 – 1650 BCE",
    summary: "Reunification under Mentuhotep II triggers a renaissance in literature, arts, jewelry, and vast land reclamation programs in the Faiyum oasis.",
    details: [
      {
        year: "c. 2055 BCE",
        title: "Thebes Reunifies the Land",
        description: "Mentuhotep II defeats northern Herakleopolitan rivals, ending the First Intermediate Period chaos and establishing the Middle Kingdom."
      },
      {
        year: "c. 1950 BCE",
        title: "Sinuhe & Literary Heights",
        description: "Masterpieces of Egyptian literature, like the Story of Sinuhe and the Eloquent Peasant, are penned in fine hieratic script."
      },
      {
        year: "c. 1870 BCE",
        title: "Fortresses of Nubia",
        description: "Senusret III erects a massive chain of mud-brick military fortresses along the Nile's cataracts to secure southern gold trade routes."
      }
    ]
  },
  {
    id: "new-kingdom",
    era: "The New Kingdom",
    period: "Dynasties XVIII – XX (The Golden Empire)",
    dateRange: "c. 1550 – 1069 BCE",
    summary: "Egypt defeats the foreign Hyksos invaders, expanding into a formidable military empire stretching from Syria to Sudan, housing legendary pharaohs.",
    details: [
      {
        year: "c. 1479 BCE",
        title: "Hatshepsut's Reign",
        description: "The prominent female pharaoh, Queen Hatshepsut, takes the throne, sponsoring rich trading expeditions to Punt and masterfully building Djeser-Djeseru."
      },
      {
        year: "c. 1350 BCE",
        title: "Akhenaten's Monotheist Revolution",
        description: "Pharaoh Amenhotep IV renames himself Akhenaten, outlaws traditional gods to worship the solar disk Aten, and founds a new capital at Amarna."
      },
      {
        year: "c. 1274 BCE",
        title: "Battle of Kadesh",
        description: "Ramesses II fights the Hittites in Syria, leading to the world's first recorded international peace treaty, carved in silver and clay tablets."
      },
      {
        year: "1323 BCE",
        title: "Burial of Tutankhamun",
        description: "The young boy king is laid to rest in a small tomb packed with over 5,000 intact gold treasures, sealed away for over three millennia."
      }
    ]
  },
  {
    id: "late-period",
    era: "The Late Period",
    period: "Dynasties XXVI – XXXI",
    dateRange: "c. 664 – 332 BCE",
    summary: "A period marked by regional conflict, Nubian, Assyrian, and Persian occupations, punctuated by brief eras of native Egyptian independence.",
    details: [
      {
        year: "c. 664 BCE",
        title: "Saite Renaissance",
        description: "Dynasty XXVI restores native Egyptian rule from Sais, instigating a cultural revival modeled on the classical art of the Old Kingdom."
      },
      {
        year: "c. 525 BCE",
        title: "First Persian Conquest",
        description: "Cambyses II of Persia defeats Pharaoh Psamtik III at the Battle of Pelusium, reducing Egypt to a Persian satrapy (province)."
      },
      {
        year: "c. 343 BCE",
        title: "Nectanebo II: The Last Native King",
        description: "Nectanebo II is defeated by Persian Emperor Artaxerxes III, ending native pharaonic rule over the Egyptian soil for over 2,300 years."
      }
    ]
  },
  {
    id: "greek-egypt",
    era: "Ptolemaic (Greek) Egypt",
    period: "Macedonian & Ptolemaic Dynasties",
    dateRange: "c. 332 – 30 BCE",
    summary: "Alexander the Great liberates Egypt from Persia, founding Alexandria. The Greek Ptolemaic rulers adopt Egyptian religious customs and build grand temples.",
    details: [
      {
        year: "332 BCE",
        title: "Alexander Enters Egypt",
        description: "Alexander the Great is welcomed as a liberator, crowned Pharaoh in Memphis, and visits the Oracle of Amun at Siwa Oasis."
      },
      {
        year: "c. 280 BCE",
        title: "Library of Alexandria & Pharos",
        description: "Ptolemy I and II establish the Great Library and build the Pharos Lighthouse, transforming Alexandria into the intellectual hub of the world."
      },
      {
        year: "196 BCE",
        title: "The Rosetta Stone",
        description: "A royal decree is carved on black granodiorite in Hieroglyphics, Demotic, and Greek, which would later unlock the language of the pharaohs."
      },
      {
        year: "30 BCE",
        title: "The Fall of Cleopatra VII",
        description: "The legendary queen Cleopatra VII aligns with Mark Antony but is defeated by Octavian. She commits suicide, ending the Ptolemaic dynasty."
      }
    ]
  },
  {
    id: "roman-egypt",
    era: "Roman & Byzantine Egypt",
    period: "Imperial Roman Province",
    dateRange: "c. 30 BCE – 641 CE",
    summary: "Egypt is integrated into the Roman Empire as its chief grain basket. Traditional temple worship declines and is replaced by Coptic Christianity.",
    details: [
      {
        year: "30 BCE",
        title: "The Granary of Rome",
        description: "Octavian claims Egypt as his private imperial possession, supply grains to feed the Roman plebeian masses."
      },
      {
        year: "c. 100 CE",
        title: "Fayum Mummy Portraits",
        description: "Deceased Romans are mummified with beautifully realistic wax-on-wood portraits painted on their coffins, blending Roman, Greek, and Egyptian styles."
      },
      {
        year: "391 CE",
        title: "Serapeum Destroyed",
        description: "Emperor Theodosius outlaws pagan temples, leading to the destruction of Alexandria's great temple of Serapis and the closure of the ancient schools."
      }
    ]
  },
  {
    id: "modern-egypt",
    era: "Modern Egypt",
    period: "Islamic to Contemporary Era",
    dateRange: "641 CE – Present",
    summary: "The arrival of Islam transforms Cairo into an architectural gemstone. The rediscovery of the pyramids sparks 'Egyptomania' and the birth of modern archaeology.",
    details: [
      {
        year: "641 CE",
        title: "Amr ibn al-As enters Egypt",
        description: "The Islamic conquest introduces Arabic as the national language and Islam as the primary faith, giving rise to Fustat and later Cairo."
      },
      {
        year: "1799 CE",
        title: "Discovery of Rosetta Stone",
        description: "Napoleon's soldiers discover the Rosetta Stone in Rashid. In 1822, French linguist Jean-François Champollion deciphers hieroglyphics."
      },
      {
        year: "2021 CE",
        title: "The Golden Parade",
        description: "Twenty-two royal pharaoh mummies are transported in majestic custom-built golden chariots through the streets of Cairo to their new museum home."
      }
    ]
  }
];
