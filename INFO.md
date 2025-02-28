OGOLNE INFO:

  Niebedę ukrywał ze zostawilem te zadanie na praktycznie koniec ferii (dlatego tez termin oddania jest dokladnie tego dnia co jest termin...).

  Zamysl był taki aby zrobic te zadanie w 100% samemu bez zadnej pomocy, z reszta jak pozniej tak juz na spokojnie czytalem te zadanie no to mowie sobie co w tym trudnego, ogarnac sobie z kas mampke polski zrobic prosty hover,prosty popup i proste pobieranie danych z api niby nic trudnego robota na 10min noooooo... ALE oczywicse nie moglo byc tak super, poniewaz gdy dodalem mape,zrobilem hover,zrobilem poup, no to przyszedl czas na pobieranie danych, wiec instaluje se dokumentacje tego api (api.stat.gov.pl) no i tak czytam czytam i wlasnieciwe to nie wiem co czytam.. Dopiero po kilkunastu minutachj ogarnalem ze jest to api funkcyjne(SOAP)! a nie zwykle rest no i tu juz zaczely sie schody ponieawz nigdy nie korzystalem z funkcyjnego api, zawsze korzystlame z rest api (tego jakby normalnego i na dzijescze czasy nowoczesniego) i nie bylo praktycnzie wiekszych problemu z jego korzystania no a tu nagle api funkcyjne ktora ma stare przykaldy i praktyki na np. XML i C# no i juz widze ze bedzie ciekawie, proboje chwile samemu pokminic i nic z tego wiec juz mowie dobra biore ta sztuczna moze mi pomoze, niby mi pomogla ale no nie do konca bo nie napisalem jej ze to funkcyjne api i ona robila to tak jak ja czyli w prostym fetch + zwykly react no wiec koniec koncow nie dzialo.. no i mialem problem i do wybrou 2 opcje albo szukam innego zywkgo, normlanego rest api, no albo nie zrobie tego zadania, no ale wiem dobrze ze bardzo mi zalezy zeby je zrobic wiec zaczolem szkac nie znalazlem zadnego innego api opborcz tego z gov i z jescze starzzego jakiegos forum i jescze znalaem repo na githubie i to bylo najlepszym roziwazniem tylko tyle ze to bylo w .json (czyli te dane wszystkich wsi i miast byly w json a w zadaniu jest ntapisany ze lepiej uzyc API) wiec no nie do konaca chcialem to wykorzystywac i wtedy mialme juz mocny dylemat ale nasczecie przypomnialem sobie ze jescze mam jednego dobrego kolege ktory moze mi z tym pomoc wiec napisalem do niego i faktycnzie dobrze ze to zrobilem bo dzieki temu zadanie dziala.. Sam przyznal ze juz funkcyjnych api sie nie robi i mam prawo nie widziec co jest 5, wiec uznalizmy ze mozenmy to zrobic albo w svelte albo zrobic prosty ala skrypt w python problem miini byl taki ze svleta uzywalem kilka lat tmeu i juz nie che za bardzo do niego wracac a pythona nigdy sie nie uczylem i nie przepadam ale juz mowie sobie tak nie wianze jak to zrobie byle by juz to dzialalo wiec zrobilymsy to w pythonie..

  WIEC W SKROCIE:

  Gdyby bylo to rest api nie mialbym zadnego problemnu z zrobineineim tego zadnaia (przynajmniej tak przypuszczam..) 

  Zamysl byl taki abym zrobil te zadanie w 100% samemu bez pomocy, no niestety sie nie udalo(musialem uzyc pomoc..)

  I finalnie wyszlo to tak ze:

  - Mapa polski zostala wzieta z gitbuba (https://github.com/ppatrzyk/polska-geojson)
  - Hover na mapie polski czesciowo zrobiny przez mnie
  - PopUp zrobiony przez mnie
  - pobieranie danych z api (troche ja, troche sztuczna, troche moj kolega + ja)

  DODATKI:

  I tak wiem mozna bylo to zrobic jescze ladniej np. zrobic do tego lekko responsywnosc,popparwic ogolny wyglad,dodac jakise buttony aby te miasta nie wczytywaly sie od razu wszystkie tylko np klila a po kliknieciu wiecej,poprawic optymlaizjace i co najwazniejsze zoptmalizowac kod i tak wiem ze mozna bylo to tak wlasnie zrobic natomioast to jak jak mowie przyznaje sie ze zostawilem to na koniec troche i bylem w ogrromnym szoku ze nie moge se poradzic z api dlatago dokalnolem wytboru zeby juz niewazne jak to wygladlo niech to po prostu dziala..



  INFO PROJEKT + UIRUHCAMIANIEI:

  - mapa to geojson + (json(opcjonalnie))
  - do rysowania mapy uzylem Canvas
  - do przekonwertowania wszystkich danych itp itd.. uzylem porstogo "ala" skryptu w pythonie w ktorym glownie uzylem FastAPI
  

  - do uruchomineia projektu react(/test-maps) standardowo `npm run dev`
  - do uruhcomeniaa projektu python(/python-server) komenda - `uvicorn main:app --reload`
  - zadanie jest do zobaczenia na strone - `https://zadanieutkmapa.bkrupka.com`
  - jak i zadanie jest do zobaczenia na githubie - ``


   Probowalem zrobić to w pełni sam, ALE ze względu na złożoność API funkcyjnego (SOAP) i brak wcześniejszego doświadczenia, potrzebowałem pomocy..
