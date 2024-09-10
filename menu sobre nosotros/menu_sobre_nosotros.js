function openModal(car) {
    const modal = document.getElementById('modal');
    const modalTitle = document.getElementById('modal-title');
    const modalInfo = document.getElementById('modal-info');

    let carInfo = "";

    switch(car) {
        case 'Carro 1':
            carInfo = "Modelo: 2024\nCilindraje: 1600cc\nCuidados: Regular mantenimiento\nPrecio: $20,000\nFicha técnica completa.";
            break;
        case 'Carro 2':
            carInfo = "Modelo: 2023\nCilindraje: 1400cc\nCuidados: Cambios de aceite frecuentes\nPrecio: $18,000\nFicha técnica completa.";
            break;
        case 'Carro 3':
            carInfo = "Modelo: 2022\nCilindraje: 1800cc\nCuidados: Revisiones anuales\nPrecio: $25,000\nFicha técnica completa.";
            break;
    }

    modalTitle.textContent = car;
    modalInfo.textContent = carInfo;
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = "none";
}

function searchCar() {
    const input = document.getElementById('search').value.toLowerCase();
    console.log("Buscando: " + input);
}
