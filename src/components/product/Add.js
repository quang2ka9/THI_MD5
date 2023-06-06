import {Button, Modal} from "react-bootstrap";
import {useState} from "react";
import {addProduct} from "../../services/productService";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Add = (props) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const {show, handleClose} = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");


    const handleSaveProduct = async () => {


        let abc = {
            title: title,
            price: price,
            description: description,
        }

        let data = await dispatch(addProduct(abc));
        if (data) {
                setTitle("");
                setPrice("");
                setDescription("");
                handleClose();
                navigate("/")

        }
        else {

        }
    }

    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add new product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className="mb-3">
                        <div className="body-add-new">
                            <lable className="form-label">Title</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={title}
                                onChange={(event) => setTitle(event.target.value)}
                            />
                        </div>

                        <div className="body-add-new">
                            <lable className="form-label">Price</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={price}
                                onChange={(event) => setPrice(event.target.value)}
                            />
                        </div>

                        <div className="body-add-new">
                            <lable className="form-label">Description</lable>
                            <input
                                type="text"
                                className="form-control"
                                value={description}
                                onChange={(event) => setDescription(event.target.value)}
                            />
                        </div>
                    </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={() => handleSaveProduct()}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </>

    )
}

export default Add;