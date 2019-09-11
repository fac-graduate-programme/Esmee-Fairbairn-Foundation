BEGIN;

DROP TABLE IF EXISTS  application__c  CASCADE;

CREATE TABLE application__c (
name SERIAL PRIMARY KEY,
question_1__c TEXT NOT NULL,
question_2__c TEXT NOT NULL, 
question_3__c TEXT NOT NULL

);

INSERT INTO application__c (question_1__c,  question_2__c  ,question_3__c ) VALUES 
('Test Answer 1', 'Test Answer 2', 'Test Answer 3');


COMMIT;