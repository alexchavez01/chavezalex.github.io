import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import AnimateText from './animations/AnimateText';

const Contact = () => {
  return (
    <section id="contact" className='h-full w-full py-24 flex items-center justify-center'>
        <div className='container mx-auto'>
            <div className='flex flex-col lg:flex-row justify-center items-center'> 
                <div className='text-center'> 
                    <h2 className='text-[40px] lg:text-[50px] text-white tracking-wide leading-none mb-12'> 
                        <AnimateText/>
                    </h2>
                    <div className='socials flex flex-row justify-center gap-4'>
                        <Link href='https://github.com/alexchavez01'>
                            <Image
                                src="/images/github.png" // Corrected path
                                alt="GitHub Logo"
                                width={300}  // Ensure to include width
                                height={300} // Ensure to include height
                                className="w-full h-full object-contain"
                            />

                            
                        </Link>

                        <Link href='https://www.linkedin.com/in/alex-chavez30/'>
                            <Image 
                                className='h-[50px] w-[50px] inline-block'
                                src="/images/linkedin.png" 
                                alt="LinkedIn Icon" 
                                width={300} // Specify the width
                                height={300} // Specify the height
                                />
                          
                        </Link>

                    </div>
                </div>    
            </div>
        </div>
    </section>
  );
}

export default Contact;
