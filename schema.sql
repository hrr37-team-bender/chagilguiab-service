DROP DATABASE IF EXISTS deepfryd;

CREATE DATABASE deepfryd;

USE deepfryd;

CREATE TABLE stereos (
  id int NOT NULL AUTO-INCREMENT,
  product_name varchar(50),
  product_category varchar(50),
  deepfryd_id Number NOT NULL,
  model_number Number NOT NULL,
  average_rating Number NOT NULL,
  current_price Number NOT NULL,
  previous_price Number NOT NULL
);