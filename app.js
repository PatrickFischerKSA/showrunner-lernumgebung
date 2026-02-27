const STORAGE_KEY = "showrunner_lab_v1";
const VISUALS_KEY = "showrunner_visuals_v3";
const MATERIAL_DB = "showrunner_materials_v1";
const MATERIAL_STORE = "materials";
const MATERIAL_ARCHIVE_TYPE = "showrunner-materials-archive";
const VISUAL_DEFAULTS = { visibility: 95, cardOpacity: 42 };

const META_FIELDS = [
  { key: "projectTitle", label: "Projekttitel", type: "text", placeholder: "z. B. Die Grenzen der Freiheit" },
  { key: "teamName", label: "Gruppenname", type: "text", placeholder: "Teamname" },
  { key: "className", label: "Klasse / Kurs", type: "text", placeholder: "z. B. Gym 3A" },
  { key: "startDate", label: "Startdatum", type: "date" },
  { key: "projectIdea", label: "Projektidee", type: "select" }
];

const PROJECT_IDEAS = [
  "Jenny - Eine neue Zeit",
  "Die Meiers",
  "Der Arzt",
  "Zwischen Glauben und Liebe",
  "1832",
  "Das Haus Meier",
  "Die Tochter",
  "Unpassend",
  "Die Grenzen der Freiheit",
  "Jenny - Modern Adaptation"
];

const TIMELINE = [
  "Phase 1: Projektstart, Rollen, These, erste Logline (Output: Checkpoint 1)",
  "Phase 2: Themenvertiefung und gesellschaftliche Relevanz (Output: Series Statement)",
  "Phase 3: Figurenentwicklung I (Wunde, Beduerfnis, Ziel)",
  "Phase 4: Figurenentwicklung II und Konfliktnetz (Output: Checkpoint 2)",
  "Phase 5: Serien-Engine testen und Staffelthese formulieren",
  "Phase 6: Staffelarchitektur und Wendepunkte (Output: Checkpoint 3)",
  "Phase 7: Visuelles Konzept (Kamera, Licht, Raum) (Output: Checkpoint 4)",
  "Phase 8: Drehbuchentwicklung, Szenenrhythmus (Output: Checkpoint 5)",
  "Phase 9: Koharenzpruefung und Ueberarbeitung",
  "Phase 10: Pitch-Vorbereitung und Probe (Output: Checkpoint 6)"
];

const PHASES = [
  {
    id: "phase_0",
    title: "Phase 0 - Einstieg und Team-Setup",
    goal: "Projektrollen klarmachen und den Roman in ein Arbeitsproblem uebersetzen.",
    output: "Arbeitsvertrag Team + erste Adaptionshypothese",
    time: "1-2 Lektionen",
    fields: [
      { key: "teamRoles", label: "Rollenverteilung (Showrunner, Head of Story, Character Lead, Visual Lead)", placeholder: "Wer uebernimmt welche Rolle und warum?" },
      { key: "textCore", label: "Textkern: Was ist der gesellschaftliche Konflikt im Roman?", placeholder: "3-5 Saetze" },
      { key: "adaptationRule", label: "Regel fuer die Adaption: Was wird NICHT nur nacherzaehlt?", placeholder: "Wir zeigen den Konflikt durch ..." },
      { key: "microGoal", label: "Mikroziel fuer diese Phase", placeholder: "Bis Ende Phase schaffen wir ..." }
    ],
    tasks: {
      basis: [
        "3 Schluesselstellen im Text markieren, die Machtverhaeltnisse zeigen",
        "Jede Person im Team nennt einen moeglichen Serienkonflikt"
      ],
      standard: [
        "Aus den Markierungen eine Leitfrage fuer die Serie formulieren",
        "Eine erste Logline in maximal 40 Woertern schreiben"
      ],
      expert: [
        "Alternative Logline entwerfen und beide Versionen begruendet vergleichen"
      ]
    }
  },
  {
    id: "phase_1",
    title: "Phase 1 - Serien-DNA und Themenaussage",
    goal: "Warum ist es eine Serie und nicht nur ein Film?",
    output: "Series Statement + serielle Engine",
    time: "1 Phase",
    fields: [
      { key: "seriesStatement", label: "Series Statement: Diese Serie zeigt, dass ...", placeholder: "Vollstaendiger Satz ohne Ereignisaufzaehlung" },
      { key: "centralConflict", label: "Dauerhafter Konflikt (Figur will X, Welt verlangt Y)", placeholder: "X vs Y" },
      { key: "whySeries", label: "Warum als Serie?", placeholder: "Welche wiederholbaren Entscheidungen treiben mehrere Episoden?" },
      { key: "relevanceNow", label: "Warum jetzt? (gesellschaftliche Relevanz)", placeholder: "Aktuelle Anschlussfrage" }
    ],
    tasks: {
      basis: [
        "Mindestens 2 moegliche Konfliktachsen sammeln",
        "Eine Konfliktachse auswaehlen und begruenden"
      ],
      standard: [
        "Engine-Formel fuellen: Ordnung -> Stoerung -> Dilemma -> Entscheidung -> Konsequenz",
        "1 Gegenbeispiel definieren: Was waere ein Film-Moment statt Serienmoment?"
      ],
      expert: [
        "Series Statement gegen 2 kritische Nachfragen absichern"
      ]
    }
  },
  {
    id: "phase_2",
    title: "Phase 2 - Figurenbibel und Konfliktnetz",
    goal: "Figuren so bauen, dass Konflikte ohne Zufall entstehen.",
    output: "Figurenbibel + Beziehungsdiagramm",
    time: "1-2 Phasen",
    fields: [
      { key: "mainFigure", label: "Hauptfigur: Wunde, Beduerfnis, Ziel, Angst, Selbsttaeuschung", placeholder: "Kurzprofil in klaren Stichpunkten" },
      { key: "antagonisticForce", label: "Gegenkraft: Wer oder was setzt den staerksten Widerstand?", placeholder: "Person, Institution oder Norm" },
      { key: "relationshipArc", label: "Beziehungsachsen: Welche Beziehung kippt zuerst?", placeholder: "Ausgangslage -> Veraenderung" },
      { key: "staffelArc", label: "Staffelarc: Am Anfang glaubt die Figur ..., am Ende erkennt sie ...", placeholder: "2-Satz-Formel" }
    ],
    tasks: {
      basis: [
        "Fuer jede Hauptfigur mindestens 1 widerspruechliches Ziel definieren",
        "Konfliktnetz mit mindestens 4 aktiven Kanten erstellen"
      ],
      standard: [
        "Figureninterview simulieren: 3 Fragen pro Figur",
        "Pruefen, ob zwei Figuren dasselbe wollen -> falls ja, neu scharfstellen"
      ],
      expert: [
        "Selbsttaeuschung jeder Hauptfigur in konkrete Szene uebersetzen"
      ]
    }
  },
  {
    id: "phase_3",
    title: "Phase 3 - Welt, Stil, Kamera, Licht, Ton",
    goal: "Aesthetik als Bedeutungssystem definieren.",
    output: "Regelkatalog fuer visuelle und akustische Gestaltung",
    time: "1 Phase",
    fields: [
      { key: "worldRules", label: "Weltregeln: Institutionen, Macht, soziale Codes", placeholder: "Welche Regeln bestimmen Verhalten?" },
      { key: "spaceLogic", label: "Raumlogik: Welche Orte tragen welche Funktion?", placeholder: "z. B. Behorde = Distanz" },
      { key: "cameraRules", label: "Kameraregeln", placeholder: "Wann Nahaufnahme, wann Totale, wann Bewegung?" },
      { key: "lightSoundRules", label: "Licht- und Tonregeln", placeholder: "Welche Codes sind verbindlich?" }
    ],
    tasks: {
      basis: [
        "Fuer 4 Kernraeume je 1 Bedeutungsfunktion festlegen",
        "3 verbindliche Kameraentscheidungen formulieren"
      ],
      standard: [
        "Moodboard mit Farbkonzept begruenden",
        "Raumklang fuer mindestens 2 Schluesselorte beschreiben"
      ],
      expert: [
        "Eine Szene als Shotlist mit Bedeutungsbegruendung aufloesen"
      ]
    }
  },
  {
    id: "phase_4",
    title: "Phase 4 - Staffelarchitektur und Episodenplan",
    goal: "Aus der These eine tragfaehige Staffel bauen.",
    output: "Staffeluebersicht + Episodenmatrix",
    time: "1 Phase",
    fields: [
      { key: "seasonThesis", label: "Staffelthese", placeholder: "Moralische Bewegung der Staffel" },
      { key: "turningPoints", label: "Zentrale Wendepunkte", placeholder: "Mindestens 3 klare Kippmomente" },
      { key: "episodeOverview", label: "Episodenuebersicht (A/B-Plot, Leitfrage, Cliffhanger)", placeholder: "Kurz pro Episode" },
      { key: "consistencyCheck", label: "Koharenztest: Wo droht Leerlauf?", placeholder: "Risiken und Gegenmassnahmen" }
    ],
    tasks: {
      basis: [
        "6-8 Episoden mit klarer Leitfrage skizzieren",
        "Jede Episode mit Konsequenz abschliessen"
      ],
      standard: [
        "A- und B-Plot in jeder Episode koppeln",
        "Staffelende auf Figurenentwicklung rueckbinden"
      ],
      expert: [
        "Alternative Episode austauschen und Tragfaehigkeit vergleichen"
      ]
    }
  },
  {
    id: "phase_5",
    title: "Phase 5 - Drehbuchausschnitt (3-5 Seiten)",
    goal: "Dialoge und Handlung ueber Statuswechsel organisieren.",
    output: "Drehbuchausschnitt + Szenenanalyse",
    time: "1 Phase",
    fields: [
      { key: "sceneGoal", label: "Szenenziel: Was veraendert sich sozial?", placeholder: "Statuswechsel in einem Satz" },
      { key: "sceneStructure", label: "Struktur (Ziel -> Widerstand -> Entscheidung -> Konsequenz)", placeholder: "Kurze Szenenmechanik" },
      { key: "dialogSubtext", label: "Subtext: Was wollen Figuren wirklich?", placeholder: "Versteckte Ziele im Dialog" },
      { key: "scriptExcerpt", label: "Drehbuchausschnitt oder Link/Dateiverweis", placeholder: "Text oder Verweis" }
    ],
    tasks: {
      basis: [
        "Szene in professioneller Drehbuchform anlegen",
        "Jede Figur bekommt ein klares Gespraechsziel"
      ],
      standard: [
        "Mindestens 1 Informationssatz in Handlung umwandeln",
        "Szenenende mit sozialer Konsequenz markieren"
      ],
      expert: [
        "Dialog rhythmisch kuerzen und mit Lesetest pruefen"
      ]
    }
  },
  {
    id: "phase_6",
    title: "Phase 6 - Modellgenerierte Modellszene",
    goal: "Aus der Szene ein visuelles Proof-of-Concept bauen.",
    output: "Model-Prompt, Bildidee, Begruendung",
    time: "2-3 Lektionen",
    fields: [
      { key: "modelSceneIntent", label: "Szenenintention fuer das Modellbild", placeholder: "Welche Gefuehls- und Machtlage muss sichtbar sein?" },
      { key: "promptPositive", label: "Prompt (positiv)", placeholder: "Ort, Licht, Kamera, Figurenhaltung, Zeit, Materialitaet" },
      { key: "promptNegative", label: "Prompt (negativ)", placeholder: "Was soll explizit NICHT sichtbar sein?" },
      { key: "modelTool", label: "Toolwahl und Gruende", placeholder: "z. B. Leonardo, Playground, Canva" },
      { key: "sceneInterpretation", label: "Interpretation: Wie stuetzt das Bild eure Serienaussage?", placeholder: "3-5 Saetze" }
    ],
    tasks: {
      basis: [
        "Prompt auf Figurenziel und Raumfunktion ausrichten",
        "Mindestens 2 Promptvarianten vergleichen"
      ],
      standard: [
        "Eine gewaehlte Bildversion mit Kamera- und Lichtregeln begruenden",
        "Kurzen Shot-Plan (3 Einstellungen) ableiten"
      ],
      expert: [
        "Prompt iterativ anhand Decision System verbessern"
      ]
    }
  },
  {
    id: "phase_7",
    title: "Phase 7 - Pitch-Design und Probe",
    goal: "Konzept auf Jury-Niveau praesentierbar machen.",
    output: "10-Minuten-Pitch + Q&A-Vorbereitung",
    time: "1 Phase",
    fields: [
      { key: "pitchHook", label: "Pitch-Einstieg in 1 Minute", placeholder: "These + Relevanz + Neugier" },
      { key: "pitchWorldFigures", label: "Welt und Figuren (3 Minuten)", placeholder: "Kernkonflikt und Kontext" },
      { key: "pitchMechanics", label: "Serienmechanik (2 Minuten)", placeholder: "Warum seriell tragfaehig?" },
      { key: "pitchVisual", label: "Visuelles Konzept (2 Minuten)", placeholder: "Kamera, Licht, Ton" },
      { key: "pitchScene", label: "Beispielszene (2 Minuten)", placeholder: "Kurz performen oder analysieren" }
    ],
    tasks: {
      basis: [
        "Pitchstruktur 1-3-2-2-2 exakt einhalten",
        "Maximal 10 Slides planen"
      ],
      standard: [
        "3 erwartbare Juryfragen vorbereiten",
        "Pitch einmal mit Stoppuhr proben"
      ],
      expert: [
        "Q&A als Rollenspiel mit Gegenargumenten durchspielen"
      ]
    }
  }
];

