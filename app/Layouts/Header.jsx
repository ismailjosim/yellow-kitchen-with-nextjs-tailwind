import Link from 'next/link';
import { MdOutlinePersonOutline } from "react-icons/md";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoMenu } from "react-icons/io5";

const Header = () => {
    return (
        <section className='border-b bg-slate-50 -z-10'>
            <div className="w-11/12 mx-auto flex justify-between items-center py-5">
                <Link href={ '/' } className='relative z-10'>
                    <span className='w-[4.5rem] -z-[1] bottom-0 absolute h-3 inline-block bg-[#ffe145]'></span>
                    <h2 className='text-2xl font-bold text-accent capitalize'>yellowKitchen</h2>
                </Link>
                <nav className='flex items-center gap-10 text-lg font-semibold'>
                    <Link className='flex items-center text-secondary hover:text-primaryActive' href={ "/login" }>
                        <MdOutlinePersonOutline />
                        <span>Log in</span>
                    </Link>
                    <Link className='flex items-center text-secondary hover:text-primaryActive' href={ "/login" }>
                        <MdOutlineShoppingCart />
                        <span>0</span>
                    </Link>
                    <Link className='flex items-center text-2xl border p-2 rounded-full bg-white text-secondary hover:text-primaryActive' href={ "/login" }>
                        <IoMenu />
                    </Link>
                </nav>
            </div>
        </section>
    );
};

export default Header;
