create table categories (
 categories_id int not null AUTO_INCREMENT,
 name varchar(15) not null,
 primary key (categories_id))



create table users (
 user_id int not null AUTO_INCREMENT,
 name varchar(15) not null,
 email varchar(20) not null,
 password varchar(20) not null,
 avatar varchar(20) not null,
 rol varchar(10) not null,
 primary key (user_id))

create table orders (
 orders_id int not null AUTO_INCREMENT,
 estado varchar(15) not null,
 user_id int not null,
 primary key (orders_id),
 foreign key(usuario_id) references users(user_id))
 
 create table products (
 product_id int not null AUTO_INCREMENT,
 name varchar(15) not null,
 price int not null,
 discount int,
 descripcion varchar(99),
 image varchar(50),
 stock boolean default true,
 categori_id int not null,
 primary key (product_id),
 foreign key(categori_id) references categories(categories_id))
 
 create table items_order (
 itemsorder_id int not null AUTO_INCREMENT,
 cant int not null,
 orders_id int, 
 product_id int,
 primary key (itemsorder_id),
 foreign key(orders_id) references orders(orders_id),
 foreign key(product_id) references products(product_id))