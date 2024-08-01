## PROGRAM PENDETEKSI CUACA DARI ANGULAR

Baiklah, disini saya akan share kepada kalian source code hasil project kecil-kecilan saya. Saya harap source code ini bisa membantu kalian yang sedang membuat sebuah project yang membutuhkan program cuaca di dalamnya terutama yang menggunakan Typescript dan frameworknya Angular.

Sebelum kalian memakai source code ini, harap ikuti instruksi yang akan saya berikan untuk membantu kalian menjalankan program ini.

# Cara instalasi source code
Disini cara mengambil source codenya ada dua cara yaitu 
1. Download source code secara langsung menggunakan extension .zip
2. Clone github ke jaringan lokal dengan menggunakan command CLI (Seperti cmd, powershell ataupun gitbash) seperti ini:
`git clone https://github.com/Viking0207/AngularCuaca-UntukPemula.git`
dan dia akan masuk ke direktori yang berada dikontrol CLI nya (Kalo secara default, source code akan masuk ke direktori `C:\Users\NamaUser>`)

# Cara menjalankan code
1. Setelah berhasil menginstalasi source codenya, masuk dulu ke direktori file menggunakan command seperti ini `cd AngularCuaca-UntukPemula`.
2. Setelah masuk ke direktorinya boleh kali ketik command ini `code .` supaya dia langsung kebuka di kode editor,
(bisa vscode bisa juga sublime text atau notepad++ maybe :/)
3. Nah di kode editor, kalian boleh membuka terminalnya. Kalo di vscode sih kalian tinggal menuju ke tombol view di atas kiri sidebar, lalu tekan terminal dan tada!! kalian telah membuka terminalnya.
4. Untuk mempermudah kalian semua, bolehlah di ubah default terminalnya menjadi cmd, powershell atau gitbash (saya saranin sih cmd aja biar gak ribet) dengan cara lihat di atas kanan terminal lalu lihat tanda `+` dan jangan di teken tombol `+` nya yah! teken yang di samping kanannya yang menghadap ke bawah!
5. Setelah itu pilih terminal pilihan kalian, kalo saya sih milihnya cmd. 
6. Ingat teman-teman! cara ke-4 sampai ke-6 boleh kalian abaikan kalo misalkan kalian berhasil melewati cara ke-7.
7. ketik command ini di terminal kalian `ng serve` lalu masukan local yang diberikan oleh angularnya, biasanya seperti ini `http://localhost:4200/`. Dan seandainya kalian gak mau repot dan mau langsung mengeluarkan hasil outputnya, kalian bisa ketik command ini di terminal `ng serve --o` supaya langsung mengeluarkan outputnya ke web browser default desktop kalian.
8. Kalian menemukan masalah gak memunculkan output ketika ingin memberikan input kota? itu berarti API nya gak jalan. Untuk itu, kalian boleh cek di file `weather.service.ts` yang letaknya berada di direktori `app`. 
<!--  export class WeatherService {
       private apiKey = 'a4731324025c4612b4135716243007';
       private apiUrl = 'http://api.weatherapi.com/v1/current.json'; -->
9. Setelah itu kalian masuk ke website `weatherapi.com` lalu kalian login dan sign up buat yang belum punya akunnya.
10. Setelah login, salin API-KEY nya dan ubah value `private apiKey` di file `weather.service.ts` jangan tulisan diatas kalian ubah! diatas hanya sekedar contoh saja.
11. Lalu kalian save kode dengan `ctrl + s` dan inputkan nama kota kalian.
12. Tada! berhasil! sederhana yah? boleh kalian modifikasi lagi kok source codenya supaya lebih menarik lagi :) atau sederhananya modifikasi sesuai keinginan kalian.

# Baiklah sekian dulu panduan dari saya. Bagi kalian yang ingin berkontribusi untuk source code silahkan, jika tidak gunakanlah dengan bijak yah teman-teman :) 

# Kode ini untuk pemula dan saya juga masih pemula
Semoga membantu...

