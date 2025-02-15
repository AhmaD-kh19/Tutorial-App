const inputText = document.getElementById("type-text");
const inputVideo = document.getElementById("type-video");
const inputField = document.createElement("input");
const textareaField = document.createElement("textarea");
const neuLabel = document.createElement("label");
neuLabel.append(document.createTextNode("Wert "));
const durationField = document.getElementById("duration");



let adjustFormFields = function () {
    if (inputText.checked) {
        document.getElementById("labelurl").replaceWith(neuLabel);
        neuLabel.id = "labelurl";
        document.getElementById("content").replaceWith(inputField)
        inputField.id = "content";
        inputField.placeholder = "URL zum Text-Tutorial";
        inputField.title = "Geben Sie eine URL für das Text-Tutorial ein.";
        // Dauer-Feld als nicht erforderlich setzen
        durationField.required = false;
        durationField.style.display = "none";
    } else if (inputVideo.checked) {
        document.getElementById("labelurl").replaceWith(neuLabel);
        neuLabel.id = "labelurl";
        document.getElementById("content").replaceWith(textareaField)
        textareaField.id = "content";
        textareaField.placeholder = "YouTube Embed-Code oder URL";
        textareaField.title = "Geben Sie einen YouTube Embed-Code ein.";
        // Dauer-Feld als erforderlich setzen
        durationField.required = true;
        durationField.style.display = "block";
    }
}

inputText.addEventListener("click", adjustFormFields);
inputVideo.addEventListener("click", adjustFormFields);


