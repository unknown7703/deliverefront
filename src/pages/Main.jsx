import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Mapbox from "../components/Map";
import ShopList from "../components/ShopList";

function Main() {
  const items = [
    { id: 1, shopName: "Shop A", itemName: "Item 1", itemPrice: 100 },
    { id: 2, shopName: "Shop B", itemName: "Item 2", itemPrice: 150 },
    { id: 3, shopName: "Shop C", itemName: "Item 3", itemPrice: 200 },
  ];

  return (
    <div className="bg-[#FAF9F6]">
      <Navbar />
      <p className="mt-16 ml-[12%] font-bold text-4xl">Experience the functionalities of DeliverE Api service </p>
      <p className="mt-2 ml-[12%] font-normal text-md">This website is intended as an example of DeliverE Api usage , and is not a complete project</p>
      <div className=" w-full h-screen flex flex-row items-start px-[12%] justify-center">  
        <div className="w-[60%] mt-20 ">
          <div className="flex flex-col gap-4 drop-shadow-sm items-start justify-center">
            {items.map((item) => (
              <ShopList
                key={item.id}
                shopName={item.shopName}
                itemName={item.itemName}
                itemPrice={item.itemPrice}
              />
            ))}
          </div>
        </div>
        <div className="w-[45%] h-[530px] mt-20">
          <Mapbox />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Main;
