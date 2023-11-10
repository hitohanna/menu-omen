
export const EncodedUrl = (product: TMenusCart[]) => {

    let wa = `Hallo *Rombong Omen*, saya mau pesan :\n\n`
    product.map((prods) => { wa += `*${prods.nama}* --- x${prods.jumlah}\n` })
    wa += `\nTerima Kasih ...`;



    const text = encodeURI(wa);
    return text;
}




