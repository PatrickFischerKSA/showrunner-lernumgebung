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
  - strenge sprachliche Plausibilitaet inkl. Nonsense-/Fuellwort-Erkennung
  - feldspezifische Strukturkriterien (Handbuch/Kompendium)
  - Ressourcenabgleich (Filmpuls, WikiHow, Serienschreiben)
  - kritische Fail-Gates (z. B. Projekttitel ohne Sinnkern wird nicht als stark bewertet)
  - priorisierte Nachschaerfungsschritte
- Import/Export:
  - Gesamtprojekt als JSON
  - Teilschritt (pro Phase) als JSON
  - Einzelner Checkpoint als JSON
  - Dossier, Checkpoints und Pitch-Manuskript als Markdown
- Integriertes Arbeitsvideo (`assets/jenny_background.mp4`) zwischen Exportzeile und Tab-Navigation
- Integriertes Anleitungsvideo (`assets/tv-schreibmaschine-anleitung.mp4`)
- Integrierte Wissensbasis: Filmpuls, WikiHow und `assets/Serienschreiben.pdf`
- Transparente Eingabefelder fuer direkte Arbeit mit sichtbarem Bewegtbildkontext
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
- `assets/jenny_background.mp4` integriertes Arbeitsvideo im Header
- `assets/jenny_text_excerpt.txt` Starttextauszug
- `sw.js` statisches Offline-Caching

## Lokal starten

Da es ein statisches Projekt ist, reicht ein einfacher Webserver.

Beispiel mit Node (falls `npx` verfuegbar):

```bash
npx serve .
```

Dann im Browser die angezeigte URL oeffnen.

Hinweis: Wenn bereits eine aeltere Version per Service Worker aktiv war, Seite einmal hart neu laden (`Cmd+Shift+R` / `Ctrl+F5`).
Systemtexte werden bei der Ausgabe automatisch in deutsche Umlaute normalisiert.

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
