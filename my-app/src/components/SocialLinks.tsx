import { FaFacebook, FaTwitter, FaLinkedinIn } from 'react-icons/fa'

export const SocialLinks = () => {
    return (
        <section>
            <h3 className="text-2xl font-extrabold">Réseaux Sociaux</h3>
            <ul>
                <li className='flex items-center'><FaFacebook className='mr-2' /> <a className="hover:text-[#4AFFED]" href="https://www.facebook.com">Facebook</a></li>
                <li className='flex items-center'><FaTwitter className='mr-2' /> <a className="hover:text-[#4AFFED]" href="https://www.linkedin.com">Linkedin</a></li>
                <li className='flex items-center'><FaLinkedinIn className='mr-2' /> <a className="hover:text-[#4AFFED]" href="https://www.twitter.com">Twitter</a></li>
            </ul>
        </section>
    )
}