const CHECKPOINTS = [
  "Checkpoint 1 - Serienidee und Thema",
  "Checkpoint 2 - Figurenentwicklung",
  "Checkpoint 3 - Serien-Engine und Staffelstruktur",
  "Checkpoint 4 - Visuelles Konzept",
  "Checkpoint 5 - Episodenplanung und Drehbuchszene",
  "Checkpoint 6 - Finales Development"
];

const CHECKPOINT_FIELDS = [
  { key: "status", label: "1) Aktueller Entwicklungsstand" },
  { key: "decisions", label: "2) Getroffene Entscheidungen und Begruendungen" },
  { key: "openProblems", label: "3) Offene Probleme oder Unsicherheiten" },
  { key: "nextSteps", label: "4) Konkrete naechste Arbeitsschritte" },
  { key: "roles", label: "5) Rollenverteilung im Team" },
  { key: "reflection", label: "6) Reflexion seit letztem Checkpoint" }
];

const DECISION_LEVELS = [
  {
    id: "dna",
    symptom: "Grundidee traegt keine ganze Staffel",
    level: "Entscheidungsebene 1 - Serienidee",
    questions: [
      "Gibt es eine wiederkehrende moralische Entscheidung?",
      "Bleibt der zentrale Konflikt dauerhaft ungeloest?",
      "Erzwingt die Welt automatisch neue Situationen?"
    ],
    measure: "Series Statement neu formulieren und Konfliktachse testen."
  },
  {
    id: "figuren",
    symptom: "Szenen wirken flach oder austauschbar",
    level: "Entscheidungsebene 2 - Figuren",
    questions: [
      "Will jede Figur etwas anderes?",
      "Hat jede Figur eine konkrete Angst?",
      "Gibt es eine aktive Selbsttaeuschung?"
    ],
    measure: "Beduerfnisse oder Strategien der Figuren neu definieren."
  },
  {
    id: "episoden",
    symptom: "Episoden fuehlen sich wie Zusammenfassungen an",
    level: "Entscheidungsebene 3 - Episodenstruktur",
    questions: [
      "Gibt es ein moralisches Dilemma?",
      "Muss jemand eine Entscheidung treffen?",
      "Aendert sich der Status am Ende?"
    ],
    measure: "Episode auf Konsequenzstruktur neu aufbauen."
  },
  {
    id: "dialog",
    symptom: "Dialoge erklaeren statt zu handeln",
    level: "Entscheidungsebene 4 - Dialog",
    questions: [
      "Wird Information gesagt statt gezeigt?",
      "Hat jede Figur ein verborgenes Ziel im Gespraech?"
    ],
    measure: "Subtext scharfstellen, Dialog kuerzen, Reaktionen ausbauen."
  },
  {
    id: "visual",
    symptom: "Visuelles Konzept bleibt beliebig",
    level: "Entscheidungsebene 5 - Visuelle Sprache",
    questions: [
      "Erzaehlt die Kamera Bedeutung?",
      "Haben Raeumen eine soziale Funktion?",
      "Verandert Licht Beziehungen?"
    ],
    measure: "Klare visuelle Regeln je Situation definieren."
  },
  {
    id: "season",
    symptom: "Staffel fuehlt sich ziellos an",
    level: "Entscheidungsebene 6 - Staffelentwicklung",
    questions: [
      "Was glaubt die Hauptfigur am Anfang?",
      "Was weiss sie am Ende?",
      "Welche Entscheidung erzwingt diese Veraenderung?"
    ],
    measure: "Staffelthese und Endzustand neu formulieren."
  }
];

const PITCH_FIELDS = [
  { key: "intro", label: "1) Einstieg (1 Minute)" },
  { key: "worldFigures", label: "2) Welt und Figuren (3 Minuten)" },
  { key: "seriesMechanics", label: "3) Serienmechanik (2 Minuten)" },
  { key: "visualConcept", label: "4) Visuelles Konzept (2 Minuten)" },
  { key: "scene", label: "5) Beispielszene (2 Minuten)" },
  { key: "juryQuestions", label: "Q&A-Vorbereitung (3 Kernfragen + Antworten)" }
];

const RUBRIC = [
  "Originalitaet",
  "Dramaturgie",
  "Figuren",
  "Aesthetik",
  "Pitch-Kompetenz"
];

const SELF_FIELDS = [
  { key: "goal", label: "Selbstwirksamkeit: Was ist euer naechster kleinstmoeglicher Schritt?" },
  { key: "strategy", label: "Welche Strategie nutzt ihr konkret?" },
  { key: "obstacle", label: "Welches Hindernis erwartet ihr?" },
  { key: "support", label: "Wie organisiert ihr Hilfe/Feedback?" },
  { key: "review", label: "Kurzreflexion nach Abschluss" }
];

const FEEDBACK_SOURCES = {
  handbuch: "Handbuch: Serien-DNA, Konfliktmechanik, Statuswechsel, visuelle Regeln",
  kompendium: "Unterrichtskompendium: Adaption als Interpretation, Leitfrage/Konsequenz, Pitchstruktur",
  filmpuls: "Filmpuls: Premisse, Expose/Treatment, Szenenfokus, Show-dont-tell",
  wikihow: "WikiHow-Prinzipien: Serienformat, Figurenkonsistenz, Script-Format, Ueberarbeitung",
  serienschreiben: "Serienschreiben: Kollaboration, Arbeitsteilung, Produktions- und Arbeitskultur"
};

const COMMON_DE_WORDS = new Set([
  "die", "der", "das", "ein", "eine", "und", "oder", "aber", "dass", "weil", "damit", "deshalb", "somit", "wenn",
  "dann", "am", "im", "in", "auf", "fuer", "mit", "ohne", "von", "zu", "ist", "sind", "war", "wird", "werden",
  "hat", "haben", "muss", "muessen", "soll", "sollen", "kann", "koennen", "wir", "sie", "er", "figur", "konflikt",
  "entscheidung", "konsequenz", "szene", "serie", "staffel", "episode", "thema", "these", "ziel", "widerstand",
  "strategie", "angst", "wunde", "beduerfnis", "dialog", "subtext", "kamera", "licht", "raum", "ton", "schnitt",
  "moralisch", "gesellschaft", "relevanz", "adaption", "roman", "rollen", "team", "projekt", "pitch", "frage",
  "antwort", "analyse", "begruendung", "entwicklung", "beziehung", "status", "veraenderung", "leitfrage",
  "cliffhanger", "arc", "showrunner", "writers", "room", "visuell", "institution", "zuschauer", "publikum"
]);

const THEME_TERMS = ["freiheit", "zugehoerigkeit", "macht", "religion", "emanzipation", "identitaet", "norm", "verantwortung"];
const CONFLICT_TERMS = ["konflikt", "widerstand", "dilemma", "entscheidung", "konsequenz", "gegen", "muss", "will"];
const SERIAL_TERMS = ["episode", "staffel", "leitfrage", "cliffhanger", "wiederkehr", "arc", "a-plot", "b-plot"];
const VISUAL_TERMS = ["kamera", "nahaufnahme", "totale", "achsbruch", "push-in", "licht", "farbe", "raum", "ton", "schnitt", "blocking", "blick"];
const COLLAB_TERMS = ["showrunner", "head of story", "character lead", "visual lead", "writer", "rolle", "feedback", "abgabe", "verantwortung", "team"];
const SCRIPT_TERMS = ["premisse", "expose", "treatment", "outline", "3-akt", "plot", "subtext", "show", "dont", "tell", "szene", "dialog"];
const CURRENT_TERMS = ["heute", "aktuell", "gegenwart", "heutigen", "gesellschaft", "zeitgenoessisch", "jetzt"];
const FILLER_TOKENS = new Set(["bla", "blabla", "blablabla", "foo", "bar", "lorem", "ipsum", "test", "asdf", "qwer", "xyz", "abc"]);

let state = loadState() || createInitialState();
let activeTab = "dashboard";
let activePhase = PHASES[0].id;
let importContext = { type: "all", phaseId: null, checkpointIndex: null };
let pitchSeconds = 600;
let qaSeconds = 300;
let pitchInterval = null;
let qaInterval = null;
let materialDb = null;
let localizedTextsReady = false;

init();

function init() {
  if (!localizedTextsReady) {
    localizeSystemTexts();
    localizedTextsReady = true;
  }
  if (state && state.meta && typeof state.meta.projectIdea === "string") {
    state.meta.projectIdea = toGermanDisplay(state.meta.projectIdea);
  }
  if (state && state.rubric && typeof state.rubric === "object") {
    const migratedRubric = {};
    Object.entries(state.rubric).forEach(([key, value]) => {
      migratedRubric[toGermanDisplay(key)] = value;
    });
    RUBRIC.forEach((criterion) => {
      if (!(criterion in migratedRubric)) migratedRubric[criterion] = 0;
    });
    state.rubric = migratedRubric;
  }
  applyVisualSettings(loadVisualSettings());
  bindTabbar();
  renderMetaFields();
  renderTimeline();
  bindGlobalControls();
  initVisualControls();
  initMaterialsLibrary();
  registerServiceWorker();
  renderPhaseNav();
  renderPhaseContent();
  renderCheckpoints();
  renderDecision();
  renderPitchFields();
  renderRubric();
  updateProgress();
  loadTextExcerpt();
}

function localizeSystemTexts() {
  const targets = [
    META_FIELDS,
    PROJECT_IDEAS,
    TIMELINE,
    PHASES,
    CHECKPOINTS,
    CHECKPOINT_FIELDS,
    DECISION_LEVELS,
    PITCH_FIELDS,
    RUBRIC,
    SELF_FIELDS,
    FEEDBACK_SOURCES
  ];
  targets.forEach((target) => applyGermanTypography(target));
}

function applyGermanTypography(value) {
  if (typeof value === "string") return toGermanDisplay(value);
  if (Array.isArray(value)) {
    for (let i = 0; i < value.length; i += 1) {
      value[i] = applyGermanTypography(value[i]);
    }
    return value;
  }
  if (value && typeof value === "object") {
    Object.keys(value).forEach((key) => {
      if (key === "key" || key === "id") return;
      value[key] = applyGermanTypography(value[key]);
    });
  }
  return value;
}

function createInitialState() {
  const phases = {};
  for (const phase of PHASES) {
    phases[phase.id] = {
      fields: Object.fromEntries(phase.fields.map((field) => [field.key, ""])),
      tasks: {
        basis: Object.fromEntries(phase.tasks.basis.map((_, idx) => [`b${idx}`, false])),
        standard: Object.fromEntries(phase.tasks.standard.map((_, idx) => [`s${idx}`, false])),
        expert: Object.fromEntries(phase.tasks.expert.map((_, idx) => [`e${idx}`, false]))
      },
      self: Object.fromEntries(SELF_FIELDS.map((entry) => [entry.key, ""]))
    };
  }

  return {
    meta: {
      projectTitle: "",
      teamName: "",
      className: "",
      startDate: "",
      projectIdea: PROJECT_IDEAS[0],
      priorKnowledge: {
        buchgraph: false,
        figuren: false
      }
    },
    phases,
    checkpoints: CHECKPOINTS.map(() => Object.fromEntries(CHECKPOINT_FIELDS.map((field) => [field.key, ""]))),
    decision: {
      selected: DECISION_LEVELS[0].id,
      notes: "",
      actionPlan: ""
    },
    pitch: Object.fromEntries(PITCH_FIELDS.map((field) => [field.key, ""])),
    rubric: Object.fromEntries(RUBRIC.map((criterion) => [criterion, 0]))
  };
}

function loadState() {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object") return null;
    return parsed;
  } catch (error) {
    return null;
  }
}

