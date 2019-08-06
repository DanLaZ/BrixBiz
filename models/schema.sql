DROP DATABASE IF EXISTS smbusinessdb;
CREATE DATABASE smbusinessdb;

USE smbusinessdb;

CREATE TABLE business(
    biz_id INT AUTO_INCREMENT NOT NULL,
    biz_name VARCHAR(45) NOT NULL,
    -- biz_type might be it's own db because biz can fall under few categories
    biz_type VARCHAR(45) NULL,
    biz_address VARCHAR(45) NOT NULL,
    biz_zip INT (5) NOT NULL,
    is_small_biz BOOLEAN NULL,
    year_est INT NULL,
    has_profile BOOLEAN NULL,
    PRIMARY KEY (biz_id)
);

INSERT INTO business(biz_name, biz_address, biz_zip)
VALUES ("Emily's Pork Store", "426 Graham Ave, Brooklyn, NY", 11211),
("The Meat Hook", "397 Graham Ave, Brooklyn, NY", 11211),
("Model T Meats Corporation", "404 Graham Ave, Brooklyn, NY", 11211),
("Driggs Meat Market", "160, Driggs Ave, Brooklyn", 11222),
("Sikorski Meat Market", "603 Manhattan Ave, Brooklyn", 11222),
("W-Nassau Meat Market", "915 Manhattan Ave, Brooklyn, NY", 11222),
("Paradise Florist", "104 Norman Ave, Brooklyn, NY", 11222),
("Greenpoint Floral Co.", "703 Manhattan Ave, Brooklyn, NY", 11222)