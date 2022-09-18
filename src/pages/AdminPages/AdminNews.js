import React from 'react';
import AdminLayout from "../../components/AdminLayout";
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import {Formik} from "formik";
import {connect} from "react-redux";
import {saveNews, updateState} from "../../redux/actions/newsAction";

const AdminNews = (props) => {
    return (
        <AdminLayout>
            <button type="button" className="btn btn-success ml-auto d-block" onClick={() => props.updateState({open: true})}>Add</button>

            <Modal isOpen={props.open} toggle={() => props.updateState({open: false})}>
                <ModalHeader>
                    <h3>Yangiliklar qo'shish</h3>
                </ModalHeader>
                <Formik
                    initialValues={{ title: '', text: '', category: "" }}
                    onSubmit={(values) => {
                        props.saveNews(values);
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
        </AdminLayout>
    );
};

const mapStateToProps = (state) => {
    return {
        open: state.news.open,
    }
}

export default connect(mapStateToProps, {updateState, saveNews})(AdminNews);