function saveState() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
}

function bindTabbar() {
  document.querySelectorAll(".tab").forEach((tab) => {
    tab.addEventListener("click", () => {
      activeTab = tab.dataset.tab;
      document.querySelectorAll(".tab").forEach((entry) => entry.classList.remove("active"));
      tab.classList.add("active");
      document.querySelectorAll(".panel").forEach((panel) => panel.classList.remove("active"));
      document.getElementById(activeTab).classList.add("active");
    });
  });
}

function renderMetaFields() {
  const box = document.getElementById("meta-fields");
  box.innerHTML = "";
  META_FIELDS.forEach((field) => {
    const label = document.createElement("label");
    label.textContent = toGermanDisplay(field.label);

    let input;
    if (field.type === "select") {
      input = document.createElement("select");
      PROJECT_IDEAS.forEach((idea) => {
        const option = document.createElement("option");
        option.value = idea;
        option.textContent = toGermanDisplay(idea);
        input.appendChild(option);
      });
    } else {
      input = document.createElement("input");
      input.type = field.type;
      if (field.placeholder) input.placeholder = toGermanDisplay(field.placeholder);
    }

    input.value = state.meta[field.key] || "";
    input.dataset.meta = field.key;
    input.dataset.fieldKey = field.key;
    input.dataset.fieldLabel = toGermanDisplay(field.label);
    input.dataset.feedbackContext = "meta";
    input.addEventListener("input", onMetaChange);
    label.appendChild(input);
    label.appendChild(createFeedbackNode(buildFieldFeedback(field.key, toGermanDisplay(field.label), String(input.value || ""), "meta")));
    box.appendChild(label);
  });

  const buchgraph = document.getElementById("pk-buchgraph");
  const figuren = document.getElementById("pk-figuren");

  buchgraph.checked = !!state.meta.priorKnowledge.buchgraph;
  figuren.checked = !!state.meta.priorKnowledge.figuren;

  buchgraph.addEventListener("change", () => {
    state.meta.priorKnowledge.buchgraph = buchgraph.checked;
    saveAndRefresh();
  });

  figuren.addEventListener("change", () => {
    state.meta.priorKnowledge.figuren = figuren.checked;
    saveAndRefresh();
  });
}

function onMetaChange(event) {
  const key = event.target.dataset.meta;
  state.meta[key] = event.target.value;
  refreshFeedbackForInput(event.target);
  saveAndRefresh();
}

function renderTimeline() {
  const list = document.getElementById("timeline");
  list.innerHTML = TIMELINE.map((entry) => `<li>${escapeHtml(toGermanDisplay(entry))}</li>`).join("");
}

function renderPhaseNav() {
  const nav = document.getElementById("phase-nav");
  const rows = PHASES.map((phase) => {
    const score = countPhaseCompletion(phase.id);
    const activeClass = phase.id === activePhase ? "active" : "";
    return `<button class="phase-link ${activeClass}" data-phase-nav="${phase.id}">${escapeHtml(toGermanDisplay(phase.title))}<br><small>${score.done}/${score.total} erledigt</small></button>`;
  }).join("");

  nav.innerHTML = `<h2>Lernphasen</h2><p class="subtle">Vom Text bis zum Pitch in kleinteiligen Schritten.</p>${rows}`;

  nav.querySelectorAll("[data-phase-nav]").forEach((button) => {
    button.addEventListener("click", () => {
      activePhase = button.dataset.phaseNav;
      renderPhaseNav();
      renderPhaseContent();
    });
  });
}

function renderPhaseContent() {
  const phase = PHASES.find((entry) => entry.id === activePhase);
  const phaseState = state.phases[phase.id];
  const content = document.getElementById("phase-content");

  const fieldHtml = phase.fields
    .map(
      (field) => `
      <label>
        ${escapeHtml(toGermanDisplay(field.label))}
        <textarea data-phase-field="${phase.id}" data-field-key="${field.key}" data-field-label="${escapeHtml(
          toGermanDisplay(field.label)
        )}" data-feedback-context="phase" placeholder="${escapeHtml(toGermanDisplay(field.placeholder || ""))}">${escapeHtml(
        phaseState.fields[field.key] || ""
      )}</textarea>
        ${renderFieldFeedbackHTML(field.key, toGermanDisplay(field.label), phaseState.fields[field.key] || "", "phase")}
      </label>
    `
    )
    .join("");

  const taskHtml = ["basis", "standard", "expert"]
    .map((level) => {
      const items = phase.tasks[level]
        .map((task, idx) => {
          const prefix = level === "basis" ? "b" : level === "standard" ? "s" : "e";
          const taskId = `${prefix}${idx}`;
          const checked = phaseState.tasks[level][taskId] ? "checked" : "";
          return `<label><input type="checkbox" data-phase-task="${phase.id}" data-task-level="${level}" data-task-id="${taskId}" ${checked}> ${escapeHtml(toGermanDisplay(task))}</label>`;
        })
        .join("");
      return `<div class="task-box"><h3>${escapeHtml(toGermanDisplay(capitalize(level)))}</h3>${items}</div>`;
    })
    .join("");

  const selfHtml = SELF_FIELDS.map(
    (field) => `
    <label>
      ${escapeHtml(toGermanDisplay(field.label))}
      <textarea data-phase-self="${phase.id}" data-self-key="${field.key}" data-field-label="${escapeHtml(
        toGermanDisplay(field.label)
      )}" data-feedback-context="self">${escapeHtml(phaseState.self[field.key] || "")}</textarea>
      ${renderFieldFeedbackHTML(field.key, toGermanDisplay(field.label), phaseState.self[field.key] || "", "self")}
    </label>
  `
  ).join("");

  content.innerHTML = `
    <h2>${escapeHtml(toGermanDisplay(phase.title))}</h2>
    <div class="phase-meta">
      <div class="meta-chip"><strong>Ziel</strong><br>${escapeHtml(toGermanDisplay(phase.goal))}</div>
      <div class="meta-chip"><strong>Output</strong><br>${escapeHtml(toGermanDisplay(phase.output))}</div>
      <div class="meta-chip"><strong>Zeitrahmen</strong><br>${escapeHtml(toGermanDisplay(phase.time))}</div>
    </div>
    <div class="field-grid">${fieldHtml}</div>
    ${taskHtml}
    <div class="self-box">
      <h3>Selbstwirksamkeits-Loop</h3>
      <div class="field-grid">${selfHtml}</div>
    </div>
    <div class="button-row">
      <button type="button" data-action="export-phase" data-phase-id="${phase.id}">Teilschritt exportieren</button>
      <button type="button" class="ghost" data-action="import-phase" data-phase-id="${phase.id}">Teilschritt importieren</button>
    </div>
  `;

  content.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", onPhaseInput);
  });

  content.querySelectorAll("input[type='checkbox']").forEach((checkbox) => {
    checkbox.addEventListener("change", onPhaseTaskToggle);
  });

  content.querySelectorAll("button[data-action]").forEach((button) => {
    button.addEventListener("click", onPhaseAction);
  });
}

function onPhaseInput(event) {
  const phaseId = event.target.dataset.phaseField || event.target.dataset.phaseSelf;
  if (event.target.dataset.fieldKey) {
    state.phases[phaseId].fields[event.target.dataset.fieldKey] = event.target.value;
  }
  if (event.target.dataset.selfKey) {
    state.phases[phaseId].self[event.target.dataset.selfKey] = event.target.value;
  }
  refreshFeedbackForInput(event.target);
  saveAndRefresh();
}

function onPhaseTaskToggle(event) {
  const phaseId = event.target.dataset.phaseTask;
  const level = event.target.dataset.taskLevel;
  const taskId = event.target.dataset.taskId;
  state.phases[phaseId].tasks[level][taskId] = event.target.checked;
  saveAndRefresh();
}

function onPhaseAction(event) {
  const action = event.target.dataset.action;
  const phaseId = event.target.dataset.phaseId;

  if (action === "export-phase") {
    const payload = {
      type: "phase",
      phaseId,
      data: state.phases[phaseId],
      exportedAt: new Date().toISOString()
    };
    downloadFile(`${phaseId}.json`, JSON.stringify(payload, null, 2), "application/json");
  }

  if (action === "import-phase") {
    importContext = { type: "phase", phaseId, checkpointIndex: null };
    document.getElementById("import-file").click();
  }
}

function renderCheckpoints() {
  const list = document.getElementById("checkpoint-list");
  list.innerHTML = CHECKPOINTS.map((title, index) => {
    const fields = CHECKPOINT_FIELDS.map(
      (field) => `
      <label>
        ${escapeHtml(toGermanDisplay(field.label))}
        <textarea data-checkpoint-index="${index}" data-checkpoint-key="${field.key}" data-field-label="${escapeHtml(
          toGermanDisplay(field.label)
        )}" data-feedback-context="checkpoint">${escapeHtml(
        state.checkpoints[index][field.key] || ""
      )}</textarea>
        ${renderFieldFeedbackHTML(field.key, toGermanDisplay(field.label), state.checkpoints[index][field.key] || "", "checkpoint")}
      </label>
    `
    ).join("");

    return `
      <article class="checkpoint-card">
        <div class="checkpoint-head">
          <h3>${escapeHtml(toGermanDisplay(title))}</h3>
          <div class="button-row">
            <button type="button" data-cp-action="export" data-cp-index="${index}">Export</button>
            <button type="button" class="ghost" data-cp-action="import" data-cp-index="${index}">Import</button>
          </div>
        </div>
        <div class="field-grid">${fields}</div>
      </article>
    `;
  }).join("");

  list.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      const idx = Number(event.target.dataset.checkpointIndex);
      const key = event.target.dataset.checkpointKey;
      state.checkpoints[idx][key] = event.target.value;
      refreshFeedbackForInput(event.target);
      saveAndRefresh();
    });
  });

  list.querySelectorAll("button[data-cp-action]").forEach((button) => {
    button.addEventListener("click", () => {
      const idx = Number(button.dataset.cpIndex);
      const action = button.dataset.cpAction;
      if (action === "export") {
        const payload = {
          type: "checkpoint",
          checkpointIndex: idx,
          data: state.checkpoints[idx],
          exportedAt: new Date().toISOString()
        };
        downloadFile(`checkpoint_${idx + 1}.json`, JSON.stringify(payload, null, 2), "application/json");
      } else {
        importContext = { type: "checkpoint", phaseId: null, checkpointIndex: idx };
        document.getElementById("import-file").click();
      }
    });
  });
}

function renderDecision() {
  const select = document.getElementById("symptom-select");
  select.innerHTML = DECISION_LEVELS.map(
    (entry) =>
      `<option value="${entry.id}" ${entry.id === state.decision.selected ? "selected" : ""}>${escapeHtml(toGermanDisplay(entry.symptom))}</option>`
  ).join("");

  select.onchange = () => {
    state.decision.selected = select.value;
    saveAndRefresh();
    paintDecisionCard();
  };

  paintDecisionCard();
}

function paintDecisionCard() {
  const entry = DECISION_LEVELS.find((item) => item.id === state.decision.selected) || DECISION_LEVELS[0];
  const box = document.getElementById("decision-card");
  const questions = entry.questions.map((question) => `<li>${escapeHtml(toGermanDisplay(question))}</li>`).join("");

  box.innerHTML = `
    <p><strong>${escapeHtml(toGermanDisplay(entry.level))}</strong></p>
    <ul>${questions}</ul>
    <p><strong>Maßnahme:</strong> ${escapeHtml(toGermanDisplay(entry.measure))}</p>
    <label>
      Team-Notizen zur Diagnose
      <textarea id="decision-notes" data-field-key="decisionNotes" data-field-label="Team-Notizen zur Diagnose" data-feedback-context="decision">${escapeHtml(
        state.decision.notes || ""
      )}</textarea>
      ${renderFieldFeedbackHTML("decisionNotes", "Team-Notizen zur Diagnose", state.decision.notes || "", "decision")}
    </label>
    <label>
      Verbindlicher Aktionsplan
      <textarea id="decision-plan" data-field-key="decisionActionPlan" data-field-label="Verbindlicher Aktionsplan" data-feedback-context="decision">${escapeHtml(
        state.decision.actionPlan || ""
      )}</textarea>
      ${renderFieldFeedbackHTML("decisionActionPlan", "Verbindlicher Aktionsplan", state.decision.actionPlan || "", "decision")}
    </label>
  `;

  document.getElementById("decision-notes").addEventListener("input", (event) => {
    state.decision.notes = event.target.value;
    refreshFeedbackForInput(event.target);
    saveAndRefresh();
  });

  document.getElementById("decision-plan").addEventListener("input", (event) => {
    state.decision.actionPlan = event.target.value;
    refreshFeedbackForInput(event.target);
    saveAndRefresh();
  });
}

