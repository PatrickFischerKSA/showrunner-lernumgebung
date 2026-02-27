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
- Autofeedback pro Feld (qualitative Diagnose statt reiner Wortzaehlung):
  - sprachliche Plausibilitaet inkl. Nonsense-Erkennung
  - feldspezifische Strukturkriterien (Handbuch/Kompendium)
  - Ressourcenabgleich (Filmpuls, WikiHow, Serienschreiben)
  - priorisierte Nachschaerfungsschritte
- Import/Export:
  - Gesamtprojekt als JSON
  - Teilschritt (pro Phase) als JSON
  - Einzelner Checkpoint als JSON
  - Dossier, Checkpoints und Pitch-Manuskript als Markdown
- Geblurrter Videohintergrund (`assets/jenny_background.mp4`)
- Integrierte Wissensbasis: Filmpuls, WikiHow und `assets/Serienschreiben.pdf`
- Hintergrundsteuerung in der UI:
  - Sichtbarkeit des Videos (Helligkeit/Overlay)
  - Transparenz der Karten
- Materialbibliothek:
  - Dateien per IndexedDB dauerhaft speichern
  - Persistenz anfragen (`navigator.storage.persist()`)
  - Material-Backup als JSON exportieren
  - Material-Backup aus JSON wiederherstellen
  - Dateien oeffnen, herunterladen, loeschen
- Offline-Asset-Caching per Service Worker (`sw.js`)

## Projektstruktur

- `index.html` UI-Struktur
- `styles.css` Design, Responsive Layout, Motion
- `app.js` gesamte Logik (State, Rendering, Import/Export)
- `assets/jenny_background.mp4` Hintergrundvideo
- `assets/jenny_text_excerpt.txt` Starttextauszug
- `sw.js` statisches Offline-Caching

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
- Materialdateien liegen getrennt in IndexedDB.
- Fuer Transfer zwischen Geraeten den JSON-Export verwenden.
- Fuer robuste Material-Sicherung zusaetzlich den Material-Backup-Export nutzen.
