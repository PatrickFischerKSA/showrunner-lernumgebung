const STORAGE_KEY = "showrunner_lab_v1";

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

let state = loadState() || createInitialState();
let activeTab = "dashboard";
let activePhase = PHASES[0].id;
let importContext = { type: "all", phaseId: null, checkpointIndex: null };
let pitchSeconds = 600;
let qaSeconds = 300;
let pitchInterval = null;
let qaInterval = null;

init();

function init() {
  bindTabbar();
  renderMetaFields();
  renderTimeline();
  bindGlobalControls();
  renderPhaseNav();
  renderPhaseContent();
  renderCheckpoints();
  renderDecision();
  renderPitchFields();
  renderRubric();
  updateProgress();
  loadTextExcerpt();
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
    label.textContent = field.label;

    let input;
    if (field.type === "select") {
      input = document.createElement("select");
      PROJECT_IDEAS.forEach((idea) => {
        const option = document.createElement("option");
        option.value = idea;
        option.textContent = idea;
        input.appendChild(option);
      });
    } else {
      input = document.createElement("input");
      input.type = field.type;
      if (field.placeholder) input.placeholder = field.placeholder;
    }

    input.value = state.meta[field.key] || "";
    input.dataset.meta = field.key;
    input.dataset.fieldKey = field.key;
    input.dataset.fieldLabel = field.label;
    input.dataset.feedbackContext = "meta";
    input.addEventListener("input", onMetaChange);
    label.appendChild(input);
    label.appendChild(createFeedbackNode(buildFieldFeedback(field.key, field.label, String(input.value || ""), "meta")));
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
  list.innerHTML = TIMELINE.map((entry) => `<li>${entry}</li>`).join("");
}

