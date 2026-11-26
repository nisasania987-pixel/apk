// Mengambil elemen dari HTML
const inputTugas = document.getElementById('inputTugas');
const btnTambah = document.getElementById('btnTambah');
const daftarTugas = document.getElementById('daftarTugas');

// Fungsi untuk menambahkan tugas
function tambahTugas() {
    const teksTugas = inputTugas.value.trim();

    if (teksTugas === '') {
        alert('Silakan masukkan tugas terlebih dahulu!');
        return;
    }

    // Membuat elemen list (li) baru
    const li = document.createElement('li');
    li.textContent = teksTugas;

    // Membuat tombol hapus
    const btnHapus = document.createElement('button');
    btnHapus.textContent = 'Hapus';
    btnHapus.onclick = function () {
        daftarTugas.removeChild(li);
    };

    // Menggabungkan tombol hapus ke dalam list, lalu masukkan ke ul
    li.appendChild(btnHapus);
    daftarTugas.appendChild(li);

    // Mengosongkan kembali kolom input
    inputTugas.value = '';
}

// Menjalankan fungsi saat tombol diklik
btnTambah.addEventListener('click', tambahTugas);

// Menjalankan fungsi saat menekan tombol 'Enter' di keyboard
inputTugas.addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        tambahTugas();
    }
});
