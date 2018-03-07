## Réponse question projet mobile-machines 

Question : Rappeler ce qu'est npm et pourquoi nous utilisons l'option --global ?

	Votre réponse : 
	le global est utilisé pour installer le package sur notre machine local et pas uniquement dans le projet.

Question : Quels sont les bons réflexes à avoir quand vous téléchargez un nouveau projet ? Quels fichiers regarder en priorité ?

	Votre réponse :
	le dossier src ou nous allons trouver notre main.js et les fichiers .vue 
	le fichier package.json qui représente la carte d'identité de l'appli avec le nom du projet la version et les dependances installées.


Question : Si vous regardez le fichier README.md du projet vous voyez que trois commandes sont indiquées, quel est le but de chacune ?

Pour mettre en route un projet buildé avec vue.cli

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```

Question : Une fois que tout fonctionne faites un premier commit ( vous aurez surement besoin d'initialiser le repository git ). Quelle est la commande à utiliser ?

	1.création d'un nouveau repo sur github
	2.git init 													

Question : quelle est la différence entre npm install vue-router et npm install --save vue-router ? Laquelle est à privilégier ici ?

	Avec les anciennes version de vueJS on avait besoin
	du --save pour qu'il s'enregistre dans notre fichier package.json
	maintenant il le fait automatiquement.						

Router https://jsfiddle.net/yyx990803/xgrjzsup/

Question : Remarquez que nous avons ajouté une clef id à nos objets, pourquoi ?

	Votre réponse :
	le v-for necessite une :Key donc on lui passe l'id.