// app/pages/about/index.js

import { useRouter } from 'next/router';

const AboutPage = () => {
    const router = useRouter();

    const navigateToAbout = () => {
        router.push('/about');
    };

    return (
        <div>
            <p>Halaman About</p>
            <button onClick={navigateToAbout}>Pergi ke About</button>
        </div>
    );
};

export default AboutPage;
