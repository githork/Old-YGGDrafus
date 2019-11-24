# Changelog

## v1.0 (before I version the project)
- **v1.0.0** :
  - Retrait du timer entre 2lancers de sort
  - Correction du Livre de Quete qui s'affiche maintenant correctement
  - Activation par defaut du raccourcie Shift pour rentrer en cbt sans devoir cliquer sur rejoindre
  - Inversion du raccourcie Ctrl en FM, mtn toutes le paquet de rune se place si on appui pas sur Ctrl
  - Ajout de 3nouvelles options dans l'onglet Affichage qui controlent l'affichage du panel de loot, des animation de mort et qui force le run ou pas
  - Il est maintenant possible de passer l'option mode créature a 0
  - Ajout d'une case max dans la barre de sort déplaçable
  - Correction du nom des boutons tactique, anti lag, créature au survol
  - Correction d'un problème d'update des objets utilisables qui se transformaient en cell tactique
  - Passage du code du core pour le mode tactique, creature et anti lag dans le loader, le core n'a désormait plus aucun script
  - Ajout de la sauvegarde de l'activation du mode tactique pour la session de jeu en cour
  - Correction du chat, l'historique gardé était bcp trop important et entrainait des gros ralentissements sur le long terme
  - Correction du panel PvP qui ne s'ouvrait plus
  - Ajout de l'auto suçage
  - Retour du délais entre 2 déplacements, bcp trop de freeze a cause de l'anti speed hack
  - Correction des malus po qui restait infiniment
  - Correction de l'effet "Changement d'apparence" qui ne fonctionnait plus
  - Si la checkBox pour save notre ndc + mdp n'était pas coché le focus ne se faisait pas sur la textbox du ndc, c'est maintenant le cas (vos macro ne seront plus cassé)

## v1.1
- **v1.1.0** :
  - Ajout d'une commande /mask qui rend invisible tous les sprites de personnage (>6 et <130)

- **v1.1.1** :
  - Lorsque l'on lançait un cbt avec la commande /mask d'activé tout les sprites étaient invisibles, c'est maintenant corrigé.
  - Lorsque l'on changeait de map avec la commande /mask d'activé il fallait l'utiliser 2fois pour la réactiver, c'est maintenant corrigé.

- **v1.1.2** :
  - Correction du bouton du panel d'émote/smiley, une fois cliqué dessus il restait blanc et il fallait relancer son client pour le mettre a son état initial
  - Correction du bouton "Recettes" qui restait grisé une fois que l'on avait appuyé dessus, il fallait relancer le craft pour qu'il reprenne sont état initial
  - Correction d'un bug qui nous bloquait a la fin d'un combat de type agression

- **vStreamer** :
  - Possibilité de masquer le nom de compte
  - Possibilité de masquer son ip a la connexion
  - Possibilité de désactiver l'option anim de mort pour rendre le fichier legit

- **v1.1.3 Streamer** :
  - Remise de l'inversion du raccourcie Ctrl en FM (le paquet de rune se met d'un coup sans avoir besoin d'appuyer sur Ctrl)

## v1.2
- **v1.2.0** :  
  - Il est maintenant possible de double cliquer sur un lot de pierre d'âme dans son inventaire pour en équiper une du lot
  - Fusion du client streamer et classique, une checkbox permetant de controler le "mode" de votre client est maintenant disponible sur l'UI Login ce qui permet de cacher son nom de compte, cacher son ip et de totalement désactiver et cacher l'option DeathAnim

## v1.3
- **v1.3.0** :
  - Ajout d'une traduction française et anglaise pour les nouvelles options (merci Fhenris)
  - Correction d'un leger decalage du label de l'option force run
  - Ajout d'une option permetant d'afficher ou non la nuit
  - Le mode créature se sauvegarde maintenant entre les combats
  - Mise en cache des options tactique, anti lag et créature, leur etat se sauvegarde même si vous vous déconnectez reconnectez
  - Correction d'un bug qui faisait que le bouton du mode créature était invisible lorsque vous vous déconnectiez en combat

- **v1.3.1** :
  - Modification du label de l'option pour activer/désactiver la nuit pour qu'il soit plus compréhensible

