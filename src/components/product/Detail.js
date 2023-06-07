import {Button, Modal} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findProductById} from "../../services/productService";

const Detail = (props) =>{
    let dispatch = useDispatch();
    const { show, handleClose, dataProductDetail} = props;



    const product = useSelector((state) => {
        return state.products.currentProduct
    });

    console.log(product)

    useEffect(() =>{
        dispatch(findProductById(dataProductDetail))
    },[dataProductDetail])



    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit new Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <div>Title: {product.title}</div>
                    <div>Price: {product.price}</div>
                    <div>Description: {product.description}</div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>

                </Modal.Footer>
            </Modal>
        </>
    )
}

export default Detail;