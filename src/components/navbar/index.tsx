import { Disclosure } from '@headlessui/react'

const Navbar = () => {
  const user = {
    name: 'Lucas Dantas',
    email: 'lucas@proton.me',
    imageUrl:
    'https://avatars.githubusercontent.com/u/51703909',
  }
  const userNavigation = [
    { name: 'Perfil', href: '/user/perfil' },
    { name: 'Seus eventos', href: 'user/eventos' },
    { name: 'Sair', href: '/logout' },
  ]
  return (
    <div className="min-h-full">
      <Disclosure as="nav" className="bg-secondary">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <div className="shrink-0">
                <h1 className="font-palette-mosaic">Hoje Tem</h1>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  )
}

export default Navbar
