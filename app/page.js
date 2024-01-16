"use client";
import Link from "next/link";
import { motion } from "framer-motion";;
import Head from 'next/head';
import { BsFillMoonStarsFill } from 'react-icons/bs';
import { AiFillLinkedin, AiFillInstagram, AiFillHtml5 } from "react-icons/ai";
import { SiWhatsapp } from "react-icons/si";
import { IoLogoJavascript } from "react-icons/io5";
import { SiPhp, SiLaravel, SiBootstrap, SiPhpmyadmin, SiReact, SiGit, SiCss3 } from "react-icons/si";
import Image from 'next/image';
import deved from "../public/bg-merah.png";
import code from "../public/code.png";
import kopi from "../public/kopi.png"
import klinik from "../public/klinik.PNG"
import { useState } from 'react';
import { useEffect } from "react";
import Footer from "./Footer";


export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  useEffect(() => {
    // Fungsi untuk menangani scroll otomatis
    const handleScroll = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({
          behavior: 'smooth',
        });
      }
    };

    // Fungsi untuk menangani klik pada link Project
    const handleProjectClick = () => {
      handleScroll('projectSection'); // Ganti 'projectSection' dengan id bagian Project Anda
    };

    // Fungsi untuk menangani klik pada link Experience
    const handleExperienceClick = () => {
      handleScroll('experienceSection'); // Ganti 'experienceSection' dengan id bagian Experience Anda
    };

    // Tambahkan event listener untuk setiap link
    document.getElementById('projectLink').addEventListener('click', handleProjectClick);
    document.getElementById('experienceLink').addEventListener('click', handleExperienceClick);

    // Hapus event listener ketika komponen unmount
    return () => {
      document.getElementById('projectLink').removeEventListener('click', handleProjectClick);
      document.getElementById('experienceLink').removeEventListener('click', handleExperienceClick);
    };
  }, []);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="min-h-screen" id="homeSection">
          <nav className="py-10 mb-12 flex flex-col sm:flex-row justify-between dark:text-white">
            <motion.h1
              className="font-burtons text-xl mb-4 sm:mb-0 text-gray-800 dark:text-gray-200"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              developedbyRyan.
            </motion.h1>
            <ul className="flex flex-col sm:flex-row items-center space-y-4 sm:space-y-0 sm:space-x-6 ">
              <li className="text-gray-800 dark:text-gray-200">
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl "
                />
              </li>

              <li>
                <motion.span

                  id="projectLink"
                  className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  Project
                </motion.span>
              </li>

              <li>
                <motion.span
                  id="experienceLink"
                  className="cursor-pointer bg-gradient-to-r from-cyan-500 to-teal-500 text-white px-4 py-2 rounded-md"
                  whileHover={{ scale: 1.1 }}
                >
                  Experience
                </motion.span>
              </li>
            </ul>
          </nav>
          <div className="flex flex-col p-4 sm:p-10 ">
            <motion.h2
              className="font-burtons text-xl mb-4 sm:mb-0 bg-gradient-to-r from-cyan-500 via-green-500 to-teal-500 text-4xl sm:text-5xl font-bold mb-5 text-transparent bg-clip-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              About Me
            </motion.h2>

            <motion.h1 className="py-10 mb-12 flex flex-col sm:flex-row justify-between text-gray-800 dark:text-gray-200 bg-clip-text"
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Lulusan baru dari Politeknik Negeri Padang dengan Program Studi Manajemen Informatika. 
              Selama ini, saya telah berhasil menyelesaikan beberapa proyek yang berhubungan dengan pemrograman, dan telah menjalani magang di Codelabs Indonesia (PT. Digital Angkasa Indonesia) sebagai software development.
               Saya tertarik untuk belajar hal-hal baru, komunikatif, pekerja keras, disiplin dan tertarik untuk mempelajari berbagai bidang baik secara individu maupun di dalam tim.
            </motion.h1>

            <p className="text-gray-600 text-sm sm:text-md py-2 sm:py-5 leading-6 sm:leading-8">

            </p>
          </div>

          <div className="flex flex-col p-4 sm:p-10 ">
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='relative mx-auto rounded-full bg-gradient-to-b from-teal-500 rounded-full w-40 sm:w-80 h-40 sm:h-80 my-8 sm:my-20 overflow-hidden'
            >
              <Image src={deved} layout="fill" objectFit="cover" alt="Bendera" />
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              className='text-3xl sm:text-5xl flex justify-center gap-8 sm:gap-16 text-gray-500 py-6 sm:py-11'
            >
              <a href=' https://wa.me/6283190108040' target='_blank' rel='noopener noreferrer'>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <SiWhatsapp className="hover:text-green-500" />
                </motion.div>
              </a>
              <a href='https://linkedin.com/in/ryan-febrialdo-a8b210222' target='_blank' rel='noopener noreferrer'>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <AiFillLinkedin className="hover:text-blue-500" />
                </motion.div>
              </a>
              <a href='https://www.instagram.com/rfebrialdo_' target='_blank' rel='noopener noreferrer'>
                <motion.div whileHover={{ scale: 1.1 }}>
                  <AiFillInstagram className='hover:text-orange-500' />
                </motion.div>
              </a>
            </motion.div>

          </div>
          
          <section clas>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='text-3xl text-center sm:text-5xl font-bold mb-2 text-teal-500'

            >
              Skills
            </motion.div>
            <h2 className="text-2xl font-bold mb-4 dark:text-white bg-clip-text">Pemula</h2>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='text-3xl sm:text-5xl flex flex-wrap gap-4 sm:gap-8 text-gray-500 py-6 sm:py-11'
            >
              {/* Logo untuk pemula di sini */}
            <div>
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4 border-b border-r border-gray-500 p-4 shadow-md">
                <AiFillHtml5 className='hover:text-orange-500 ' />
              </motion.div>
            </div>
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4 border-b border-r  border-gray-500 p-4 shadow-md">
                <IoLogoJavascript className='hover:text-yellow-400' />
              </motion.div>
              
            </motion.div>
              {/* Tambahan logo untuk pemula di sini */}
          </section>

          <section>
            <h2 className="text-2xl font-bold mb-4 dark:text-white bg-clip-text">Mahir</h2>
            <motion.div
              whileHover={{ scale: 1.1 }}
              className='text-3xl sm:text-5xl flex flex-wrap  gap-4 sm:gap-8 text-gray-500 py-6 sm:py-11'
            >
              <div>
              {/* Logo untuk yang mahir di sini */}
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4 border-b border-r border-gray-500 p-4 shadow-md">
                <SiPhp className='hover:text-blue-900' />
              </motion.div>
              </div>
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4 border-b border-r border-gray-500 p-4 shadow-md">
                <SiBootstrap className='hover:text-purple-600' />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4 border-b border-r border-gray-500 p-4 shadow-md">
                <AiFillHtml5 className='hover:text-orange-500 ' />
              </motion.div>
              <motion.div whileHover={{ scale: 1.1 }} className="mb-4 border-b border-r border-gray-500 p-4 shadow-md">
                <SiLaravel className='hover:text-red-500' />
              </motion.div>
            </motion.div>
          </section>


          <section id='experienceSection'>
            <div>

              <motion.div
                whileHover={{ scale: 1.1 }}
                className='text-3xl text-center sm:text-5xl font-bold mb-2 text-teal-500'

              >
                What I Do
              </motion.div>
              <motion.section className="lg:flex gap-10 items-center justify-center w-full">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='text-center justify-center shadow-lg p-10 rounded-xl my-10 mx-4 dark:bg-white'
                >
                  <Image src={code} width={100} height={100} className='mx-auto' alt="Picture of the author" />
                  <h3 className="text-lg font-medium pt-8 pb-2  ">
                    Web Development
                  </h3>
                  <p className="py-2 text-gray-800 dark:text-gray-200">

                    Dalam  pengembangan web, saya  menggunakan Laravel PHP untuk menciptakan pengalaman digital yang memukau.
                  </p>
                  <h4 className="py-4 text-teal-600">Tools I Use</h4>
                  <p className="text-gray-800 py-1">VS Code</p>
                  <p className="text-gray-800 py-1">HTML</p>
                  <p className="text-gray-800 py-1">CSS</p>
                  <p className="text-gray-800 py-1">Bootstrap</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className='text-center justify-center shadow-lg p-10 rounded-xl my-10 mx-4  dark:bg-white'
                >
                  <Image src={code} width={100} height={100} className='mx-auto' alt="Picture of the author" />
                  <h3 className="text-lg font-medium pt-8 pb-2  ">
                    Web Development
                  </h3>
                  <p className="py-2 text-gray-800 ">
                    Dalam konteks pengembangan front-end menggunakan JavaScript, saya menyuguhkan antarmuka digital dengan kecermatan dan keprofesionalan. 
                    Setiap baris kode yang saya susun menjadi dasar bagi pengalaman pengguna yang interaktif dan dinamis
                  </p>
                  <h4 className="py-4 text-teal-600">Tools I Use</h4>
                  <p className="text-gray-800 py-1">Tailwind</p>
                  <p className="text-gray-800 py-1">React.JS</p>
                  <p className="text-gray-800 py-1">Next.js</p>
                  
                </motion.div>
              </motion.section>
            </div>

          </section>
          <section className="py-10" id="projectSection">
            <div>
              <h3 className="text-3xl py-1 text-gray-800 ">Portofolio</h3>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Dalam masa perkuliahan saya telah membuat beberapa proyek kecil untuk menunjang skills saya dan menyelesaikan beberapa tugas kuliah.
                Proyek yang saya buat ad yang bersifat individu ada dan tim
                
              </p>
              <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
               Berikut proyek yang pernah saya buat 
              </p>
            </div>
            <div className="text-center justify-center flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">

              <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl my-10 mx-4 dark:bg-white"
                >
                  <Image src={klinik} width={500} height={500} className='mx-auto' alt="Picture of the author" />
                  <div className="max-w-md mx-auto">
                    <p className="py-2 text-justify">
                      Membuat website Sistem Informasi Manajemen Keperawatan Mandiri,
                      website ini dibuat untuk Syarat Kelulusan
                    </p>
                  </div>
                  <h4 className="py-4 text-teal-600">Tools I Use</h4>
                  <p className="text-gray-800 py-1">PHP</p>
                  <p className="text-gray-800 py-1">Bootstrap</p>
                  <p className="text-gray-800 py-1">Laravel</p>
                  <p className="text-gray-800 py-1">MySQL</p>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="basis-1/3 flex-1 shadow-lg p-10 rounded-xl my-10 mx-4 dark:bg-white"
                >
                  <Image src={kopi} width={500} height={500} className='mx-auto' alt="Picture of the author" />
                  <p className="py-2 text-left">
                    Membuat Website Sistem Informasi Manaemen Kedai Kopi Rona dan Mendesain Tampilan
                    ini Merupakan Project yang dilakukan saat magang
                  </p>
                  <h4 className="py-4 text-teal-600">Tools I Use</h4>
                  <p className="text-gray-800 py-1">Laravel</p>
                  <p className="text-gray-800 py-1">HTML 5</p>
                  <p className="text-gray-800 py-1">Figma</p>
                  <p className="text-gray-800 py-1">PHP</p>
                  <p className="text-gray-800 py-1">Postman</p>
                </motion.div>
              </div>
            </div>
          </section>

        </section>
        <Footer />
      </main>
    </div >
  );
}