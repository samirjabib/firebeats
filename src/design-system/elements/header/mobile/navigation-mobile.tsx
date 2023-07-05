"use client"

import Hamburger from "hamburger-react";

import { motion, AnimatePresence } from "framer-motion";
import { FC, useEffect, useRef } from "react";
import { useHeaderStore } from "../store/header-store";
import NavLinksMobile from "./nav-links-mobile";
import { NavLink } from "../types";




type NavigationMobileProps = {
    links: NavLink[]
}

const NavigationMobile: FC<NavigationMobileProps> = ({ links }) => {

    //lets start animation
    const item = {
        exit: {
            opacity: 0,
            height: 0,
            transition: {
                ease: "easeInOut",
                duration: 0.3,
                delay: 0.3,
            },
        },
    };

    const { navBarOpen, setNavBarOpen } = useHeaderStore();

    //block body when nav is open for fix scroll down
    useEffect(() => {
        if (navBarOpen) {
            document.body.classList.add("overflow-hidden");
        } else {
            document.body.classList.remove("overflow-hidden");
        }

        return () => {
            document.body.classList.remove("overflow-hidden");
        };
    }, [navBarOpen]);


    return (
        <div className="md:hidden ">
            <div onClick={() => setNavBarOpen(!navBarOpen)}>
                <Hamburger toggled={navBarOpen} color="white" size={28} />
            </div>

            <AnimatePresence>
                {navBarOpen && (
                    <motion.div
                        variants={item}
                        initial={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        animate={{ height: "100vh", opacity: 1 }}
                        exit="exit"
                        className="absolute top-20 left-0  w-full h-screen bg-black flex flex-col items-center justify-center  gap-y-8"
                    >
                        <ul className="flex flex-col items-center justify-center gap-y-8 relative bottom-24">
                            <NavLinksMobile links={links} />
                        </ul>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default NavigationMobile;
