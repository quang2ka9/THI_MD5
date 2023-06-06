import {Button, Modal} from "react-bootstrap";

const Detail = (props) =>{

    const { show, handleClose} = props;
    return(
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit new Product</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {/*<div className="mb-3">*/}
                    {/*    <label className="form-label">Name</label>*/}
                    {/*    <input*/}
                    {/*        type="text"*/}
                    {/*        className="form-control"*/}
                    {/*        value={title}*/}
                    {/*        onChange={(event) => setTitle(event.target.value)}*/}
                    {/*    />*/}
                    {/*</div>*/}




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