import React, { useState } from "react";

function ImageUpload({ label }) {
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

  function handleSubmit(e) {
    e.preventDefault();
    setTimeout(() => {
      alert("Submit ID verify !");
    }, 2000);
    // 上傳圖片到後端的程式碼
    // ...
  }

  return (
    <div>
      <h3>{label}</h3>
      <form onSubmit={handleSubmit}>
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
