import React from 'react';

const CrudDelete = ({ productsData, setProductsData, record }) => {
  function deleteProduct(){
    const updatedData = productsData.filter((ele) => ele.id !== record.id);
    setProductsData(updatedData);
  }
  return (
    <>
      <div className="modal-body">
        <h6>Are you sure you want to delete these Records?</h6>
        <p className="text-warning">This action cannot be undone</p>
      </div>
      <div style={{ borderRadius: 0 }} className="modal-footer bg-secondary">
        <button type="button" className="btn border-0" data-bs-dismiss="modal">
          Cancel
        </button>
        <button onClick={deleteProduct} data-bs-dismiss="modal" type="button" className="btn btn-danger rounded-0">
          Delete
        </button>
      </div>
    </>
  );
};
export default CrudDelete;
