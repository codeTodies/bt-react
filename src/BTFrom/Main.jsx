// Source:https://github.com/danndz/bc42-react/tree/master/src/BT_UserManagement
import React,{useState,useEffect} from 'react'
import axios from "axios";
import List from './List';
import Form from './Form';
import Search from './Search';
function ProductsManagement() {
  // state quản lý danh sách người dùng
  const [Products, setProducts] = useState([]);
  // state quản lý user đang được chọn
  const [selectedProducts, setSelectedProducts] = useState({});
  // state quản lý giá trị tìm kiếm
  const [searchByName, setSearchByName] = useState("");

  // Viết hàm call API để lấy danh sách Products
  const fetchProducts = async () => {
    try {
      const response = await axios.get(
        "https://63f643b459c944921f70c150.mockapi.io/products",
        {
          params: {
            name: searchByName || undefined,
          },
        }
      );
      setProducts(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object Products và thêm hoặc cập nhật Products
  const handleSubmit = async (Products) => {
    const { id, ...payload } = Products;

    try {
      if (id) {
        // Cập nhật
        await axios.put(
          `https://63f643b459c944921f70c150.mockapi.io/products/${id}`,
          payload
        );
      } else {
        // Thêm mới
        await axios.post(
          "https://63f643b459c944921f70c150.mockapi.io/products",
          payload
        );
      }
      // Gọi hàm fetchProducts sau khi call API create/update
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào ProductsId và xoá Products
  const handleDeleteProducts = async (ProductsId) => {
    try {
      await axios.delete(
        `https://63f643b459c944921f70c150.mockapi.io/products/${ProductsId}`
      );
      // Sau khi xoá thành công, dữ liệu chỉ mới thay đổi ở phía server
      // Cần gọi lại hàm fetchProducts để gọi API lấy danh sách Products mới nhất và set lại cho state Products
      fetchProducts();
    } catch (error) {
      console.log(error);
    }
  };

  // Viết hàm xử lý nhận vào object Products, và lưu vào state selectedProducts
  const handleSelectProducts = (Products) => {
    setSelectedProducts(Products);
  };

  // Viết hàm xử lý nhận vào giá trị searchString
  const handleSearch = (searchString) => {
    setSearchByName(searchString);
    // ?: Khi state searchByEmail thay đổi, ta muốn gọi lại hàm fetchProducts
    // => Đưa state searchByEmail vào array của useEffect
  };

  useEffect(() => {
    fetchProducts();
  }, [searchByName]);

  return (
    <div className="container-fluid">
      <h1 className="text-center text-primary bg-secondary">Phone management</h1>

      <div className="card">
        <div className="card-header bg-dark text-white">Product Form</div>
        <div className="card-body">
          <Form
            Products={selectedProducts}
            onSubmit={handleSubmit}
            onReset={() => setSelectedProducts({})}
          />
        </div>
      </div>

      <div className="mt-4">
        <Search onSearch={handleSearch} />
      </div>

      <div className="mt-4">
        <List
          Products={Products}
          onDeleteProducts={handleDeleteProducts}
          onSelectProducts={handleSelectProducts}
        />
      </div>
    </div>
  );
}

export default ProductsManagement;