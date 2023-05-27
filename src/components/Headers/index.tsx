import Link from 'next/link';

const Headers = () => {
    return (
        <header className="px-4 py-2 bg-primary flex gap-10 justify-center text-xl rounded-b-lg text-grey drop-shadow-xl">
            <Link href="/">Pokédex</Link>
            <Link href="/favorites">Favorites</Link>
            <Link href="/gacha">Gacha</Link>
        </header>
    );
};

export default Headers;
