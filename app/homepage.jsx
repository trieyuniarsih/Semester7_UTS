// src/components/homepage.jsx

import React from 'react';
import './homepage.css'; // Import CSS untuk styling

const Homepage = () => {
    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Selamat Datang di Aplikasi Absensi Guru</h1>
                <p>Kelola absensi guru dengan mudah dan efisien.</p>
            </header>
            <main className="homepage-content">
                <section className="features">
                    <h2>Fitur Utama</h2>
                    <ul>
                        <li>📋 Daftar Guru: Lihat dan kelola daftar guru.</li>
                        <li>🕒 Tambah Absensi: Tambahkan absensi dengan cepat.</li>
                        <li>📊 Laporan Absensi: Lihat laporan absensi guru.</li>
                    </ul>
                </section>
                <section className="about">
                    <h2>Tentang Aplikasi</h2>
                    <p>Aplikasi ini dirancang untuk memudahkan pengelolaan absensi guru di sekolah. Dengan antarmuka yang sederhana, Anda dapat dengan cepat menambahkan dan melihat data absensi.</p>
                </section>
                <section className="actions">
                    <h2>Aksi Cepat</h2>
                    <button className="action-button">Tambah Absensi</button>
                    <button className="action-button">Lihat Daftar Guru</button>
                    <button className="action-button">Lihat Laporan Absensi</button>
                </section>
            </main>
            <footer className="homepage-footer">
                <p>&copy; 2023 Aplikasi Absensi Guru. Semua hak dilindungi.</p>
            </footer>
        </div>
    );
};

export default Homepage;