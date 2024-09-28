import { Blank, LogCloseBtn, RemoveBtn } from '@public/icon';
import React, { useEffect, useState } from 'react';

interface MarkerModalProps {
  location: string;
  onClose: () => void;
  onSubmit: (text: string, images: (File | string)[]) => void;
  initialText?: string;
  initialImages?: string[];
}

export default function MarkerModal({
  location,
  onClose,
  onSubmit,
  initialText = '',
  initialImages = [],
}: MarkerModalProps) {
  const [text, setText] = useState<string>(initialText);
  const [hasText, setHasText] = useState(true);
  const [images, setImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>(initialImages);

  useEffect(() => {
    if (initialImages.length > 0) {
      setImageUrls(initialImages);
    }
  }, [initialImages]);

  const handleTextChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const inputValue = e.target.value;
    setText(inputValue);
    setHasText(inputValue.length > 0);
  };
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      const updatedImages = [...images];
      Array.from(files).forEach((file) => {
        if (updatedImages.length < 3) {
          updatedImages.push(file);
        }
      });
      setImages(updatedImages);
    }
  };
  const handleFormSubmit = () => {
    const allImages = [...imageUrls, ...images]; // 기존 이미지 URL과 새 이미지 파일을 합침
    onSubmit(text, allImages);
    onClose();
  };

  const handleImageRemove = (index: number) => {
    if (index < imageUrls.length) {
      setImageUrls(imageUrls.filter((_, i) => i !== index));
    } else {
      const adjustedIndex = index - imageUrls.length;
      setImages(images.filter((_, i) => i !== adjustedIndex));
    }
  };
  return (
    <div className="fixed inset-0 z-50 flex bg-black bg-opacity-50">
      <div className="fixed bottom-0 left-1/2 h-374pxr w-393pxr flex-shrink-0 -translate-x-1/2 transform rounded-markerModal bg-white shadow-markerModal">
        <div className="mx-24pxr mb-40pxr mt-20pxr">
          <div className="flex">
            <div className="fonts-logOneLocation">{location}</div>
            <button className="ml-auto" onClick={onClose}>
              <LogCloseBtn />
            </button>
          </div>

          {/* 텍스트 영역 */}
          <textarea
            className={`${
              text.length > 0 ? 'fonts-newLogContent' : 'fonts-logContent'
            } mt-24pxr h-72pxr w-345pxr resize-none rounded-md bg-gray-3 px-16pxr py-12pxr opacity-50`}
            value={text}
            onChange={handleTextChange}
            placeholder="나만의 기록을 남겨 보세요."
            maxLength={48}
          />

          {/* 이미지 영역 */}
          <div className="mt-20pxr flex space-x-4">
            {imageUrls.map((url, index) => (
              <div key={index} className="relative">
                <img src={url} alt={`이미지 ${index + 1}`} className="h-106pxr w-106pxr rounded-lg object-cover" />
                <button className="absolute right-0 top-0 mr-2 mt-2" onClick={() => handleImageRemove(index)}>
                  <RemoveBtn />
                </button>
              </div>
            ))}
            {images.map((image, index) => (
              <div key={index + imageUrls.length} className="relative">
                <img
                  src={URL.createObjectURL(image)}
                  alt={`이미지 ${index + imageUrls.length + 1}`}
                  className="h-106pxr w-106pxr rounded-lg object-cover"
                />
                <button
                  className="absolute right-0 top-0 mr-2 mt-2"
                  onClick={() => handleImageRemove(index + imageUrls.length)}>
                  <RemoveBtn />
                </button>
              </div>
            ))}
            {/* 이미지 추가 버튼 */}
            {imageUrls.length + images.length < 3 && (
              <label>
                <Blank />
                <input type="file" accept="image/*" onChange={handleImageUpload} className="hidden" />
              </label>
            )}
          </div>

          <button
            onClick={handleFormSubmit}
            className="fonts-logDone mt-23pxr h-48pxr w-345pxr items-center justify-center rounded-xl bg-main-green">
            완료
          </button>
        </div>
      </div>
    </div>
  );
}
