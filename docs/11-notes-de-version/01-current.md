---
description: >-
 Cette page détaille les nouvelles fonctionnalités et les corrections
 d'anomalies des versions 2024.

---

# Version majeure 2024

_Les mises à jour liées à la sécurité et à l'infrastructure sont indiquées par mesure de transparence mais n'entraînent aucun changement visible à votre niveau._

## v2024.1.4 - 17/03/2024

### :bug: Corrigé

- Correction du lien permettant d'afficher les notes de version d'Opencomp en cliquant sur le numéro de version dans le pied de page.

### :fallen_leaf: Nettoyage de code

- Correction d'une dépréciation suite au passage à la version 5.0 du cadriciel CakePHP.

## v2024.1.3 - 15/03/2024

### :art: Apparence

- Amélioration de l'affichage du chemin dans lequel est inséré un élément de programme lors de l'ajout d'un élément personnel.

### :bug: Corrigé

- Correction d'une anomalie empêchant la modification d'un élément de programme personnel depuis une évaluation.

### :fallen_leaf: Nettoyage de code

- Correction de plusieurs dépréciations suite au passage à la version 5.0 du cadriciel CakePHP.

## v2024.1.2 - 14/03/2024

### :bug: Corrigé

- Correction d'une anomalie empêchant l'ajout d'un élément de programme à une évaluation.

## v2024.1.1 - 13/03/2024

### :bug: Corrigé

- Correction d'une anomalie empêchant la modification d'un exercice existant d'une évaluation.

## v2024.1.0 - 13/03/2024

### :bug: Corrigé

- Les messages toasts sont désormais correctement affichés sur la page de connexion.

### :art: Apparence

- On prépare le printemps : il ne neige plus au pays d'Opencomp.

### :arrows_counterclockwise: Dépendances

- Mise à jour du **cadriciel CakePHP** vers la version branche **5.0**
- Mise à jour des dépendances **backend** :gear:
- Mise à jour des dépendances **frontend** :art:

### :fallen_leaf: Nettoyage de code

- Correction de plusieurs dépréciations suite au passage à la version 5.0 du cadriciel CakePHP.

## v2024.0.6 - 6/03/2024

### :bug: Corrigé

- Correction d'une anomalie d'affichage sur les navigateurs Firefox et Safari empêchant la modification des élèves ayant passé une évaluation.

## v2024.0.5 - 11/02/2024

### :closed_lock_with_key: Sécurité

- Modification de la configuration de **`CKEditor`** pour rendre inexploitables les vulnérabilités [CVE-2024-24815](https://nvd.nist.gov/vuln/detail/CVE-2024-24815) et [CVE-2024-24816](https://nvd.nist.gov/vuln/detail/CVE-2024-24816).

## v2024.0.4 - 9/02/2024

### :bug: Corrigé

- Désactivation de la vérification de version de CKEditor 4.x

## v2024.0.3 - 31/01/2024

### :bug: Corrigé

- Correction d'une anomalie empêchant l'impression des livrets type "LSU" d'une période lorsque le directeur ou la directrice de l'établissement n'a pas encore été renseigné.

## v2024.0.2 - 20/01/2024

### :bug: Corrigé

- Correction d'une regression de la version 2024.0.0 empêchant le chargement de l'écran d'analyse instantanée des résultats d'une évaluation.

## v2024.0.1 - 19/01/2024

### :bug: Corrigé

- Correction d'une regression de la version 2024.0.0 empêchant le chargement des appréciations par domaines d'enseignement.
- Les notes de version dans le pied de page pointent de nouveau correctement vers la bonne page (le lien était brisé suite au changement d'année).
- Les résultats NE et ABS n'étaient pas correctement comptabilisés dans certains graphiques (regression de la version 2024.0.0), c'est désormais de l'histoire ancienne.

### :timer_clock: Performances améliorées

- Certaines requêtes tirent désormais parti des nouvelles colonnes `grade_ne` et `grade_abs` introduites avec la version 2024.0.0, permettant d'utiliser les fonctions d'agrégat du <abbr title="Système de Gestion de Base de Données Relationnelles">SGBDR</abbr> et d'améliorer ainsi les performances.


## v2024.0.0 - 17/01/2024

### :sparkles: Amélioré

- Il est désormais possible de choisir d'afficher les résultats marqués NE (Non évalué) et ABS (Absent) dans les synthèses élèves à imprimer (merci à _Gladys_ pour la suggestion d'amélioration :+1:)
- Les résultats marqués NE (Non évalué) et ABS (Absent) apparaîssent désormais également dans le graphique de synthèse présenté sur la page permettant de rédiger les appréciations générales de vos élèves.

### :bug: Corrigé

- Correction d'une anomalie d'affichage sur la page permettant de s'inscrire au service (suppression de l'icône du bouton _S'inscrire_).

### :art: Apparence

- Il neige au pays d'Opencomp (ajout de flocons de neige sur la page de connexion et arrière-plan forêt enneigée).

### :arrows_counterclockwise: Dépendances

- Mise à jour du **cadriciel CakePHP** vers la version branche **4.5**
- Mise à jour des dépendances **backend** :gear:
- Mise à jour des dépendances **frontend** :art:

### :fallen_leaf: Nettoyage de code

- Correction de plusieurs dépréciations suite au passage à la version 4.5 du cadriciel CakePHP.

### :ship: [Intégration continue](https://fr.wikipedia.org/wiki/Int%C3%A9gration_continue) & déploiement continu

- [Mise à niveau des `Fixture`](https://book.cakephp.org/4/en/appendices/fixture-upgrade.html) des tests d'intégration pour utiliser la nouvelle extension `PHPUnitExtension` fournie en remplacement de l'ancien système d'écouteur.
