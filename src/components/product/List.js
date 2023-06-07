import "./List.css"
import {useDispatch, useSelector} from "react-redux";
import {deleteProduct, findProductById, getProduct} from "../../services/productService";
import {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Add from "./Add";
import Edit from "./Edit";
import Detail from "./Detail";


const List = () => {
    const [isShowModalAddNew, setIsShowModalAddNew] = useState(false);
    const [showEditModal, setShowEditModal] = useState(false);
    const [showDetailModal, setShowDetailModal] = useState(false);
    const [dataProductEdit, setDataProductEdit] = useState({});
    const [dataProductDetail, setDataProductDetail] = useState({});

    const handleClose = () => {
        setIsShowModalAddNew(false);
        setShowEditModal(false);
        setShowDetailModal(false);
    };

    const dispatch = useDispatch();


    const products = useSelector((state) => {
         return state.products.list.products
    });

    const handleUpdateProduct = (product) => {
        const clonedProducts = [...products];
        const index = clonedProducts.findIndex((item) => item.id === product.id);
        if (index >= 0) {
            clonedProducts[index] = product;
            dispatch(getProduct(clonedProducts));
        }
    };

    const handleEditProduct = (product) => {
        setDataProductEdit(product);
        setShowEditModal(true);
    };

    const handleDetailProduct = (id) => {
        setDataProductDetail(id)
        setShowDetailModal(id)
    };

    useEffect(() => {
        dispatch(getProduct());
    }, [dispatch]);
    return(
        <>
            <h1> Danh sách sản phẩm</h1>

            <button className="btn btn-warning"
                    onClick={() => setIsShowModalAddNew(true)}
            > + Thêm Mới </button>

            <table style={{marginTop:20}}>
                <tr>
                    <th>Tên sản phẩm</th>
                    <th>Mô tả</th>
                    <th>Giá</th>
                </tr>
                {products && products.map(item => (
                    <tr key={item.id}>
                        <td>{item.title}</td>
                        <td>{item.description}</td>
                        <td>{item.price}</td>
                        <button
                            className="btn btn-danger"
                            onClick={() => dispatch(deleteProduct(item.id))}
                        >Xóa
                        </button>

                        <button
                            className="btn btn-primary"
                            onClick={() => handleEditProduct(item)}
                        >
                          Sửa
                        </button>

                        <button
                            className="btn btn-info"
                            onClick={() => handleDetailProduct(item.id)}
                        >
                            Chi tiết
                        </button>
                    </tr>

                ))}



            </table>
            <Add show={isShowModalAddNew}
                 handleClose={handleClose}
            />

            <Edit
                show={showEditModal}
                dataProductEdit={dataProductEdit}
                handleClose={handleClose}
                handleUpdateProduct={handleUpdateProduct}
            />

            <Detail
                show={showDetailModal}
                dataProductDetail={dataProductDetail}
                handleClose={handleClose}
            />


        </>
    )
}

export default List