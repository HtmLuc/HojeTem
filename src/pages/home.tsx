import {GoogleMap, useJsApiLoader, Marker} from '@react-google-maps/api'
import {ChevronDownIcon} from '@heroicons/react/24/outline';
import Navbar from './../components/navbar';
import EventosDestaque from '../components/eventosDestaque';

const Home = () => {
    const {isLoaded} = useJsApiLoader({
        id: 'google-map-script',
        googleMapsApiKey: 'AIzaSyCRxydfRjyOnyhZAz7oiZvcY1ShrEYb19M',
    })

    const navegacao = [
        {
            imageUrl: '/images/headerImg-4.jpg',
            href: '#eventos-destaque',
            descricao: 'Eventos em Destaque',
        },
        {
            imageUrl: '/images/headerImg-3.jpg',
            href: '#mapa',
            descricao: 'Mapas Interativos',
        },
        {
            imageUrl: '/images/headerImg-2.jpg',
            href: '#mapa',
            descricao: 'Filtros Personalizados'
        },
    ];

    const infosEventosDestaque = [
        {
            title: 'Por do Sol mais bonitos do estado',
            description: 'Veja quais são os melhores lugares para ver o por do sol no RN.',
            local: 'Praia da Redinha',
            data: 'Todos os dias',
            horario: '17:30 horas',
            imageAlt: 'Por do Sol mais bonitos do estado',
            imageUrl: '/images/eventoDestaque-1.png'
        },
        {
            title: 'Numanice 3',
            description: '“Saudade da gente, ôôô (…) Quem dera se fosse menos KM…”E seu desejo é uma ORDEM. Chegaram as datas da #Numanice3Tour! Prontos pra fazermos história, mais uma vez, e curtir de perto as canetadas da Lud?',
            local: 'Arena das dunas',
            data: '08 de fevereiro',
            horario: '16 horas',
            imageAlt: 'Numanice 3',
            imageUrl: '/images/eventoDestaque-2.png'
        },
        {
            title: 'Árvore de Mirassol (Evento Gratuito)',
            description: 'Durante todo o mês de Dezembro, a famosa árvore estará aberta para visita do público. Local com praça de alimentação, shows, artesanato e outras programações para curtir com sua família e amigos.',
            local: 'Av. das Tulípas, S/N - Capim Macio, Natal - RN',
            data: '20 de novembro a 06 de janeiro',
            horario: 'Todas as noites',
            imageAlt: 'Árvore de Mirassol enfeitada com luzes de natal',
            imageUrl: '/images/eventoDestaque-3.png'
        }
    ]

    return (
        <>
            <header className="relative z-50">
                <Navbar/>
            </header>
            <main>
                <section className="bg-tertiary h-screen text-white pt-16">
                    <div className="flex justify-between">
                        <div className="flex flex-col justify-center text-center w-5/12 ml-20">
                            <h2 className="font-antic-didone text-4xl mb-14">
                                Procurando eventos em Natal e não sabe por onde começar?
                            </h2>
                            <div>
                                <h3 className="font-alegreya-sans font-black text-xl pb-5">
                                    Explore para encontrar
                                </h3>
                                <div className="flex justify-between">
                                    {navegacao.map((elemento, index) => (
                                        <a
                                            key={index}
                                            className="flex flex-col max-w-28 "
                                            href={elemento.href}
                                        >
                                            <img
                                                alt={elemento.descricao}
                                                src={elemento.imageUrl}
                                                className="w-28 h-28 rounded-md transition duration-500 hover:-translate-y-3"
                                            />
                                            <p className="font-antic-didone leading-5 text-md pt-1">
                                                {elemento.descricao}
                                            </p>
                                        </a>
                                    ))}
                                </div>
                                <h3 className="font-alegreya-sans font-black text-xl pt-5">
                                    e mais ...
                                </h3>
                            </div>
                        </div>
                        <div className="max-w-lg mr-8 mt-2.5">
                            <img
                                alt="Imagem com vários blocos e linhas"
                                src="/images/headerImg-1.jpg"
                                className=""
                            />
                        </div>
                    </div>
                    <ChevronDownIcon
                        aria-hidden="true"
                        className="absolute -translate-y-3/4 left-1/2 w-10"
                    />
                </section>

                <section id="eventos-destaque" className="bg-primary h-screen p-8">
                    <div className="justify-items-center">
                        <h2 className="font-alegreya-sans font-black text-2xl pb-2">
                            Eventos em Destaque
                        </h2>
                        <p className="font-antic-didone text-3xl">Fique por dentro dos eventos mais falados da cidade
                            durante o mês!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {infosEventosDestaque.slice(0, 3).map((item) =>
                            <EventosDestaque
                                title={item.title}
                                description={item.description}
                                local={item.local}
                                data={item.data}
                                horario={item.horario}
                                imageAlt={item.imageAlt}
                                imageUrl={item.imageUrl}
                            />
                        )}
                    </div>
                </section>

                <section id="mapa" className="p-3 bg-tertiary h-screen">
                    <div className="w-1/2">
                    </div>
                    <div className="w-1/2 h-1/2">
                        {
                            isLoaded ? (
                                <GoogleMap
                                    mapContainerStyle={{width: '100%', height: '100%'}}
                                    center={{
                                        lat: -5.8267096177215505,
                                        lng: -35.212453011281426
                                    }}
                                    zoom={13}
                                    mapContainerClassName="rounded-md"
                                >
                                    {/* Child components, such as markers, info windows, etc. */}
                                    <></>
                                </GoogleMap>
                            ) : (
                                <></>
                            )

                        }
                    </div>
                </section>
            </main>
        </>
    );
};

export default Home;
