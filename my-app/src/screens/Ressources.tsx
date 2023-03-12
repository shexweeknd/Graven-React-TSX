import {IoLinkSharp} from 'react-icons/io5'

export const Ressources = () => {
    return (
        <main>
            <h3 className="text-3xl font-extrabold mb-4">Ressources de shexweeknd</h3>

            <ul>
                <li className='flex items-center'><IoLinkSharp className='mr-2'/><a className="hover:underline" href="https://www.python.org">Télécharger python</a></li>
                <li className='flex items-center'><IoLinkSharp className='mr-2'/><a className="hover:underline" href="https://www.github.com/shexweeknd">Les projets de Shexweeknd</a></li>
                <li className='flex items-center'><IoLinkSharp className='mr-2'/><a className="hover:underline" href="https://www.pypi.org">Télécharger des paquets Python</a></li>
            </ul>
        </main>
    )
}