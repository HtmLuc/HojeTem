import EventCardPopup from '../components/popUpEvento';
import Navbar from './../components/navbar';
import { ChevronDownIcon } from '@heroicons/react/24/outline';

const Home = () => {
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
      descricao: 'Filtros Personalizados',
    },
  ];

  return (
    <>
      <header className="relative z-50">
        <Navbar />
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
                      className="flex flex-col max-w-28"
                      href={elemento.href}
                    >
                      <img
                        alt={elemento.descricao}
                        src={elemento.imageUrl}
                        className="w-28 h-28 rounded-md"
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
          <h2 className="text-2xl font-bold text-white mb-6">
            Eventos em Destaque
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <EventCardPopup
              title="Show da Banda XYZ"
              description="Um show incrível com a banda XYZ no Teatro Municipal."
              imageUrl="/images/evento-1.jpg"
            />
            <EventCardPopup
              title="Por do Sol mais bonitos do estado"
              description="Veja quais são os melhores lugares para ver o por do sol no RN."
              imageUrl="/images/pordosol.png"
            />
            <EventCardPopup
              title="Numanice 3"
              description="Show da Lud chega a Natal e promete"
              imageUrl="/images/numanice.png"
            />
          </div>
        </section>

        <section id="mapa" className="bg-tertiary h-screen"></section>

        <footer className="bg-tertiary"></footer>
      </main>
    </>
  );
};

export default Home;
