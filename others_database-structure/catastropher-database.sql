DROP DATABASE IF EXISTS catastropher;
CREATE DATABASE catastropher;
USE catastropher;



CREATE TABLE disaster (
id INT AUTO_INCREMENT PRIMARY KEY,
type VARCHAR(50) NOT NULL,
origin VARCHAR(100) NOT NULL,
area INT NOT NULL,
injured LONG NOT NULL,
deceased LONG NOT NULL,
time TIMESTAMP NOT NULL
);



CREATE TABLE hgroup (
id INT PRIMARY KEY AUTO_INCREMENT,
task ENUM("Evacuation", "Rescue", "Supplies", "Multitask") NOT NULL,
place VARCHAR(50) NOT NULL,
creation DATE NOT NULL
);



CREATE TABLE help (
adisaster INT,
agroup INT,

PRIMARY KEY (adisaster, agroup),
FOREIGN KEY (adisaster) REFERENCES disaster(id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (agroup) REFERENCES hgroup(id) ON DELETE CASCADE ON UPDATE CASCADE
);



CREATE TABLE supporter (
dni CHAR(9) PRIMARY KEY NOT NULL,
name VARCHAR(100) NOT NULL,
age INT NOT NULL,
date DATE NOT NULL,
thegroup INT,

FOREIGN KEY (thegroup) REFERENCES hgroup(id)
);

CREATE TABLE user (
name VARCHAR(30) PRIMARY KEY,
password CHAR(60)
);