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

INSERT INTO disaster VALUES (null, "Lluvia de papas fritas", "Las Palmas de GC", 12420, 999999, 1, "2031-12-31 23:59:59"),
							(null, "Tsunami", "Minecraft", 248000, 0, 1, "2020-12-20 20:20:20"),
                            (null, "Hostia pilotes", "Cataluña", 1, 0, 0, "2019-05-08 14:25:41"),
                            (null, "Volcán", "La Palma", 6000, 6000, 0, "2021-10-12 00:00:00");
                            



CREATE TABLE hgroup (
id INT PRIMARY KEY AUTO_INCREMENT,
task ENUM("Evacuation", "Rescue", "Supplies", "Multitask") NOT NULL,
place VARCHAR(50) NOT NULL,
creation DATE NOT NULL
);

INSERT INTO hgroup VALUES (null, "Evacuation", "Palma de Mallorca", "2011-11-11"),
						  (null, "Rescue", "Las Palmas de Gran Canaria", "2022-03-07"),
                          (null, "Supplies", "La Palma", "2021-10-12"),
                          (null, "Multitask", "Telde", "2015-07-02");



CREATE TABLE help (
adisaster INT,
agroup INT,

PRIMARY KEY (adisaster, agroup),
FOREIGN KEY (adisaster) REFERENCES disaster(id) ON DELETE CASCADE ON UPDATE CASCADE,
FOREIGN KEY (agroup) REFERENCES hgroup(id) ON DELETE CASCADE ON UPDATE CASCADE
);

INSERT INTO help VALUES (1, 2),
						(1, 4),
                        (4, 1),
                        (4, 3),
                        (4, 2);
                        
                        
                        


CREATE TABLE supporter (
dni CHAR(9) PRIMARY KEY NOT NULL,
name VARCHAR(100) NOT NULL,
age INT NOT NULL,
date DATE NOT NULL,
thegroup INT,

FOREIGN KEY (thegroup) REFERENCES hgroup(id)
);

INSERT INTO supporter VALUES ("99999999N", "Romeo Lobo Soltero", 99, "2021-12-10", 1),
							 ("11111111l", "Brian García Gómez", 1, "2010-05-02", null),
                             ("54270581O", "Jesus De La Biblia Milagros Casado", 0, "1999-12-31", 4);





CREATE TABLE user (
name VARCHAR(30) PRIMARY KEY,
password CHAR(60),
role ENUM("VISUALIZER", "ADMIN")
);

INSERT INTO user VALUES ("tiburcio", "$2a$04$YlgqTwuUMCrG4HATunsDuuiITsyJX.yuy468h4uCKK5QqDKC.MgRa", "ADMIN"),
						("cristian", "$2y$10$6rYEh2yYuiNQOtYeK8hS5e9oj.npXKUibkp2a9JvkZ3gIQWUAuRrq", "VISUALIZER");  #1234