function renderPitchFields() {
  const box = document.getElementById("pitch-fields");
  box.innerHTML = PITCH_FIELDS.map(
    (field) => `
    <label>
      ${escapeHtml(toGermanDisplay(field.label))}
      <textarea data-pitch-key="${field.key}" data-field-label="${escapeHtml(toGermanDisplay(field.label))}" data-feedback-context="pitch">${escapeHtml(
        state.pitch[field.key] || ""
      )}</textarea>
      ${renderFieldFeedbackHTML(field.key, toGermanDisplay(field.label), state.pitch[field.key] || "", "pitch")}
    </label>
  `
  ).join("");

  box.querySelectorAll("textarea").forEach((textarea) => {
    textarea.addEventListener("input", (event) => {
      state.pitch[event.target.dataset.pitchKey] = event.target.value;
      refreshFeedbackForInput(event.target);
      saveAndRefresh();
    });
  });

  document.getElementById("start-pitch-timer").onclick = startPitchTimer;
  document.getElementById("start-qa-timer").onclick = startQATimer;
  document.getElementById("reset-timer").onclick = resetTimers;
  paintTimers();
}

function renderRubric() {
  const box = document.getElementById("rubric");
  box.innerHTML = RUBRIC.map((criterion) => {
    const value = Number(state.rubric[criterion] || 0);
    return `
      <div class="rubric-row">
        <h3>${escapeHtml(toGermanDisplay(criterion))}</h3>
        <label>
          <input type="range" min="0" max="5" step="1" value="${value}" data-rubric="${criterion}">
        </label>
        <small>Score: <span data-rubric-value="${criterion}">${value}</span>/5</small>
      </div>
    `;
  }).join("");

  box.querySelectorAll("input[type='range']").forEach((slider) => {
    slider.addEventListener("input", (event) => {
      const key = event.target.dataset.rubric;
      const value = Number(event.target.value);
      state.rubric[key] = value;
      box.querySelector(`[data-rubric-value="${key}"]`).textContent = String(value);
      saveAndRefresh();
    });
  });

  updateRubricTotal();
}

function loadVisualSettings() {
  try {
    const raw = localStorage.getItem(VISUALS_KEY);
    if (!raw) return { ...VISUAL_DEFAULTS };
    const parsed = JSON.parse(raw);
    return {
      visibility: clampNumber(Number(parsed.visibility), 30, 100, VISUAL_DEFAULTS.visibility),
      cardOpacity: clampNumber(Number(parsed.cardOpacity), 38, 90, VISUAL_DEFAULTS.cardOpacity)
    };
  } catch (error) {
    return { ...VISUAL_DEFAULTS };
  }
}

function saveVisualSettings(settings) {
  localStorage.setItem(VISUALS_KEY, JSON.stringify(settings));
}

function applyVisualSettings(settings) {
  const visibilityN = settings.visibility / 100;
  const root = document.documentElement;

  const blur = 1.9 - visibilityN * 1.7;
  const brightness = 1.02 + visibilityN * 0.82;
  const saturate = 1.04 + visibilityN * 0.5;
  const vignetteOpacity = 0.26 - visibilityN * 0.24;
  const gradientOpacity = 0.18 - visibilityN * 0.16;

  root.style.setProperty("--video-blur", `${Math.max(0.2, blur).toFixed(2)}px`);
  root.style.setProperty("--video-brightness", `${brightness.toFixed(2)}`);
  root.style.setProperty("--video-saturate", `${saturate.toFixed(2)}`);
  root.style.setProperty("--vignette-opacity", `${Math.max(0.02, vignetteOpacity).toFixed(2)}`);
  root.style.setProperty("--gradient-opacity", `${Math.max(0.02, gradientOpacity).toFixed(2)}`);
  root.style.setProperty("--card-alpha", `${(settings.cardOpacity / 100).toFixed(2)}`);
}

function initVisualControls() {
  const visibility = document.getElementById("bg-visibility");
  const cardOpacity = document.getElementById("card-opacity");
  const reset = document.getElementById("reset-visuals");
  if (!visibility || !cardOpacity || !reset) return;

  const current = loadVisualSettings();
  visibility.value = String(current.visibility);
  cardOpacity.value = String(current.cardOpacity);
  applyVisualSettings(current);

  visibility.addEventListener("input", () => {
    const next = {
      visibility: clampNumber(Number(visibility.value), 30, 100, VISUAL_DEFAULTS.visibility),
      cardOpacity: clampNumber(Number(cardOpacity.value), 38, 90, VISUAL_DEFAULTS.cardOpacity)
    };
    applyVisualSettings(next);
    saveVisualSettings(next);
  });

  cardOpacity.addEventListener("input", () => {
    const next = {
      visibility: clampNumber(Number(visibility.value), 30, 100, VISUAL_DEFAULTS.visibility),
      cardOpacity: clampNumber(Number(cardOpacity.value), 38, 90, VISUAL_DEFAULTS.cardOpacity)
    };
    applyVisualSettings(next);
    saveVisualSettings(next);
  });

  reset.addEventListener("click", () => {
    const defaults = { ...VISUAL_DEFAULTS };
    visibility.value = String(defaults.visibility);
    cardOpacity.value = String(defaults.cardOpacity);
    applyVisualSettings(defaults);
    saveVisualSettings(defaults);
  });
}

async function initMaterialsLibrary() {
  const addButton = document.getElementById("materials-add");
  const persistButton = document.getElementById("materials-persist");
  const exportButton = document.getElementById("materials-export");
  const importButton = document.getElementById("materials-import");
  const fileInput = document.getElementById("materials-file-input");
  const importInput = document.getElementById("materials-import-file");
  const statusEl = document.getElementById("materials-status");
  if (!addButton || !persistButton || !exportButton || !importButton || !fileInput || !importInput || !statusEl) return;

  if (!("indexedDB" in window)) {
    statusEl.textContent = "IndexedDB nicht verfuegbar.";
    return;
  }

  try {
    materialDb = await openMaterialsDb();
    await renderMaterialsList();
    await paintStorageStatus();
  } catch (error) {
    statusEl.textContent = "Materialspeicher konnte nicht initialisiert werden.";
    return;
  }

  addButton.addEventListener("click", () => fileInput.click());
  fileInput.addEventListener("change", async () => {
    const files = [...(fileInput.files || [])];
    if (files.length === 0) return;
    await addMaterialFiles(files);
    fileInput.value = "";
    await renderMaterialsList();
  });

  persistButton.addEventListener("click", async () => {
    if (!navigator.storage || !navigator.storage.persist) {
      statusEl.textContent = "Persistenter Speicher wird von diesem Browser nicht unterstuetzt.";
      return;
    }
    const granted = await navigator.storage.persist();
    statusEl.textContent = granted ? "Dauerhafte Speicherung aktiv." : "Persistenz wurde nicht gewaehrt.";
    await paintStorageStatus();
  });

  exportButton.addEventListener("click", async () => {
    await exportMaterialsArchive();
  });

  importButton.addEventListener("click", () => {
    importInput.click();
  });

  importInput.addEventListener("change", async () => {
    const [file] = importInput.files || [];
    if (!file) return;
    try {
      const restored = await importMaterialsArchive(file);
      await renderMaterialsList();
      alert(`${restored} Materialien wurden aus dem Backup wiederhergestellt.`);
    } catch (error) {
      alert("Material-Import fehlgeschlagen: Datei ist ungueltig oder beschaedigt.");
    } finally {
      importInput.value = "";
    }
  });
}

function openMaterialsDb() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(MATERIAL_DB, 1);
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains(MATERIAL_STORE)) {
        const store = db.createObjectStore(MATERIAL_STORE, { keyPath: "id" });
        store.createIndex("createdAt", "createdAt");
      }
    };
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

