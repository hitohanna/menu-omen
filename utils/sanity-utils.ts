import { groq } from "next-sanity";
import { client } from "@/sanity/lib/client";
import { unstable_noStore as noStore } from 'next/cache';

export async function getKategoris() {

    try {

        const query = await client.fetch(groq`*[_type == "kategori"] | order(lower(seri) asc) {
            _id,
            title,
            seri,
            "gambar":gambar.asset->url
        }`)
        return query


    } catch (error) {

        console.error('getKategoris:', error);


    }
}
export async function getMenus() {
    const query = await client.fetch(groq`*[_type == "menu"] | order(lower(nama) asc){
        _id,
        nama,
        harga,
        deskripsi,
        tersedia,
        kategori->
        {
        title,
        }
    }`, noStore());

    return query;
}
export async function getMenu(id: string) {
    const query = await client.fetch(groq`*[_type == 'menu' && kategori._ref == '${id}' ]{
        _id,
        nama,
        harga,
        deskripsi,
        tersedia,
    }`, noStore());

    return query;
}

export async function UpdateStok(_id: string, stok: boolean) {

    try {
        const result = await client.patch(_id).set({ tersedia: (stok) }).commit();
        return result
    } catch (error) {
        console.log(error)
        return error
    }

}