import { useState } from "react"
import { MapPinIcon } from '@heroicons/react/24/outline'
import PopupEventos from '../popupEventos'

const EventosDestaque = ({title, description, local, data, horario, imageAlt, imageUrl}) => {
    const [isOpen, setIsOpen] = useState(false);
    const openModal = () => setIsOpen(true);
    const closeModal = () => setIsOpen(false);

    return (
    <>
        <div className="pl-6 cursor-pointer" onClick={ openModal }>
            <div className="relative w-80 h-80">
                <MapPinIcon
                    aria-hidden="true"
                    className="absolute inset-0 w-80 fill-current text-red-500"
                />
                <img
                    alt={ imageAlt }
                    src={ imageUrl }
                    className="absolute top-10 left-1/2 -translate-x-1/2 rounded-full w-52 h-52 object-cover"
                />
            </div>
            <div className="justify-items-center -translate-x-6">
                <p className="font-poppins font-bold">{ title }</p>
                <p className="font-poppins text-sm text-center">{ description }</p>
            </div>
        </div>

        {isOpen && (
            <PopupEventos title={ title } description={ description } local={ local } data={ data } horario={ horario } imageAlt={ imageAlt } imageUrl={ imageUrl } closeModal={ closeModal }/>
        )}
    </>
)
}

export default EventosDestaque;
