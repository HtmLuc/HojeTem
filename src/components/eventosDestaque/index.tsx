import {MapPinIcon} from '@heroicons/react/24/outline'
import React from "react";

interface EventCardProps {
    title: string;
    description: string;
    imageAlt: string;
    imageUrl: string;
}

const EventosDestaque: React.FC<EventCardProps> = ({title, description, imageAlt, imageUrl}) => {
    return (
        <>
            <div className="relative w-80 h-80">
                <MapPinIcon
                    aria-hidden="true"
                    className="absolute inset-0 w-80 fill-current text-red-500"
                />
                <img
                    alt={imageAlt}
                    src={imageUrl}
                    className="absolute top-10 left-1/2 -translate-x-1/2 rounded-full w-52 h-52 object-cover "
                />
            </div>
        </>
    )
}

export default EventosDestaque;
