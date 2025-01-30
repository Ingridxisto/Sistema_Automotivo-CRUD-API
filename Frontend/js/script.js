const cardContainer = document.getElementById('cardContainer');
let vehicles = [];


// Carregar os livros do servidor
async function loadCards() {
    try {
        const response = await fetch('http://localhost:8080/api/veiculos/listarVeiculos');
        vehicles = await response.json();

        console.log(vehicles);

        renderCards();
    } catch (error) {
        showMessage(`Erro ao carregar veiculos: ${error.message}`, 'error');
    }
}


// Renderizar os veiculos gerais e por marcas
function renderCards() {
    cardContainer.innerHTML = '';
    renderGeneralVehicles(); 
    renderVehiclesByBrands();
}

// Mostrar mensagens de sucesso ou erro
function showMessage(message, type = 'success') {
    const messageContainer = document.getElementById('messageContainer');
    messageContainer.textContent = message;
    messageContainer.className = `message ${type}`;
    messageContainer.style.display = 'block';

    setTimeout(() => {
        messageContainer.style.display = 'none';
    }, 3000);
}

// Adicionar veículo
async function addVehicle() {
    const brand = document.getElementById('brandInput').value;
    const model = document.getElementById('modelInput').value;
    const yearManufacture = document.getElementById('yearManufactureInput').value;
    const color = document.getElementById('colorInput').value;
    const price = document.getElementById('priceInput').value;
    const mileage = document.getElementById('mileageInput').value;
    const statusAvailability = document.getElementById('statusAvailabilityInput').value;
    const image = document.getElementById('imageInput').value;

    if (!brand || !model || !yearManufacture || !price) {
        showMessage('Por favor, preencha os campos obrigatórios...', 'error');
        return;
    }

    if (brand && model && yearManufacture && color && price && mileage && statusAvailability && image) {
        const newVehicle = {
            marca: brand,
            modelo: model,
            ano_fabricacao: yearManufacture,
            cor: color,
            preco: price,
            quilometragem: mileage,
            status_disponibilidade: statusAvailability,
            foto: image
        };

        try {
            const response = await fetch('http://localhost:8080/api/veiculos/cadastrarVeiculo', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newVehicle),
            });

            if (response.ok) {
                loadCards();
                clearForm();
                showMessage('Veiculo adicionado com sucesso!');
            } else {
                showMessage('Erro ao cadastrar veiculo:', 'error');
            }
        } catch (error) {
            showMessage('Erro ao conectar ao servidor.', 'error');
        }
    }
}

// Editar um contato existente
async function editVehicle(vehicle) {
    document.getElementById('brandInput').value = vehicle.marca;
    document.getElementById('modelInput').value = vehicle.modelo;
    document.getElementById('yearManufactureInput').value = vehicle.ano_fabricacao;
    document.getElementById('colorInput').value = vehicle.cor;
    document.getElementById('priceInput').value = vehicle.preco;
    document.getElementById('mileageInput').value = vehicle.quilometragem;
    document.getElementById('statusAvailabilityInput').value = vehicle.status_disponibilidade;
    document.getElementById('imageInput').value = vehicle.foto;

    window.scrollTo(0, 0);

    // Substituir o botão de "Adicionar" por um de "Salvar"
    const addButton = document.querySelector('.form-section button');
    addButton.textContent = 'Salvar Alterações';
    addButton.onclick = () => saveEdit(vehicle.id);
}

