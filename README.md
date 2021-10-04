# PurpleSand

## Liens utiles

La documentation vous permettra de mieux comprendre le fonctionnement et l'installation de PurpleSand.

- [Documentation](https://purple.aicardi.pro/doc/?page=pps)
- [Intégrer](https://purple.aicardi.pro/doc/?page=integrer)
- [Versions](https://purple.aicardi.pro/doc/?page=versions)
- [GitHub](https://github.com/enzoaicardi/purple)

## C'est Quoi ?

**PurpleSand** est une librairie d'animations javascript, PurpleSand permet de faire de nombreuses manipulations complexes du DOM mais de manière simple, grâce à des outils de sélection et de propagation avancés.

## Intégrer PurpleSand à son projet

**PurpleSand** est distribuée sous deux formes, une forme modulaire (ES6) et une forme polyfill pour une plus grande compatibilité (ES5).

### Modules

*Attention, si vous avez des besoins spécifiques sur d'anciens navigateurs sachez que certains ne supportent pas la syntaxe ES6 concernant les modules.*

#### Etape 1 : passez votre script en type = "module"

        <script type="module" src="myscript.js"></script>

#### Etape 2 : importez PurpleSand depuis votre script

        import {pps} from 'https://unpkg.com/purplesand/pps.js'

#### Etape 3 : utilisez PurpleSand dans votre script

        pps( { ... } );

### Polyfill

*Si vous cherchez une compatibilité dépassant le tableau de compatibilité de l'ES6 vous pouvez utiliser le polyfill de purplesand. Vous pouvez alors l'initier comme une librairie classique.*

Le polyfill est disponible unioquement à partir de la version 0.0.6

#### Etape 1 : ajoutez la librairie PurpleSand à votre fichier HTML

        <script src="https://unpkg.com/purplesand/ES5/pps.js"></script>
        <script src="myscript.js"></script>

#### Etape 2 : utilisez PurpleSand dans votre script

*Vous devez appeler la variable pps et sa fonction pps contrairement à l'import ES6*

        pps.pps( { ... } );
