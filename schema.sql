show tables;

create table user(
    id varchar(50) primary key,
    username varchar(40) unique,
    email varchar(30) unique not null,
    password varchar(50) not null

);

