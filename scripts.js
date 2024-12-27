document.addEventListener('DOMContentLoaded', () => {
    const ilanlar = [
        { title: 'İlan 1', description: 'Bu birinci ilan.' },
        { title: 'İlan 2', description: 'Bu ikinci ilan.' }
    ];

    const ilanlarDiv = document.getElementById('ilanlar');

    // Mevcut ilanları ekrana yazdır
    ilanlar.forEach(ilan => {
        const ilanDiv = document.createElement('div');
        ilanDiv.innerHTML = `<h2>${ilan.title}</h2><p>${ilan.description}</p>`;
        ilanlarDiv.appendChild(ilanDiv);
    });

    // İlan ekleme formu ve olay dinleyici
    const ilanForm = document.getElementById('ilanForm');
    ilanForm.addEventListener('submit', (event) => {
        event.preventDefault(); // Sayfanın yenilenmesini engelle
        const title = document.getElementById('title').value; // Formdaki başlığı al
        const description = document.getElementById('description').value; // Formdaki açıklamayı al

        const yeniIlan = { title, description }; // Yeni ilan objesi
        ilanlar.push(yeniIlan); // Diziye ekle
        displayIlan(yeniIlan); // Ekrana ekle

        ilanForm.reset(); // Formu sıfırla
    });

    // Yeni ilanı ekrana yazdırma fonksiyonu
    function displayIlan(ilan) {
        const ilanDiv = document.createElement('div');
        ilanDiv.innerHTML = `<h2>${ilan.title}</h2><p>${ilan.description}</p>`;
        ilanlarDiv.appendChild(ilanDiv);
    }
});
