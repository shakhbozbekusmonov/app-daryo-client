import {useEffect} from 'react';
import AdminLayout from "../../components/AdminLayout";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {saveNewsRu, updateState, getNewsRu, deleteNewsRu} from "../../redux/actions/newsAction";

const AdminNewsRu = (props) => {
    useEffect(() => {
        props.getNewsRu();
    }, [])
    return (
        <AdminLayout>
            <button type="button" className="btn btn-success ml-auto d-block" onClick={() => props.updateState({open: true})}>Add</button>
            <div className="row">
                <table className="table table-hover table-striped">
                    <thead>
                    <tr>
                        <th>№</th>
                        <th>Category</th>
                        <th>Title</th>
                        <th>Text</th>
                        <th>Views</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.newsRu.map((item, index) => {
                        return (
                            <tr key={item.id}>
                                <td>{index + 1}</td>
                                <td>{item.category}</td>
                                <td>{item.title.slice(0, 20)}...</td>
                                <td>{item.text.slice(0, 20)}...</td>
                                <td>{item.views}</td>
                                <td><img src={item.image_url} style={{width: "50px",}} alt={item.title}/></td>
                                <td>
                                    <button type="button" className="btn btn-success" onClick={() => props.updateState({open: true, selectedItem: item})}>Edit</button>
                                    <button type="button" className="btn btn-danger ml-2" onClick={() => props.updateState({deleteModal: true, selectedIndex: item.id})}>Delete</button>
                                </td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
            <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                <ModalHeader>
                    <>Yangiliklar qo'shish</>
                </ModalHeader>
                <Formik
                    initialValues={{ title: '', text: '', category: "" }}
                    onSubmit={(values) => {
                        props.saveNewsRu(values);
                    }}
                >
                    {({
                          values,
                          handleChange,
                          handleSubmit,
                          isSubmitting,
                      }) => (
                        <form onSubmit={handleSubmit}>
                            <ModalBody>
                                <input
                                    type="text"
                                    name="title"
                                    onChange={handleChange}
                                    value={values.title}
                                    className="form-control"
                                    placeholder="Title UZ"
                                />
                                <textarea
                                    name="text"
                                    onChange={handleChange}
                                    value={values.text}
                                    className="form-control mt-3"
                                    placeholder="Text UZ"
                                />
                                <input
                                    type="text"
                                    name="category"
                                    onChange={handleChange}
                                    value={values.category}
                                    className="form-control mt-3"
                                    placeholder="Category UZ"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <button type="submit" className="btn btn-success" disabled={isSubmitting}>Save</button>
                                <button type="button" className="btn btn-secondary" onClick={() => props.updateState({open: false})}>Cancel</button>
                            </ModalFooter>
                        </form>
                    )}
                </Formik>
            </Modal>
            <Modal isOpen={props.deleteModal} toggle={() => props.updateState({deleteModal: false})}>
                <ModalHeader>
                    Rostdan ham o'chirmoqchimisiz?
                </ModalHeader>
                <ModalFooter>
                    <button type="button" className="btn btn-danger" onClick={props.deleteNewsRu}>Ha</button>
                    <button type="button" className="btn btn-secondary" onClick={() => props.updateState({deleteModal: false})}>Yo'q</button>
                </ModalFooter>
            </Modal>
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open,
        newsRu: state.news.newsRu,
        deleteModal: state.news.deleteModal,
        selectedIndex: state.news.selectedIndex,
        selectedItem: state.news.selectedItem,
    }
}

export default connect(mapStateToProps, {updateState, saveNewsRu, getNewsRu, deleteNewsRu})(AdminNewsRu);