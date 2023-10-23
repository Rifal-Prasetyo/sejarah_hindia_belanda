"use client"
import Link from "next/link";
import { useEffect, useState } from "react";
const primaryColor = "#232D3F";
export default function Page() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    return(
    
        <>
        {/* navabr */}
        
        <div className="container">
        <nav className="navbar navbar-expand-lg bg-body-tertiary mb-4">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Sejarah Hindia Belanda</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <Link href="/#pendahuluan" className="nav-link" >Pendahuluan</Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/#etimologi" className="nav-link" >Etimologi</Link>
                    </li>
                    <li className="nav-item">
                    <Link href="/#sejarah" className="nav-link" >Sejarah</Link>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
        </div>
        {/* card  */}

        <div className="container">
            <div className="card mb-4" id="pendahuluan">
                <div className="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#232D3F" className="bi bi-book-fill" viewBox="0 0 16 16">
                    <path d="M8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783z"/>
                    </svg><span>Pendahuluan</span> 
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        Hindia Belanda
                    </h5>
                    <p className="card-text">
                    Hindia Belanda atau Hindi a Timur Belanda (bahasa Belanda: Nederlands(ch)-Indië) adalah sebuah daerah pendudukan Belanda yang wilayahnya saat ini dikenal dengan nama Republik Indonesia. Berdasarkan Perjanjian Inggris-Belanda 1824, Belanda telah menyerahkan Melaka Belanda kepada Inggris, yang dulunya merupakan kegubernuran di Hindia Belanda. Hal ini telah mengkonsolidasikan pemerintahan modern ke negara bagian Melaka di Malaysia. Hindia Belanda dibentuk sebagai hasil dari penasionalan tanah-tanah koloni Vereenigde Oostindische Compagnie (VOC), yang berada di bawah pemerintahan Belanda pada tahun 1800.

                    Selama abad ke-19, daerah jajahan dan pengaruh Belanda diperluas, mencapai batas wilayah kekuasaan terbesar mereka pada awal abad ke-20. Hindia Belanda adalah salah satu jajahan Eropa yang paling berharga di bawah kekuasaan Kerajaan Belanda,[6] dan menyumbang pada keunggulan Belanda di dunia dalam perdagangan rempah-rempah dan hasil bumi pada abad ke-19 sampai awal abad ke-20.[7] Tatanan masyarakat kolonial didasarkan pada struktur rasial dan sosial yang kaku dengan para elite Belanda yang tinggal terpisah tetapi tetap berhubungan dengan penduduk pribumi yang dijajah mereka.[8] Istilah "Indonesia" mulai digunakan untuk tempat geografis setelah tahun 1880. Pada awal abad 20, para cendekiawan lokal mulai mengembangkan gagasan Indonesia sebagai negara dan bangsa, dan menetapkan panggung untuk gerakan kemerdekaan.[9]

                    Pendudukan Jepang pada Perang Dunia II melemahkan sebagian besar negara jajahan dan ekonomi Belanda. Setelah Jepang menyerah pada bulan Agustus 1945, kaum nasionalis Indonesia menyatakan kemerdekaan yang mereka perjuangkan selama Revolusi Nasional Indonesia yang terjadi pada bulan-bulan berikutnya. Belanda secara resmi mengakui kedaulatan Indonesia pada Konferensi Meja Bundar tahun 1949 dan menyerahkan seluruh wilayah bekas jajahannya, dengan pengecualian wilayah Papua (Nugini Belanda), yang diserahkan ke Indonesia 14 tahun kemudian pada tahun 1963 berdasarkan ketentuan Persetujuan New York di Markas Besar PBB.
                    </p>
                </div>
            </div>
            <div className="card mb-4" id="etimologi">
                <div className="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#232D3F" className="bi bi-lightbulb mr-2 " viewBox="0 0 16 16">
                        <path d="M2 6a6 6 0 1 1 10.174 4.31c-.203.196-.359.4-.453.619l-.762 1.769A.5.5 0 0 1 10.5 13a.5.5 0 0 1 0 1 .5.5 0 0 1 0 1l-.224.447a1 1 0 0 1-.894.553H6.618a1 1 0 0 1-.894-.553L5.5 15a.5.5 0 0 1 0-1 .5.5 0 0 1 0-1 .5.5 0 0 1-.46-.302l-.761-1.77a1.964 1.964 0 0 0-.453-.618A5.984 5.984 0 0 1 2 6zm6-5a5 5 0 0 0-3.479 8.592c.263.254.514.564.676.941L5.83 12h4.342l.632-1.467c.162-.377.413-.687.676-.941A5 5 0 0 0 8 1z"/> 
                    </svg><span>Etimologi</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        Kata Hindia
                    </h5>
                    <p className="card-text">
                        Kata Hindia berasal dari bahasa bahasa Latin: Indus. Nama asli Dutch Indies (bahasa Belanda: Nederlandsch-Indië) diterjemahkan oleh orang Inggris sebagai "Hindia Timur Belanda", untuk membedakannya dengan Hindia Barat Belanda. Nama "Hindia Belanda" tercatat dalam dokumen Vereenigde Oostindische Compagnie (VOC) pada awal tahun 1620-an.[10]

                        Para sejarawan yang menulis dalam bahasa Inggris menggunakan istilah Indië, Hindia, Hindia Timur Belanda, Hindia Belanda, dan kolonial Indonesia secara bergantian.
                    </p>
                </div>
            </div>
            <div className="card mb-4" id="sejarah">
                <div className="card-header">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#232D3F" className="bi bi-hourglass-split" viewBox="0 0 16 16">
                    <path d="M2.5 15a.5.5 0 1 1 0-1h1v-1a4.5 4.5 0 0 1 2.557-4.06c.29-.139.443-.377.443-.59v-.7c0-.213-.154-.451-.443-.59A4.5 4.5 0 0 1 3.5 3V2h-1a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1h-1v1a4.5 4.5 0 0 1-2.557 4.06c-.29.139-.443.377-.443.59v.7c0 .213.154.451.443.59A4.5 4.5 0 0 1 12.5 13v1h1a.5.5 0 0 1 0 1h-11zm2-13v1c0 .537.12 1.045.337 1.5h6.326c.216-.455.337-.963.337-1.5V2h-7zm3 6.35c0 .701-.478 1.236-1.011 1.492A3.5 3.5 0 0 0 4.5 13s.866-1.299 3-1.48V8.35zm1 0v3.17c2.134.181 3 1.48 3 1.48a3.5 3.5 0 0 0-1.989-3.158C8.978 9.586 8.5 9.052 8.5 8.351z"/>
                    </svg><span>Sejarah</span>
                </div>
                <div className="card-body">
                    <h5 className="card-title">
                        Kekuasaan VOC
                    </h5>
                    <p className="card-text">
                        Berabad-abad sebelum orang-orang Eropa tiba, wilayah kepulauan Indonesia dihuni berbagai entitas, termasuk kerajaan-kerajaan perdagangan pesisir yang berorientasi komersial dan kerajaan agraris pedalaman (yang paling penting adalah Sriwijaya dan Majapahit).[12] Bangsa Eropa pertama yang tiba adalah Portugis pada tahun 1512. Setelah menemui gangguan terhadap akses rempah-rempah di Eropa,[13] Belanda melakukan ekspedisi pelayaran pertama ke Hindia Timur pada tahun 1595 untuk mendapatkan rempah-rempah secara langsung dari Asia. Ketika mereka menghasilkan keuntungan hingga 400%, ekspedisi Belanda lainnya segera menyusul. Menyadari potensi perdagangan Hindia Timur, pemerintah Belanda menggabungkan para perusahaan pesaing ke Perusahaan Hindia Timur Belanda (Vereenigde Oost-Indische Compagnie atau VOC).[13]

                        VOC diberikan hak istimewa untuk berperang, membangun benteng, dan membuat perjanjian di seluruh Asia.[13] Ibu kota didirikan di Batavia (sekarang Jakarta), yang menjadi pusat jaringan perdagangan VOC di Asia.[14] Untuk monopoli asli mereka seperti pala, paprika, cengkih dan kayu manis, VOC dan kemudian pemerintah kolonial memperkenalkan tanaman asing untuk non-pribumi seperti kopi, teh, kakao, tembakau, karet, gula dan opium, dan menjaga kepentingan komersial mereka dengan mengambil alih wilayah sekitarnya.[14] Penyelundupan, biaya perang, korupsi, dan kesalahan manajemen yang terus berlanjut menyebabkan kebangkrutan pada akhir abad ke-18. VOC secara resmi dibubarkan pada tahun 1800 dan barang-barangnya di kepulauan Indonesia (termasuk sebagian besar Jawa, sebagian Sumatra, sebagian besar Maluku, dan daerah pedalaman pelabuhan seperti Makassar, Manado, dan Kupang) dinasionalisasi di bawah Republik Belanda sebagai Hindia Belanda.[15]
                    </p>
                </div>
            </div>
        </div>


        </>
    )
}