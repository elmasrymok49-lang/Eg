import { GuidedTour } from "../types";

export const guidedTours: GuidedTour[] = [
  {
    id: "giza-tour",
    title: "The Pyramids & The Sphinx",
    narrator: "Dr. Selim Hassan, Chief Egyptologist",
    duration: "4 min 12 sec",
    description: "An audio journey exploring the geometry, engineering secrets, and cosmic alignments of the Giza Plateau during the Old Kingdom.",
    chapters: [
      {
        title: "Introduction to the Plateau",
        text: "Welcome, traveler, to the Giza Plateau. As you look across the glowing sands, you stand in the shadow of Khufu's monument—the Great Pyramid. Built over 4,500 years ago, it remains a testament to human organization and mathematical perfection."
      },
      {
        title: "The Scribes of Stone",
        text: "Imagine 20,000 skilled craftsmen—not slaves, but respected workers—quarrying, moving, and placing millions of multi-ton blocks. They aligned the base to the cardinal directions with an error of less than an inch."
      },
      {
        title: "The Sentinel",
        text: "Nearby, the Great Sphinx rests in silent contemplation. Carved from a single ridge of limestone, it represents Pharaoh Khafre guarding his pyramid complex. Listen to the wind whistling through its ancient stone body."
      }
    ]
  },
  {
    id: "valley-tour",
    title: "Journey to the Underworld",
    narrator: "Lady Jane Carter, Historian",
    duration: "5 min 30 sec",
    description: "An immersive descent into the secret rock-cut tombs of the New Kingdom Pharaohs and the spells of the Book of the Dead.",
    chapters: [
      {
        title: "The Hidden Canyon",
        text: "We leave the bright sun behind and step into the silent, scorched Valley of the Kings. Fearing tomb robbers, the New Kingdom Pharaohs abandoned the visible pyramids and carved their eternal resting places deep into these desolate hills."
      },
      {
        title: "Fresh Colors of the Crypt",
        text: "As we descend, the torchlight reveals stunningly vivid frescoes. Lapis lazuli blues and malachite greens illustrate the Pharaoh's dangerous 12-hour journey through the Underworld, guided by the jackal god Anubis."
      },
      {
        title: "The Boy King's Chamber",
        text: "In 1922, this silent valley was shaken when Howard Carter discovered the small tomb of Tutankhamun. Inside, nested coffin after nested coffin led to a solid gold container, holding the young king untouched by the centuries."
      }
    ]
  },
  {
    id: "deities-tour",
    title: "The Hall of the Pantheon",
    narrator: "Prof. Farouk El-Baz, Mythologist",
    duration: "3 min 50 sec",
    description: "Explore the divine realm, the scales of Ma'at, and the spiritual relationship between the cosmic gods and the mortal pharaohs.",
    chapters: [
      {
        title: "The First Sunrise",
        text: "To the ancient mind, the universe was created from a dark watery chaos called Nun. Out of this emerged Ra, the sun god, who brought light and order—Ma'at—to the world. Keeping Ma'at was the primary duty of the Pharaoh."
      },
      {
        title: "The Trial of the Soul",
        text: "Every mortal expected to face the judgment of Osiris. Your heart would be weighed against the feather of truth. If your heart was light with good deeds, you entered the field of reeds—an eternal Egypt."
      },
      {
        title: "Universal Magic",
        text: "Gods like Isis, goddess of magic, and Thoth, god of wisdom, were not distant figures, but active protectors. Their names were written on talismans and spoken in daily prayers to heal the sick and bless the crops."
      }
    ]
  }
];
