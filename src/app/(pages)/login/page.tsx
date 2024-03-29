import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

export default function Page() {
    return (
        <div className="h-screen w-screen grid grid-cols-1 grid-rows-2 sm:grid-rows-1 sm:grid-cols-5">
            <div className="h-full flex justify-center items-center col-span-3">
                <div className="w-11/12 max-w-sm mx-auto">
                    <h1 className="text-center text-4xl font-bold tracking-[-0.075rem] uppercase">
                        Sazaana
                    </h1>
                    <p className="text-muted-foreground mb-2 text-center tracking-wider">
                        Straight Forward Playlist Builder
                    </p>
                    <form>
                        <Button className="w-full" asChild>
                            <Link
                                href="/login/spotify"
                                className="flex gap-2 items-center"
                            >
                                <svg
                                    className="fill-white"
                                    width="24"
                                    height="24"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                >
                                    <path d="M19.098 10.638c-3.868-2.297-10.248-2.508-13.941-1.387-.593.18-1.22-.155-1.399-.748-.18-.593.154-1.22.748-1.4 4.239-1.287 11.285-1.038 15.738 1.605.533.317.708 1.005.392 1.538-.316.533-1.005.709-1.538.392zm-.126 3.403c-.272.44-.847.578-1.287.308-3.225-1.982-8.142-2.557-11.958-1.399-.494.15-1.017-.129-1.167-.623-.149-.495.13-1.016.624-1.167 4.358-1.322 9.776-.682 13.48 1.595.44.27.578.847.308 1.286zm-1.469 3.267c-.215.354-.676.465-1.028.249-2.818-1.722-6.365-2.111-10.542-1.157-.402.092-.803-.16-.895-.562-.092-.403.159-.804.562-.896 4.571-1.045 8.492-.595 11.655 1.338.353.215.464.676.248 1.028zm-5.503-17.308c-6.627 0-12 5.373-12 12 0 6.628 5.373 12 12 12 6.628 0 12-5.372 12-12 0-6.627-5.372-12-12-12z" />
                                </svg>
                                <span>Login with Spotify</span>
                            </Link>
                        </Button>
                    </form>
                    <p className="text-muted-foreground text-xs text-center mt-2">
                        By clicking continue, you agree to our Terms of Service
                        and Privacy Policy.
                    </p>
                </div>
            </div>
            <div className="col-span-2 h-full p-4">
                <div className="relative h-full w-full rounded-lg overflow-hidden">
                    <Image
                        src="/images/hero.jpg"
                        alt="Playlist"
                        fill
                        priority
                        className="object-cover object-center"
                    />
                </div>
            </div>
        </div>
    );
}
