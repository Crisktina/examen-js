# examen-js

Els alumnes del curs FOAP 2023_24 com a preparació dels exercicis pràctics van
desenvolupar una xarxa social en la que es podien fer les següents funcionalitats:
● Registre
● Login
● Llistat de publicacions
● Afegir una nova publicació
● Llistat d’amics
● Suggerir amics
Donat l’èxit de les implementacions s’ha decidit afegir i actualitzar certes funcionalitats per
millorar l’experiència dels usuaris. A continuació es descriuen:
● Afegir un grup a la xarxa social (5 punts): Dintre de la part privada existirà un
formulari que permeti afegir un nou grup en el sistema amb els camps: nom,
descripció, una imatge (URL) i unes etiquetes associades entre les existents: social,
records, esport, salut, cinema, entreteniment,…És obligatori indicar: el nom del grup,
la descripció, una URL per la imatge i un mínim d’una etiqueta i un màxim de tres.
Addicionalment, es detectaran, al camp descripció, paraules 'malsonants' i es
notificaran. Per fer-ho, s'utilitzarà un vector de paraules no permeses:
const censoredWords = ["word1", "word2", "word3"];
El resultat de l’acció del formulari ha de ser afegir aquest grup en un vector (array)
de grups (veure següent apartat).
● Llistat de grups de la xarxa social (4 punts) : Dintre de la part privada s’ha d’afegir
un nou component que proporcioni una llista de grups. El punt de partida serà una
variable de Javascript que guarda la informació de tots els grups disponibles. La
pàgina haurà de mostrar aquesta llista en una estructura determinada per l’alumne:
taula, llista, cards, etc. Exemple de dades de la llista de grups.
[
{
‘nom’: ‘Tu no ets de Vilanova si no …’,
‘descripcio’: ‘...’,
‘imatge’: ‘http://xxxxxxxx’
‘tags’:[ ‘social’]
},
{
‘nom’: ‘Antics alumnes Escola XXXX’,
‘descripcio’:: ‘...’,
‘imatge’: ‘http://xxxxxxxx
‘tags’: [‘social’,’records’’]
},
{
‘nom’: ‘Vilanova imatges d’ahir i avui’,
‘descripcio’: ‘...’,
‘imatge’: ‘http://xxxxxxxx
‘tags’: [‘records’]
},
{
‘nom’: ‘Anem a caminar’,
‘description’: ‘...’,
‘imatge’: ‘http://xxxxxxxx
‘tags’: [‘esport’, ‘salut’]
},
{
‘nom’: ‘Club Esportiu Ribes’,
‘descripcio’:: ‘...’,
‘imatge’: ‘http://xxxxxxxx
‘tags’: [‘esport’, ‘aventura’]
}
]
● Cercador de grups (1 punts): A la mateixa pàgina del llistat de grups s’ha d’afegir un
un formulari que permeti fer la cerca sobre els grups a partir del nom o una etiqueta
(tag)
● Cercador d’amics avançat (opcional + 2 punt extra). Mateix comportament que el
cercador bàsic però en aquest cas les cerques es podrien realitzar amb paraules
parcials (a partir de 3 caràcters).
NOTA:
(Opcional). Pujar el projecte a un repositori de GITHUB
