import {useState} from "react";

export default function Preview(){
    const [selectedImage, setSelectedImage] =
    useState({image: "",});

    return (
        <div className="space-y-6">
            <input
                type="file"
                accept="image/*"
                onChange={(e) => {
                    const file = e.target.files?.[0];
                    setSelectedImage(
                        file ? URL.createObjectURL(file) : undefined);
                }}
            />
            {selectedImage && (
                <img 
                    src={selectedImage}
                    width={300}
                    height={300}
                    alt="Selected Image"
                />
            )}
        </div>
    );
}