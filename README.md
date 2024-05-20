# Webbapplikation för Hantering av Kurser och Ramschema

# Beskrivning
Denna webbapplikation har utvecklats som en del av en kursrelaterad uppgift för MB Universitetet. Syftet med applikationen är att erbjuda användarna en plattform för att hantera och utforska olika kurser samt skapa personliga ramscheman baserat på sina valda kurser.

# Funktionaliteter
Användare kan bläddra genom en lista över tillgängliga kurser, inklusive kurskod, namn, poäng och ämne.
Användare kan sortera kurserna baserat på kurskod, namn, poäng och ämne. Dessutom kan de filtrera kurserna baserat på kurskod och namn samt välja kurser från specifika ämnesområden.
Användare kan skapa ett personligt ramschema genom att lägga till sina valda kurser. Ramschemat visar valda kurser och det totala antalet högskolepoäng.
Valda kurser och ramscheman sparas lokalt i webbläsarens lokal lagring för att användardata ska kunna bevaras.

# Teknologi
Angular: Frontend-applikationen är byggd med Angular-ramverket för att underlätta utvecklingen av responsiva och användarvänliga gränssnitt.
TypeScript: All affärslogik och funktionalitet implementeras med TypeScript för att skapa en mer robust och underhållbar kodbas.
LocalStorage: För att lagra användardata lokalt används webbläsarens LocalStorage.

# Installation och användning
Klona projektet till din lokala maskin: git clone <URL till projektet>
Navigera till projektmappen: cd <projektmapp>
Installera alla nödvändiga paket: npm install
Starta utvecklingsservern: ng serve
Öppna din webbläsare och gå till http://localhost:4200
