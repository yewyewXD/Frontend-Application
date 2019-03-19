### English version below

# Aufgabe

Erstelle eine ReactJS-Applikation, die die folgenden Features bereitstellt.
Es gilt den Rahmen der Aufgabe zu erfüllen. Weitere kreative Ansätze sind natürlich immer erwünscht! 

Um die Bewerbungschallenge zu Installieren werden Node.Js und Yarn benötigt.
Wenn die Komponenten installiert sind kann die App per:

**yarn install**

installiert werden.

Gutes Gelingen und viel Spaß beim Basteln!


# Git

Bitte zuerst das Repository forken und anschließend die Lösungen im eigenen Repository hochladen. Das Git wird uns zur Verfügung gestellt. Wir schauen uns das fertige Produkt an. Vielen Dank!


# Beschreibung

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


# Layout

Als Grundlage soll Twitters Bootstrap Framework verwendet werden. Header und Footer können in Bootstrap Templates gefunden werden.

Für den eigentlichen Seiteninhalt wäre es schön, wenn der Block „User“ die Spaltenbreite „col-xl-2“ hat, „Tabs mit Formular“ die Spaltenbreite „col-xl-6“ und „Aside“ die Spaltenbreite „col-xl-4“.

Es gilt zu beachten, dass dieses Dashboard bitte auch mobil funktioniert (sowohl auf Tablets, als auch auf Smartphones)
Beim Styling darf selbst entschieden werden, wie es aussehen sollte. Bonuspunkte gibt es allerdings, wenn die Farben aus
der style.css Verwendung finden. 
 
Ein Layout ist hier zu finden: layoutskizze.jpg


# Codestruktur

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

-----------------------------------------------------------------
### English verison

# Task

Create a ReactJS application that provides the following features.
The framework of the task must be fulfilled. Further creative approaches are of course always desired! 

Node.Js and Yarn are required to install the application challenge.
Once the components are installed, the app can be downloaded via:

**yarn install**

can be installed.

Good luck and have fun with handicrafts!


# Git

Just fork the repository and add your solutions to your fork. The git is made available to us. We look at the finished product. Thank you very much!


# Description

You are looking for a new dashboard. Your task is to create a new dashboard with which the user can manage his account. Of course, it is not supposed to be complete. We would like to limit ourselves to just one excerpt. 

In this scenario, the form for changing user data is to be created. The user has called this page in the previous step and wants to be able to do the following:

In the first tab (basic data):
- Change e-mail address
- Change Password
- The password must have certain properties:
  - Password and password repetition are identical (please with indicator)
  - password: Uppercase letters, lowercase letters, numbers and special characters (also with indicator, several colors for the password strength would be optimal)
- Button to update the user data

In the second tab (Address):
- Change first name
- Change Last Name
- Change address (street, house number, postal code)
- Change country (Germany, Austria, Switzerland are available)
- Button to update the user data

It is important that the user receives feedback if his input is incorrect, correct, his data has not been saved and his data has been successfully saved.


# Layout

Twitter's bootstrap framework will be used as a basis. Headers and footers can be found in bootstrap templates.

For the actual page content, it would be nice if the block "User" had the column width "col-xl-2", "Tabs with form" the column width "col-xl-6" and "Aside" the column width "col-xl-4".

Please note that this dashboard also works mobile (on tablets as well as on smartphones)
When styling, you can decide for yourself what it should look like. However, bonus points are awarded if the colors from
of the style.css. 
 
A layout can be found here: layoutskizze.jpg


# Code structure

The application uses the following features:

- React.js
- Babel
- For CSS please use a pre-compiler(SASS, LESS, SCSS)

In React.js, the application is to be assembled into suitable, recyclable React components.

Ideally, the components are provided as export classes.

Possible components would be:
- header
- footer
- user
- UserInputTabs
- azide
