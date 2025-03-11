const inputText = document.getElementById("type-text"); // Radio-Button für Text-Tutorials
const inputVideo = document.getElementById("type-video"); // Radio-Button für Video-Tutorials
const inputField = document.createElement("input"); // Erzeugt ein Eingabefeld für die URL
const textareaField = document.createElement("textarea"); // Erzeugt ein Textarea-Feld für Video-Embed-Code oder URL
const neuLabel = document.createElement("label"); // Erstellt ein neues Label-Element
neuLabel.append(document.createTextNode("Wert ")); // Fügt den Text "Wert" zum Label hinzu
const durationField = document.getElementById("duration"); // Referenz zum Dauer-Eingabefeld

// Funktion zur Anpassung der Formularfelder basierend auf der Auswahl
let adjustFormFields = function () {
    if (inputText.checked) { // Falls der Nutzer "Text-Tutorial" auswählt
        document.getElementById("labelurl").replaceWith(neuLabel); // Ersetzt das bestehende Label durch das neue Label
        neuLabel.id = "labelurl"; // Setzt die ID für das neue Label
        document.getElementById("content").replaceWith(inputField); // Ersetzt das vorhandene Eingabefeld mit einem einfachen Input-Feld
        inputField.id = "content"; // Setzt die ID für das Input-Feld
        inputField.placeholder = "URL zum Text-Tutorial"; // Platzhalter-Text für das Feld
        inputField.title = "Geben Sie eine URL für das Text-Tutorial ein."; // Tooltip für bessere Nutzerführung
        durationField.required = false; // Setzt das Dauer-Feld als nicht erforderlich
        durationField.style.display = "none"; // Versteckt das Dauer-Feld
    } else if (inputVideo.checked) { // Falls der Nutzer "Video-Tutorial" auswählt
        document.getElementById("labelurl").replaceWith(neuLabel); // Ersetzt das bestehende Label durch das neue Label
        neuLabel.id = "labelurl"; // Setzt die ID für das neue Label
        document.getElementById("content").replaceWith(textareaField); // Ersetzt das vorhandene Eingabefeld mit einem Textarea-Feld
        textareaField.id = "content"; // Setzt die ID für das Textarea-Feld
        textareaField.placeholder = "YouTube Embed-Code oder URL"; // Platzhalter-Text für das Feld
        textareaField.title = "Geben Sie einen YouTube Embed-Code ein."; // Tooltip für bessere Nutzerführung
        durationField.required = true; // Setzt das Dauer-Feld als erforderlich
        durationField.style.display = "block"; // Zeigt das Dauer-Feld an
    }
}

// Event-Listener für Klicks auf die Radio-Buttons
inputText.addEventListener("click", adjustFormFields);
inputVideo.addEventListener("click", adjustFormFields);