// Salvar as alterações de um contato
async function saveEdit(id) {
    const brand = document.getElementById('brandInput').value;
    const model = document.getElementById('modelInput').value;
    const yearManufacture = document.getElementById('yearManufactureInput').value;
    const color = document.getElementById('colorInput').value;
    const price = parseFloat(document.getElementById('priceInput').value.replace(',', '.'));
    const mileage = parseInt(document.getElementById('mileageInput').value);
    const statusAvailability = document.getElementById('statusAvailabilityInput').value.toUpperCase();
    const image = document.getElementById('imageInput').value;

    if (!brand || !model || !yearManufacture || !price) {
        showMessage('Por favor, preencha os campos obrigatórios...', 'error');
        return;
    }

    if (statusAvailability === 'VENDIDO') {
        try {
            const response = await fetch(`http://localhost:8080/api/veiculos/deletarVeiculo/${id}`, {
                method: 'DELETE',
            });

            if (response.ok) {
                loadCards();
                clearForm();
                showMessage('Veículo vendido e removido com sucesso!');
                return;
            } else {
                showMessage('Erro ao remover veículo vendido.', 'error');
                return;
            }
        } catch (error) {
            showMessage('Erro ao conectar ao servidor.', 'error');
            return;
        }
    }

    const updatedVehicle = {
        marca: brand,
        modelo: model,
        ano_fabricacao: yearManufacture,
        cor: color,
        preco: price,
        quilometragem: mileage,
        status_disponibilidade: statusAvailability,
        foto: image
    };

    try {
        const response = await fetch(`http://localhost:8080/api/veiculos/atualizarVeiculo/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedVehicle),
        });

        if (response.ok) {
            loadCards();
            clearForm();
            const addButton = document.querySelector('.form-section button');
            addButton.textContent = 'Adicionar Veiculo';
            addButton.onclick = addVehicle;
            showMessage('Veiculo atualizado com sucesso!');
        } else {
            showMessage('Erro ao atualizar veiculo.', 'error');
        }
    } catch (error) {
        showMessage('Erro ao conectar ao servidor.', 'error');
    }
}

// Deletar um veiculo
async function deleteVehicle(id) {
    const confirmDelete = confirm("Tem certeza que deseja excluir este veículo?");
    
    if (!confirmDelete) {
        return; // Se o usuário cancelar, a função é interrompida
    }

    try {
        const response = await fetch(`http://localhost:8080/api/veiculos/deletarVeiculo/${id}`, {
            method: 'DELETE',
        });

        if (response.ok) {
            loadCards();
            showMessage('Veiculo deletado com sucesso!');
        } else {
            showMessage('Erro ao deletar veiculo.', 'error');
        }
    } catch (error) {
        showMessage('Erro ao conectar ao servidor.', 'error');
    }
}

// Limpar o formulário após adicionar ou editar um contato
function clearForm() {
    document.getElementById('brandInput').value = '';
    document.getElementById('modelInput').value = '';
    document.getElementById('yearManufactureInput').value = '';
    document.getElementById('colorInput').value = '';
    document.getElementById('priceInput').value = '';
    document.getElementById('mileageInput').value = '';
    document.getElementById('statusAvailabilityInput').value = '';
    document.getElementById('imageInput').value = ''
}

function renderGeneralVehicles() {
    const generalVehiclesSection = document.createElement('div');
    generalVehiclesSection.className = 'general-vehicles-section';

    let visibleVehicles = 0;
    const vehiclesPerPage = 5;

    // Botões de "Ver Mais" e "Ver Menos"
    const seeMoreButton = document.createElement('button');
    seeMoreButton.textContent = 'Ver Mais';
    seeMoreButton.className = 'view-more-button';

    const seeLessButton = document.createElement('button');
    seeLessButton.textContent = 'Ver Menos';
    seeLessButton.className = 'view-less-button';
    seeLessButton.style.display = 'none'; // Inicialmente oculto

    // Criar linha para veiculos
    const row = document.createElement('div');
    row.className = 'card-row';

    function showVehicles() {
        row.innerHTML = ''; // Limpar a linha antes de adicionar os livros

        // Exibir livros visíveis
        vehicles.slice(0, visibleVehicles + vehiclesPerPage).forEach(vehicle => {
            const card = createVehicleCard(vehicle);
            row.appendChild(card);
        });

        // Atualizar visibilidade dos botões
        if (visibleVehicles + vehiclesPerPage >= vehicles.length) {
            seeMoreButton.style.display = 'none'; // Esconder "Ver Mais"
            seeLessButton.style.display = 'block'; // Mostrar "Ver Menos"
        } else {
            seeMoreButton.style.display = 'block'; // Mostrar "Ver Mais"
            seeLessButton.style.display = 'block'; // Mostrar "Ver Menos"
        }
    }

    // Ações dos botões
    seeMoreButton.onclick = () => {
        visibleVehicles += vehiclesPerPage;
        showVehicles();
    };

    seeLessButton.onclick = () => {
        visibleVehicles = 0;
        showVehicles();
        seeLessButton.style.display = 'none';
        seeMoreButton.style.display = 'block';
    };

    // Inicializa a visualização dos livros
    showVehicles();

    // Adicionar livros e botões
    generalVehiclesSection.appendChild(row);
    const buttonsContainer = document.createElement('div');
    buttonsContainer.className = 'buttons-container';
    buttonsContainer.appendChild(seeMoreButton);
    buttonsContainer.appendChild(seeLessButton);

    generalVehiclesSection.appendChild(buttonsContainer);
    cardContainer.appendChild(generalVehiclesSection);
}

