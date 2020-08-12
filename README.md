# TEST ANGULAR
Le test a pour but de tester la les éléments de base d'Angular.
Le test peut etre envoyé par mail (sans les node_modules), ou en faisant une PR sur ce repo.

# Etape 1
Créer une application angular standard avec @angular/cli

# Etape 2
Installer une dependance graphue de votre choix Bootstrap/Material/Bulma

# Etape 3 : Definir si le mot est un palindrome
Creer un composant qui va parser le contenu de la route, definir et afficher OK si le mot est un palindrome, sinon afficher KO
exemple de routes :
localhost:4200/start/palindome -> KO
localhost:4200/start/stats -> OK
localhost:4200/start/12345654321 -> OK

# Etape 4 : Recupération d'un flux http
Créer un composant qui va afficher une liste de palindone herbergé ici :  assets/flux.json ou https://www.linktogo.fr/assets/json/fluxpalindrome.json (CORS domain)
Afficher les lignes de palindrome valide en vert et invalide en rouge

# Etape 5 : Tester c'est douter
La commande "npm test" doit etre passante et tester votre code
Le fichier .gitlab-ci.yml vous permet de lancer les tests automatiquement
