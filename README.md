## Système de craft

### Items craftables

Chaque item craftable est composé de plusieurs éléments:
- Matériaux:        nécessaires pour le craft
- Nombre de check:  combien de lot de 2h on doit passer pour crafter l'item
- Difficulté:       utilisé pour les *crafting roll*
- Rareté:           juste pour définir sa valeur

Chaque item crafté va demander n * 2h de temps nécessaire pour sa fabrication nombre de check). 
On peut donc séparer les temps dédié au craft d'un item (sauf pour l'alchimie qui doit être fait en un coup)


A chaque 2h passé, on doit effectuer un *crafting roll*. En cas de réussite, on passe un check et en cas de non réussite le progrès est perdu. Au bout de trois crafting roll d'affilé non réussi, les matériaux sont perdus.

### Crafting roll

Chaque profession est associé à une abilité et des outils. Dans quasiment tous les cas, crafter sans les outils appropriés est impossible.

Le formule pour le modifier de *crafting roll* est: \`Cmod = compétence d'artisanat + bonus de caractéristique associé\` 

Chaque profession se voit associé une ou plusieurs caractéristique pour le modifier:

| Profession        | Caractéristique(s) associé(es) |
| ------------------|--------------------------------|
| Alchimie          | Intelligence ou Sagesse        |
| Forgeron          | Force                          |
| Cuisinier         | Sagesse                        |

Un *crafting roll* est réussi s'il est égal ou supérieur à la difficulté de l'item crafté => \`1d20+Cmod >= difficulté\` 

#### Take 10

Il existe un moyen de roll 10 à coup à un d20 lors d'un craft, pour cela, il faut doubler le temps de craft d'une étape, passant donc de 2 à 4h. On ajoute ensuite le modificateur \`Cmod\`  à ce 10

### Temps de craft et repos

Lors d'un temps de repos long, 2h peuvent être consacrés au crafting si on ne fait que ça plus dormir. 

Durant ce temps, **malus de -5 à tous les jets de perception**.

<!> Pas utilisable pour l'instant <!>
Précision pour l'alchimie: Comme 2h ne peuvent éventuellement pas être suffisante pour crafter et qu'on est obligé de crafter en un seul coup, il est possible de continuer pendant 2h supplémentaire de craft avant ou après le long repos dans le cas ou on choisit de "craft" lors des __actions de camp__ (système développant comment utiliser ces heures de repos). (je dois lire ça pour l'instant je l'utiliserai pas si j'ai pas bien compris)
<!> ------------- <!>
