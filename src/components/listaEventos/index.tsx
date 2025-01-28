import {useState} from "react"
import {MapPinIcon, CheckCircleIcon, XCircleIcon} from "@heroicons/react/24/outline";
import PopupEventos from "../popupEventos";

const ListaEventos = ({pago, title, description, local, data, horario, imageAlt, imageUrl}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
        <div
            className="flex justify-between items-center w-full max-w-xl bg-gray-200 px-4 py-5 border-b-1 border-black first:rounded-t-sm last:rounded-b-sm last:border-b-0 shadow-md">
            <div className="flex flex-row items-center">
                {pago ? <CheckCircleIcon className="size-5 mr-5 fill-current text-red-500"/> : <XCircleIcon className="size-5 mr-5 fill-current text-green-500"/>}
                <div className="flex flex-col">
                    <p className="font- text-sm font-semibold">{title}</p>
                    <div className="mt-2 flex items-center">
                        <MapPinIcon className="text-black size-4"/>
                        <span className="text-sm">{local}</span>
                    </div>
                </div>
            </div>
            <button
                className="cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-black font-bold py-1 px-3 rounded-full"
                onClick={openModal}>
                Saiba Mais
            </button>
            {isOpen && (
                <PopupEventos title={title} description={description} local={local} data={data} horario={horario}
                              imageAlt={imageAlt} imageUrl={imageUrl} closeModal={closeModal}/>
            )}
        </div>
    );
}

export default ListaEventos;
