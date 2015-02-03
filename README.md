<h1>Rapport-projekt Annons-karta</h1>

<a href="eerie.se/annons-karta/">Körbar länk</a><br>
<a href="https://www.screenmailer.com/v/3PAecDl6n5EaaTE">Videobeskrivning av applikationen</a>

<h3>Inledning</h3>

<p>Min applikation handlar om att kunna hitta närliggande ting till salu i närområdet. Jag kombinerar
googlemaps och apfy, som bidrar med ett api för blocket, för att hämta ut artiklar till salu.</p>

<p>Det är alltså en simplifierad version av blocket, just att kunna hitta något i närheten som man kan gå över för att köpa
Dock så måste man alltid gå via blockets egen hemsida för att kunna hitta kontraktinformation till personen.
</p>
<p>
Så vitt jag vet finns det ingen liknande applikation för att hitta artiklar i närheten av sig
</p>

<a href="https://docs.google.com/document/d/1nG-OKwRkq7y77750JxQJvKVlCdL4f3uiXsZsK-Jh5oU/edit">Schematisk bild över applikationen</a>

<h3>Serversida</h3>

<p>
Jag har valt mig att använda mig av php på serversida för att prata med API:erna.
Jag använder mig av ett bibliotek som heter "Requests" som gör det enkelt att göra Requests mot API:erna.
Cashningvis så sprarar jag undan det lilla som behövs(Kategorier och Län) i JSON-filer.
</p>2

<p>
Funktionaliteten fungerar så att när en användare får välja bland de katerogier och län som blocket erbjuder, och sedan den sökterm man vill.
Detta skickas mot apfy, och blocket, tar en emot JSON svar med det artiklar som finns på blocket.
Just nu hämtar den bara de 50 första träffarna. Detta för att jag vill bara ha de senast uppdaterade artiklarna så att man inte får upp flera månader gamla annonsen som redan kan va sålda.

Efter detta så modifieras svaret och skickas till googles geoCode för att peka ut platserna där de finns belägna.
</p>

<p>Ifall mina svar från blocket är tomma så presenteras användaren med ett felmeddelande som besrkiver problemet.</p>

<h3>Klientsida</h3>

<p>På Klientsida har jag valt att använda mig av javascript och Jquery. All cachning härifrån sker via localStorage.
</p>

<p>
Javascripten tar emot data från klient och modiefierar data för att passa php-servers kall till API.
Med googlemaps API så kan man då enkelt i javascript peka ut platser och presentera den informationen som tillhör den platsen.

Med ajax postar jag till PHP-servern och sparar sedan undan den data som jag får tillbaka i localStorage, för att lätta kunna hantera senare.
</p>

<p>
Felhantering sker genom att jag ser om svaret från blocket är tomt. I sånna fall presenterar jag detta för användaren via en informationsruta.
</p>

<h3>Säkerhet och prestandaoptimering</h3>

<p>
Säkerthetsmässigt så har jag ingen databas att tänka på. Men jag använder mig av strip_tags innan något skickas
mot API:et.
</p>
<p>
För att undvika csrf-attacker använder jag mig av en syncronized token. Dock så sparar jag inte på någon farlig information och allt som kan läckas är information som redan finns ute på blockets hemsida.
</p>
<p>
I prestandaväg så har jag försökt att bryta ut och hålla koden så luftig som möjligt.
Men jag vill också hålla kod som har relevans till samma fil. Vilket gör att googleMap.js blev väldigt stor.
Detta också pga. att jag helt enkelt inte haft tid att göra det snyggare.

Med ramverken håller jag mig till minifierade filer för att spara in så mycket prestanda som möjligt.
</p>

<h3>Offline-first</h3>

<p>
    Jag vill att användaren ska kunna se de senast browsade artiklarna offline.
    Söker man t.ex. på Kalmar län och ser att det finns träffar i Vimmerby och klickar på det området så kommer dens artiklar att sparas i menyn.
    Dessa kan också ses i offline-läge.

    Jag anser att min applikation i största utsträckning endast bör användas i ett onlineläge.
    Men genom att information om det senaste artiklarna sparas kan man tryckt stänga ner browsern eller tappa anslutning och fortfarande hålla
    koll på vad man tidigare sökt/hittat i artikelväg.
</p>

<h3>Egen reflektion kring projektet</h3>
<p>
    De största problemen jag stött på är att hantera svaren från API:erna och att hålla kvalitén på koden bra.
    Just kodkvalitén tycker jag att jag fortfarande kan förbrättra, men har inte haft tid.
    Jag hade tänkt att implementera offline-läget så att man skulle kunna välja ut just vilken artikel man ville spara.
    Men infowindows har varit litek krångliga att hantera.
</p>

<h4>Eventuella buggar som jag vet fortfarande finns:</h4>
<p>
   Blockets namngivning på platser stämmer inte alltid överens med google maps. Specielt i tätortet, men också vissa glesbyggder.
   Detta gör att jag inte kan hämta någon plats och således inte kan presentera artikeln.
   För att hitta artiklarna i objektet så måste jag söka på deras plats, som måste stämma överens med googlemaps för att vara
   säker på att de renderas på rätt plats. Detta uppfylls alltså inte alltid.
   Detta presenteras genom en informationruta som beskriver att artiklen inte kan pekas ut på kartan.
</p>

<h3>Risker med min applikation: </h3>
<p>
    Risken med min applikation är att det blir för många kall mot blocket genom apfy som jag går genom och ifall blocket stänger av dem pga. det.
</p>
<p>
    Annars ser jag faktiskt inga verkliga, varken etiska, eller säkerhetsrisker med applikationen.
    Man kan inte få ut direkt address utan att höra av sig till personen innan, vilket sker genom blockets egna site.
    Det är endast ett sätt att förenkla sökning av ting till salu i sin närhet.
</p>
<p>
    Jag anser att jag inte använt mig att några betygshöjande delar utan utgått från betygskrav 3.
</p>
