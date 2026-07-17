import { Deity } from "../types";

export const deities: Deity[] = [
  {
    id: "ra",
    name: "Ra (Re)",
    title: "The Supreme Sun God",
    role: "God of the Sun, Creation, and Kingship",
    symbol: "Solar Disk encircled by a Sacred Cobra (Uraeus), Falcon head",
    imageUrl: "https://images.unsplash.com/photo-1608976328267-e673d3ec06ce?auto=format&fit=crop&w=600&q=80", // Hieroglyph/Artwork
    description: "Ra was the king of the gods and the patron deity of the sun. He sailed across the sky each day in a golden barge, and traveled through the underworld at night, fighting the chaos-serpent Apophis to rise reborn each morning.",
    interestingFacts: [
      "The sun's different positions represented different aspects of Ra: Khepri (the scarab) was the morning sun, Ra (the falcon) was the midday sun, and Atum (the old man) was the setting sun.",
      "Tears from Ra's eyes were believed to have fallen to the earth and grown into the first human beings.",
      "Pharaohs styled themselves as the 'Son of Ra' to establish absolute divine legitimacy."
    ]
  },
  {
    id: "anubis",
    name: "Anubis (Inpu)",
    title: "Guardian of the Dead",
    role: "God of Embalming, Mummification, and Cemeteries",
    symbol: "Jackal or jackal-headed human figure, Embalming knife",
    imageUrl: "https://images.unsplash.com/photo-1503152394-c571994fd383?auto=format&fit=crop&w=600&q=80",
    description: "Anubis is one of the most iconic gods, depicted as a dark jackal or jackal-headed man. He supervised the preparation of mummies, guarded the tombs of royal ancestors, and guided souls safely through the dangerous underworld to the Hall of Ma'at.",
    interestingFacts: [
      "The color black was chosen for Anubis to represent the rich fertile silt of the Nile (rebirth) and the black discoloration of mummified flesh, rather than evil.",
      "In the underworld, Anubis places the heart of the deceased on the great Golden Scales of Justice, weighing it against the feather of truth.",
      "Priests in charge of mummification wore clay masks of Anubis during embalming ceremonies to channel his magical protective powers."
    ]
  },
  {
    id: "osiris",
    name: "Osiris (Asar)",
    title: "Lord of the Underworld",
    role: "God of Resurrection, Agriculture, and Eternal Life",
    symbol: "Crook and Flail, Atef crown of white feathers, green mummified skin",
    imageUrl: "https://images.unsplash.com/photo-1544985363-228cf2748bb7?auto=format&fit=crop&w=600&q=80",
    description: "Osiris was once a beloved earthly king. Murdered and chopped into fourteen pieces by his jealous brother Seth, he was resurrected through magic by his wife Isis, becoming the supreme judge of the dead and guarantor of afterlife.",
    interestingFacts: [
      "He is depicted with green skin (representing vegetation and crops sprouting after the Nile flood) or black skin (representing fertile soil).",
      "Because of Osiris, the mummified form was created to resemble him, hoping the deceased would also triumph over physical decay.",
      "The annual grain planting was viewed as symbolic of Osiris's burial, and the subsequent crops as his magical resurrection."
    ]
  },
  {
    id: "isis",
    name: "Isis (Aset)",
    title: "Great Mother of Magic",
    role: "Goddess of Magic, Motherhood, Healing, and Protection",
    symbol: "Throne-shaped headdress, Horns with solar disk, Wings of a kite falcon",
    imageUrl: "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?auto=format&fit=crop&w=600&q=80",
    description: "The premier goddess of the Egyptian pantheon, Isis possessed immense magical powers and intelligence. She resurrected her husband Osiris and protected her young son Horus from his deadly uncle, becoming the ultimate symbol of the devoted mother and wife.",
    interestingFacts: [
      "Her name literally translates to 'Throne,' and she was originally depicted with a throne on her head, representing the seat of absolute pharaonic power.",
      "She tricked the supreme god Ra into telling her his secret, true name, which granted her ultimate magical power over the cosmos.",
      "Her worship was so popular that it spread far beyond Egypt, with massive temples dedicated to her across Greece, Rome, and as far as London."
    ]
  },
  {
    id: "horus",
    name: "Horus (Heru)",
    title: "The Falcon Sky God",
    role: "God of the Sky, War, Justice, and Kingship",
    symbol: "The Eye of Horus (Wedjat Eye), Falcon, Double Crown",
    imageUrl: "https://images.unsplash.com/photo-1611037684693-017cd1e0a81d?auto=format&fit=crop&w=600&q=80",
    description: "Horus was the son of Isis and Osiris, destined to avenge his father's death. In a series of epic battles, he defeated his uncle Seth to claim the throne of Egypt. The living Pharaoh was considered the earthly incarnation of Horus.",
    interestingFacts: [
      "The sun was believed to be his right eye, and the moon his left eye. When his left eye was wounded by Seth, it explained the phases of the moon.",
      "The Eye of Horus (Wedjat) became the most popular protective amulet in Egypt, symbolizing healing, wholeness, and royal protection.",
      "He is represented either as a magnificent falcon or as a falcon-headed warrior."
    ]
  },
  {
    id: "thoth",
    name: "Thoth (Djehuty)",
    title: "Scribe of the Gods",
    role: "God of Wisdom, Writing, Magic, Moon, and Science",
    symbol: "Ibis head, Baboon, Writing palette, Crescent Moon headdress",
    imageUrl: "https://images.unsplash.com/photo-1571597443372-563b71590a78?auto=format&fit=crop&w=600&q=80",
    description: "Thoth was the patron of scribes, astronomers, and physicians. He was credited with inventing the hieroglyphic writing script, keeping the sacred celestial library, and acting as the divine arbitrator who recorded the final weights on the Scales of Truth.",
    interestingFacts: [
      "He was believed to have engineered the five extra days of the year (intercalary days) by winning light in a game of checkers with the moon god Khonsu.",
      "The sacred Ibis was associated with Thoth because its long curved beak resembles the crescent moon and its scanning of the marshlands resembles a searching scholar.",
      "Ancient hermetic literature was attributed to Hermes Trismegistus, a Greek synchronization of Hermes and Thoth."
    ]
  }
];
