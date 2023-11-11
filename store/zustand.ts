import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const INITIAL_STATE = {
    products: [],
    keranjang: 0,
    total: 0
}

export const useCartStore = create(persist<TCart & TActions>((set, get) => ({
    products: INITIAL_STATE.products,
    keranjang: INITIAL_STATE.keranjang,
    total: INITIAL_STATE.total,

    removeFromCartSatuan(item) {
        const products = get().products
        const productExist = products.find((p) => p._id === item._id);

        if (productExist) {
            const updateProduct = products.map(
                prod => prod._id === productExist._id
                    ? {
                        ...prod,
                        jumlah: prod.jumlah - item.jumlah
                    }
                    : prod
            );

            if ((productExist.jumlah - 1) < 1) {
                set((state) => ({
                    products: state.products.filter((p) => p._id !== item._id),
                    keranjang: state.keranjang - item.jumlah,
                    total: state.total - (parseInt(item.harga) * item.jumlah)
                }))
                return
            }

            set((state) => ({
                products: updateProduct,
                keranjang: state.keranjang - item.jumlah,
                total: state.total - (parseInt(item.harga) * item.jumlah)
            }))
        }
    },
    addToCart(item) {
        const products = get().products
        const productExist = products.find((p) => p._id === item._id);

        if (productExist) {
            const updateProduct = products.map(
                prod => prod._id === productExist._id
                    ? {
                        ...prod,
                        jumlah: item.jumlah + prod.jumlah

                    }
                    : prod
            );
            set((state) => ({
                products: updateProduct,
                keranjang: state.keranjang + item.jumlah,
                total: state.total + parseInt(item.harga)
            }))
        } else {
            set((state) => ({
                products: [...state.products, item],
                keranjang: state.keranjang + item.jumlah,
                total: state.total + parseInt(item.harga)
            }))
        }
    },
    removeFromCart(item) {
        const updateProduct = get().products;
        updateProduct.splice(updateProduct.indexOf(item), 1);

        set((state) => ({
            products: updateProduct,
            keranjang: state.keranjang - item.jumlah,
            total: state.total - (parseInt(item.harga) * item.jumlah)
        }))

    }
}), {
    name: 'zustand',
    skipHydration: true,

}))
