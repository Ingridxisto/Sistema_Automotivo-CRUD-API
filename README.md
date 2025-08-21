# 🚗 Sistema de Gerenciamento de Veículos

Este projeto é um sistema completo para cadastro e gerenciamento de veículos, desenvolvido como prática de CRUD (Create, Read, Update, Delete), com Spring Boot no back-end e uma interface simples em HTML, CSS e JavaScript no front-end.

# 📌 Funcionalidades

#### ✅ Cadastro de veículos

#### ✅ Listagem de todos os veículos

#### ✅ Edição de dados de um veículo

#### ✅ Remoção de veículos

#### ✅ Integração entre front-end e back-end

#### ✅ Persistência de dados em banco relacional (MySQL)

# 🛠️ Tecnologias utilizadas
### 🔙 Back-end (API REST)

- Java 17

- Spring Boot

- Spring Web

- Spring Data JPA

- MySQL (Workbench)

- Maven

### 🔜 Front-end

- HTML5

- CSS3

- JavaScript (puro)

- Fetch API para consumo da API REST

### ⚙️ Ferramentas de Desenvolvimento

- IntelliJ IDEA (back-end)

- Visual Studio Code (front-end)

- MySQL Workbench (modelagem e manipulação do banco)

- Git/GitHub (versionamento)

# 💡 Estrutura do Projeto
``` 
Sistema_Automotivo-CRUD/
├── backend/
│   └── src/main/java/br/com/fecaf/
│       ├── controller/
│       ├── model/
│       ├── repository/
│       ├── services/
│       └── App.java
│   └── resources/
│       └── application.properties
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── style.css
│   └── js/
│       └── script.js
```

# ⚙️ Configuração do MySQL

- SGBD: MySQL

- Ferramenta: MySQL Workbench

- Nome do banco: db_sistema_automotivo

- Arquivo de script: model.sql disponível no diretório database/

⚠️ Certifique-se de atualizar as configurações de acesso no arquivo application.properties com o seu usuário e senha do banco MySQL:
```
spring.datasource.url=jdbc:mysql://localhost:3306/sistema_automotivo
spring.datasource.username=root
spring.datasource.password=suasenha
spring.jpa.hibernate.ddl-auto=update
```

# 🚀 Como executar
#### Backend (API)

- Clone o repositório

- Abra o projeto no IntelliJ IDEA

- Execute o script SQL (model.sql) no MySQL Workbench

- Execute a classe App.java

- A API estará disponível em http://localhost:8080

#### Frontend

- Abra a pasta do front no VS Code

- Use a extensão Live Server ou abra o index.html no navegador

- O front irá consumir a API REST

# 📷 Prints
💻 Backend (IntelliJ + Spring Boot)

![Print do projeto Backend](https://github.com/user-attachments/assets/3af7beab-5990-4521-bb19-9d492364785c)

🌐 Frontend (VS Code + HTML/CSS/JS)

![Print do projeto Backend](https://github.com/user-attachments/assets/11724256-c9fa-434f-8fc1-4c468cfe5085)

# 👩‍💻 Autor

**Ingrid Xisto**
Desenvolvedora Back-End | Estudante de Análise e Desenvolvimento de Sistemas