async function addMaterialFiles(files) {
  if (!materialDb) return;
  const tx = materialDb.transaction(MATERIAL_STORE, "readwrite");
  const store = tx.objectStore(MATERIAL_STORE);

  files.forEach((file) => {
    const id = typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}_${file.name}`;
    store.put({
      id,
      name: file.name,
      type: file.type || "application/octet-stream",
      size: file.size,
      createdAt: new Date().toISOString(),
      blob: file
    });
  });

  await txDone(tx);
  await paintStorageStatus();
}

async function upsertMaterials(items) {
  if (!materialDb || !Array.isArray(items) || items.length === 0) return;
  const tx = materialDb.transaction(MATERIAL_STORE, "readwrite");
  const store = tx.objectStore(MATERIAL_STORE);
  items.forEach((item) => {
    store.put(item);
  });
  await txDone(tx);
  await paintStorageStatus();
}

async function listMaterials() {
  if (!materialDb) return [];
  const tx = materialDb.transaction(MATERIAL_STORE, "readonly");
  const store = tx.objectStore(MATERIAL_STORE);
  const request = store.getAll();
  const items = await requestToPromise(request);
  return (items || []).sort((a, b) => String(b.createdAt || "").localeCompare(String(a.createdAt || "")));
}

async function deleteMaterial(id) {
  if (!materialDb) return;
  const tx = materialDb.transaction(MATERIAL_STORE, "readwrite");
  tx.objectStore(MATERIAL_STORE).delete(id);
  await txDone(tx);
  await paintStorageStatus();
}

async function exportMaterialsArchive() {
  const items = await listMaterials();
  if (items.length === 0) {
    alert("Keine Materialien vorhanden, die gesichert werden koennen.");
    return;
  }

  const files = await Promise.all(
    items.map(async (item) => ({
      id: item.id,
      name: item.name,
      type: item.type || "application/octet-stream",
      size: Number(item.size || 0),
      createdAt: item.createdAt || new Date().toISOString(),
      dataUrl: await blobToDataURL(item.blob)
    }))
  );

  const payload = {
    type: MATERIAL_ARCHIVE_TYPE,
    version: 1,
    exportedAt: new Date().toISOString(),
    files
  };

  downloadFile(
    `showrunner_materialien_backup_${new Date().toISOString().slice(0, 10)}.json`,
    JSON.stringify(payload),
    "application/json"
  );
}

async function importMaterialsArchive(file) {
  const text = await file.text();
  const payload = JSON.parse(text);
  if (!payload || payload.type !== MATERIAL_ARCHIVE_TYPE || !Array.isArray(payload.files)) {
    throw new Error("invalid archive");
  }

  const restored = [];
  for (const entry of payload.files) {
    if (!entry || typeof entry !== "object" || !entry.dataUrl) continue;
    const blob = dataURLToBlob(String(entry.dataUrl));
    const createdAt = new Date(String(entry.createdAt || new Date().toISOString()));
    restored.push({
      id:
        typeof entry.id === "string" && entry.id
          ? entry.id
          : (typeof crypto !== "undefined" && crypto.randomUUID ? crypto.randomUUID() : `${Date.now()}_${entry.name || "material"}`),
      name: String(entry.name || "material"),
      type: String(entry.type || blob.type || "application/octet-stream"),
      size: Number(entry.size || blob.size || 0),
      createdAt: Number.isNaN(createdAt.getTime()) ? new Date().toISOString() : createdAt.toISOString(),
      blob
    });
  }

  await upsertMaterials(restored);
  return restored.length;
}

async function renderMaterialsList() {
  const box = document.getElementById("materials-list");
  if (!box) return;
  const items = await listMaterials();

  if (items.length === 0) {
    box.innerHTML = "<p class='subtle'>Noch keine Materialien gespeichert.</p>";
    return;
  }

  box.innerHTML = items
    .map((item) => {
      const dt = new Date(item.createdAt || Date.now()).toLocaleString("de-CH");
      return `
        <article class="material-item">
          <div class="material-head">
            <strong>${escapeHtml(item.name)}</strong>
            <span class="material-meta">${formatBytes(item.size)} | ${escapeHtml(dt)}</span>
          </div>
          <div class="button-row">
            <button type="button" data-material-action="open" data-material-id="${escapeHtml(item.id)}">Oeffnen</button>
            <button type="button" data-material-action="download" data-material-id="${escapeHtml(item.id)}">Download</button>
            <button type="button" class="ghost" data-material-action="delete" data-material-id="${escapeHtml(item.id)}">Loeschen</button>
          </div>
        </article>
      `;
    })
    .join("");

  box.querySelectorAll("button[data-material-action]").forEach((button) => {
    button.addEventListener("click", async () => {
      const action = button.dataset.materialAction;
      const id = button.dataset.materialId;
      const material = (await listMaterials()).find((entry) => entry.id === id);
      if (!material) return;

      if (action === "delete") {
        await deleteMaterial(id);
        await renderMaterialsList();
        return;
      }

      const url = URL.createObjectURL(material.blob);
      if (action === "open") {
        window.open(url, "_blank", "noopener,noreferrer");
      }
      if (action === "download") {
        const a = document.createElement("a");
        a.href = url;
        a.download = material.name;
        document.body.appendChild(a);
        a.click();
        a.remove();
      }
      setTimeout(() => URL.revokeObjectURL(url), 2500);
    });
  });
}

async function paintStorageStatus() {
  const statusEl = document.getElementById("materials-status");
  if (!statusEl) return;
  const count = (await listMaterials()).length;

  let persistText = "Persistenzstatus unbekannt";
  if (navigator.storage && navigator.storage.persisted) {
    const persisted = await navigator.storage.persisted();
    persistText = persisted ? "persistiert" : "nicht persistiert";
  }

  let quotaText = "";
  if (navigator.storage && navigator.storage.estimate) {
    const estimate = await navigator.storage.estimate();
    const used = estimate.usage || 0;
    quotaText = ` | genutzt ${formatBytes(used)}`;
  }

  statusEl.textContent = `${count} Dateien gespeichert | ${persistText}${quotaText}`;
}

function requestToPromise(request) {
  return new Promise((resolve, reject) => {
    request.onsuccess = () => resolve(request.result);
    request.onerror = () => reject(request.error);
  });
}

function txDone(tx) {
  return new Promise((resolve, reject) => {
    tx.oncomplete = () => resolve();
    tx.onerror = () => reject(tx.error);
    tx.onabort = () => reject(tx.error);
  });
}

function formatBytes(bytes) {
  const units = ["B", "KB", "MB", "GB"];
  let value = Number(bytes || 0);
  let idx = 0;
  while (value >= 1024 && idx < units.length - 1) {
    value /= 1024;
    idx += 1;
  }
  return `${value.toFixed(idx === 0 ? 0 : 1)} ${units[idx]}`;
}

function blobToDataURL(blob) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(String(reader.result));
    reader.onerror = () => reject(reader.error);
    reader.readAsDataURL(blob);
  });
}

function dataURLToBlob(dataURL) {
  const parts = String(dataURL || "").split(",");
  if (parts.length < 2) throw new Error("invalid dataurl");
  const header = parts[0];
  const body = parts[1];
  const mimeMatch = header.match(/^data:(.*?);base64$/i);
  const mime = mimeMatch ? mimeMatch[1] : "application/octet-stream";
  const binary = atob(body);
  const bytes = new Uint8Array(binary.length);
  for (let i = 0; i < binary.length; i += 1) {
    bytes[i] = binary.charCodeAt(i);
  }
  return new Blob([bytes], { type: mime });
}

function registerServiceWorker() {
  if (!("serviceWorker" in navigator)) return;
  if (!window.location.protocol.startsWith("http")) return;
  const reloadFlag = "showrunner_sw_reloaded_v1";
  navigator.serviceWorker
    .register("./sw.js")
    .then((registration) => {
      registration.update().catch(() => undefined);

      if (registration.waiting) {
        registration.waiting.postMessage({ type: "SKIP_WAITING" });
      }

      registration.addEventListener("updatefound", () => {
        const worker = registration.installing;
        if (!worker) return;
        worker.addEventListener("statechange", () => {
          if (worker.state === "installed" && navigator.serviceWorker.controller) {
            worker.postMessage({ type: "SKIP_WAITING" });
          }
        });
      });

      navigator.serviceWorker.addEventListener("controllerchange", () => {
        if (sessionStorage.getItem(reloadFlag) === "1") return;
        sessionStorage.setItem(reloadFlag, "1");
        window.location.reload();
      });
    })
    .catch(() => {
      // no-op: app works without SW
    });
}

function clampNumber(value, min, max, fallback) {
  if (!Number.isFinite(value)) return fallback;
  return Math.max(min, Math.min(max, value));
}

function bindGlobalControls() {
  document.getElementById("export-all-json").addEventListener("click", exportAllJSON);
  document.getElementById("import-all-json").addEventListener("click", () => {
    importContext = { type: "all", phaseId: null, checkpointIndex: null };
    document.getElementById("import-file").click();
  });

  document.getElementById("export-all-json-2").addEventListener("click", exportAllJSON);
  document.getElementById("import-all-json-2").addEventListener("click", () => {
    importContext = { type: "all", phaseId: null, checkpointIndex: null };
    document.getElementById("import-file").click();
  });

  document.getElementById("export-dossier-md").addEventListener("click", () => {
    downloadFile("showrunner_dossier.md", generateDossierMarkdown(), "text/markdown");
  });

  document.getElementById("export-pitch-md").addEventListener("click", () => {
    downloadFile("pitch_manuskript.md", generatePitchMarkdown(), "text/markdown");
  });

  document.getElementById("export-checkpoints-md").addEventListener("click", () => {
    downloadFile("checkpoints.md", generateCheckpointsMarkdown(), "text/markdown");
  });

  document.getElementById("import-file").addEventListener("change", onImportFile);
}

function onImportFile(event) {
  const [file] = event.target.files;
  if (!file) return;

  const reader = new FileReader();
  reader.onload = () => {
    try {
      const payload = JSON.parse(String(reader.result));

      if (importContext.type === "all") {
        if (!payload || !payload.meta || !payload.phases) {
          alert("Import fehlgeschlagen: Datei ist kein Gesamtprojekt.");
          event.target.value = "";
          return;
        }
        state = payload;
        saveAndRefresh(true);
        return;
      }

      if (importContext.type === "phase") {
        if (payload.type !== "phase" || payload.phaseId !== importContext.phaseId || !payload.data) {
          alert("Import fehlgeschlagen: Datei passt nicht zu dieser Phase.");
          event.target.value = "";
          return;
        }
        state.phases[importContext.phaseId] = payload.data;
        saveAndRefresh(true);
        return;
      }

      if (importContext.type === "checkpoint") {
        if (payload.type !== "checkpoint" || Number(payload.checkpointIndex) !== importContext.checkpointIndex || !payload.data) {
          alert("Import fehlgeschlagen: Datei passt nicht zu diesem Checkpoint.");
          event.target.value = "";
          return;
        }
        state.checkpoints[importContext.checkpointIndex] = payload.data;
        saveAndRefresh(true);
      }
    } catch (error) {
      alert("Import fehlgeschlagen: JSON konnte nicht gelesen werden.");
    } finally {
      event.target.value = "";
    }
  };

  reader.readAsText(file, "utf-8");
}

function exportAllJSON() {
  const payload = {
    ...state,
    exportedAt: new Date().toISOString(),
    app: "showrunner-lernumgebung"
  };
  downloadFile("showrunner_gesamtprojekt.json", JSON.stringify(payload, null, 2), "application/json");
}

function generateDossierMarkdown() {
  const lines = [];
  lines.push("# Showrunner Development Dossier");
  lines.push("");
  lines.push(`- Projekttitel: ${state.meta.projectTitle || "-"}`);
  lines.push(`- Team: ${state.meta.teamName || "-"}`);
  lines.push(`- Klasse: ${state.meta.className || "-"}`);
  lines.push(`- Startdatum: ${state.meta.startDate || "-"}`);
  lines.push(`- Projektidee: ${state.meta.projectIdea || "-"}`);
  lines.push("");

  PHASES.forEach((phase) => {
    lines.push(`## ${phase.title}`);
    lines.push(`- Ziel: ${phase.goal}`);
    lines.push(`- Output: ${phase.output}`);
    lines.push("");

    phase.fields.forEach((field) => {
      const value = state.phases[phase.id].fields[field.key] || "-";
      lines.push(`### ${field.label}`);
      lines.push(value);
      lines.push("");
    });

    lines.push("### Selbstwirksamkeits-Loop");
    SELF_FIELDS.forEach((entry) => {
      const value = state.phases[phase.id].self[entry.key] || "-";
      lines.push(`- ${entry.label}: ${value}`);
    });
    lines.push("");
  });

  lines.push("## Decision System");
  const selected = DECISION_LEVELS.find((entry) => entry.id === state.decision.selected);
  lines.push(`- Aktueller Problemtyp: ${selected ? selected.symptom : "-"}`);
  lines.push(`- Notizen: ${state.decision.notes || "-"}`);
  lines.push(`- Aktionsplan: ${state.decision.actionPlan || "-"}`);
  lines.push("");

  lines.push("## Pitch-Rubrik");
  RUBRIC.forEach((criterion) => {
    lines.push(`- ${criterion}: ${state.rubric[criterion] || 0}/5`);
  });

  lines.push("");
  lines.push(`_Exportiert am ${new Date().toLocaleString("de-CH")}_`);
  return lines.join("\n");
}

function generateCheckpointsMarkdown() {
  const lines = ["# Checkpoint-Berichte", ""];

  state.checkpoints.forEach((checkpoint, idx) => {
    lines.push(`## ${CHECKPOINTS[idx]}`);
    CHECKPOINT_FIELDS.forEach((field) => {
      lines.push(`### ${field.label}`);
      lines.push(checkpoint[field.key] || "-");
      lines.push("");
    });
  });

  lines.push(`_Exportiert am ${new Date().toLocaleString("de-CH")}_`);
  return lines.join("\n");
}

function generatePitchMarkdown() {
  const lines = ["# Pitch-Manuskript", ""];
  PITCH_FIELDS.forEach((field) => {
    lines.push(`## ${field.label}`);
    lines.push(state.pitch[field.key] || "-");
    lines.push("");
  });

  lines.push("## Rubrik-Selbsteinschaetzung");
  RUBRIC.forEach((criterion) => {
    lines.push(`- ${criterion}: ${state.rubric[criterion] || 0}/5`);
  });

  lines.push("");
  lines.push(`_Exportiert am ${new Date().toLocaleString("de-CH")}_`);
  return lines.join("\n");
}

function createFeedbackNode(analysis) {
  const wrapper = document.createElement("div");
  wrapper.className = `autofeedback ${analysis.level}`;
  wrapper.innerHTML = buildFeedbackInnerHTML(analysis);
  return wrapper;
}

function renderFieldFeedbackHTML(fieldKey, fieldLabel, value, context) {
  const analysis = buildFieldFeedback(fieldKey, fieldLabel, value, context);
  return `<div class="autofeedback ${analysis.level}">${buildFeedbackInnerHTML(analysis)}</div>`;
}

function buildFeedbackInnerHTML(analysis) {
  const checksHtml = analysis.checks
    .map((check) => {
      const marker = check.pass ? "[OK]" : "[!]";
      return `<li>${marker} <strong>${escapeHtml(toGermanDisplay(check.title))}:</strong> ${escapeHtml(toGermanDisplay(check.detail))}</li>`;
    })
    .join("");

  const nextSteps =
    analysis.nextSteps.length > 0
      ? `<div class="af-next"><strong>Nächster Feinschliff:</strong> ${escapeHtml(toGermanDisplay(analysis.nextSteps.join(" | ")))}</div>`
      : `<div class="af-next"><strong>Nächster Feinschliff:</strong> Feinschliff im Teamtest und laut vorlesen.</div>`;

  const sourceText =
    analysis.sources.length > 0
      ? analysis.sources.map((sourceKey) => FEEDBACK_SOURCES[sourceKey]).join(" ; ")
      : FEEDBACK_SOURCES.handbuch;

  return `
    <div class="af-head">
      <strong>Autofeedback: ${analysis.score}/100</strong>
      <span>${toGermanDisplay(analysis.levelLabel)}</span>
    </div>
    <ul class="af-list">${checksHtml}</ul>
    ${nextSteps}
    <div class="af-source">Basis: ${escapeHtml(toGermanDisplay(sourceText))}</div>
  `;
}

function refreshFeedbackForInput(input) {
  const label = input.closest("label");
  if (!label) return;
  const box = label.querySelector(".autofeedback");
  if (!box) return;

  const fieldKey = getInputFieldKey(input);
  const fieldLabel = input.dataset.fieldLabel || fieldKey;
  const context = input.dataset.feedbackContext || "phase";
  const analysis = buildFieldFeedback(fieldKey, fieldLabel, input.value || "", context);

  box.className = `autofeedback ${analysis.level}`;
  box.innerHTML = buildFeedbackInnerHTML(analysis);
}

function getInputFieldKey(input) {
  return (
    input.dataset.fieldKey ||
    input.dataset.selfKey ||
    input.dataset.meta ||
    input.dataset.checkpointKey ||
    input.dataset.pitchKey ||
    "field"
  );
}

