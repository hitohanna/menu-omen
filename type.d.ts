type TKategories =
    {
        _id: string,
        title: string,
        seri: string,
        gambar: string
    }

// type TMenus = {
//     _id: string,
//     nama: string,
//     harga: string,
//     deskripsi: string,
//     tersedia: boolean,
// }
type TMenus = {
    _id: string,
    nama: string,
    harga: string,
    deskripsi: string,
    tersedia: boolean,
    kategori:
    { title: string },
}