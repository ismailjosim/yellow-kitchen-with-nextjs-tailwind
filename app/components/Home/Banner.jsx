import Image from 'next/image';
import bannerImg from '../../assets/banner.png'
import arrow from '../../assets/arrow.png'
import leaf from '../../assets/rucola.png'


const Banner = () => {
    return (
        <section className='w-11/12 mx-auto grid grid-cols-2 justify-between gap-5'>
            <div className='relative flex flex-col justify-center'>
                <h1 className='text-7xl mb-20 w-8/12'>Your Food court at home</h1>
                <div className='flex gap-10'>
                    <button className='flex flex-col justify-center items-center rounded px-5 py-2 border-2 border-primary'>
                        <span className='font-semibold'>Delivery</span>
                        <span className='text-sm font-medium'>Order in</span>
                    </button>
                    <button className='flex flex-col rounded justify-center items-center px-5 py-2 border-2 border-primary'>
                        <span className='font-semibold'>Takeout</span>
                        <span className='text-sm font-medium'>Grab and go</span>
                    </button>
                </div>
                <Image className='absolute -right-20 bottom-0' src={ leaf } />
            </div>
            <div className='relative'>
                <Image className='w-full' src={ bannerImg } />
                <div className='absolute bottom-0 right-0 flex flex-col justify-center items-center'>
                    <Image className='w-16' src={ arrow } />
                    <p>Fresh salad, Il Pasifigio</p>
                </div>
            </div>
        </section>
    );
};

export default Banner;