function buildFieldFeedback(fieldKey, fieldLabel, rawValue, context) {
  const value = String(rawValue || "").trim();
  const normalized = normalizeForCheck(value);
  const words = countWords(value);
  const checks = [];

  const language = analyzeLinguisticQuality(value, normalized);
  const plausibilityPass = !language.isLikelyNonsense;
  const languagePassDetail = `Text wirkt sprachlich konsistent (Signalwert ${language.qualitySignal}/100).`;
  const languageFailDetail =
    language.nonsenseSignals.length > 0
      ? `Text wirkt unplausibel (${language.nonsenseSignals.join(", ")}).`
      : "Text wirkt sprachlich unplausibel.";
  checks.push(
    makeCheck(
      plausibilityPass,
      "Sprachliche Plausibilitaet",
      languagePassDetail,
      languageFailDetail,
      "kompendium",
      "Neu formulieren: Aussage + Begruendung + Konsequenz, keine Zufallssilben oder Keyboard-Muster.",
      4,
      true
    )
  );

  const minWords = getMinimumWords(fieldKey, context);
  checks.push(
    makeCheck(
      words >= minWords,
      "Ausarbeitungstiefe",
      `Umfang reicht fuer eine Beurteilung (${words}/${minWords}+ Woerter).`,
      `Zu knapp (${words}/${minWords} Woerter). Feld braucht mehr Kontext und Entscheidungstiefe.`,
      "kompendium",
      `Mindestens ${Math.max(minWords, 8)} Woerter mit Ursache-Wirkung und Folge schreiben.`,
      3
    )
  );

  if (["phase", "checkpoint", "pitch", "decision"].includes(context)) {
    checks.push(
      makeCheck(
        hasAny(normalized, CONFLICT_TERMS),
        "Konflikt- oder Konsequenzlogik",
        "Konflikt/Entscheidung/Konsequenz wird inhaltlich adressiert.",
        "Konflikt- und Konsequenzlogik fehlt noch.",
        "handbuch",
        "Explizit benennen: Wer will was, was blockiert, welche Konsequenz folgt?",
        3
      )
    );
  }

  checks.push(...buildFieldSpecificChecks(fieldKey, fieldLabel, value, normalized, words, context, language));

  let score = computeWeightedScore(checks);
  const hasCriticalFailure = checks.some((check) => check.critical && !check.pass);
  if (language.isLikelyNonsense) score = Math.min(score, 12);
  if (language.fillerTokenCount > 0) score = Math.min(score, 28);
  if (words < minWords) score = Math.min(score, context === "meta" ? 55 : 40);
  if (hasCriticalFailure) score = Math.min(score, fieldKey === "projectTitle" ? 30 : 45);

  const level = score >= 80 ? "strong" : score >= 55 ? "medium" : "weak";
  const levelLabel = score >= 80 ? "hoch differenziert" : score >= 55 ? "ausbaufaehig" : "grundlegend nachschaerfen";
  const nextSteps = checks
    .filter((check) => !check.pass)
    .sort((a, b) => (b.weight || 1) - (a.weight || 1))
    .map((check) => check.fix)
    .filter(Boolean)
    .slice(0, 3);
  const sources = [...new Set(checks.map((check) => check.source).filter(Boolean))];

  return { score, level, levelLabel, checks, nextSteps, sources };
}

function getMinimumWords(fieldKey, context) {
  if (fieldKey === "startDate" || fieldKey === "projectIdea") return 1;
  if (fieldKey === "teamName" || fieldKey === "className") return 1;
  if (fieldKey === "projectTitle") return 2;
  if (context === "meta") return 5;
  if (context === "decision") return 10;
  return 12;
}

function hasMeaningfulTitle(normalized, language) {
  const tokens = tokenizeWords(normalized).filter((token) => /[a-zA-ZäöüÄÖÜß]/.test(token));
  const meaningful = tokens.filter(
    (token) =>
      token.length >= 4 &&
      !FILLER_TOKENS.has(token) &&
      !COMMON_DE_WORDS.has(token) &&
      !/^[a-z]{1,3}$/.test(token)
  );

  return (
    tokens.length >= 2 &&
    meaningful.length >= 1 &&
    language.fillerTokenCount === 0 &&
    language.maxTokenShare < 0.5 &&
    language.uniqueRatio >= 0.6 &&
    !language.isLikelyNonsense
  );
}