function renderVehiclesByBrands() {
    const groupedVehicles = groupVehiclesByBrands(vehicles);
    const sortedBrands = Object.keys(groupedVehicles).sort();

    // Limpar conteúdo de veiculos por marca
    const vehicleListContainer = document.getElementById('vehicle-list');
    if (!vehicleListContainer) {
        showMessage('Elemento com id "vehicle-list" não encontrado!', 'error');
        return;
    }
    vehicleListContainer.innerHTML = '';

    sortedBrands.forEach(brand => {
        const brandSection = document.createElement('div');
        brandSection.className = 'brand-section';

        const brandName = document.createElement('h3');
        brandName.textContent = `Marca: ${brand}`
        brandSection.appendChild(brandName);

        const row = document.createElement('div');
        row.className = 'card-row';

        groupedVehicles[brand].forEach(vehicle => {
            const card = createVehicleCard(vehicle);
            row.appendChild(card);
        });

        brandSection.appendChild(row);
        vehicleListContainer.appendChild(brandSection);
    });
}

// Função para criar o card de cada veiculo
function createVehicleCard(vehicle) {
    const card = document.createElement('div');
    card.className = 'card';

    const image = document.createElement('img');
    image.src = vehicle.foto || 'https://via.placeholder.com/150';
    card.appendChild(image);

    const brand = document.createElement('p');
    brand.textContent = `Marca: ${vehicle.marca}`;
    card.appendChild(brand);

    const model = document.createElement('p');
    model.textContent = `Modelo: ${vehicle.modelo}`;
    card.appendChild(model);

    const yearManufacture = document.createElement('p');
    yearManufacture.textContent = `Ano: ${vehicle.ano_fabricacao}`;
    card.appendChild(yearManufacture);

    const color = document.createElement('p');
    color.textContent = `Cor: ${vehicle.cor}`;
    card.appendChild(color);

    const price = document.createElement('p');
    price.textContent = `Preço: R$ ${vehicle.preco.toFixed(2).replace('.', ',')}`;
    card.appendChild(price);
    
    const mileage = document.createElement('p');
    mileage.textContent = `Quilometragem: ${vehicle.quilometragem} km/h`;
    card.appendChild(mileage);

    const statusAvailability = document.createElement('p');
    statusAvailability.textContent = `Status: ${vehicle.status_disponibilidade}`;
    card.appendChild(statusAvailability);

    const editButton = document.createElement('button');
    editButton.textContent = 'Editar';
    editButton.onclick = () => editVehicle(vehicle);
    card.appendChild(editButton);

    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Deletar';
    deleteButton.onclick = () => deleteVehicle(vehicle.id);
    card.appendChild(deleteButton);

    return card;
}

// Função para agrupar os veiculos por marca
function groupVehiclesByBrands(vehicles) {
    return vehicles.reduce((acc, vehicle) => {
        const brand = vehicle.marca || 'Sem Marca';
        if (!acc[brand]) {
            acc[brand] = [];
        }
        acc[brand].push(vehicle);
        return acc;
    }, {});
}

// Buscar um veiculo pela marca ou modelo.
function searchVehicle() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();

    if (!searchInput) {
        showMessage('Por favor, insira uma marca ou um modelo de veículo para buscar.', 'error');
        return;
    }

    const filteredVehicles = vehicles.filter(vehicle => 
        vehicle.modelo.toLowerCase().includes(searchInput) || vehicle.marca.toLowerCase().includes(searchInput)
    );

    if (filteredVehicles.length === 0) {
        showMessage('Nenhum veiculo encontrado.', 'error');
    } else {
        renderFilteredCards(filteredVehicles);
    }
}

// Renderizar apenas os veiculos filtrados
function renderFilteredCards(filteredVehicles) {
    cardContainer.innerHTML = '';

    const groupedVehicles = groupVehiclesByBrands(filteredVehicles);
    const sortedBrands = Object.keys(groupedVehicles).sort();

    sortedBrands.forEach(brand => {
        const brandSection = document.createElement('div');
        brandSection.className = 'brand-section';

        const brandName = document.createElement('h2');
        brandName.textContent = `Marca: ${brand}`
        brandSection.appendChild(brandName);

        let row = document.createElement('div');
        row.className = 'card-row';

        groupedVehicles[brand].forEach((vehicle, index) => {
            const card = createVehicleCard(vehicle);
            row.appendChild(card);

            if ((index + 1) % 4 === 0 || index === groupedVehicles[brand].length - 1) {
                brandSection.appendChild(row);
                row = document.createElement('div');
                row.className = 'card-row';
            }
        });

        cardContainer.appendChild(brandSection);
    });
}

// Inicializar os livros
loadCards();
