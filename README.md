# LAB-05

## Author: Rashid-Alsawalqa

## Data Modeling With NoSQL Databases

It is useful to start off with Entity Relationship modeling in order to define the entities, relationships, and attributes in your application:

Entities: Main objects in your application Attributes: properties of the objects in your application Relationships: connections between entities - 1-1, 1-many, many-many

Some of the query requirements are:
Display the posts by category and date (most recent first) Display the comments by post Display the posts by userid

The Entities are:
User, Post, Comment, Category The relations are: A User makes a post A Post has comments A Post belongs to a category

Normalization
In a relational database, you normalize the schema to eliminate redundancy by putting repeating information into a table of its own.

## Links and Resources

- [submission PR]
- [ci/cd]

## Setup

 -  @code-fellows/supergoose: 1.0.1
 -  eslint: 6.8.0
 -  eslint-plugin-react: 7.18.0
 -  jest: 25.1.0
 -  lint: 0.7.0
 -  mongo: 0.1.0
 -  mongoose: 5.8.10
 -  util: 0.12.1

## How to initialize/run your application (where applicable)

- How do you run tests?
     - 'npm test'
     - 'npm run lint'
____
- Any tests of note?
  - test: "jest --verbose --coverage"
  - test-watch: "jest --watchAll --verbose --coverage"
  - lint": "eslint **/*.js"
  - jsdoc": "jsdoc -c ./docs/config/jsdoc.config.json"
____

## Modules

- Categories
- Products

#### UML

Link to an image of the UML for your application and response to events