- **v1.3.2** :
  - Correction de l'option pour activer/désactiver la nuit qui ne fonctionnait pas
  - Modification du mode streamer, l'ip est maintenant remplacé par des étoiles (*) a la place de remplacer totalement le message
  - Modification du bouton Show Trigger, le logo a été changé et une traduction a été ajouter
  - Correction du bouton Show Trigger qui ne ciblait pas tout les types de trigger (soleil) du jeu
  - Ajout du sprites du mode créature des monstres dans l'archive

## v1.4
- **v1.4.0** :
  - Remodification du bouton Show Trigger
  - Remodification du message de l'option pour activer le day/night cycle pour qu'il soit plus compréhensible
  - Grosse modification de l'interface des hdv, il est maintenant possible de spam entrée pour mettre en vente a la chaîne !!!!

## v1.5
- **v1.5.0** :
  - Correction du bug du chat qui remonte quand on utilise une version de flash supérieur a 10.1
  - Ajout d'une traduction pour le message vanilla "GUILD_HOUSE_ENABLE_FOR_THIS_HOUSE"
  - Ajout d'un bouton qui permet de retirer tout les objets mit en vente a l'hdv
  - Correction d'un bug qui faisaient que le tactique ne s'activait pas automatiquement en défense de perco

## v1.6
- **v1.6.0** : 
  - Ajout d'une mémoire pour l'état de la timeline, sont état (rangé ou non) est donc gardé entre les combats
  - Ajout d'une option dans l'interface d'FM qui permet d'inverse le raccourci CTRL
  - Retrait de l'animation du CaC avec l'anti lag
  - Ajout d'une confirmation sur le bouton "Retirer tout" ainsi que d'un message d'erreur si vous n'avez aucun item en vente
  - Ajout d'un bouton sur l'interface de récolte des percepteurs qui permet de vider totalement son inventaire
  - Passage de 4 à 3 caractère minimum pour la recherche de l'hôtel de vente
  - Retrait du message "Chargement de la carte..." lorsqu'on change de carte (apparait souvent lorsqu'on utilise une version de flash upgrade ou quand on augmente le frame rate du jeu) 
  - Ajout d'une option qui permet de transférer rapidement ses objets en banque,monture,coffre de maison */!\WIP risque de crash/!*
  - Retrait de l'option qui permet de retirer les animation de mort qui est interdit
  - Retrait de l'option ForceRun qui permet de courir a une case même en combat qui est interdit 
  - Passage à 3 du default run limite
  - Ajout d'une option qui permet de désactiver le pop-up d'échec de craft (La recette est bonne mais a échoué)
  - Ajout d'une option qui permet de désactiver les bulles de résultat de craft

- **v1.6.1** : 
  - Correction du default run limite qui ne fonctionnait pas toujours

- **v1.6.2** : 
  - Retour du timer en échange (petit fail de ma part)
  - Correction de l'ajout de recette de craft complète via la liste des crafts

- **v1.6.3** :
  - Correction du mode tactique qui ne s'activait pas automatiquement lorsqu'on rejoignait un combat en mode spectateur
  - Correction du mode tactique qui ne s'activait pas automatiquement lorsqu'on se reconnectait en combat
  - Correction des glyphes et pieges avec le mode tactique, cela ne fera plus de "trou"
  - Retour du tactique original, je proposerais plus tard plusieurs coloris et tailles de blocs aux choix
  Merci a Fhenris pour avoir refondu le tactique en corrigeant les principaux bug qu'il possédait. J'ai simplement reprit sa méthode.

