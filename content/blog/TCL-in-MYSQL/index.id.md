---
title: "TCL (Transaction Control Language) di MYSQL"
date: 2024-03-04T22:02:39+07:00
slug: TCL-MYSQL
category: [MYSQL, programming]
summary:
description: 
showtoc: true
draft: false
---

## Apa itu TCL?
TCL atau Transaction Control Language adalah serangkaian perintah atau query untuk mengendalikan transaksi. Diantaranya adalah:
- ```START TRANSACTION```, untuk membuat transaksi 
- ```COMMIT```, untuk **menyimpan** perubahan dari transaksi
- ```ROLLBACK```, untuk **mengembalikan** perubahan dari transaksi
- ```SAVEPOINT <nama_save_point>```, untuk **menandai langkah** dengan nama tertentu saat menggunakan transaksi
- ```ROLLBACK TO SAVEPOINT <nama_save_point>```, untuk **mengembalikan proses ke langkah** berdasarkan nama savepoint.

## Mengapa kita perlu menggunakan TCL?
- **Konsistensi Data:**
TCL memastikan bahwa perubahan dalam transaksi dilakukan bersamaan atau tidak sama sekali. 
Perintah COMMIT mengonfirmasi perubahan, sedangkan ROLLBACK membatalkannya. 
Ini menjaga konsistensi data, mencegah kegagalan atau kesalahan merusak data. 
- **Kekokohan Database:** 
TCL membantu menjaga kekokohan database dalam sistem dengan banyak transaksi bersamaan. 
COMMIT dan ROLLBACK mengontrol cara menyimpan dan membatalkan perubahan data. 
Hal ini meminimalkan risiko data rusak atau tidak konsisten. 
- **Manajemen Transaksi:** 
TCL memungkinkan pengguna untuk mengelola transaksi secara efektif.

## Contoh Penggunaan
Disini saya akan contohkan menggunakan table siswa dengan data sebagai berikut:
![tabel siswa](/images/TCL-in-MYSQL/table_siswa.png)

untuk contoh praktek ini saya menggunakan 2 cara yaitu melalui terminal/CLI dan menggunakan PHPMyAdmin sebagai perbandingan.
### START TRANSACTION dan COMMIT
![contoh transaksi](/images/TCL-in-MYSQL/contoh_transaksi.png)

sekilas tidak ada yang spesial namunn ketika saya mencoba menjalankan perintah ```SELECT * from siswa;``` di phpmyadmin **tepat setelah** saya menulis kode insert hasilnya seperti ini:
![contoh transaksi sebelum commit](/images/TCL-in-MYSQL/pov_phpmyadmin.png)

yapp data siswa bernama leon masih belum muncul, 
![contoh transaksi data belum di commit](/images/TCL-in-MYSQL/data_leon.png)
hal ini dikarenakan **transaksi tersebut belum di commit** 

namun setelah melakukan commit maka data tersebut akan muncul juga didalam saat kita SELECT di phpmyadmin
![contoh transaksi data setelah di commit](/images/TCL-in-MYSQL/data_siswa_commit.png)


### ROLLBACK
![contoh transaksi rollback](/images/TCL-in-MYSQL/rollback.png)
penjelasan kode:
- ```START TRANSACTION``` memulai transaksi
- ```SELECT * from siswa``` berfungsi untuk mengambil seluruh data dari tabel siswa
- ```INSERT INTO siswa VALUES ('fitra', 'XI RPL 1', 'fitra@example.co', '2008-06-21');``` berfungsi untuk menambahkan data ke table siswa dengan value yg diberikan
- ```ROLLBACK``` mengambalikan data ke semula sebelum transaksi