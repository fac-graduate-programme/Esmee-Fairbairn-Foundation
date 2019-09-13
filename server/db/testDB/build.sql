BEGIN;

DROP TABLE IF EXISTS salesforce.application__c, salesforce.Question__c CASCADE;

CREATE TABLE salesforce.application__c (
id SERIAL PRIMARY KEY,
question_1__c TEXT NOT NULL,
question_2__c TEXT NOT NULL, 
question_3__c TEXT NOT NULL

);

CREATE TABLE salesforce.Question__c (
id SERIAL PRIMARY KEY,
Question__c TEXT NOT NULL, 
wordsLimit__c INT NOT NULL, 
tips__c TEXT, 
expectations__c TEXT

);

INSERT INTO salesforce.application__c (question_1__c,  question_2__c  ,question_3__c ) VALUES 
('Test Answer 1', 'Test Answer 2', 'Test Answer 3');

INSERT INTO salesforce.Question__c ( Question__c, wordsLimit__c, tips__c, expectations__c) VALUES 
('Test Question', '250', 'Test tips', 'Test expectations' );


COMMIT;