function buildFieldSpecificChecks(fieldKey, fieldLabel, value, normalized, words, context, language) {
  const checks = [];
  const matchedTheme = getMatchedTerms(normalized, THEME_TERMS);
  const matchedSerial = getMatchedTerms(normalized, SERIAL_TERMS);
  const matchedVisual = getMatchedTerms(normalized, VISUAL_TERMS);
  const matchedCollab = getMatchedTerms(normalized, COLLAB_TERMS);
  const matchedScript = getMatchedTerms(normalized, SCRIPT_TERMS);

  switch (fieldKey) {
    case "projectTitle":
      checks.push(makeCheck(words >= 2 && words <= 10, "Titel-Schärfe", "Titel ist knapp und fokussiert.", "Titel ist zu vage oder zu kurz.", "kompendium", "Einen klaren Konfliktbegriff im Titel verankern (2-10 Wörter).", 3, true));
      checks.push(
        makeCheck(
          language.qualitySignal >= 60 && !language.isLikelyNonsense,
          "Sprachliche Tragfähigkeit",
          "Titel ist sprachlich tragfähig und präsentierbar.",
          "Titel ist sprachlich nicht präsentierbar (Zufallsmuster/fehlende Semantik).",
          "kompendium",
          "Titel als sinnvollen Satzkern mit Thema und Konflikt neu formulieren.",
          4,
          true
        )
      );
      checks.push(
        makeCheck(
          hasMeaningfulTitle(normalized, language),
          "Semantische Dichte",
          "Titel enthält einen tragfähigen Sinnkern.",
          "Titel enthält keinen tragfähigen Sinnkern (Füllwörter/Wiederholung ohne Aussage).",
          "kompendium",
          "Mindestens ein sinntragendes Schlüsselwort plus konkrete Konfliktrichtung ergänzen.",
          4,
          true
        )
      );
      checks.push(makeCheck(matchedTheme.length >= 1 || hasAny(normalized, ["jenny", "meier", "1832"]), "Thematischer Anker", `Themenanker vorhanden (${matchedTheme.join(", ") || "JENNY-Kontext"}).`, "Themenanker fehlt.", "handbuch", "Mindestens ein Leitmotiv (z. B. Freiheit, Zugehörigkeit, Macht) im Titel benennen.", 3, true));
      checks.push(
        makeCheck(
          !hasAny(normalized, ["asdf", "qwer", "lorem", "xxx", "testtest"]) && !language.hasKeyboardMash && language.gibberishTokenCount === 0,
          "Glaubwürdigkeit",
          "Kein Platzhalter- oder Zufallstitel erkannt.",
          "Titel enthaelt Platzhalter/Zufallsmuster oder sprachlich unplausible Token.",
          "kompendium",
          "Titel in bedeutungsvoller Sprache neu formulieren: Konflikt + Thema + Perspektive.",
          4,
          true
        )
      );
      break;
    case "teamName":
    case "className":
      checks.push(makeCheck(words >= 1 && !/^[^a-zA-Z0-9]*$/.test(value), "Eindeutige Zuordnung", "Eintrag ist als reale Zuordnung nutzbar.", "Eintrag fehlt oder ist unplausibel.", "serienschreiben", "Eindeutigen Team-/Klassenbezug eintragen.", 2));
      break;
    case "startDate":
      checks.push(makeCheck(/^\d{4}-\d{2}-\d{2}$/.test(value), "Planungsfaehiges Datum", "Datum ist formal korrekt.", "Datum fehlt oder Format ist falsch.", "serienschreiben", "Datum im Format JJJJ-MM-TT eintragen.", 3));
      break;
    case "projectIdea":
      checks.push(makeCheck(PROJECT_IDEAS.includes(value), "Projektidee verankert", "Idee ist aus dem kuratierten Set gewaehlt.", "Idee ist nicht sauber verankert.", "kompendium", "Eine der vorgegebenen Projektideen waehlen.", 2));
      break;
    case "teamRoles":
    case "roles":
    case "support":
      checks.push(makeCheck(matchedCollab.length >= 2, "Rollenmodell Writers' Room", `Rollen-/Kooperationsbegriffe vorhanden (${matchedCollab.join(", ") || "-" }).`, "Rollenlogik im Sinne Writers' Room fehlt.", "handbuch", "Mindestens zwei Rollen und ihre Verantwortungsgrenzen benennen.", 3));
      checks.push(makeCheck(hasAny(normalized, ["feedback", "abgabe", "termin", "zustandig", "verantwort"]), "Arbeitskultur", "Abstimmungs- oder Verantwortungslogik ist enthalten.", "Arbeitsprozess bleibt unklar.", "serienschreiben", "Feedback-Takt, Verantwortliche und Abgabeform festlegen.", 3));
      break;
    case "textCore":
      checks.push(makeCheck(matchedTheme.length >= 1 && hasAny(normalized, CONFLICT_TERMS), "Interpretativer Konfliktkern", `Themen- und Konfliktbezug vorhanden (${matchedTheme.join(", ") || "Thema"}).`, "Textkern bleibt beschreibend statt konfliktorientiert.", "kompendium", "Romanpassage als gesellschaftlichen Konflikt formulieren (nicht nur Inhalt).", 3));
      break;
    case "adaptationRule":
      checks.push(makeCheck(hasAny(normalized, ["interpret", "adaption", "uebersetz", "zeigen"]) && hasAny(normalized, ["nicht", "statt"]), "Medienwechsel-Regel", "Regel zur Adaption ist sichtbar.", "Regel fuer den Medienwechsel fehlt.", "kompendium", "Satz ergaenzen: Was wird gezeigt statt erklaert/erzaehlt?", 3));
      checks.push(makeCheck(hasAny(normalized, ["blick", "raum", "status", "dialog", "konsequenz"]), "Szenische Operationalisierung", "Regel ist in Szenenlogik uebersetzt.", "Adaption bleibt abstrakt.", "handbuch", "Konkrete Mittel nennen: Blickregie, Raumdramaturgie, Statuswechsel.", 2));
      break;
    case "microGoal":
    case "goal":
    case "strategy":
    case "nextSteps":
    case "decisionActionPlan":
      checks.push(makeCheck(hasAny(normalized, ["bis", "phase", "termin", "datum", "heute", "morgen", "naechst"]), "Zeitliche Verbindlichkeit", "Zeitrahmen ist gesetzt.", "Keine klare zeitliche Verbindlichkeit.", "serienschreiben", "Frist + Lieferobjekt nennen.", 3));
      checks.push(makeCheck(hasAny(normalized, ["wer", "wir", "team", "rolle", "verantwort"]), "Verantwortungsklaerung", "Verantwortlichkeit ist adressiert.", "Verantwortlichkeiten fehlen.", "serienschreiben", "Zustandige Person/Rolle und Ergebnis definieren.", 2));
      break;
    case "seriesStatement":
      checks.push(makeCheck(hasAny(normalized, ["zeigt", "dass"]), "These als Aussage", "Series Statement ist als These angelegt.", "These-Form fehlt.", "handbuch", "Mit 'Diese Serie zeigt, dass ...' formulieren.", 3));
      checks.push(makeCheck(!hasAny(normalized, ["dann", "danach", "zuerst", "am ende passiert"]), "Keine Plotchronologie", "Statement bleibt auf Bedeutungsebene.", "Statement kippt in Ereignisabfolge.", "handbuch", "Chronologische Plotdetails entfernen, moralischen Kern behalten.", 3));
      break;
    case "centralConflict":
      checks.push(makeCheck(hasAny(normalized, ["will", "ziel"]) && hasAny(normalized, ["welt", "muss", "institution", "widerstand", "gegen"]), "X-vs-Y-Spannung", "Konfliktachse ist als Gegenspannung formuliert.", "X-vs-Y-Struktur fehlt.", "handbuch", "Explizit schreiben: Figur will X, Welt verlangt Y.", 3));
      break;
    case "whySeries":
    case "seriesMechanics":
    case "pitchMechanics":
    case "episodeOverview":
      checks.push(makeCheck(matchedSerial.length >= 2, "Serielle Architektur", `Serienmarker vorhanden (${matchedSerial.join(", ") || "-" }).`, "Serienlogik bleibt zu allgemein.", "handbuch", "Episode, Leitfrage, Cliffhanger und Arc explizit ausarbeiten.", 3));
      checks.push(makeCheck(hasAny(normalized, ["entscheidung", "konsequenz"]), "Konsequenzprinzip", "Konsequenzen sind als Serienmotor angelegt.", "Konsequenzprinzip fehlt.", "kompendium", "Pro Episode Konsequenz notieren, die Beziehungen veraendert.", 3));
      checks.push(makeCheck(matchedScript.length >= 1, "Drehbuchprozess", `Prozessbezug vorhanden (${matchedScript.join(", ") || "-" }).`, "Drehbuchprozessstufe fehlt.", "filmpuls", "Premisse/Expose/Treatment/Plotstruktur als Zwischenschritt benennen.", 2));
      break;
    case "relevanceNow":
      checks.push(makeCheck(getMatchedTerms(normalized, CURRENT_TERMS).length >= 1, "Gegenwartsbezug", "Aktualitaetsbezug ist vorhanden.", "Warum-jetzt-Perspektive fehlt.", "kompendium", "Explizit benennen, welches heutige Problem die Serie spiegelt.", 3));
      break;
    case "mainFigure":
      checks.push(makeCheck(countMatches(normalized, ["wunde", "beduerfnis", "ziel", "angst", "selbsttaeusch", "strategie"]) >= 4, "Psychologisches Profil", "Figurenprofil ist differenziert angelegt.", "Zentrale psychologische Komponenten fehlen.", "handbuch", "Wunde, Beduerfnis, Ziel, Angst, Selbsttaeuschung und Strategie systematisch ausfuellen.", 3));
      break;
    case "antagonisticForce":
      checks.push(makeCheck(hasAny(normalized, ["figur", "institution", "norm", "staat", "familie", "gesellschaft"]), "Gegenkraft-Typ", "Art der Gegenkraft ist benannt.", "Gegenkraft bleibt unscharf.", "handbuch", "Benennen, ob Person, Institution oder Norm die Gegenkraft darstellt.", 3));
      break;
    case "relationshipArc":
      checks.push(makeCheck(hasAny(normalized, ["ausgang", "vorher", "am anfang"]) && hasAny(normalized, ["veraender", "kippt", "am ende"]), "Beziehungsveraenderung", "Entwicklungslinie ist nachvollziehbar.", "Beziehungsdynamik ist nicht klar.", "kompendium", "Startzustand, Kippmoment und Endzustand der Beziehung benennen.", 3));
      break;
    case "staffelArc":
    case "seasonThesis":
      checks.push(makeCheck(hasAny(normalized, ["am anfang", "beginn"]) && hasAny(normalized, ["am ende", "erkennt"]), "Moralische Staffelbewegung", "Transformationsbogen ist angelegt.", "Anfang-Ende-Verschiebung fehlt.", "handbuch", "Formel konsequent ausfuellen: Anfangsglaube -> Enderkenntnis.", 3));
      break;
    case "worldRules":
    case "spaceLogic":
      checks.push(makeCheck(hasAny(normalized, ["macht", "institution", "regel", "code", "raum", "oeffentlich", "privat"]), "Weltlogik", "Sozialregeln und Raumfunktion sind erkennbar.", "Weltregeln bleiben unscharf.", "kompendium", "Pro Raum eine soziale Funktion und Machtwirkung angeben.", 3));
      break;
    case "cameraRules":
    case "lightSoundRules":
    case "visualConcept":
    case "pitchVisual":
      checks.push(makeCheck(matchedVisual.length >= 3, "Audiovisuelle Regelklarheit", `Konkrete Stilmarker vorhanden (${matchedVisual.join(", ") || "-" }).`, "Audiovisuelle Regeln sind zu allgemein.", "handbuch", "Mindestens drei Wenn-Dann-Regeln fuer Kamera/Licht/Ton formulieren.", 3));
      break;
    case "turningPoints":
      checks.push(makeCheck(hasAny(normalized, ["wendepunkt", "kipp", "entscheidung", "offenbarung", "bruch"]), "Dramaturgische Kipppunkte", "Wendelogik ist sichtbar.", "Wendepunkte sind nicht klar konturiert.", "filmpuls", "Pro Wendepunkt Ausloeser, Entscheidung und Folge notieren.", 3));
      break;
    case "consistencyCheck":
      checks.push(makeCheck(hasAny(normalized, ["risiko", "bruch", "inkonsist", "leerlauf", "massnahme"]), "Qualitaetssicherung", "Koharenzrisiken werden reflektiert.", "Risikoanalyse fehlt.", "handbuch", "Mindestens zwei Risiken + Gegenmassnahmen benennen.", 3));
      break;
    case "sceneGoal":
    case "sceneStructure":
      checks.push(makeCheck(hasAny(normalized, ["ziel", "widerstand"]) && hasAny(normalized, ["entscheidung", "konsequenz", "status"]), "Szenenmechanik", "Szenenlogik ist dramaturgisch belastbar.", "Szenenmechanik ist unvollstaendig.", "handbuch", "Viererschritt explizit ausformulieren: Ziel, Widerstand, Entscheidung, Konsequenz.", 3));
      break;
    case "dialogSubtext":
      checks.push(makeCheck(hasAny(normalized, ["subtext", "verborgen", "eigentlich", "status"]) && hasAny(normalized, ["will", "vermeiden", "durchsetzen"]), "Subtext und Macht", "Dialogfunktion ist auf Handlung und Macht ausgerichtet.", "Dialog bleibt auf Informationsebene.", "kompendium", "Pro Figur notieren: Gesagtes, Gemeintes, Machtziel.", 3));
      break;
    case "scriptExcerpt":
      checks.push(makeCheck(hasAny(normalized, ["int", "ext", "tag", "nacht", "dialog"]) || /[A-Z]{2,}\s*\n/.test(value), "Formale Skriptlesbarkeit", "Drehbuchformat ist erkennbar.", "Skriptformat ist kaum lesbar.", "wikihow", "Szenenueberschrift + Dialogblock + Handlungszeile sauber trennen.", 3));
      break;
    case "modelSceneIntent":
    case "promptPositive":
    case "promptNegative":
    case "sceneInterpretation":
      checks.push(makeCheck(hasAny(normalized, ["figur", "raum", "licht", "kamera", "emotion", "macht"]), "Modellszene als Interpretation", "Prompt/Interpretation bindet visuelle Bedeutung ein.", "Modellszene bleibt rein dekorativ.", "kompendium", "Prompt an Figurenziel, Raumfunktion und Machtverschiebung koppeln.", 3));
      break;
    case "modelTool":
      checks.push(makeCheck(hasAny(normalized, ["leonardo", "playground", "canva", "writerduet", "arc", "tool"]) && hasAny(normalized, ["weil", "damit", "um"]), "Toolentscheidung mit Zweck", "Toolwahl ist zweckgebunden begruendet.", "Toolwahl ist nicht begruendet.", "serienschreiben", "Tool + Produktionszweck + erwartetes Ergebnis in einem Satz verbinden.", 3));
      break;
    case "intro":
    case "pitchHook":
      checks.push(makeCheck(hasAny(normalized, ["these", "relevanz", "warum", "jetzt"]) && words >= 15, "Pitch-Hook", "Einstieg koppelt These und Relevanz.", "Hook ohne klare These/Relevanz.", "kompendium", "In 3 Saetzen bauen: These, Konflikt, Warum jetzt.", 3));
      break;
    case "worldFigures":
    case "pitchWorldFigures":
      checks.push(makeCheck(hasAny(normalized, ["hauptfigur", "konflikt", "gesellschaft", "beziehung"]), "Figuren-Welt-Kopplung", "Figuren und Weltkontext sind verbunden.", "Figurenkonflikt im Weltkontext fehlt.", "kompendium", "Hauptfigur + Gegenkraft + gesellschaftliche Norm in einem Block verbinden.", 3));
      break;
    case "scene":
    case "pitchScene":
      checks.push(makeCheck(hasAny(normalized, ["szene", "status", "entscheidung", "konsequenz"]), "Szenenbeweis im Pitch", "Beispielszene zeigt den Serienkern.", "Beispielszene belegt den Serienkern noch nicht.", "handbuch", "Szene auf Statuswechsel und Konsequenz zuspitzen.", 3));
      break;
    case "juryQuestions":
      checks.push(makeCheck((value.match(/\?/g) || []).length >= 3 || hasAny(normalized, ["frage 1", "frage 2", "frage 3"]), "Q&A-Vorbereitung", "Mehrere kritische Rueckfragen sind antizipiert.", "Q&A-Vorbereitung zu schmal.", "wikihow", "Mindestens drei kritische Fragen mit je einer belastbaren Antwort schreiben.", 3));
      break;
    default:
      checks.push(makeCheck(hasAny(normalized, ["weil", "damit", "deshalb", "folgt", "konsequenz"]), "Begruendungslogik", "Aussagen sind begruendet.", "Begruendungslogik fehlt.", "handbuch", "Zu jeder Kernaussage eine Ursache-Wirkung-Verbindung ergaenzen.", 2));
  }

  if (["phase", "checkpoint", "pitch"].includes(context)) {
    checks.push(
      makeCheck(
        matchedScript.length >= 1 || hasAny(normalized, ["plot", "struktur", "szene", "dialog"]),
        "Drehbuchhandwerk",
        `Handwerkliche Begriffe sind eingebettet (${matchedScript.join(", ") || "Plot/Struktur"}).`,
        "Drehbuchhandwerk bleibt zu implizit.",
        "filmpuls",
        "Mindestens einen handwerklichen Schritt (Premisse/Expose/Treatment/Struktur) konkretisieren.",
        2
      )
    );
  }

  if (["phase", "checkpoint", "decision"].includes(context)) {
    checks.push(
      makeCheck(
        matchedCollab.length >= 1 || hasAny(normalized, ["team", "rolle", "feedback", "abgabe"]),
        "Arbeitskultur",
        "Arbeits- und Abstimmungslogik ist adressiert.",
        "Produktions- und Abstimmungslogik fehlt.",
        "serienschreiben",
        "Festhalten: Wer arbeitet mit wem bis wann an welchem Zwischenergebnis?",
        2
      )
    );
  }

  if (fieldLabel.toLowerCase().includes("drehbuch") || fieldLabel.toLowerCase().includes("szene")) {
    checks.push(
      makeCheck(
        hasAny(normalized, ["int", "ext", "ort", "zeit", "tag", "nacht", "dialog"]),
        "Inszenierbarkeit",
        "Szene ist als filmische Handlung lesbar.",
        "Inszenierbare Angaben (Ort/Zeit/Dialog) fehlen.",
        "wikihow",
        "Ort, Zeit, Handlung, Dialog klar trennen.",
        2
      )
    );
  }

  return checks;
}

