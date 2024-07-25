# Jeux Olympiques 2024

## Description du projet

L'application a pour objectif de fournir aux utilisateurs une expérience interactive pour les Jeux Olympiques de 2024, en mettant en avant les meilleurs endroits (spots) depuis lesquels ils peuvent observer les événements sportifs en direct, les sports et événiments programmés et permet également la recherche filtrée sur toutes les pages. Elle offre aussi une carte interactive avec des informations détaillées sur les lieux des événements

## Listing des fonctionnalités avec les tâches par personne

| Catégorie                     | Tâche                                      | Personne en charge  |
|-------------------------------|--------------------------------------------|---------------------|
| Pages Générales               | Home Page                                  | Camille             |
|                               | 404                                        | Camille             |
|                               | Sport                                      | Catalina            |
|                               | Événements                                 | Catalina            |
|                               | Carte                                      | Nadime              |
|                               | Spot                                       | Alice               |
|                               | Information des Spots                      | Alice               |
|-------------------------------|--------------------------------------------|---------------------|
| Structure du projet           | GenerateStructure                          | Catalina            |
|                               | BrowserRouter                              | Catalina            |
|                               | Composant                                  | Catalina            |
|                               | Routes                                     | Camille             |
|-------------------------------|--------------------------------------------|---------------------|
| Composants                    | Composant Card                             | Catalina            |
|                               | Section Héro                               | Catalina            |
|                               | Filtre + Implémentation sur toutes les pages| Camille            |
|                               | Navbar                                     | Camille             |
|                               | Footer                                     | Camille             |
|                               | Bouton CTA                                 | Camille             |
|-------------------------------|--------------------------------------------|---------------------|
| Cartes                        | Cards des sports                           | Catalina            |
|                               | Cards des événements                       | Catalina            |
|                               | Cards des spots                            | Alice               |
|-------------------------------|--------------------------------------------|---------------------|
| Mise en place des API/mappings| fetchSportsData.js                         | Nadime              |
|                               | fetchEventsData.js                         | Catalina            |
|                               | Mappings                                   | Alice/Catalina      |

## Installation

Pour installer et exécuter ce projet localement, suivez ces étapes :

1. Clonez le dépôt :
    ```
    git clone https://github.com/katalinadnl/jo-challenge-s2.git
    ```

2. Naviguez jusqu'au répertoire du projet :
    ```
    cd jo-challenge-s2
    ```

3. Construisez et démarrez les conteneurs :
    ```
    docker compose up -d
    ```

4. Installez les dépendances :
    ```
    npm install
    ```

5. Démarrez le serveur de développement pour les styles :
    ```
    npm run watch
    ```

## Utilisation

Ouvrez votre navigateur et allez à l'adresse http://localhost:8088 pour utiliser l'application.

## Membres de l'équipe

- [DANILA Catalina](https://github.com/katalinadnl)
- [GIRARD Camille](https://github.com/camille-girard)
- [LEMERRE Alice](https://github.com/AliceLemerre)
- [NEFFATI Nadime](https://github.com/nneffati2u)
