CREATE database db_sistema_automotivo;

use db_sistema_automotivo;

CREATE TABLE veiculos (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    marca VARCHAR(100),
    modelo VARCHAR(100),
    ano_fabricacao INT NOT NULL,
    cor VARCHAR(50) NOT NULL,
    preco FLOAT(53) NOT NULL,
    quilometragem BIGINT NOT NULL,
    status_disponibilidade ENUM('DISPONIVEL', 'INDISPONIVEL', 'VENDIDO') NOT NULL,
    foto VARCHAR(255),
    adicionado TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    atualizado TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

select * from veiculos;

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Toyota', 'Corolla', 2022, 'Prata', 95000.00, 310, 'DISPONIVEL', 'https://www.newland.com.br/pub/modelos/corolla/colorizer/prata-supernova.png');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Fiat', 'Mobi', 2024, 'Vermelho', 64990.00, 700, 'DISPONIVEL', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZJccmsxvZDB_TGh9RdNXoXyOFOR0zW2aPKQ&s');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Volkswagen', 'Nivus', 2025, 'Preto Ninja', 136990.00, 192, 'INDISPONIVEL', 'https://www.autossegredos.com.br/wp-content/uploads/2024/06/VW-Nivus-Sense-2024-na-cor-Preto-Ninja-1.webp');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Chevrolet', 'Onix', 2021, 'Branco Summit', 93770.00, 60, 'VENDIDO', 'https://orca.com.br/uploads/products/versions/colors/chevrolet-5-onix-premier-branco-summit.png');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Hyundai', 'HB20', 2024, 'Azul', 106890.00, 52, 'DISPONIVEL', 'https://production.autoforce.com/uploads/version/profile_image/9169/model_middle_webp_comprar-platinum-plus-1-0-tgdi-automatico_23731172b6.png.webp');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Jeep', 'Renegade', 2025, 'Verde Recon', 118290.00, 210, 'DISPONIVEL', 'https://cdn.autopapo.com.br/box/uploads/2024/07/25182321/jeep-renegade-willys-2025-verde-recon-frente-1920x1080.jpg');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Renault', 'KWID E-TECH', 2024, 'Prata Diamond', 99990.00, 1850, 'DISPONIVEL', 'https://www.karvi.com.br/blog/wp-content/uploads/2022/04/reanult-kwid-eletrico-850x566.png');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Honda', 'Civic', 2024, 'Preto', 265900.00, 322, 'INDISPONIVEL', 'https://fotos-jornaldocarro-estadao.nyc3.cdn.digitaloceanspaces.com/wp-content/uploads/2024/01/17090318/Honda-Civic-RS-pode-ser-versao-esportiva-abaixo-do-extremo-Type-R.png');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('BMW', 'X1', 2023, 'Laranja', 34995.00, 236, 'DISPONIVEL', 'https://cdn.autopapo.com.br/box/uploads/2022/06/07145259/bmw-x1-laranja-fundo-branco.jpg');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Tesla', 'Model S Plaid', 2021, 'Branco', 119990.00, 310, 'DISPONIVEL', 'https://www.ccarprice.com/products/Tesla_Model_S_Standard_Range_2023.jpg');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Lamborghini', 'Aventador', 2024, 'Roxo', 80000.00, 350, 'DISPONIVEL', 'https://image1.mobiauto.com.br/images/api/images/v1.0/445034118/transform/fl_progressive,f_webp,q_70,w_300');

INSERT INTO veiculos (marca, modelo, ano_fabricacao, cor, preco, quilometragem, status_disponibilidade, foto)
VALUES ('Ferrari', 'SF90', 2022, 'Vermelho', 7360417.00, 340, 'DISPONIVEL', 'https://s3.ecompletocarros.dev/images/lojas/285/veiculos/123220/veiculoInfoVeiculoImagesMobile/vehicle_image_1669506374_d41d8cd98f00b204e9800998ecf8427e.jpeg');
