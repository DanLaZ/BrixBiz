DROP DATABASE IF EXISTS smbusinessdb;
CREATE DATABASE smbusinessdb;

USE smbusinessdb;

CREATE TABLE business (
    biz_id INT AUTO_INCREMENT NOT NULL,
    biz_name VARCHAR(45) NOT NULL,
    -- biz_type might be it's own db because biz can fall under few categories
    biz_type VARCHAR(45) NULL,
    biz_address VARCHAR(45) NOT NULL,
    biz_zip INT (5) NOT NULL,
    LAT DECIMAL(9,6),
    LNG DECIMAL(9,6),
    is_small_biz BOOLEAN NULL,
    year_est INT NULL,
    has_profile BOOLEAN NULL,
    PRIMARY KEY (biz_id)
);

INSERT INTO businesses (biz_name, biz_address, biz_zip, LAT, LNG)
VALUES ("Emily's Pork Store", "426 Graham Ave, Brooklyn, NY", 11211, 40.717650, -73.944570),
("The Meat Hook", "397 Graham Ave, Brooklyn, NY", 11211, 40.716800, -73.944930),
("Model T Meats Corporation", "404 Graham Ave, Brooklyn, NY", 11211, 40.716911, -73.944542),
("Driggs Meat Market", "160 Driggs Ave, Brooklyn", 11222, 40.723230, -73.944800),
("Sikorski Meat Market", "603 Manhattan Ave, Brooklyn", 11222, 40.723160, -73.950770),
("W-Nassau Meat Market", "915 Manhattan Ave, Brooklyn, NY", 11222, 40.730600, -73.954630),
("Paradise Florist", "104 Norman Ave, Brooklyn, NY", 11222, 40.725620, -73.950660),
("Greenpoint Floral Co.", "703 Manhattan Ave, Brooklyn, NY", 11222, 40.725550, -73.952060);