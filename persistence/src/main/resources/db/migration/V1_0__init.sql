CREATE TABLE IF NOT EXISTS `CITY`
(
    `ID`      bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `NAME` varchar(255)
);
CREATE TABLE IF NOT EXISTS `DISTRICT`
(
    `ID`      bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `NAME` varchar(255)
);
CREATE TABLE IF NOT EXISTS `DATA`
(
    `ID`      bigint(20) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    `SULFATE` double,
    `CHLORIDE` double,
    `HARDNESS` varchar(255),
    `NATRIUM` double,
    `NITRATE` double,
    `MAGNESIUM` double,
    `CALCIUM` double,
    `POTASSIUM` double
);

ALTER TABLE DISTRICT ADD CITY_ID bigint(20) NOT NULL;
ALTER TABLE DISTRICT ADD CONSTRAINT FK_CITY_ID FOREIGN KEY (CITY_ID) REFERENCES CITY(ID) ON DELETE CASCADE ON UPDATE CASCADE;

ALTER TABLE DATA ADD DISTRICT_ID bigint(20) NOT NULL;
ALTER TABLE DATA ADD CONSTRAINT DISTRICT_ID FOREIGN KEY (DISTRICT_ID) REFERENCES DISTRICT(ID) ON DELETE CASCADE ON UPDATE CASCADE;