function renderPhaseNav() {
  const nav = document.getElementById("phase-nav");
  const rows = PHASES.map((phase) => {
    const score = countPhaseCompletion(phase.id);
    const activeClass = phase.id === activePhase ? "active" : "";
    return `<button class="phase-link ${activeClass}" data-phase-nav="${phase.id}">${phase.title}<br><small>${score.done}/${score.total} erledigt</small></button>`;
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
        ${field.label}
        <textarea data-phase-field="${phase.id}" data-field-key="${field.key}" data-field-label="${escapeHtml(
          field.label
        )}" data-feedback-context="phase" placeholder="${field.placeholder || ""}">${escapeHtml(
        phaseState.fields[field.key] || ""
      )}</textarea>
        ${renderFieldFeedbackHTML(field.key, field.label, phaseState.fields[field.key] || "", "phase")}
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
          return `<label><input type="checkbox" data-phase-task="${phase.id}" data-task-level="${level}" data-task-id="${taskId}" ${checked}> ${task}</label>`;
        })
        .join("");
      return `<div class="task-box"><h3>${capitalize(level)}</h3>${items}</div>`;
    })
    .join("");

  const selfHtml = SELF_FIELDS.map(
    (field) => `
    <label>
      ${field.label}
      <textarea data-phase-self="${phase.id}" data-self-key="${field.key}" data-field-label="${escapeHtml(
        field.label
      )}" data-feedback-context="self">${escapeHtml(phaseState.self[field.key] || "")}</textarea>
      ${renderFieldFeedbackHTML(field.key, field.label, phaseState.self[field.key] || "", "self")}
    </label>
  `
  ).join("");

  content.innerHTML = `
    <h2>${phase.title}</h2>
    <div class="phase-meta">
      <div class="meta-chip"><strong>Ziel</strong><br>${phase.goal}</div>
      <div class="meta-chip"><strong>Output</strong><br>${phase.output}</div>
      <div class="meta-chip"><strong>Zeitrahmen</strong><br>${phase.time}</div>
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
        ${field.label}
        <textarea data-checkpoint-index="${index}" data-checkpoint-key="${field.key}" data-field-label="${escapeHtml(
          field.label
        )}" data-feedback-context="checkpoint">${escapeHtml(
        state.checkpoints[index][field.key] || ""
      )}</textarea>
        ${renderFieldFeedbackHTML(field.key, field.label, state.checkpoints[index][field.key] || "", "checkpoint")}
      </label>
    `
    ).join("");

    return `
      <article class="checkpoint-card">
        <div class="checkpoint-head">
          <h3>${title}</h3>
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
    (entry) => `<option value="${entry.id}" ${entry.id === state.decision.selected ? "selected" : ""}>${entry.symptom}</option>`
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
  const questions = entry.questions.map((question) => `<li>${question}</li>`).join("");

  box.innerHTML = `
    <p><strong>${entry.level}</strong></p>
    <ul>${questions}</ul>
    <p><strong>Massnahme:</strong> ${entry.measure}</p>
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
      ${field.label}
      <textarea data-pitch-key="${field.key}" data-field-label="${escapeHtml(field.label)}" data-feedback-context="pitch">${escapeHtml(
        state.pitch[field.key] || ""
      )}</textarea>
      ${renderFieldFeedbackHTML(field.key, field.label, state.pitch[field.key] || "", "pitch")}
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
        <h3>${criterion}</h3>
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
      return `<li>${marker} <strong>${escapeHtml(check.title)}:</strong> ${escapeHtml(check.detail)}</li>`;
    })
    .join("");

  const nextSteps =
    analysis.nextSteps.length > 0
      ? `<div class="af-next"><strong>Naechster Feinschliff:</strong> ${escapeHtml(analysis.nextSteps.join(" | "))}</div>`
      : `<div class="af-next"><strong>Naechster Feinschliff:</strong> Feinschliff im Teamtest und laut vorlesen.</div>`;

  const sourceText =
    analysis.sources.length > 0
      ? analysis.sources.map((sourceKey) => FEEDBACK_SOURCES[sourceKey]).join(" ; ")
      : FEEDBACK_SOURCES.handbuch;

  return `
    <div class="af-head">
      <strong>Autofeedback: ${analysis.score}/100</strong>
      <span>${analysis.levelLabel}</span>
    </div>
    <ul class="af-list">${checksHtml}</ul>
    ${nextSteps}
    <div class="af-source">Basis: ${escapeHtml(sourceText)}</div>
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

  const minimumWords = context === "meta" ? 1 : 12;
  checks.push(
    makeCheck(
      words >= minimumWords,
      "Inhaltstiefe",
      `Umfang ist tragfaehig (${words} Woerter).`,
      `Noch zu knapp (${words} Woerter). Erweitern mit konkreten Entscheidungen, nicht nur Schlagwoertern.`,
      "kompendium",
      "Mindestens 2-4 konkrete Saetze mit Belegen und Konsequenz formulieren."
    )
  );

  if (["phase", "checkpoint", "pitch", "decision"].includes(context)) {
    checks.push(
      makeCheck(
        hasAny(normalized, ["entscheidung", "konsequenz", "konflikt", "dilemma", "widerstand"]),
        "Dramaturgischer Kern",
        "Konflikt/Entscheidung ist erkennbar.",
        "Dramaturgischer Kern noch weich. Konflikt + Entscheidung + Konsequenz explizit benennen.",
        "handbuch",
        "Formel direkt einbauen: Wer will was, was steht im Weg, welche Entscheidung folgt?"
      )
    );
  }

  checks.push(...buildFieldSpecificChecks(fieldKey, fieldLabel, value, normalized, words, context));

  const passed = checks.filter((check) => check.pass).length;
  const score = Math.round((passed / Math.max(checks.length, 1)) * 100);
  const level = score >= 80 ? "strong" : score >= 55 ? "medium" : "weak";
  const levelLabel = score >= 80 ? "hoch differenziert" : score >= 55 ? "ausbaufaehig" : "grundlegend nachschaerfen";
  const nextSteps = checks.filter((check) => !check.pass).map((check) => check.fix).filter(Boolean).slice(0, 3);
  const sources = [...new Set(checks.map((check) => check.source).filter(Boolean))];

  return { score, level, levelLabel, checks, nextSteps, sources };
}

function buildFieldSpecificChecks(fieldKey, fieldLabel, value, normalized, words, context) {
  const checks = [];
  const screenplayTools = ["expose", "treatment", "premisse", "3-akt", "turning", "show dont tell", "subtext"];
  const serialTokens = ["episode", "staffel", "leitfrage", "cliffhanger", "wiederkehr", "arc"];
  const visualTokens = ["kamera", "nahaufnahme", "totale", "licht", "farbe", "raum", "ton", "schnitt", "blick", "blocking"];
  const collaborationTokens = ["showrunner", "head of story", "character", "visual", "writer", "room", "rolle", "feedback", "arbeitsteil", "abgabe"];

  switch (fieldKey) {
    case "projectTitle":
      checks.push(
        makeCheck(
          words >= 2,
          "Projektfokus",
          "Titel ist als erzaehlerischer Fokus benannt.",
          "Titel noch zu vage oder zu kurz.",
          "kompendium",
          "Titel mit Konfliktkern schaerfen (z. B. Freiheit vs Zugehoerigkeit)."
        )
      );
      break;
    case "teamName":
    case "className":
      checks.push(
        makeCheck(
          words >= 1,
          "Projektverankerung",
          "Organisationseintrag ist vorhanden.",
          "Eintrag fehlt.",
          "serienschreiben",
          "Feld ausfuellen, damit Export und Teamkoordination eindeutig bleiben."
        )
      );
      break;
    case "startDate":
      checks.push(
        makeCheck(
          /^\d{4}-\d{2}-\d{2}$/.test(value),
          "Zeitlicher Startpunkt",
          "Startdatum ist formal korrekt gesetzt.",
          "Datum fehlt oder ist nicht im Format JJJJ-MM-TT.",
          "serienschreiben",
          "Startdatum setzen, damit Phasenplanung und Verantwortlichkeiten planbar werden."
        )
      );
      break;
    case "projectIdea":
      checks.push(
        makeCheck(
          PROJECT_IDEAS.includes(value),
          "Ideenanker",
          "Projektidee ist klar verortet.",
          "Projektidee ist nicht aus der Auswahlliste gesetzt.",
          "kompendium",
          "Eine Kernidee auswaehlen und darauf alle weiteren Entscheidungen rueckbinden."
        )
      );
      break;
    case "teamRoles":
    case "roles":
    case "support":
      checks.push(
        makeCheck(
          countMatches(normalized, collaborationTokens) >= 3,
          "Kollaboration und Arbeitsteilung",
          "Teamrollen und Zusammenarbeit sind nachvollziehbar verteilt.",
          "Rollen/Arbeitsteilung sind noch unklar. Zustaendigkeiten und Schnittstellen klar benennen.",
          "serienschreiben",
          "Mindestens drei Rollen + je eine klare Verantwortung und ein Feedback-Takt festlegen."
        )
      );
      break;
    case "textCore":
    case "adaptationRule":
      checks.push(
        makeCheck(
          hasAny(normalized, ["interpret", "adaption", "zeigen", "blick", "raum", "status"]) && hasAny(normalized, ["nicht", "statt"]),
          "Adaption statt Nacherzaehlung",
          "Der Medienwechsel wird interpretierend gedacht.",
          "Noch zu nah an der Inhaltswiedergabe. Uebersetzung in Blick/Handlung/Raum konkretisieren.",
          "kompendium",
          "Formulieren: 'Wir interpretieren den Text durch ... , nicht durch reine Inhaltswiedergabe.'"
        )
      );
      break;
    case "seriesStatement":
      checks.push(
        makeCheck(
          hasAny(normalized, ["zeigt", "dass"]) && !hasAny(normalized, ["dann", "danach", "am ende passiert"]),
          "These ohne Ereigniskette",
          "Thematische Aussage ist als belastbare These formuliert.",
          "Noch zu ereignisnah. Aussage als allgemeiner moralischer Satz formulieren.",
          "handbuch",
          "Satzbau nutzen: 'Diese Serie zeigt, dass ...' ohne Plotchronologie."
        )
      );
      break;
    case "centralConflict":
      checks.push(
        makeCheck(
          hasAny(normalized, ["will", "ziel"]) && hasAny(normalized, ["welt", "muss", "gegen", "widerstand"]),
          "Dauerhafter Konflikt X vs Y",
          "Konfliktachse ist als Gegenkraft angelegt.",
          "Konflikt noch nicht als Gegenspannung sichtbar.",
          "handbuch",
          "Explizit schreiben: Figur will X, Welt/Institution verlangt Y."
        )
      );
      break;
    case "whySeries":
    case "episodeOverview":
    case "seriesMechanics":
    case "pitchMechanics":
      checks.push(
        makeCheck(
          hasAny(normalized, serialTokens) && hasAny(normalized, ["entscheidung", "konsequenz"]),
          "Serielle Tragfaehigkeit",
          "Episodische Wiederholbarkeit und Konsequenzlogik sind erkennbar.",
          "Serienmechanik bleibt unklar. Episode/Staffel + Konsequenzlogik ausformulieren.",
          "handbuch",
          "Leitfrage pro Episode + veraenderte Beziehung als Konsequenz benennen."
        )
      );
      checks.push(
        makeCheck(
          hasAny(normalized, screenplayTools),
          "Drehbuchprozess (Filmpuls)",
          "Prozesssprache (z. B. Premisse/Treatment/Turn) wird genutzt.",
          "Prozessschritte fehlen. Vorstufe (Premisse/Expose/Treatment) klar benennen.",
          "filmpuls",
          "Mindestens einen Zwischenschritt zwischen Idee und Szene explizit machen."
        )
      );
      break;
    case "mainFigure":
      checks.push(
        makeCheck(
          countMatches(normalized, ["wunde", "beduerfnis", "ziel", "angst", "selbsttaeusch", "strategie"]) >= 4,
          "Psychologisches Vollprofil",
          "Figurprofil deckt die zentralen Dramafaktoren ab.",
          "Figurprofil ist noch lueckenhaft.",
          "handbuch",
          "Wunde, Beduerfnis, Ziel, Angst, Selbsttaeuschung und Strategie einzeln ausformulieren."
        )
      );
      break;
    case "staffelArc":
    case "seasonThesis":
      checks.push(
        makeCheck(
          hasAny(normalized, ["am anfang", "beginn"]) && hasAny(normalized, ["am ende", "erkennt"]),
          "Moralische Bewegung der Staffel",
          "Transformation Anfang->Ende ist klar.",
          "Veraenderung bleibt diffus.",
          "handbuch",
          "Die Formel explizit ausfuellen: Anfangsglaube -> Enderkenntnis."
        )
      );
      break;
    case "cameraRules":
    case "lightSoundRules":
    case "visualConcept":
    case "pitchVisual":
      checks.push(
        makeCheck(
          countMatches(normalized, visualTokens) >= 3,
          "Visuelle/auditive Konkretion",
          "Kamera/Licht/Ton sind als Regeln ausgearbeitet.",
          "Aesthetik bleibt allgemein. Mindestens drei konkrete Regelentscheidungen ergaenzen.",
          "kompendium",
          "Wenn-Dann-Regeln schreiben (z. B. Nahaufnahme nur bei Erkenntnis)."
        )
      );
      break;
    case "sceneStructure":
      checks.push(
        makeCheck(
          hasAll(normalized, ["ziel", "widerstand"]) && hasAny(normalized, ["entscheidung", "konsequenz"]),
          "Szenenmechanik",
          "Ziel-Widerstand-Entscheidung-Konsequenz ist angelegt.",
          "Szenenmechanik unvollstaendig.",
          "handbuch",
          "Viererstruktur in genau dieser Reihenfolge sichtbar machen."
        )
      );
      break;
    case "dialogSubtext":
      checks.push(
        makeCheck(
          hasAny(normalized, ["subtext", "verborgen", "eigentlich", "will"]) && hasAny(normalized, ["reaktion", "spannung", "status"]),
          "Dialog als Handlung",
          "Subtext und Machtverschiebung sind erkennbar.",
          "Dialog erklaert noch statt zu handeln.",
          "kompendium",
          "Pro Figur notieren: 'sagt' vs 'will wirklich'."
        )
      );
      break;
    case "scriptExcerpt":
      checks.push(
        makeCheck(
          hasAny(normalized, ["int.", "ext.", "szene", "tag", "nacht"]) || /[A-Z]{2,}\s*\n/.test(value),
          "Script-Format und Lesbarkeit",
          "Drehbuchnahe Form ist vorhanden.",
          "Formale Drehbuchmarker fehlen.",
          "wikihow",
          "Szenenueberschrift (INT./EXT., Ort, Zeit) und klar getrennte Dialogteile einsetzen."
        )
      );
      break;
    case "modelTool":
      checks.push(
        makeCheck(
          hasAny(normalized, ["leonardo", "playground", "canva", "writerduet", "arc", "tool"]) && hasAny(normalized, ["weil", "um", "damit"]),
          "Toolwahl mit Produktionslogik",
          "Toolwahl ist begruendet und funktional.",
          "Toolwahl wirkt beliebig.",
          "serienschreiben",
          "Tool + Arbeitszweck + erwarteter Output explizit koppeln."
        )
      );
      break;
    case "nextSteps":
    case "goal":
    case "strategy":
    case "decisionActionPlan":
      checks.push(
        makeCheck(
          hasAny(normalized, ["bis", "phase", "termin", "naechst", "heute"]) && hasAny(normalized, ["wir", "team", "rolle", "verantwort"]),
          "Verbindlichkeit und Umsetzung",
          "Schritte sind zeitlich und organisatorisch konkret.",
          "Aktion ist noch nicht verbindlich genug.",
          "serienschreiben",
          "Jeden Schritt mit Frist, Verantwortlichkeit und pruefbarem Ergebnis notieren."
        )
      );
      break;
    case "intro":
    case "pitchHook":
      checks.push(
        makeCheck(
          hasAny(normalized, ["these", "relevanz", "warum", "jetzt"]) && words >= 20,
          "Pitch-Einstieg mit Relevanzdruck",
          "Hook verbindet Aussage und Gegenwartsbezug.",
          "Einstieg braucht mehr Relevanz und klare These.",
          "kompendium",
          "In drei Saetzen bauen: Kernthese, Konflikt, Warum jetzt."
        )
      );
      break;
    case "juryQuestions":
      checks.push(
        makeCheck(
          countMatches(normalized, ["?"]) >= 3 || countWords(value.split("\n").join(" ? ")) >= 25,
          "Q&A-Vorbereitung",
          "Mehrere Rueckfragen sind antizipiert.",
          "Q&A ist noch zu schmal vorbereitet.",
          "wikihow",
          "Drei kritische Fragen + je eine evidenzbasierte Antwort ausformulieren."
        )
      );
      break;
    default:
      checks.push(
        makeCheck(
          hasAny(normalized, ["weil", "damit", "deshalb", "konsequenz", "entscheidung", "ziel"]),
          "Begruendungslogik",
          "Entscheidungen sind begruendet.",
          "Begruendungen fehlen noch.",
          "handbuch",
          "Bei jedem Kernsatz ein 'weil/damit' mitliefern."
        )
      );
  }

  if (["phase", "checkpoint", "pitch"].includes(context)) {
    checks.push(
      makeCheck(
        hasAny(normalized, screenplayTools) || hasAny(normalized, ["plot", "struktur", "szen", "dialog"]),
        "Drehbuchhandwerk",
        "Handwerkliche Skriptperspektive ist eingebaut.",
        "Drehbuchhandwerk bleibt implizit.",
        "filmpuls",
        "Premisse/Plotstruktur/Szenenfunktion kurz explizit benennen."
      )
    );
  }

  if (["phase", "checkpoint", "decision"].includes(context)) {
    checks.push(
      makeCheck(
        hasAny(normalized, collaborationTokens),
        "Arbeitskultur und Produktionsrealitaet",
        "Team- und Produktionsaspekte sind mitgedacht.",
        "Arbeitskultur fehlt. Verantwortung, Abstimmung oder Ressourcenlogik ergaenzen.",
        "serienschreiben",
        "Ergaenzen: Wer arbeitet wann mit wem woran und nach welcher Abstimmung?"
      )
    );
  }

  if (fieldLabel.toLowerCase().includes("drehbuch") || fieldLabel.toLowerCase().includes("szene")) {
    checks.push(
      makeCheck(
        hasAny(normalized, ["int.", "ext.", "ort", "zeit", "tag", "nacht", "dialog"]),
        "Szenische Lesefuehrung",
        "Szene ist formal lesbar und fuehrbar.",
        "Formale Lesefuehrung fehlt.",
        "wikihow",
        "Ort/Zeit/Dialogstruktur klar trennen, damit die Szene sofort inszenierbar wird."
      )
    );
  }

  return checks;
}

function makeCheck(pass, title, detailPass, detailFail, source, fix) {
  return {
    pass,
    title,
    detail: pass ? detailPass : detailFail,
    source,
    fix
  };
}

function normalizeForCheck(value) {
  return String(value || "")
    .toLowerCase()
    .replace(/[^\w\s\.\-\?\!]/g, " ")
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
    <li>Erledigte Eintraege: ${done}</li>
    <li>Offene Eintraege: ${Math.max(total - done, 0)}</li>
    <li>Checkpoints ausgefuellt: ${countCompletedCheckpoints()}/6</li>
  `;

  document.getElementById("next-step").textContent = `Naechster Schritt: ${findNextStep()}`;
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
