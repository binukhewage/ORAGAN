import Link from 'next/link';
import logo from '../assets/logo.png';

export default function Footer() {
    return (
        <footer className="bg-black text-white">
            <div className="flex items-center justify-center border-b-2 border-neutral-800 p-6 lg:justify-between">
                <div className="me-12 hidden lg:block">
                    <span>Get connected with us on social networks</span>
                </div>
               
                <div className="flex justify-center">
                    {/* facebook */}
                    <a href="https://www.facebook.com/profile.php?id=61556242558777" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 320 512">
                            <path
                                d="M80 299.3V512H196V299.3h86.5l18-97.8H196V166.9c0-51.7 20.3-71.5 72.7-71.5c16.3 0 29.4 .4 37 1.2V7.9C291.4 4 256.4 0 236.2 0C129.3 0 80 50.5 80 159.4v42.1H14v97.8H80z" />
                        </svg>
                    </a>
                    {/* linkedin */}
                    <a href="https://www.linkedin.com/company/oragan-ist/mycompany/" className="me-6 [&>svg]:h-4 [&>svg]:w-4">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 448 512">
                            <path
                                d="M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z" />
                        </svg>
                    </a>
                </div>
            </div>

            <div className="mx-6 py-10 text-center md:text-left">
                <div className="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                    <div className="">
                        <h6 className="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start">
                            <span className="me-3 [&>svg]:h-4 [&>svg]:w-4">
                                <Link href="/"> 
                                    <img src={logo.src} alt="Logo" width={150} height={50} />
                                </Link>
                            </span>
                        </h6>
                    </div>

                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Menu
                        </h6>
                        <p className="mb-4">
                            <Link href="#aboutusSection">About us</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="#serviceSection">Service</Link>
                        </p>
                        <p className="mb-4">
                            <Link href="#productSection">Products</Link>
                        </p>
                        <p>
                            <Link href="/contact">Contact us</Link>
                        </p>
                    </div>

                    <div>
                        <h6 className="mb-4 flex justify-center font-semibold uppercase md:justify-start">
                            Contact
                        </h6>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z" />
                                    <path
                                        d="M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z" />
                                </svg>
                            </span>
                            Jayabima, Galpanawa Road,
                            Monnekulama, Nikaweratiya
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                                    <path
                                        d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                                </svg>
                            </span>
                            oragan.ist@gmail.com
                        </p>
                        <p className="mb-4 flex items-center justify-center md:justify-start">
                            <span className="me-3 [&>svg]:h-5 [&>svg]:w-5">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    fill="currentColor">
                                    <path
                                        fillRule="evenodd"
                                        d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                        clipRule="evenodd" />
                                </svg>
                            </span>
                            +94 711186006
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-black/10 p-6 text-center">
                <span>© 2024 Copyright: </span>
                <a className="font-semibold" href="/">ORAGAN.IST</a>
            </div>
        </footer>
    );
}