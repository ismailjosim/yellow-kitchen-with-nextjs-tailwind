import timeEat from "../../assets/time-eat.png"
import delivery from "../../assets/delivery.png"
import parisLove from "../../assets/paris.png"
import Image from 'next/image';

const Featured = () => {
    return (
        <section className='grid grid-cols-3 gap-5 w-2/3 mb-10'>
            <div className='flex items-center gap-2'>
                <Image src={ timeEat } />
                <p>delivery in all paris in less than 30 minutes</p>
            </div>
            <div className='flex items-center gap-2'>
                <Image src={ timeEat } />
                <p>delivery in all paris in less than 30 minutes</p>
            </div>
            <div className='flex items-center gap-2'>
                <Image src={ timeEat } />
                <p>delivery in all paris in less than 30 minutes</p>
            </div>
        </section>
    );
};

export default Featured;
