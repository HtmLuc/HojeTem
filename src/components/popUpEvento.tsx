import React, { useState } from 'react';

interface EventCardProps {
  title: string;
  description: string;
  imageUrl: string; // Imagem ilustrativa
}

const EventCardPopup: React.FC<EventCardProps> = ({ title, description, imageUrl }) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  return (
    <div>
      {/* Card */}
      <div
        className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer"
        onClick={openModal}
      >
        <img src={imageUrl} alt={title} className="w-full h-40 object-cover rounded-t-lg" />
        <div className="p-2">
          <h3 className="text-lg font-bold">{title}</h3>
          <p className="text-gray-600 truncate">{description}</p>
        </div>
      </div>

      {/* Popup Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-1/2">
            <div className="p-4">
              {/* Modal Header */}
              <div className="flex justify-between items-center">
                <h3 className="text-lg font-bold">{title}</h3>
                <button
                  onClick={closeModal}
                  className="text-gray-500 hover:text-gray-700"
                >
                  ✕
                </button>
              </div>

              {/* Placeholder Map */}
              <div className="my-4">
                <div className="w-full h-64 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                  Mapa aqui
                </div>
              </div>

              {/* Directions Button */}
              <div className="mb-4">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 w-full"
                  onClick={() => alert('Função de direções ainda não implementada!')}
                >
                  Obter Direções
                </button>
              </div>

              {/* Description */}
              <p className="text-gray-700">{description}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EventCardPopup;
