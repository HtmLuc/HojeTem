interface PopupProps {
    title: string;
    description: string;
    local: string;
    data: string;
    imageAlt: string;
    imageUrl: string;
    closeModal: () => void;
}

const PopupEventos: React.FC<PopupProps> = ({title, description, local, data, imageAlt, imageUrl, closeModal}) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="bg-white rounded-lg shadow-lg w-11/12 md:w-65%">
                    <div className="p-4">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-bold">{title}</h3>
                            <button
                                onClick={closeModal}
                                className="text-gray-500 hover:text-gray-700"
                            >
                                ✕
                            </button>
                        </div>
                        <div>
                            <p>{ description }</p>
                        </div>
                        <div>
                            <img src={imageUrl} alt={imageAlt}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupEventos;