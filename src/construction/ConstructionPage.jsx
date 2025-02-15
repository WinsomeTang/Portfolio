import React, { useEffect, useRef } from 'react'
import MacIcon from '../assets/images/macIcon.png'
import LinkedinIcon from '../assets/images/linkedinIcon.png'
import GithubIcon from '../assets/images/githubIcon.png'
import DevpostIcon from '../assets/images/devpostIcon.png'
import '../construction/ConstructionPage.css';

const ConstructionPage = () => {
    const audioRef = useRef(null);

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.volume = 0.5;
        
            const playAudio = () => {
                audioRef.current
                    .play()
                    .catch((error) => console.log('Autoplay blocked: User interaction required', error));
            };

            playAudio();
            document.addEventListener('click', playAudio, { once: true });
        }
    }, []);

    const openResume = () => {
        window.open('/Winsome_Tang_Resume.pdf', '_blank');
    };

    return (
        <div className="h-screen w-full flex flex-col items-center justify-center bg-white">
            <audio ref={audioRef} loop>
                <source src="src/assets/audio/softServe.mp3" type="audio/mp3" />
            </audio>

            <div className="flex flex-col items-center justify-center space-y-8">
                <h1 className="text-2xl font-bold text-center">
                    Hey! This website is still under construction.
                </h1>

                <div className="flex items-center justify-center w-full">
                    <img src={MacIcon} alt="Mac Icon"/>
                </div>

                <div className="flex justify-center w-full">
                    <button 
                        onClick={openResume} 
                        className="px-6 py-2 bg-white border-2 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none transition-shadow"
                    >
                        Check out my resume!
                    </button>
                </div>

                <div className="social-links">
                    <a href="https://www.linkedin.com/in/winsometang126/" target="_blank" rel="noopener noreferrer">
                        <img src={LinkedinIcon} alt="LinkedIn" />
                    </a>
                    <a href="https://devpost.com/winsometang" target="_blank" rel="noopener noreferrer">
                        <img src={DevpostIcon} alt="Devpost" />
                    </a>
                    <a href="https://github.com/WinsomeTang" target="_blank" rel="noopener noreferrer">
                        <img src={GithubIcon} alt="GitHub" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default ConstructionPage;