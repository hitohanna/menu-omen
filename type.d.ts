// type TKategories =
//     {
//         _id: string,
//         title: string,
//         seri: string,
//         gambar: string
//     }
type TKategories =
    {
        _id: string,
        title: string,
        gambar: string,
        menu: [
            {
                _id: string,
                nama: string,
                harga: string,
                deskripsi: string,
                tersedia: boolean
            }
        ]
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
}