- **v1.6.4** :
  - Correction des valeurs par défaut de deux options (il y avait une faute d'orthographe)
  - Correction d'un bug sur l'animation du sort Bluff
  - Modification du mode tactique, il est maintenant quadrillé et les blocs sont maintenant identique a ceux d'origine (2.0)

- **v1.6.5** : 
  - Correction du bouton pour transférer tout les objets visible dans l'interface "Storage" (Coffre, Inventaire dragodinde, Banque)
  - Ajout d'un bouton pour retirer tout les objets dans votre mode marchand
  - Remodification du tactique par défaut, le noir est moins noir, le quadrillage sur les cases noir est retiré, le quadrillage pour le sol est plus foncé ce qui contraste moins

## v1.7
- **v1.7.0** :
  - Ajout d'un bouton qui permet d'afficher les info-bulles de tous les groupes de montre (merci a C_far pour l'aide)
  - Correction du sprite du tabouret, il manquait quelques faces
  - Ajout d'un timer sur l'activation du bouton showTrigger pour éviter des gros ralentissements en cas de spam clique
  - Ajout d'un bouton qui permet d'afficher plus de bouton d'interface
  - Ajout d'un bouton d'interface qui ouvre la liste des objet du jeu
  - Ajout d'un bouton d'interface qui ouvre la liste des monstres du jeu
  - Ajout d'un bouton d'interface qui permetra d'afficher la liste des sorts du jeu WIP
  - Désactivation du menu admin pour les joueurs non autorisés
  - Désactivation des boutons pour les modérateurs sur les interfaces "itemSummoner" et "MonsterAndLookSelector" pour les joueurs non autorisés
  - Retrait du menuadmin.xml du zip

- **v1.7.2** :
  - Retrait du label lvlQuantity de l'interface itemSummoner pour les utilisateurs non autorisés
  - Correction d'un problème d'update lorsqu'on passait la barre mouvable a 10slots
  - Correction du 10eme slot de la barre mouvable qui s'updatait mal quand on switchait de Tab (sort/item)
  - Le panel de smiley ne se ferme plus automatiquement lorsqu'on utilise un bouton du menu, l'état du bouton pour ouvrir le panel ne sera donc plus inversé
  - Lorsqu'on ouvre l'une des nouvelles UI rajouté avec la 1.7, cela ferme bien toutes les autres UI
  - Ajout de traduction pour des labels des UI ItemlSummoner & MonsterAndLookSelector (qui n'en possédait pas vanilla)
  - Rajout de la bulle d'echec critique d'un sort avec l'anti lag
  - La valeur par défaut de la comboBox de la quantité dans l'interface de vente se met par défaut sur la valeur la plus élevé
  - Lorsqu'on double clique avec CTRL d'appuyé pour transférer un lot d'item, cela transfert maintenant le maximum possible en fonction des pods disponibles
  - Modification de l'UI ForgemagusCraft, l'ItemViewer possède maintenant 12lignes de statistique a la place de 4
  - Avancement sur l'interface de sort, toujours en WIP

- **1.7.3** :
  - Correction du retrait de kamas en banque/coffre

- **v1.7.4** :
  - Correction d'un bug de la comboBox de la quantité dans l'UI BigStoreSell dont la première valeur était modifié par la valeur max, il était donc plus possible de vendre par 1 si le lot d'objet que vous vendiez étaient supérieur a 10

- **v1.7.5** :
  - Correction d'un problème sur le double clique avec CTRL dans l'interface Storage, l'arrondit inférieur pour détecter le nombre maximal de ressource possible dans l'inventaire était erroné

- **v1.7.6** :
  - Lorsqu'on est en mode streamer, les numéros du code d'une maison/coffre sont remplacés par des 0
  - Finalisation de la nouvelle UI SpellList qui vous permet d'avoir les infos de n'importe quel sort du jeu !

- **v1.7.7** :
  - Correction de la taille du bouton des sons d'ambiance qui était trop grand
  - Correction du drapeau italien qui disparaissait sur l'UI Login
  - Correction du lien du mot de passe oublié qui redirigeait vers un lien mort
  - Ajout du nom du corps à corps utilisé lorsqu'on tape avec
  - Ajout du "Pret" lorsqu'on utilise le raccourcie "Passer son tour"

- **v1.7.8** :
  - La catégories All de l'UI ItemSummoner est maintenant en premier a la place d'être dernier
  - Correction du bug : "Si on utilise le raccourcie CTRL et qu'on a plus de pods disponible pour transferer un seul et unique objet dans l'inventaire le pop-up pour prevenir qu'on est full pod ne s'affiche pas"
  - Ajout des secondes sur le panel de fin de cbt

## v1.8
- **v1.8.0** :
  - Adaptation du loader au 40fps, désactivé pour le moment
  - Correction d'un bug avec le bouton "Recettes" sur l'interface de craft qui lorsqu'il était selectionné et qu'on cliquait sur "Combiner" restait sélectionné alors que l'UI de Craft se fermait
  - Correction du bouton "Recettes" dans l'interface de craft sécurisé
  - Les serveurs Eratz et Henual ont maintenant une illustration propre
  - Ajout des cadeau d'abonnement en fr ainsi qu'en en sur l'UI Login
  - Ajout des news concernant le client en fr et en sur l'UI Login
  - Correction du sprite de la fleche jaune droite des cadeaux sur l'UI Login qui était totalement bugué
  - Correction d'un bug lorsqu'on invitait le 8eme personnage dans son groupe, il se dupliquait dans certains cas
  - Correction d'un bug d'update de l'initiative du groupe lorsque le groupe est "caché", le 8eme personnage réapparaissait dans certaines conditions
  - Correction des personnages se trouvant sur des dragodindes avec le mode créature en combat

- **v1.8.1** :
  - **v1.8.1.0** :
    - Correction d'un bug qui faisait que lorsqu'on changeait d'apparence en cbt sans être en mode créa et que juste après on activait désactivait le mode créa on était plus morph par l'effet du sort
    - Correction d'un bug qui ne transformait pas en créa les personnages se trouvant sur des dd lorsque le mode créature était activé part défaut au début du cbt
    - Correction d'un bug ou la size des mobs du au rang était mise sur le sprite du mode créature lorsque le mode créature était activé par défaut au début du cbt
    - Correction du mode transparent qui se désactivait pour les personnage ayant changé d'apparence
    - Suppression du message dans le chat qui liste toutes votre liste d'ami/ennemi lorsque vous en ajouté un sans avoir l'interface d'ouverte

  - **v1.8.1.1** :
    - Tentative de correcton du crash dû au mode creature en cbt

- **v1.8.2** :
  - Remise au propre du code du mode créature en combat potentiel debug du crash lorsqu'on l'active/désactive qui pop aléatoirement
  - Correction d'un bug qui faisait que tous les sprites avaient un refresh en combat avec le mode créature d'activé lorsqu'une invocation était invoqué

## v1.9
- **v1.9.2** : 
  - Encore plus de correction de bug concernant le core 40fps

- **v1.9.3** :
  - Correction de la timeline lorsque que le mode créature est activé au début du cbt, le sprite du mode créa était affiché a la place du sprite par defaut
  - Correction d'un bug qui faisait que lorsqu'on avait le curseur sur un monstre en cbt, le bouton qui rajoute/enleve les boutons d'ui supplémentaire était encore visible
  - ABANDON DU PASSAGE DU CORE EN 40FPS pour le moment, ça me gonfle j'ai plein de bug, j'ferais ça + tard
  - Modification de la couleur du cercle de votre personnage en combat
  - Ajout d'une option qui permet d'écrire dans le chat directement "/w nomDuJoueur " pour envoyer un message privé plutot que d'utiliser l'interface
  - Ajout d'une option qui permet de retirer l'affichage des montures en combat
  - Ajout d'un compteur de tour en combat qui s'initialise lorsque vous rentrez dans un combat (lancement, specta, deco reco en cbt)
  - Correction d'un bug qui lorsque vous rejoignez un combat laissait un petit résidu du bouton "rejoindre" désactivé dans une maj antérieur

- **v1.9.4** : 
  - Correction de la transparence avec l'invisibilité, lorsqu'un personnage sortait d'invi il n'étais plus en transparence même avec l'option de coché
  - Correction d'un bug lorsque vous lanciez un combat avec l'option transparence d'activé, si vous la désactiviez en combat les personnages ne redevenaient plus normaux
  - Éclaircissement du cercle rouge pour son personnage pour mieux le différencier des autres
  - Réduction de la valeur Alpha lorsque l'on passe invisible pour mieux le distinguer par rapport aux personnages en transparence

- **v1.9.5** :
  - Ajout d'une commande /s qui permet d'écrire dans le canal général même en ayant sélectionné un autre canal
  - Les Archimonstres apparaissent maintenant en violet dans le popup du groupe, merci a C_far encore une fois pour l'aide

- **v1.9.6** :
  - Correction de l'update des résistances sur l'affichage des infos d'un joueur lorsque qu'on se boost en résistance en combat
  - Correction d'un bug qui faisait que l'affichage des esquives pa/pm des percepteurs et mutant (morph en monstre) ne s'updatait pas
  - Correction de l'affichage des esquives pa/pm, elles ne peuvent plus descendre en dessous de 0

- **v1.9.7** :
  - **v1.9.7.0** :
    - Correction d'un bug qui faisait que le pseudo du joueur n'était pas affiché sur l'interfaces des caractéristiques lorsqu'on était en spec
    - Nouvelle tentative de correction du crash a cause du mode créature en combat (qui j'espère est la bonne)
    - Ajout d'une musique au lancement du jeu jusqu'à la connexion de son personnage

  - **v1.9.7.1** :
    - Changement de la musique de login troll par la musique d'intro du premier CD des ost du jeu (la musique de login de Dofus Arena a ses débuts aussi)
    - Correction d'un bug qui faisait que la musique de login ne se lançait pas a la sélection des serveurs lorsqu'on changeait de personnage
    - Correction de l'affichage des esquives pa/pm des joueurs qui étaient toujours affiché a 0

## v1.10
- **v1.10.0** :
  - Correction d'un problème d'update avec le mode créature en combat lorsqu'un nouveau sprite apparaissait sur la map (invocation par exemple)
  - Correction d'un bug qui lorsqu'on changeait d'apparence en combat sur une dragodinde et qu'on désactivait leur affichage depuis les options, notre personnage ne s'affichait plus morph
  - Correction d'un bug qui faisait que le raccourci "entrée" ne marchait plus sur l'interface de Login
  - Prise en charge du GPU quand vous utilisez le client avec une version supérieur a flash 9  (Cela devrais corriger les problème de nom fluidité avec Dofus Remastered, seulement si vous jouez avec flash 10 donc)

## v2.0
- **v2.0.0** :
  - Correction d'un bug qui faisait que le chat restait sélectionné
  - Correction d'un message d'erreur dans le chat qui s'affichait a chaque passage en mode créature en cbt
  - Réactivation du transfert rapide en banque/dragodinde/coffre
  - Adaptation du Client pour la 1.30.0
  - Correction d'un bug avec les boutons en cbt pour le tactique/anti lag/creature qui des fois n'apparaissaient pas
  - Correction d'un bug avec l'ui qui liste tout les sorts du jeu, si notre niveau était inférieur a l'obtention du sort il était grisé
  - Repassage du nombre de ligne max par team a 6 sur l'interface de resultat de combat, dans le cas ou les 2quipes étaient composé de 8membres et qu'un perco était présent sur la map il nous était impossible de cliquer sur fermer

- **v2.0.1** :
  - Ajout de la possibilité de check les stats de base d'un objet sur l'ui LargeItemViewer (utilisé pour le fm)
  - Correction de la taille max en hauteur de beaucoup de text (dont le coeur) ce qui empechait de cliquer sur certains boutons ou de sélectionner certaines choses correctement
  - Correction d'un bug sur le bouton de sélection automatique des serveurs, il était mal cliquable

- **v2.0.2** :
  - Correction d'un bug en combat qui lorsque vous changiez d'apparence a cause d'un effet de sort lorsque vous aviez les dd masquées (option désactivé ou mode créature activé) lorsque vous réactiviez l'affichage des dragodindes vous n'apparaissiez plus morph
  - Tentative de correction du mode créature hors cbt, des fois des joueurs ne passait pas en créature lorsqu'ils étaient sur leur dragodinde (souvent après un cbt) - ticket 0002

- **v2.0.3** :
  - Lorsque vous changez le nombre de joueur max pour le passage en mode créature, l'update se fait maintenant instantanément au lieu d'attendre un update du nombre de joueur sur la carte

- **v2.0.4** :
  - La couleur de la vie dans la timeline de votre personnage est modifié (comme pour le cercle)

- **v2.0.5** :
  - Correction d'un problème d'update des personnages qui se superposaient, lorsqu'un nouveau personnage apparaissait sur la map leur ordre changeait
  - Ajout de 2 nouvelles images de login de vieilles versions

## v2.1
- **v2.1.0** :
  - Le texte "News" sur l'interface de login n'est plus décalé
  - Séparation de la sauvegarde du mot de passe et du nom de compte avec une nouvelle checkbox
  - Déplacement de la checkbox du "mode streamer", elle est maintenant plus facilement trouvable

- **v2.1.1** :
  - Correction de l'interface d'enclos qui avaient pas mal de bug depuis le passage en 1.30
  - Ajout d'un filtre sombre derriere l'interface du menu principal

- **v2.1.2** : 
  - Refonte du système de transfère rapide en banque, il a été optimisé et des bugs ont été corrigé
  - Ajout du transfert des objets déjà présent vers la Dragodinde/Banque/Coffre
  - Petite optimisation des boutons "Retirer tout" du mode marchand, hdv, inventaire de perco
  - Retrait des Gift custom maintenant qu'Ankama en met
  - Correction d'un bug sur l'interface d'hotel de vente, lorsqu'on faisait une recherche d'item le prix moyen n'était pas update

- **v2.1.3** :
  - Modification des labels du transfert rapide
  - Suite au passage sombre du fond lorsqu'on ouvre le menu principal, le fond des AskOk redevenait claire. C'est maintenant corrigé
  - Petite optimisation du double clique avec shift enfoncé pour le transfert d'item (suite a une vieille modif qui transfert le max possible transportable a la place de faire une erreur et ne rien transférer)
  - Ajout du transfert rapide en échange
  - Correction de la taille des images de login supplémentaire que j'ai rajouté lors du patch 2.0.5
  - Correction du mois avec la commande /time qui apparaissait en undefined
  - Correction du label "FIGHT_CHALLENGE_FAILED" qui avait un espace en trop a la fin

- **v2.1.4** :
  - Passage du délais en échange et craft sécurisé de 3 secondes à 1 seconde
  - Ajout du nombre de pod actuellement en échange
  - Si le total de pod en échange est supérieur au maximum de pod que l'on peut porter, le label passe en rouge et le bouton accepter rester bloqué

- **v2.1.5** :
  - Le sprite de l'épée avec le drapeau style beta 7b est intégré directement a l'archive, et la couleur du drapeau change maintenant de couleur de la même manière que le cercle
  - Suppression des espaces en trop derrière les labels "TO_RANGE" ("à ")
  - Petit fail de ma part, le timer en craft sécurisé était passé à 13secs à la place de 1, c'est maintenant corrigé
  - Correction d'un bug lorsque les monstres avaient un malus/bonus d'esquive pa/pm, il était conservé sur tous les mêmes types de monstre entre les combats temps qu'on ne relançait pas le client
  - Ajout de la gestion de commande externe (via mp), non utilisé pour le moment
  - La bulle d'échec critique lors d'un coup de corps a corps s'affichera maintenant même avec l'anti lag
  - **Grosse refonte de la gestion des buffs** :
      - Tout est maintenant géré dans la même Class alors qu'avant il y avait une Class pour l'affichage et une pour la gestion des caractéristiques 
      - maintenant lorsqu'on arrive au milieu d'un combat (spec ou reconnexion), les buffs ne gagnent pas un tour supplémentaire quand ils sont ajoutés au joueur a qui c'le tour
      - Les buffs infinis lancés sur soi restent bien affichés dans la liste des buffs (Gel Protecteur des gelées fraises par exemple)
      - Correction du ticket 0008, maintenant lorsqu'on arrive au milieu d'un combat (spec ou reconnexion), les résistances s'updatent maintenant comme il faut, il n'y a plus aucun résidu qui reste tout le long du combat

- **v1.9.7** :
	- **v2.1.6.0** :
	  - Ajout d'une confirmation lorsqu'on détruit une quantité d'item > 1
	  - Correction d'un bug concernant le vol de po qui n'était pas prit en compte
	  - Correction d'un bug concernant les commandes externes (via mp) si elle n'existe pas, le client envoyait un message undefined
	  - Ajout d'icon custom sur les notifs avec le client Electron (64bit), merci a ydainna pour l'aide
	  - Correction du ticket 0002, lorsqu'on termine un combat et qu'on passe en mode créature les personnages sur des dragodindes ne passaient des fois pas en mode créature
	  - Lorsqu'on ouvrait l'interface d'ami, le paquet "FL" étaient envoyés deux fois, c'est maintenant corrigé

	- **v2.1.6.1** :
		- Correction d'un bug sur les buffs PO, ils étaient compatibilisés deux fois