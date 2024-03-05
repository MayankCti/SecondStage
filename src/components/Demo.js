import React, { useState, useRef, useCallback } from "react";
import { useDrag, useDrop } from "react-dnd";

const galleryList = [
  {
    id: 1,
    title: "Travel",
    img: "https://images.ctfassets.net/hrltx12pl8hq/a2hkMAaruSQ8haQZ4rBL9/8ff4a6f289b9ca3f4e6474f29793a74a/nature-image-for-website.jpg?fit=fill&w=600&h=400",
  },
  {
    id: 2,
    title: "Mountain",
    img: "data:image/jpeg;base64,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",
  },
];

const Card = ({ src, title, id, index, moveImage }) => {
  const ref = useRef(null);

  const [, drop] = useDrop({
    accept: "image",
    hover: (item, monitor) => {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      moveImage(dragIndex, hoverIndex);
      item.index = hoverIndex;
    }
  });

  const [{ isDragging }, drag] = useDrag({
    type: "image",
    item: () => {
      return { id, index };
    },
    collect: (monitor) => {
      return {
        isDragging: monitor.isDragging()
      };
    }
  });

  const opacity = isDragging ? 0 : 1;
  
  drag(drop(ref));

  return (
    <div ref={ref} style={{ opacity }} className="card">
      <img className='w-25' src={src} alt={title} />
    </div>
  );
};

const Demo = () => {
  const [images, setImages] = useState(galleryList);

  const moveImage = useCallback((dragIndex, hoverIndex) => {
    setImages((prevCards) => {
      const clonedCards = [...prevCards];
      const removedItem = clonedCards.splice(dragIndex, 1)[0];
      clonedCards.splice(hoverIndex, 0, removedItem);
      return clonedCards;
    });
  }, []);

  return (
    <main>
      {images.map((image, index) => (
        <Card 
          key={image.id}
          src={image.img}
          title={image.title}
          id={image.id}
          index={index}
          moveImage={moveImage}
        />
      ))}
    </main>
  );
};

export default Demo;
