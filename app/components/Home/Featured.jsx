import timeEat from "../../assets/time-eat.png"
import delivery from "../../assets/delivery.png"
import parisLove from "../../assets/paris.png"
import Image from 'next/image';

const Featured = () => {
    return (
        <section className=' w-11/12 mx-auto mb-10 relative -top-10'>
            <div className="w-2/3 grid grid-cols-3 gap-5 shadow-xl p-5 rounded">
                <div className='flex items-center gap-2'>
                    <Image src={ timeEat } />
                    <p className='text-lg'>delivery in all Paris in less than 30 minutes</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={ delivery } />
                    <p className='text-lg'>Free delivery from 29 euros</p>
                </div>
                <div className='flex items-center gap-2'>
                    <Image src={ parisLove } />
                    <p className='text-lg'>only fresh and french products</p>
                </div>
            </div>
        </section>
    );
};

export default Featured;
