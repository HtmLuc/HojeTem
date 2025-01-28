import {XCircleIcon, MapPinIcon, CalendarIcon, ClockIcon, ShareIcon} from '@heroicons/react/24/outline'

interface PopupProps {
    title: string;
    description: string;
    local: string;
    data: string;
    horario: string;
    imageAlt: string;
    imageUrl: string;
    closeModal: () => void;
}

const PopupEventos: React.FC<PopupProps> = ({
                                                title,
                                                description,
                                                local,
                                                data,
                                                horario,
                                                imageAlt,
                                                imageUrl,
                                                closeModal
                                            }) => {
    return (
        <>
            <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                <div className="shadow-lg w-11/12">
                    <div className="bg-secondary text-primary p-4 rounded-t-lg flex justify-between items-center">
                        <h3 className="text-lg font-bold">{title}</h3>
                        <button
                            onClick={closeModal}
                            className="text-gray-500 hover:text-gray-700"
                        >
                            <XCircleIcon aria-hidden="true" className="text-primary size-6 hover:text-white"/>
                        </button>
                    </div>
                    <div className="bg-primary rounded-b-lg p-4 flex justify-between items-center">
                        <div className="w-1/2">
                            <p className="font-alegreya-sans text-xl">{description}</p>
                            <div className="mt-2">
                                <MapPinIcon className="mt-2 text-black size-8"/>
                                <span className="text-sm">{local}</span>
                            </div>
                            <div className="mt-1">
                                <CalendarIcon className="mt-2 text-black size-8"/>
                                <span className="text-sm">{data}</span>
                            </div>
                            <div className="mt-1">
                                <ClockIcon className="mt-2 text-black size-8"/>
                                <span className="text-sm">{horario}</span>
                            </div>
                            <div className="mt-1">
                                <ShareIcon className="mt-2 text-black size-8"/>
                                <span className="text-sm">Compartilhe com seus amigos</span>
                            </div>
                        </div>
                        <div>
                            <img className="rounded-md" src={imageUrl} alt={imageAlt}/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PopupEventos;