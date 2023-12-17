import { useEffect } from "react";

export default function Body(){

    useEffect(() => {
        const number_of_star = 150;
    
        const random_number = (min, max) => {
          return Math.floor(Math.random() * (max - min + 1)) + min;
        };
    
        const createStars = () => {
          let star_rotation = 'move_right;';
          const starsContainer = document.getElementById('starsContainer');
          for (let i = 0; i < number_of_star; i++) {
            star_rotation = star_rotation === 'move_right;' ? 'move_left;' : 'move_right;';
            const star_top = random_number(0, window.innerHeight);
            const star_left = random_number(0, window.innerWidth);
            const star_radius = random_number(0, 4);
            const star_duration = random_number(6, 16);
    
            const starElement = document.createElement('div');
            starElement.className = 'star';
            starElement.style = `top: ${star_top}px; left: ${star_left}px; width: ${star_radius}px; height: ${star_radius}px; ` +
              `animation-name:${star_rotation}; animation-duration: ${star_duration}s;`;
    
              starsContainer.appendChild(starElement);
          }
        };
    
        createStars();
      }, []);

    return(
        <>
            <div className="bg-[#c51b4b] z-0"  style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%'}} id="starsContainer"/>
        </>
    )
}