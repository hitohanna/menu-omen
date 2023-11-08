const ListMenu = ({ Menu }: { Menu: TMenus }) => {
  return (
    <div className="flex flex-col w-full mt-6">
      <div className="flex items-baseline justify-between text-lg font-bold lg:text-sm sm:text-base">
        <h3
          className={`flex uppercase whitespace-nowrap font-bold ${
            Menu.tersedia ? "text-black" : "line-through text-zinc-300"
          }`}
        >
          {Menu.nama}
        </h3>
        <span className="w-full mx-2 border border-black" />
        <p className="">{parseInt(Menu.harga) / 1000}</p>
      </div>
      <p className="text-sm text-black/70 mt-2">{Menu.deskripsi}</p>
      <div className="flex items-center justify-between mt-2 "></div>
    </div>
  );
};

export default ListMenu;

{
  /* <Label>Tersedia :</Label>
        <Switch
          id="stok"
          defaultChecked={Menu.tersedia}
          onCheckedChange={(e: any) => handleStok(Menu._id, e)}
        /> */
}
