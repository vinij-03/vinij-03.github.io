import React from 'react'

function LowSec() {
    return (
        <div>
            <div className='text-white text-md px-6 lg:px-28 justify-center lg:mt-16 mb-8 '>
                I'm currently exploring new technology, including 3D development, AI and ML, and AR/VR. I also give seminars and classes at tech camps for young audiences to introduce them to the future of the tech industry. I'd love to connect with you and chat about these topics. Feel free to connect with me on LinkedIn and check out some of my work on GitHub.
            </div>
            <div className="connect_button flex flex-col md:flex-row justify-center gap-6 items-center px-8  md:px-28 lg:mr-6 mb-16">
                <button
                    className="button text-white text-bold text-lg font-sans w-full h-20 py-2 px-4 sm:w-1/2 inline-flex items-center text-sm font-semibold rounded-lg border border-white bg-[#292727] md:bg-transparent transition-all duration-300 hover:bg-white  hover:text-black hover:shadow-lg hover:shadow-black/50 hover:-translate-y-1 active:translate-y-1 active:shadow-lg active:shadow-black/50"
                >
                    Connect On LinkedIn
                    <span className="ml-2">
                        <svg
                            stroke="currentColor"
                            fill="currentColor"
                            strokeWidth="0"
                            viewBox="0 0 24 24"
                            height="1.5em"
                            width="1.5em"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M20.45175,20.45025 L16.89225,20.45025 L16.89225,14.88075 C16.89225,13.5525 16.86975,11.844 15.04275,11.844 C13.191,11.844 12.90825,13.2915 12.90825,14.7855 L12.90825,20.45025 L9.3525,20.45025 L9.3525,8.997 L12.765,8.997 L12.765,10.563 L12.81375,10.563 C13.2885,9.66225 14.4495,8.71275 16.18125,8.71275 C19.78575,8.71275 20.45175,11.08425 20.45175,14.169 L20.45175,20.45025 Z M5.33925,7.4325 C4.1955,7.4325 3.27375,6.50775 3.27375,5.36775 C3.27375,4.2285 4.1955,3.30375 5.33925,3.30375 C6.47775,3.30375 7.4025,4.2285 7.4025,5.36775 C7.4025,6.50775 6.47775,7.4325 5.33925,7.4325 L5.33925,7.4325 Z M7.11975,20.45025 L3.5565,20.45025 L3.5565,8.997 L7.11975,8.997 L7.11975,20.45025 Z M23.00025,0 L1.0005,0 C0.44775,0 0,0.44775 0,0.99975 L0,22.9995 C0,23.55225 0.44775,24 1.0005,24 L23.00025,24 C23.55225,24 24,23.55225 24,22.9995 L24,0.99975 C24,0.44775 23.55225,0 23.00025,0 L23.00025,0 Z"
                            ></path>
                        </svg>
                    </span>
                </button>
                <button
                    className="button text-white text-bold text-lg font-sans w-full h-20 py-2 px-4 sm:w-1/2 inline-flex items-center text-sm font-semibold rounded-lg border border-white bg-[#292727] md:bg-transparent transition-all duration-300 hover:bg-white hover:text-black hover:shadow-lg hover:shadow-black/50 hover:-translate-y-1 active:translate-y-1 active:shadow-lg active:shadow-black/50"
                >
                    Visit my Github
                    <span className="ml-2">
                        <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 496 512" height="1.5em" width="1.5em" xmlns="http://www.w3.org/2000/svg">
                            <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                    </span>
                </button>
            </div>
            <div className='text-white flex flex-col text-md m-7 lg:mx-20 items-center justify-center'>
                Also check out Twinverse's site to see what we are tring to build in the AR/VR space.And the cool projects we have worked on.
                <div className='w-full md:px-8 md:pr-14'>
                    <button className='button mt-6  text-white text-bold text-lg font-sans w-full h-20 py-2 px-4  inline-flex items-center text-sm font-semibold rounded-lg border border-white hover:bg-[#292727] bg-[#292727] md:bg-transparent'>
                        Twinverse
                        <span className="ml-2">
                           <img src="/Twinverse.png" className='h-66 w-6'  />
                        </span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default LowSec