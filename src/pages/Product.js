import React from "react";
import { Produk } from "../component";
import { useProductService } from "../config/api";

function Product(props) {
  const [dataProduk, setProduk] = React.useState([]);
//   const [tambah, setTambah] = React.useState(0);

//   const increase = () => setTambah(tambah + 1)


const { getAllProduct } = useProductService();


React.useEffect(() => {
    const fetchProduk = async () => {
        try {
            await getAllProduct().then(response => {
                setProduk(response.data);
            });
        } catch (error) {
            console.error(error);
        }
    };

    
    fetchProduk();
    // increase();
  }, []);

  return (
    <div className="container mt-3">
      <div className="d-flex flex-row flex-wrap">
        {dataProduk.map((item) => (
          <Produk
            id={item.id}
            key={item.id}
            nama_produk={item.nama_produk}
            stok={item.stok}
            harga={item.harga}
            gambar={item.gambar}
          />
        ))}
        {/* {console.log()} */}
      </div>
    </div>
  );
}

export default Product;
