import GuestNavbar from '@/Components/GuestNavbar';

export default function Info({ children }) {
    return (
        <div className="min-h-screen flex flex-col items-center pt-3 sm:pt-0 bg-zinc-300">
            <GuestNavbar />
            {children}
        </div>
    );
}
