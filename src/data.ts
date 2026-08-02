import type { CenturySection } from "./types";

export const sections: CenturySection[] = [
  {
    id: "bronze-age",
    numeral: "",
    eraLabel: "The Bronze Age",
    dateRange: "c. 3000–1200 BC",
    period: "Prelude",
    title: "Before Greece Was “Greece”",
    teaser: "Two palace civilizations rise, flourish, and collapse — leaving mostly legend behind.",
    blocks: [
      {
        heading: "Minoan Crete",
        paragraphs: [
          "c. 2700–1450 BC. A palace civilization centered on Knossos, whose sprawling, labyrinthine complex fed the later Greek legend of King Minos and the Labyrinth.",
          "It ended through some combination of the catastrophic Thera (Santorini) eruption and a later Mycenaean takeover — historians still argue over the mix.",
        ],
      },
      {
        heading: "Mycenaean Greece",
        paragraphs: [
          "c. 1600–1100 BC. A warrior-palace culture centered on Mycenae, Tiryns, and Pylos — the world later mythologized in Homer's epics.",
          "The (probably legendary or semi-historical) Trojan War is traditionally dated c. 1250–1180 BC, right at this civilization's twilight.",
        ],
      },
      {
        heading: "The Collapse",
        paragraphs: [
          "c. 1200–1150 BC: part of the wider Bronze Age Collapse, alongside the fall of the Hittites and upheavals across the eastern Mediterranean.",
          "Palace administration and writing — the Linear B script — disappear entirely. Greece goes dark.",
        ],
      },
    ],
    sourceTopics: [
      "Minoan Crete (Knossos, King Minos, the Labyrinth)",
      "Mycenaean Greece (Mycenae, Tiryns, Pylos)",
      "The Trojan War (as depicted in Homer's epics)",
      "The Bronze Age Collapse",
      "Linear B script",
    ],
  },
  {
    id: "dark-ages",
    numeral: "",
    eraLabel: "The Greek Dark Ages",
    dateRange: "c. 1100–800 BC",
    period: "Prelude",
    title: "Silence and Embers",
    teaser: "Writing vanishes and cities shrink — but oral poetry keeps the old stories burning.",
    blocks: [
      {
        heading: "A Harder World",
        paragraphs: [
          "Literacy is lost, populations decline, and Greeks scatter into small settlements. Archaeology from this period is thin — hence the name.",
        ],
      },
      {
        heading: "Iron and a New Alphabet",
        paragraphs: [
          "Iron working develops through the period, and near its end Greeks adapt a new alphabet from Phoenician script — the ancestor of the one this sentence is written in.",
        ],
      },
      {
        heading: "The Bards Remember",
        paragraphs: [
          "With no writing, oral epic poetry keeps the memory of the Mycenaean past alive, generation to generation, culminating in Homer.",
        ],
      },
    ],
    sourceTopics: [
      "The Greek Dark Ages",
      "The Phoenician alphabet's adaptation into the Greek alphabet",
    ],
  },
  {
    id: "century-8",
    numeral: "VIII",
    eraLabel: "8th Century BC",
    dateRange: "800–701 BC",
    period: "Archaic",
    title: "Emergence",
    teaser: "The city-state takes shape, the Olympics begin, and Homer gives Greece its first great books.",
    blocks: [
      {
        heading: "Politics & Society",
        paragraphs: [
          "The polis — the city-state — begins to take shape as the basic Greek political unit. Athens, Sparta, Corinth, Argos, and Thebes are among the earliest to consolidate.",
          "Colonization begins in earnest: Greek cities found colonies in Sicily and southern Italy (“Magna Graecia”) and along the Black Sea coast — Syracuse, founded by Corinth c. 733 BC, among the most famous.",
          "Sparta begins its distinctive military-social transformation; conflict with neighboring Messenia begins with the First Messenian War, late in this century.",
        ],
      },
      {
        heading: "A Panhellenic Ritual",
        paragraphs: [
          "776 BC: the traditional founding date of the Olympic Games at Olympia — the first great event to draw Greeks from every city together.",
        ],
      },
      {
        heading: "Writers & Thinkers",
        paragraphs: [
          "Homer (the Iliad and Odyssey) and Hesiod (Theogony and Works and Days) are composed and written down in this century — the foundational texts of Greek literature.",
        ],
      },
    ],
    sourceTopics: [
      "The polis (Greek city-state)",
      "The ancient Olympic Games (founded 776 BC)",
      "Greek colonization / Magna Graecia (and the founding of Syracuse, c. 733 BC)",
      "Homer (Iliad and Odyssey)",
      "Hesiod (Theogony and Works and Days)",
      "Sparta's First Messenian War",
    ],
  },
  {
    id: "century-7",
    numeral: "VII",
    eraLabel: "7th Century BC",
    dateRange: "700–601 BC",
    period: "Archaic",
    title: "Tyrants and Lawgivers",
    teaser: "Autocrats seize the cities, Sparta perfects its war machine, and lyric poetry is born.",
    blocks: [
      {
        heading: "The Rise of Tyrants",
        paragraphs: [
          "Tyrants — autocratic rulers, often populist, who seized power outside traditional aristocratic succession — rise in cities like Corinth (under Cypselus) and Sicyon.",
        ],
      },
      {
        heading: "Sparta Forged",
        paragraphs: [
          "Sparta completes its conquest of Messenia in the Second Messenian War, creating the helot system that underpins its uniquely militarized society.",
          "The semi-legendary Lycurgan reforms shape the Spartan constitution and the agoge, its brutal training system for citizen-soldiers.",
        ],
      },
      {
        heading: "Athens' First Laws",
        paragraphs: [
          "c. 621 BC: Draco issues Athens' first written law code — so harsh that “draconian” still means exactly that, 2,600 years later.",
        ],
      },
      {
        heading: "The First Lyric Poets",
        paragraphs: [
          "Archilochus and other lyric poets flourish, beginning a tradition that carries into Sappho and Alcaeus on Lesbos, writing right at this century's edge.",
        ],
      },
      {
        heading: "Reaching Outward",
        paragraphs: [
          "Colonization continues, and Greek contact with Egypt deepens through a trading post at Naukratis.",
        ],
      },
    ],
    sourceTopics: [
      "Greek tyrants (Cypselus of Corinth as example)",
      "Sparta's Second Messenian War and the helot system",
      "The Lycurgan reforms and the Spartan agoge",
      "Draco and Athens' first written law code",
      "Archilochus (lyric poet)",
      "Sappho of Lesbos",
      "Alcaeus of Mytilene",
      "Naukratis (Greek trading post in Egypt)",
    ],
  },
  {
    id: "century-6",
    numeral: "VI",
    eraLabel: "6th Century BC",
    dateRange: "600–501 BC",
    period: "Archaic",
    title: "Reform and Philosophy",
    teaser: "Solon and Cleisthenes lay democracy's foundations while the first philosophers ask what the world is made of.",
    blocks: [
      {
        heading: "Athens Reinvented",
        paragraphs: [
          "c. 594 BC: Solon enacts sweeping economic and constitutional reforms, cancelling debt-bondage and reorganizing Athenian citizenship into new classes.",
          "The tyrant Pisistratus and his sons rule Athens (c. 561–510 BC), sponsoring public works, festivals, and the codification of Homer's texts. The tyranny falls in 510 BC.",
          "Cleisthenes then introduces reforms in 508/507 BC — reorganizing citizens into ten tribes and establishing the Council of 500 — laying the foundations of Athenian democracy.",
        ],
      },
      {
        heading: "Sparta's League",
        paragraphs: [
          "Sparta organizes the Peloponnesian League, becoming the dominant land power in Greece.",
        ],
      },
      {
        heading: "Persia Rises",
        paragraphs: [
          "Cyrus the Great and then Darius I build the Achaemenid Persian Empire, absorbing the Greek cities of Ionia in Asia Minor — setting up the conflict to come.",
        ],
      },
      {
        heading: "The First Philosophers",
        paragraphs: [
          "The “Pre-Socratics” ask what the universe is fundamentally made of: Thales of Miletus (often called the first philosopher, said to have predicted a solar eclipse), Anaximander, Anaximenes, Pythagoras (mathematics and mysticism, founding a community at Croton in Italy), Xenophanes, and Heraclitus — “you cannot step in the same river twice.”",
        ],
      },
      {
        heading: "Poets and the First Stage",
        paragraphs: [
          "Sappho and Alcaeus continue writing personal, lyric poetry. Aesop is traditionally dated here for his fables, and early dramatic contests begin at Athens' City Dionysia — with Thespis, traditionally the first actor, c. 534 BC.",
        ],
      },
    ],
    sourceTopics: [
      "Solon's reforms in Athens (c. 594 BC)",
      "Pisistratus (tyrant of Athens)",
      "Cleisthenes and the founding of Athenian democracy (508/507 BC)",
      "The Peloponnesian League",
      "The Achaemenid Persian Empire (Cyrus the Great, Darius I) and Ionia",
      "Thales of Miletus",
      "Anaximander",
      "Pythagoras",
      "Heraclitus",
      "Aesop and his fables",
      "Thespis and the origins of Greek theater / City Dionysia",
    ],
  },
  {
    id: "century-5",
    numeral: "V",
    eraLabel: "5th Century BC",
    dateRange: "500–401 BC",
    period: "Classical",
    title: "The Classical Peak",
    teaser: "Greece repels an empire, Athens builds the Parthenon — and then Greek turns on Greek.",
    blocks: [
      {
        heading: "The Persian Wars — 499–449 BC",
        paragraphs: [],
        list: [
          "499 BC — the Ionian Revolt against Persia; Athens sends aid.",
          "490 BC — the Battle of Marathon: Athens, with Plataea, defeats Darius I's invasion force.",
          "480 BC — Xerxes I invades; the Battle of Thermopylae (Leonidas and the 300 Spartans, a delaying action) and the sack of Athens, followed by the Battle of Salamis, a decisive Greek naval victory led largely by the Athenian fleet under Themistocles.",
          "479 BC — the Battle of Plataea ends the Persian invasion on land.",
        ],
      },
      {
        heading: "Athens Ascendant",
        paragraphs: [
          "Athens forms the Delian League in 477 BC — nominally a defensive alliance, it becomes an Athenian maritime empire funded by allied tribute.",
          "Pericles dominates Athenian politics from the 450s, overseeing construction of the Parthenon and the other Acropolis monuments, alongside the flourishing of radical democracy.",
        ],
      },
      {
        heading: "The Peloponnesian War — 431–404 BC",
        paragraphs: [
          "Athens and its empire against Sparta and the Peloponnesian League. Key episodes: the Athenian plague of 430 BC, which killed Pericles; the catastrophic Sicilian Expedition (415–413 BC); a Spartan naval buildup funded by Persian money; and Athens' final surrender in 404 BC, leaving Sparta briefly dominant in Greece.",
        ],
      },
      {
        heading: "Philosophy & History",
        paragraphs: [
          "Socrates (c. 470–399 BC) teaches in Athens, questioning everything via the “Socratic method”; he is tried and executed in 399 BC. The Sophists — Protagoras, Gorgias — teach rhetoric and relativism.",
          "Herodotus, the “Father of History,” writes his Histories of the Persian Wars; Thucydides writes his unflinching History of the Peloponnesian War.",
        ],
      },
      {
        heading: "Tragedy, Comedy, and Art",
        paragraphs: [
          "The three great tragedians — Aeschylus (Oresteia, Persians), Sophocles (Oedipus Rex, Antigone), Euripides (Medea, The Bacchae) — all work in Athens; the comic playwright Aristophanes (Lysistrata, The Clouds, The Frogs) satirizes politics and society.",
          "The sculptor Phidias oversees the Parthenon's sculptural program, while Polykleitos establishes an idealized standard of human proportion in classical sculpture.",
        ],
      },
    ],
    sourceTopics: [
      "The Ionian Revolt (499 BC)",
      "The Battle of Marathon (490 BC)",
      "The Battle of Thermopylae and Leonidas",
      "The Battle of Salamis and Themistocles",
      "The Battle of Plataea (479 BC)",
      "The Delian League",
      "Pericles and the Parthenon",
      "The Peloponnesian War (431–404 BC)",
      "The Plague of Athens (430 BC)",
      "The Sicilian Expedition (415–413 BC)",
      "Socrates",
      "The Sophists (Protagoras, Gorgias)",
      "Herodotus (“The Histories”)",
      "Thucydides (“History of the Peloponnesian War”)",
      "Aeschylus",
      "Sophocles",
      "Euripides",
      "Aristophanes",
      "Phidias and the Parthenon sculptures",
      "Polykleitos and classical Greek sculpture",
    ],
  },
  {
    id: "century-4",
    numeral: "IV",
    eraLabel: "4th Century BC",
    dateRange: "400–301 BC",
    period: "Classical",
    title: "Hegemony, Philosophy, and Macedon",
    teaser: "City-states exhaust each other fighting for supremacy — until a kingdom to the north conquers them all.",
    blocks: [
      {
        heading: "A Game of Hegemons",
        paragraphs: [
          "No single city dominates for long. Sparta's harsh hegemony after 404 BC provokes the Corinthian War (395–387 BC).",
          "Thebes rises under the general Epaminondas, decisively breaking Spartan military supremacy at the Battle of Leuctra (371 BC) with innovative tactics. Theban dominance is brief, ending with Epaminondas's death at Mantinea (362 BC).",
        ],
      },
      {
        heading: "The Rise of Macedon",
        paragraphs: [
          "Philip II of Macedon (r. 359–336 BC) reforms the Macedonian army around the sarissa phalanx and subdues the Greek city-states, culminating in victory at the Battle of Chaeronea (338 BC) — effectively ending Greek city-state independence.",
          "The orator Demosthenes leads Athenian resistance to Macedon through his Philippics.",
        ],
      },
      {
        heading: "Alexander the Great",
        paragraphs: [
          "Alexander (r. 336–323 BC), Philip's son, conquers the Persian Empire (Granicus, Issus, Gaugamela), Egypt, and pushes into India, spreading Greek culture across the Near East before dying in Babylon in 323 BC.",
          "His empire fragments among his generals, the Diadochi, beginning the Hellenistic period.",
        ],
      },
      {
        heading: "Philosophy's Golden Age",
        paragraphs: [
          "Plato (c. 428–348 BC) founds the Academy in Athens and writes the dialogues — Republic, Symposium, Phaedo. His student Aristotle (384–322 BC) founds the Lyceum, writes on logic, biology, ethics, politics, and metaphysics, and tutors the young Alexander.",
        ],
      },
      {
        heading: "Other Voices",
        paragraphs: [
          "Diogenes of Sinope lives out Cynic philosophy provocatively, reputedly in a barrel; the historian Xenophon writes the Anabasis, an account of the “March of the Ten Thousand.”",
        ],
      },
    ],
    sourceTopics: [
      "The Corinthian War (395–387 BC)",
      "Epaminondas and the Battle of Leuctra (371 BC)",
      "The Battle of Mantinea (362 BC)",
      "Philip II of Macedon",
      "The Battle of Chaeronea (338 BC)",
      "Demosthenes and the Philippics",
      "Alexander the Great",
      "The Battle of Gaugamela",
      "The Diadochi (Alexander's successors) and the start of the Hellenistic period",
      "Plato and the Academy",
      "Aristotle and the Lyceum",
      "Diogenes of Sinope (Cynic philosophy)",
      "Xenophon and the Anabasis (“March of the Ten Thousand”)",
    ],
  },
  {
    id: "century-3",
    numeral: "III",
    eraLabel: "3rd Century BC",
    dateRange: "300–201 BC",
    period: "Hellenistic",
    title: "The Hellenistic World",
    teaser: "Greek culture spans three continents under three rival kingdoms — and Alexandria becomes the world's mind.",
    blocks: [
      {
        heading: "Three Kingdoms",
        paragraphs: [
          "Greek culture and language spread across a vast area following Alexander's conquests, though the political unity is gone. Three major successor kingdoms dominate: Ptolemaic Egypt, capital Alexandria, which becomes the intellectual capital of the Greek world, home to the Library of Alexandria; the Seleucid Empire, spanning Mesopotamia to parts of Central Asia; and Antigonid Macedon, ruling Greece itself.",
          "Greek city-states form federal leagues — the Aetolian League and the Achaean League — to preserve some autonomy against the larger kingdoms.",
        ],
      },
      {
        heading: "Science in Alexandria",
        paragraphs: [
          "Science and mathematics flourish: Euclid systematizes geometry in the Elements, Archimedes of Syracuse advances mathematics, engineering, and physics, and Eratosthenes — chief librarian at Alexandria — calculates the Earth's circumference with startling accuracy.",
        ],
      },
      {
        heading: "New Philosophies for a Bigger World",
        paragraphs: [
          "New schools respond to a world of large, impersonal kingdoms rather than small city-states: Epicurus founds Epicureanism (pleasure, tranquility, atomism) in Athens, and Zeno of Citium founds Stoicism, also in Athens.",
        ],
      },
      {
        heading: "Scholarly Poets",
        paragraphs: [
          "Hellenistic poetry becomes more scholarly and personal — Callimachus and Apollonius of Rhodes (Argonautica) exemplify the learned, allusive style of Alexandrian court poetry.",
        ],
      },
    ],
    sourceTopics: [
      "Ptolemaic Egypt and Alexandria",
      "The Library of Alexandria",
      "The Seleucid Empire",
      "Antigonid Macedon",
      "The Aetolian League",
      "The Achaean League",
      "Euclid (“Elements”)",
      "Archimedes of Syracuse",
      "Eratosthenes (measuring Earth's circumference)",
      "Epicurus and Epicureanism",
      "Zeno of Citium and Stoicism",
      "Callimachus",
      "Apollonius of Rhodes (“Argonautica”)",
    ],
  },
  {
    id: "century-2",
    numeral: "II",
    eraLabel: "2nd Century BC",
    dateRange: "200–101 BC",
    period: "Hellenistic",
    title: "Rome Intervenes",
    teaser: "Rome's legions arrive, and within decades Greek political independence is over.",
    blocks: [
      {
        heading: "The Macedonian Wars",
        paragraphs: [
          "Rome progressively conquers the Hellenistic world. The Macedonian Wars (214–148 BC) end Antigonid independence.",
        ],
      },
      {
        heading: "146 BC: Corinth Destroyed",
        paragraphs: [
          "Rome destroys Corinth, crushing the Achaean League and effectively ending Greek political independence — mainland Greece becomes a Roman protectorate, then province.",
        ],
      },
      {
        heading: "Conquered Greece Conquers Rome",
        paragraphs: [
          "Even in defeat, Greek culture deeply influences Rome — “Graecia capta ferum victorem cepit,” captured Greece captured her rough conqueror, as the poet Horace later put it. Greek philosophy, art, and literature are absorbed into elite Roman education.",
        ],
      },
      {
        heading: "The Kingdoms Weaken",
        paragraphs: [
          "The Seleucid and Ptolemaic kingdoms persist but weaken, squeezed between Rome and internal strife.",
        ],
      },
    ],
    sourceTopics: [
      "The Macedonian Wars (214–148 BC)",
      "The destruction of Corinth (146 BC) and the fall of the Achaean League",
    ],
  },
  {
    id: "century-1",
    numeral: "I",
    eraLabel: "1st Century BC",
    dateRange: "100–1 BC",
    period: "Hellenistic",
    title: "The Last Hellenistic Kingdom Falls",
    teaser: "Cleopatra is the last of Alexander's heirs — and with her, an era ends.",
    blocks: [
      {
        heading: "Rome Absorbs the Rest",
        paragraphs: [
          "Rome continues absorbing the remaining Hellenistic territories: the Seleucid Empire collapses and becomes the Roman province of Syria in 64 BC, under Pompey.",
        ],
      },
      {
        heading: "Egypt, the Last Holdout",
        paragraphs: [
          "Ptolemaic Egypt survives longest as a nominally independent Hellenistic kingdom, ruled by the Greek-descended Ptolemaic dynasty — ending with Cleopatra VII.",
        ],
      },
      {
        heading: "31 BC: Actium",
        paragraphs: [
          "At the Battle of Actium, Octavian (later Augustus) defeats Mark Antony and Cleopatra.",
        ],
      },
      {
        heading: "30 BC: The End",
        paragraphs: [
          "Egypt is annexed by Rome following Cleopatra's death — conventionally marking the end of the Hellenistic period, and of “Ancient Greece” as an independent political entity.",
          "Yet Greek language, culture, philosophy, and identity remain vibrant within the Roman — and later Byzantine — world for centuries afterward.",
        ],
      },
    ],
    sourceTopics: [
      "The Seleucid Empire's collapse and the Roman province of Syria (64 BC, Pompey)",
      "Cleopatra VII and the end of Ptolemaic Egypt",
      "The Battle of Actium (31 BC)",
      "Octavian / Augustus",
      "Mark Antony",
      "Rome's annexation of Egypt (30 BC) and the conventional end of the Hellenistic period",
    ],
  },
];
