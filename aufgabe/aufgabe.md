**Aufgabe**:

Erstelle eine ReactJS-Applikation, die die folgenden Features bereitstellt.
Es gilt den Rahmen der Aufgabe zu erfüllen. Weitere kreative Ansätze sind natürlich immer erwünscht! 
Der Zeitrahmen der Aufgabe beträgt **eine Woche**.
Gutes Gelingen und viel Spaß beim Basteln!


**Beschreibung:**

Es wird ein neues Dashboard gesucht. Deine Aufgabe ist es ein neues Dashboard zu erstellen mit dem der Benutzer seinen Account verwalten kann. Natürlich soll es nun nicht vollständig sein. Wir möchten uns auf einen Ausschnitt beschränken. 

In diesem Szenario soll das Formular für die Änderung von Benutzerdaten erstellt werden. Der Benutzer hat im vorangegangen Schritt diese Seite aufgerufen und möchte nun die Möglichkeit haben folgendes zu tun:

Im ersten Tab (Basisdaten):
- E-Mail-Adresse ändern
- Passwort ändern
- Das Passwort muss bestimmte Eigenschaften erfüllen:
- Passwort und Passwortwiederholung sind identisch (bitte mit Indikator)
- Passwort hat: Großbuchstaben, Kleinbuchstaben, Zahlen und Sonderzeichen (bitte auch mit Indikator, mehrere Farben für die Passwortstärke wären optimal)
- Button zum Aktualisieren der Benutzerdaten

Im zweiten Tab (Anschrift):
- Vorname ändern
- Nachname ändern
- Anschrift (Straße, Hausnummer, Postleitzahl) ändern
- Land ändern (Zur Auswahl stehen Deutschland, Österreich, Schweiz)
- Button zum Aktualisieren der Benutzerdaten

Wichtig ist das der Benutzer ein Feedback bekommt, wenn seine Eingaben nicht stimmen, stimmen, seine Daten nicht gespeichert wurden und seine Daten erfolgreich gespeichert wurden.


**Layout:**

Als Grundlage soll Twitters Bootstrap Framework verwendet werden. Header und Footer können in Bootstrap Templates gefunden werden.

Für den eigentlichen Seiteninhalt wäre es schön, wenn der Block „User“ die Spaltenbreite „col-xl-2“ hat, „Tabs mit Formular“ die Spaltenbreite „col-xl-6“ und „Aside“ die Spaltenbreite „col-xl-4“.

Es gilt zu beachten, dass dieses Dashboard bitte auch mobil funktioniert (sowohl auf Tablets, als auch auf Smartphones)
Beim Styling darf selbst entschieden werden, wie es aussehen sollte. Bonuspunkte gibt es allerdings, wenn die Farben aus
der style.css Verwendung finden. 
 
Ein Layout ist hier zu finden: layoutskizze.jpg


**Codestruktur:**
Die Applikation nutzt bitte folgende Features:

- React.js
- Babel
- Für CSS bitte einen pre-compiler(SASS, LESS, SCSS) benutzen

In React.js soll die Applikation in passenden, wiederverwertbaren, React-Komponenten zusammengebaut werden.

Die Komponenten sind im Idealfall als Export-Klassen bereitgestellt.

Mögliche Komponenten wären:
- Header
- Footer
- User
- UserInputTabs
- Aside


**Git:**
Das fertige Dashboard wird bitte in einem Git-Repository abgelegt. Das Git wird uns zur Verfügung gestellt. Wir schauen uns das fertige Produkt an. Vielen Dank!