import React, { useState } from "react";

function ImageUpload(props) {
  const [previewImage, setPreviewImage] = useState(null);

  function handleImageChange(e) {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setPreviewImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    } else {
      setPreviewImage("");
    }
  }

  return (
    <div>
      <h3>{props.label}</h3>
      <form onSubmit={props.onSubmit}>
        <input type="file" onChange={handleImageChange} />
        {previewImage && (
          <img src={previewImage} alt="Preview" style={{ maxHeight: 200 }} />
        )}
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default ImageUpload;