function analyzeLinguisticQuality(value, normalized) {
  const tokens = tokenizeWords(normalized);
  const alphaTokens = tokens.filter((token) => /[a-zA-ZäöüÄÖÜß]/.test(token));
  const known = alphaTokens.filter((token) => isKnownWord(token));
  const knownRatio = alphaTokens.length ? known.length / alphaTokens.length : 0;
  const uniqueRatio = alphaTokens.length ? new Set(alphaTokens).size / alphaTokens.length : 0;
  const avgLen = alphaTokens.length ? alphaTokens.reduce((sum, token) => sum + token.length, 0) / alphaTokens.length : 0;
  const longConsonant = alphaTokens.filter((token) => /[bcdfghjklmnpqrstvwxyz]{5,}/i.test(token)).length;
  const lowVowelTokens = alphaTokens.filter((token) => token.length >= 8 && countVowels(token) <= 2).length;
  const repeatedPatternTokens = alphaTokens.filter((token) => /(.)\1{2,}/.test(token) || /([a-z]{2,4})\1{1,}/i.test(token)).length;
  const keyboardMashTokens = alphaTokens.filter((token) => /(asdf|qwer|yxcv|sdfg|dfgh|fghj|ghjk|hjkl|jkl;|lkj)/i.test(token)).length;
  const fillerTokenCount = alphaTokens.filter((token) => FILLER_TOKENS.has(token)).length;
  const tokenCounts = alphaTokens.reduce((acc, token) => {
    acc[token] = (acc[token] || 0) + 1;
    return acc;
  }, {});
  const maxTokenShare = alphaTokens.length ? Math.max(...Object.values(tokenCounts)) / alphaTokens.length : 0;
  const gibberishTokenCount = alphaTokens.filter((token) => {
    if (isKnownWord(token)) return false;
    return token.length >= 7 && (countVowels(token) <= 2 || /[bcdfghjklmnpqrstvwxyz]{4,}/i.test(token));
  }).length;
  const sentenceCount = countSentences(value);
  const hasVerbHint = hasAny(normalized, ["ist", "sind", "wird", "werden", "zeigt", "will", "muss", "soll", "geht", "veraendert", "entwickelt"]);
  const suspiciousRatio = alphaTokens.length ? gibberishTokenCount / alphaTokens.length : 0;

  const nonsenseSignals = [];
  if (knownRatio < 0.08 && alphaTokens.length >= 2) nonsenseSignals.push("kaum bekannte Woerter");
  if (keyboardMashTokens >= 1) nonsenseSignals.push("Keyboard-Muster");
  if (lowVowelTokens >= Math.ceil(Math.max(alphaTokens.length, 1) * 0.5) && alphaTokens.length >= 2) {
    nonsenseSignals.push("vokalarmes Tokenmuster");
  }
  if (repeatedPatternTokens >= 1) nonsenseSignals.push("Wortmuster-Wiederholung");
  if (fillerTokenCount >= Math.max(1, Math.ceil(alphaTokens.length * 0.34))) nonsenseSignals.push("Füllwörter ohne Inhalt");
  if (maxTokenShare >= 0.5 && alphaTokens.length >= 3) nonsenseSignals.push("starke Wortwiederholung");
  if (uniqueRatio < 0.55 && alphaTokens.length >= 4) nonsenseSignals.push("geringe Lexik-Diversität");
  if (longConsonant >= Math.ceil(Math.max(alphaTokens.length, 1) * 0.5) && alphaTokens.length >= 2) {
    nonsenseSignals.push("lange Konsonantenketten");
  }
  if (sentenceCount <= 1 && !hasVerbHint && alphaTokens.length >= 3) nonsenseSignals.push("fehlende Satzstruktur");

  const isLikelyNonsense =
    alphaTokens.length >= 2 &&
    (keyboardMashTokens >= 1 ||
      fillerTokenCount >= Math.max(1, Math.ceil(alphaTokens.length * 0.34)) ||
      maxTokenShare >= 0.6 ||
      (knownRatio === 0 && gibberishTokenCount >= 1) ||
      (suspiciousRatio >= 0.6 && knownRatio < 0.2 && !hasVerbHint) ||
      (nonsenseSignals.length >= 3 && (avgLen > 5 || uniqueRatio < 0.6)));

  const qualitySignal = Math.max(
    0,
    Math.round(
      100 -
        (gibberishTokenCount * 18 +
          keyboardMashTokens * 30 +
          fillerTokenCount * 24 +
          (maxTokenShare >= 0.5 ? 22 : 0) +
          (uniqueRatio < 0.55 ? 18 : 0) +
          repeatedPatternTokens * 12 +
          Math.max(0, 35 - Math.round(knownRatio * 100)) +
          (sentenceCount <= 1 && !hasVerbHint ? 12 : 0))
    )
  );

  return {
    tokens,
    alphaTokens,
    knownRatio,
    avgLen,
    sentenceCount,
    hasVerbHint,
    hasKeyboardMash: keyboardMashTokens > 0,
    fillerTokenCount,
    maxTokenShare,
    uniqueRatio,
    gibberishTokenCount,
    nonsenseSignals,
    qualitySignal,
    isLikelyNonsense
  };
}

function isKnownWord(token) {
  return (
    COMMON_DE_WORDS.has(token) ||
    THEME_TERMS.includes(token) ||
    CONFLICT_TERMS.includes(token) ||
    SERIAL_TERMS.includes(token) ||
    VISUAL_TERMS.includes(token) ||
    SCRIPT_TERMS.includes(token) ||
    COLLAB_TERMS.includes(token) ||
    PROJECT_IDEAS.some((idea) => normalizeForCheck(idea).includes(token))
  );
}

function tokenizeWords(normalized) {
  return String(normalized)
    .split(/\s+/)
    .map((token) => token.trim())
    .filter(Boolean);
}

function toGermanDisplay(value) {
  return String(value || "")
    .replace(/Ae/g, "Ä")
    .replace(/Oe/g, "Ö")
    .replace(/Ue/g, "Ü")
    .replace(/ae/g, "ä")
    .replace(/oe/g, "ö")
    .replace(/ue/g, (match, offset, input) => {
      const prev = offset > 0 ? input[offset - 1] : "";
      if (/[qQ]/.test(prev)) return "ue";
      return "ü";
    });
}

function countVowels(token) {
  const matches = String(token).match(/[aeiouyäöü]/gi);
  return matches ? matches.length : 0;
}

function countSentences(value) {
  const byPunctuation = String(value).split(/[.!?]/).map((part) => part.trim()).filter(Boolean).length;
  if (byPunctuation > 0) return byPunctuation;
  return String(value).split("\n").map((line) => line.trim()).filter(Boolean).length;
}

function getMatchedTerms(normalized, terms) {
  return terms.filter((term) => normalized.includes(term));
}

function computeWeightedScore(checks) {
  const total = checks.reduce((sum, check) => sum + (check.weight || 1), 0);
  const done = checks.reduce((sum, check) => sum + (check.pass ? check.weight || 1 : 0), 0);
  return Math.round((done / Math.max(total, 1)) * 100);
}

function makeCheck(pass, title, detailPass, detailFail, source, fix, weight = 1, critical = false) {
  return {
    pass,
    title,
    detail: pass ? detailPass : detailFail,
    source,
    fix,
    weight,
    critical
  };
}

function normalizeForCheck(value) {
  return String(value || "")
    .toLowerCase()
    .replaceAll("ä", "ae")
    .replaceAll("ö", "oe")
    .replaceAll("ü", "ue")
    .replaceAll("ß", "ss")
    .replace(/[^\p{L}\p{N}\s.\-?!]/gu, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function countWords(value) {
  return String(value || "")
    .trim()
    .split(/\s+/)
    .filter(Boolean).length;
}

function hasAny(normalized, tokens) {
  return tokens.some((token) => normalized.includes(token));
}

function hasAll(normalized, tokens) {
  return tokens.every((token) => normalized.includes(token));
}

function countMatches(normalized, tokens) {
  let count = 0;
  tokens.forEach((token) => {
    if (normalized.includes(token)) count += 1;
  });
  return count;
}

function downloadFile(name, content, type) {
  const blob = new Blob([content], { type });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = name;
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

function saveAndRefresh(fullRerender = false) {
  saveState();
  updateProgress();
  if (fullRerender) {
    renderMetaFields();
    renderPhaseNav();
    renderPhaseContent();
    renderCheckpoints();
    renderDecision();
    renderPitchFields();
    renderRubric();
  } else {
    renderPhaseNav();
    updateRubricTotal();
  }
}

function updateProgress() {
  let total = 0;
  let done = 0;

  META_FIELDS.forEach((field) => {
    total += 1;
    if ((state.meta[field.key] || "").trim().length > 0) done += 1;
  });

  total += 2;
  if (state.meta.priorKnowledge.buchgraph) done += 1;
  if (state.meta.priorKnowledge.figuren) done += 1;

  PHASES.forEach((phase) => {
    const phaseState = state.phases[phase.id];

    phase.fields.forEach((field) => {
      total += 1;
      if ((phaseState.fields[field.key] || "").trim().length > 0) done += 1;
    });

    SELF_FIELDS.forEach((field) => {
      total += 1;
      if ((phaseState.self[field.key] || "").trim().length > 0) done += 1;
    });

    ["basis", "standard", "expert"].forEach((level) => {
      Object.values(phaseState.tasks[level]).forEach((value) => {
        total += 1;
        if (value) done += 1;
      });
    });
  });

  state.checkpoints.forEach((checkpoint) => {
    CHECKPOINT_FIELDS.forEach((field) => {
      total += 1;
      if ((checkpoint[field.key] || "").trim().length > 0) done += 1;
    });
  });

  PITCH_FIELDS.forEach((field) => {
    total += 1;
    if ((state.pitch[field.key] || "").trim().length > 0) done += 1;
  });

  RUBRIC.forEach((criterion) => {
    total += 1;
    if (Number(state.rubric[criterion] || 0) > 0) done += 1;
  });

  total += 2;
  if ((state.decision.notes || "").trim()) done += 1;
  if ((state.decision.actionPlan || "").trim()) done += 1;

  const pct = Math.round((done / Math.max(total, 1)) * 100);
  document.getElementById("progress-value").textContent = `${pct}%`;
  document.getElementById("progress-fill").style.width = `${pct}%`;

  document.getElementById("stats").innerHTML = `
    <li>Erledigte Einträge: ${done}</li>
    <li>Offene Einträge: ${Math.max(total - done, 0)}</li>
    <li>Checkpoints ausgefüllt: ${countCompletedCheckpoints()}/6</li>
  `;

  document.getElementById("next-step").textContent = `Nächster Schritt: ${toGermanDisplay(findNextStep())}`;
}

function countPhaseCompletion(phaseId) {
  const phase = PHASES.find((entry) => entry.id === phaseId);
  const phaseState = state.phases[phaseId];
  let total = 0;
  let done = 0;

  phase.fields.forEach((field) => {
    total += 1;
    if ((phaseState.fields[field.key] || "").trim()) done += 1;
  });

  SELF_FIELDS.forEach((field) => {
    total += 1;
    if ((phaseState.self[field.key] || "").trim()) done += 1;
  });

  ["basis", "standard", "expert"].forEach((level) => {
    Object.values(phaseState.tasks[level]).forEach((value) => {
      total += 1;
      if (value) done += 1;
    });
  });

  return { total, done };
}

function countCompletedCheckpoints() {
  return state.checkpoints.filter((checkpoint) =>
    CHECKPOINT_FIELDS.every((field) => (checkpoint[field.key] || "").trim().length > 0)
  ).length;
}

function findNextStep() {
  for (const field of META_FIELDS) {
    if (!(state.meta[field.key] || "").trim()) return `Projekt-Setup ausfuellen: ${field.label}`;
  }

  if (!state.meta.priorKnowledge.buchgraph) return "Vorkenntnislink Jenny-Buchgraph sichern";
  if (!state.meta.priorKnowledge.figuren) return "Vorkenntnislink Figurenuebersicht sichern";

  for (const phase of PHASES) {
    const phaseState = state.phases[phase.id];
    for (const field of phase.fields) {
      if (!(phaseState.fields[field.key] || "").trim()) {
        return `${phase.title}: ${field.label}`;
      }
    }
  }

  for (let i = 0; i < state.checkpoints.length; i += 1) {
    for (const field of CHECKPOINT_FIELDS) {
      if (!(state.checkpoints[i][field.key] || "").trim()) {
        return `${CHECKPOINTS[i]}: ${field.label}`;
      }
    }
  }

  for (const field of PITCH_FIELDS) {
    if (!(state.pitch[field.key] || "").trim()) return `Pitch-Lab: ${field.label}`;
  }

  return "Feinschliff und finale Pitchprobe";
}

function loadTextExcerpt() {
  fetch("./assets/jenny_text_excerpt.txt")
    .then((response) => response.text())
    .then((text) => {
      document.getElementById("text-excerpt").textContent = text;
    })
    .catch(() => {
      document.getElementById("text-excerpt").textContent = "Textauszug konnte nicht geladen werden.";
    });
}

function startPitchTimer() {
  if (pitchInterval) return;
  pitchInterval = setInterval(() => {
    pitchSeconds -= 1;
    if (pitchSeconds <= 0) {
      pitchSeconds = 0;
      clearInterval(pitchInterval);
      pitchInterval = null;
    }
    paintTimers();
  }, 1000);
}

function startQATimer() {
  if (qaInterval) return;
  qaInterval = setInterval(() => {
    qaSeconds -= 1;
    if (qaSeconds <= 0) {
      qaSeconds = 0;
      clearInterval(qaInterval);
      qaInterval = null;
    }
    paintTimers();
  }, 1000);
}

function resetTimers() {
  clearInterval(pitchInterval);
  clearInterval(qaInterval);
  pitchInterval = null;
  qaInterval = null;
  pitchSeconds = 600;
  qaSeconds = 300;
  paintTimers();
}

function paintTimers() {
  document.getElementById("pitch-timer").textContent = formatTime(pitchSeconds);
  document.getElementById("qa-timer").textContent = formatTime(qaSeconds);
}

function formatTime(totalSeconds) {
  const minutes = Math.floor(totalSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(totalSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
}

function updateRubricTotal() {
  const total = RUBRIC.reduce((sum, criterion) => sum + Number(state.rubric[criterion] || 0), 0);
  document.getElementById("rubric-total").textContent = String(total);
}

function capitalize(value) {
  return value.charAt(0).toUpperCase() + value.slice(1);
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
