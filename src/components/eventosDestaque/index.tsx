import { MapPinIcon } from '@heroicons/react/24/outline'

const EventosDestaque = () => {
  const eventos = [
    {
      imageUrl: 'images/eventoDestaque-1.png',
      imageAlt: 'Árvore de Mirassol enfeitada com luzes de natal',
      type: 'Feira',
      name: 'Árvore de Mirassol (Evento Gratuito)',
      description: 'Durante todo o mês de Dezembro, a famosa árvore estará aberta para visita do público. Local com praça de alimentação, shows, artesanato e outras programações para curtir com sua família e amigos.'
    },
    {
      imageUrl: 'images/eventoDestaque-3.jpg',
      imageAlt: 'Peça teatral',
      type: 'Peça teatral',
      name: 'Espetáculo “Um presente de Natal” (Evento Gratuito)',
      description: 'No dia 25 de dezembro, o espetáculo  chega mais uma vez na capital do Rio Grande do Norte e nesta edição acontecerá no Arena das Dunas. O espetáculo se caracteriza por valorizar os artistas da terra, tendo toda a sua equipe local.'
    },
    {
      imageUrl: 'images/eventoDestaque-3.jpg',
      imageAlt: 'Praia de ponta negra',
      type: 'Festa',
      name: 'Shows na Praia de Ponta Negra (Evento Gratuito)',
      description: 'De 27 até 31 de dezembro,  a praia de Ponta Negra será palco de apresentações de artistas nacionais e regionais como: Raça Negra, Pedro Sampaio, Banda Grafith, Iguinho e Lulinha, entre outros. Imperdível!'
    },
  ]
  return (
    <div className="mx-10 max-w-7xl flex flex-row justify-between justify-items-center">
      {eventos.map(evento => (
        <div className="relative w-80 h-80">
          <MapPinIcon
            aria-hidden="true"
            className="absolute inset-0 w-80 fill-current text-red-500"
          />
          <img
            alt={evento.imageAlt}
            src={evento.imageUrl}
            className="absolute top-10 left-1/2 -translate-x-1/2 rounded-full w-52 h-52 object-cover "
          />
        </div>
      ))}
    </div>
  )
}

export default EventosDestaque;
