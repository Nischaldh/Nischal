import React from 'react'

const Footer = () => {
    return (
        <secton className='c-space pt-7 pb-3 border-t border-black-300 flex justify-between items-center flex-wrap gap-5'>
            <div className='text-white-500 flex gap-2'>
                <p>Terms & Conditions</p>
                <p>|</p>
                <p>Privacy Policy</p>
            </div>
            <div className="flex gap-3">
                <div className='social-icon'>
                    <a href='https://github.com/Nischaldh' target='_blank' className='w-full h-full flex justify-center items-center'>
                    <img src='/assets/github.svg' alt='github' className='w-1/2 h-1/2'/>
                    </a>
                </div>
                <div className='social-icon'>
                    <a href='https://www.instagram.com/nischal_dhungana10/' target='_blank' className='w-full h-full flex justify-center items-center'>
                    <img src='/assets/instagram.svg' alt='Instagram' className='w-1/2 h-1/2'/>

                    </a>

                </div>
                <div className='social-icon'>
                    <a className='w-full h-full flex justify-center items-center cursor-pointer'>
                    <img src='/assets/linkedin.svg' alt='Twitter' className='w-1/2 h-1/2'/>
                    </a>
                </div>
            </div>
            <p className='text-white-500'> Copyright © {new Date().getFullYear()} Bipul Dhungana</p>

        </secton>
    )
}
export default Footer
