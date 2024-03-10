import { useAppSelector } from "../../redux/features/hooks";
import Button from "./Button";
import Container from "./Container";
import { ArrowUpCircle,  Instagram, Youtube, TwitterIcon, Facebook } from 'lucide-react'

const Footer = () => {
    const {darkMode} = useAppSelector(store => store.theme);

    return (
        <div className={` ${darkMode ? "bg-black" : "bg-primary-color" } py-10`}>
            <Container >
                <div className="grid grid-cols-2 lg:grid-cols-4 justify-items-center text-white">


                    <div>
                        <ul>
                            <li className="font-bold">Home</li>
                            <li>Pricing</li>
                            <li>Overview</li>
                            <li>Browse</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-bold">About</li>
                            <li>Pricing</li>
                            <li>Overview</li>
                            <li>Browse</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="font-bold">Contact Us</li>
                            <li>Pricing</li>
                            <li>Overview</li>
                            <li>Browse</li>
                            <li>Accessibility</li>
                        </ul>
                    </div>
                    <div className="  col-span-2 lg:col-span-1 mb-5">
                        <Button className="bg-btn-bg text-btn-text ">Become a donor</Button>
                        <div className="flex mt-5 justify-between">
                            <div className="hover:bg-blue-700 transition-all p-1 rounded-full cursor-pointer">
                                <Facebook></Facebook>
                            </div>
                            <div className="hover:bg-blue-700 transition-all p-1 rounded-full cursor-pointer">
                                <Instagram></Instagram>
                            </div>
                            <div  className="hover:bg-blue-700 transition-all p-1 rounded-full cursor-pointer">
                                <Youtube></Youtube>
                            </div>
                            <div className="hover:bg-blue-700 transition-all p-1 rounded-full cursor-pointer" >
                                <TwitterIcon></TwitterIcon>
                            </div>



                        </div>
                    </div>

                </div>
                <hr className="flex-grow border-t border-blue-300 mt-10" />

                <div className="text-white lg:flex  justify-between items-center mt-5">
                    <div>
                        <p className="text-center"> @ 2024. All rights reserved.</p>
                    </div>
                    <div>
                        <ul className="grid grid-cols-2 mt-5 lg:grid-cols-4 justify-items-center gap-5">
                            <li>Terms</li>
                            <li>Policy</li>
                            <li>Contact</li>
                            
                            <li>
                                <ArrowUpCircle />
                            </li>
                        </ul>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Footer;