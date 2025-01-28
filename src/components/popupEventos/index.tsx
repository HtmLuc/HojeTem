import {XCircleIcon, MapPinIcon, CalendarIcon, ClockIcon, ShareIcon} from '@heroicons/react/24/outline'

const PopupEventos = ({title, description, local, data, horario, imageAlt, imageUrl, closeModal}) => {
    return (
        <div className="fixed inset-0 bg-black/60 flex items-center justify-center z-50">
            <div className="shadow-lg w-11/12">
                <div className="bg-secondary text-white p-4 rounded-t-lg flex justify-between items-center">
                    <h3 className="text-lg font-bold">{title}</h3>
                    <button
                        onClick={closeModal}
                        className="text-gray-500 hover:text-gray-700"
                    >
                        <XCircleIcon aria-hidden="true" className="cursor-pointer text-primary size-6 hover:text-white"/>
                    </button>
                </div>
                <div className="flex justify-between bg-primary rounded-b-lg p-4 items-center">
                    <div className="w-1/2">
                        <p className="font-alegreya-sans text-xl">{description}</p>
                        <div className="mt-2 flex items-center">
                            <MapPinIcon className="mt-2 text-black size-8"/>
                            <p className="pl-2 pt-1 text-sm">{local}</p>
                        </div>
                        <div className="mt-1 flex items-center">
                            <CalendarIcon className="text-black size-8"/>
                            <p className="pl-2 text-sm">{data}</p>
                        </div>
                        <div className="mt-1 mb-2 flex items-center">
                            <ClockIcon className="text-black size-8"/>
                            <p className="pl-2 text-sm">{horario}</p>
                        </div>
                        <div className="mt-1 flex items-center">
                            <ShareIcon className="text-black size-8"/>
                            <p className="pl-2 text-sm">Compartilhe com seus amigos</p>
                        </div>
                    </div>
                    <div>
                        <img className="rounded-md max-h-100" src={imageUrl} alt={imageAlt}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PopupEventos;