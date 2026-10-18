const form = document.getElementById('salaryForm');
const resultBox = document.getElementById('resultBox');

const formatRupiah = (angka) => {
    return new Intl.NumberFormat('id-ID', { 
        style: 'currency', 
        currency: 'IDR', 
        minimumFractionDigits: 0 
    }).format(angka);
};

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const golongan = document.getElementById('golongan').value;
    const jamLembur = parseInt(document.getElementById('jamLembur').value) || 0;

    // Mapping gaji pokok menggunakan object (clean approach)
    const baseGaji = { A: 5000000, B: 6500000, C: 9500000 };
    const gajiPokok = baseGaji[golongan] || 0;

    // Logika persentase lembur
    let persentase = 0;
    if (jamLembur === 1) persentase = 0.30;
    else if (jamLembur === 2) persentase = 0.32;
    else if (jamLembur === 3) persentase = 0.34;
    else if (jamLembur === 4) persentase = 0.36;
    else if (jamLembur >= 5) persentase = 0.38;

    const gajiLembur = gajiPokok * persentase;
    const totalPenghasilan = gajiPokok + gajiLembur;

    // Render ke DOM
    document.getElementById('resPokok').textContent = formatRupiah(gajiPokok);
    document.getElementById('resJam').textContent = `${jamLembur} Jam`;
    document.getElementById('resLembur').textContent = formatRupiah(gajiLembur);
    document.getElementById('resTotal').textContent = formatRupiah(totalPenghasilan);

    // Tampilkan hasil
    resultBox.hidden = false;
});