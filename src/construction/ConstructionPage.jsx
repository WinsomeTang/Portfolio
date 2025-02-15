import React, { useEffect, useRef } from 'react'
import MacIcon from '../assets/images/macIcon.png'
import LinkedinIcon from '../assets/images/linkedinIcon.png'
import GithubIcon from '../assets/images/githubIcon.png'
import DevpostIcon from '../assets/images/devpostIcon.png'
import '../construction/ConstructionPage.css';
const ConstructionPage = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        // You can set up your audio here
        if (audioRef.current) {
            audioRef.current.volume = 0.5; // Set initial volume to 50%
        
            // Try to play the audio
            const playAudio = () => {
                audioRef.current
                    .play()
                    .catch((error) => console.log('Autoplay blocked: User interaction required', error));
            };

            // Autoplay on page load if allowed
            playAudio();

            // Fallback: Play when the user interacts with the page
            document.addEventListener('click', playAudio, { once: true });
        }
    }, []);

    const openResume = () => {
        window.open('/Winsome_Tang_Resume.pdf', '_blank'); // Opens the resume in a new tab
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white space-y-8">
            {/* Audio element */}

            <audio ref={audioRef} loop>
                <source src="src/assets/audio/softServe.mp3" type="audio/mp3" />
            </audio>

            {/* Main heading */}
            <h1 className="text-2xl font-bold text-center">
                Hey! This website is still under construction.
            </h1>

            {/* Classic Mac icon */}
            <div className="w-24 h-24">
                <img src={MacIcon} />
            </div>

            {/* Resume button */}
            <button onClick={openResume} className="px-6 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-shadow">
                Check out my resume!
            </button>
            {/* Social Icons */}
            <div className="social-links">
                {/* LinkedIn */}
                <a href="https://www.linkedin.com/in/winsometang126/" >
                    <img src={LinkedinIcon} />

                </a>

                {/* Portfolio */}
                <a href="https://devpost.com/winsometang" >
                    <img src={DevpostIcon} />
                </a>

                {/* GitHub */}
                <a href="https://github.com/WinsomeTang" >
                    <img src={GithubIcon} />
                </a>
            </div>
        </div>
    );
};

export default ConstructionPage;