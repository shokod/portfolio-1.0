import Link from 'next/link';
import React from 'react';
import { Cursor, useTypewriter } from 'react-simple-typewriter';
import BackgroundCircles from '../components/BackgroundCircles ';
import { PageInfo } from '../typings';
import Image from 'next/image';
import profilePic from '../images/dee.png';
import { urlFor } from '../sanity';


type Props = {
    pageInfo: PageInfo
};

export default function Hero({ pageInfo }: Props) {
    const [text, count] = useTypewriter({
        words: [
            `< Hie, 🙋‍♂️ ${pageInfo?.name} here />`,
            "< I love coding >",
            "< And web designing>",

        ],
        loop: true,
        delaySpeed: 2000,
    });

    return (
        <div className='h-screen flex flex-col space-y-8 items-center justify-center
        text-center overflow-hidden'>
            <BackgroundCircles />
            <Image
                className='rounded-full mx-auto object-cover'
                src={urlFor(pageInfo?.heroImage).url()}
                alt="profile picture"
                width={165}
                height={165}
            // placeholder="blur"
            />
            <div className='z-20'>
                <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
                    {pageInfo?.role}
                </h2>
                <h1 className='text-2xl lg:text-2xl font-semibold px-10'>
                    <span className='mr-3'>{text}</span>
                    <Cursor cursorColor="#F7AB0A" />
                </h1>

                <div className='pt-5'>
                    <Link href="#about">
                        <button className='heroButton'>About</button>
                    </Link>
                    <Link href="#skills">
                        <button className='heroButton'>Skills</button>
                    </Link>
                    <Link href="#experience">
                        <button className='heroButton'>Experience</button>
                    </Link>
                    <Link href="#projects">
                        <button className='heroButton'>Projects</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};