import {Button, Modal} from "react-bootstrap";
import {useEffect, useState} from "react";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";
import {editProduct, getProduct} from "../../services/productService";

const Edit = (props) => {
    let dispatch = useDispatch();
    let navigate = useNavigate();

    const { show, handleClose, dataProductEdit, handleUpdateProduct } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");

    const handleEditProduct = async () => {
        const editedProduct = {
            id: dataProductEdit.id,
            title: title,
            price: price,
            description: description,

        };
        let res = await dispatch(editProduct(editedProduct));
        if (res) {
            handleUpdateProduct({
                id: dataProductEdit.id,
                title: title,
                price: price,
                description: description,
            });
            handleClose();
            navigate("/");
            dispatch(getProduct())

        } else {
            alert("Có lỗi xảy ra khi chỉnh sửa sản phẩm!");
        }
    };

    useEffect(() => {
        if (show) {
            setTitle(dataProductEdit.title);
            setPrice(dataProductEdit.price);
            setDescription(dataProductEdit.description);

        }
    }, [dataProductEdit]);


    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit new Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={title}
                            onChange={(event) => setTitle(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={price}
                            onChange={(event) => setPrice(event.target.value)}
                        />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input
                            type="text"
                            className="form-control"
                            value={description}
                            onChange={(event) => setDescription(event.target.value)}
                        />
                    </div>



                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleEditProduct}>
                        Luu
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Edit;