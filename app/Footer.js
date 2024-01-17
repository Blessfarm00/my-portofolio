import { motion } from "framer-motion";;
import { FaGithub, FaTwitter } from 'react-icons/fa';
import React from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
    return (
        <footer className="py-3 mt-20 text-center dark:text-black dark:bg-gray-900">
            <div className="flex justify-center items-center space-x-4">
                <a href="https://github.com/Blessfarm00" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <FaGithub className="text-3xl cursor-pointer text-black" />
                    </motion.div>
                </a>
                <a href="https://twitter.com/ryanfebrialdo" target="_blank" rel="noopener noreferrer">
                    <motion.div whileHover={{ scale: 1.1 }}>
                        <FaTwitter className="text-3xl cursor-pointer text-blue-500" />
                    </motion.div>
                </a>
            </div>
            <motion.hr
                className="border-t-2 border-gray-300 my-4 border-b-2 border-bold"
                whileHover={{ scale: 1.1 }}
            />
            <p className="mt-4 text-gray-600 dark:text-gray-400">
                © {new Date().getFullYear()} developedbyRyan. All rights reserved.| Made with Next.Js
            </p>
            <ContactForm />
    </footer >
  );
}