# Showrunner Lernumgebung (Text -> Konzept -> Drehbuch -> Modellszene -> Pitch)

Diese Lernumgebung ist als direkt deploybares Static-Webprojekt gebaut.

## Enthalten

- Vollstaendiger Lernpfad in kleinteiligen Phasen fuer Einsteiger:innen
- Struktur aus den Showrunner-Dokumenten:
  - Serien-DNA
  - Figurenbibel
  - Welt/Setting, Kamera/Licht/Ton
  - Staffelarchitektur und Episodenplanung
  - Drehbuchausschnitt
  - Pitch-Format inkl. Rubrik
- 6 verpflichtende Checkpoints mit standardisiertem Berichtsraster
- Showrunner Decision System (diagnostischer Workflow)
- Selbstwirksamkeits-Loop pro Phase (Ziel, Strategie, Hindernis, Hilfe, Reflexion)
- Import/Export:
  - Gesamtprojekt als JSON
  - Teilschritt (pro Phase) als JSON
  - Einzelner Checkpoint als JSON
  - Dossier, Checkpoints und Pitch-Manuskript als Markdown
- Geblurrter Videohintergrund (`assets/jenny_background.mp4`)

## Projektstruktur

- `index.html` UI-Struktur
- `styles.css` Design, Responsive Layout, Motion
- `app.js` gesamte Logik (State, Rendering, Import/Export)
- `assets/jenny_background.mp4` Hintergrundvideo
- `assets/jenny_text_excerpt.txt` Starttextauszug

## Lokal starten

Da es ein statisches Projekt ist, reicht ein einfacher Webserver.

Beispiel mit Node (falls `npx` verfuegbar):

```bash
npx serve .
```

Dann im Browser die angezeigte URL oeffnen.

## Deployment auf GitHub Pages

1. Repository nach GitHub pushen.
2. In GitHub `Settings -> Pages` oeffnen.
3. Source auf den Branch mit diesem Projekt setzen.
4. Wenn das Projekt in einem Unterordner liegt, den Ordner als Publish-Root waehlen.

## Hinweis zu Speicherung

- Arbeitsstaende werden lokal im Browser via `localStorage` gespeichert.
- Fuer Transfer zwischen Geraeten den JSON-Export verwenden.
