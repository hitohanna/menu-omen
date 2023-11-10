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
    deskripsi?: string,
    tersedia: boolean,
}

type TMenusCart = {
    _id: string,
    nama: string,
    harga: string,
    jumlah: number,
}

type TCart = {
    products: TMenusCart[];
    keranjang: number;
    total: number
};

type TActions = {
    addToCart: (item: TMenusCart) => void;
    removeFromCart: (item: TMenusCart) => void;
    removeFromCartSatuan: (item: TMenusCart) => void;
}