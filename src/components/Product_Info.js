import React from 'react';

const ProductInfo = ({ label, value }) => {
  return (
    <div className="item">
      <label className="h6">{label}</label>
      <span>{value}</span>
    </div>
  );
};

export default ProductInfo;