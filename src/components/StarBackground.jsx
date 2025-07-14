import { useEffect, useState, useRef } from "react";

export const StarBackground = () => {
    const [stars, setStars] = useState([]);
    const [meteors, setMeteors] = useState([]);
    const meteorRefs = useRef(new Map());

    useEffect(() => {
        generateStars();
        generateMeteors();

        const handleResize = () => {
            generateStars();
        };

        const meteorInterval = setInterval(() => {
            checkAndRegenerateMeteors();
        }, 1000);

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener("resize", handleResize);
            clearInterval(meteorInterval);
        };
    }, []);

    const generateSingleMeteor = () => {
        const meteorColors = [
            ['#00FFFF', '#0080ff23'], 
            ['#FF0080', '#ff00ff23'], 
            ['#00FF00', '#80ff0023'], 
            ['#FFFF00', '#ff800023'], 
            ['#8000FF', '#ff00ff23'], 
            ['#00FF80', '#00ffff23'], 
            ['#FF4000', '#ff008023'], 
            ['#4000FF', '#8000ff23'], 
            ['#80FF00', '#FFFF0023'], 
            ['#FF0040', '#FF408023'], 
            ['#0040FF', '#00FFFF23'], 
            ['#FF8000', '#FFFF0023'],
            ['#FF006F', '#FF339923'],
            ['#39FF14', '#CCFF0023'],
            ['#FF073A', '#FF446623'],
            ['#00FF41', '#66FF9923'],
            ['#FF9F00', '#FFCC3323'],
            ['#9400D3', '#CC66FF23'],
            ['#FF1493', '#FF6BB323'],
            ['#00CED1', '#66E6E623'],
            ['#ADFF2F', '#D4FF8023'],
            ['#FF4500', '#FF803323'],
            ['#7FFF00', '#B3FF6623'],
            ['#FF69B4', '#ff8fbc23'],
            ['#00BFFF', '#66CCFF23'],
            ['#DC143C', '#E85D7523'],
            ['#32CD32', '#7FE67F23'],
            ['#FF6347', '#FF998023'],
            ['#00FA9A', '#66FFB323'],
            ['#FF00FF', '#FF66FF23'],
            ['#00FFFF', '#66FFFF23'],
            ['#FFD700', '#FFEB6623'],
            ['#8A2BE2', '#B266E623'],
            ['#FF1493', '#FF6BB323'],
            ['#00FF7F', '#66FFB323'],
            ['#FF4500', '#FF803323'],
            ['#7CFC00', '#B3FF6623'],
            ['#FF69B4', '#fd83b423'],
            ['#00BFFF', '#66CCFF23'],
            ['#9370DB', '#B399E623'],
            ['#FF6347', '#FF998023'],
            ['#20B2AA', '#73CCB323'],
            ['#FF7F50', '#ff997723'],
            ['#9ACD32', '#B8E66623'],
            ['#FF1493', '#FF6BB323'],
            ['#00CED1', '#66E6E623'],
            ['#FF4500', '#FF803323'],
            ['#32CD32', '#7FE67F23'],
            ['#FF69B4', '#ff82b423'],
            ['#00BFFF', '#66CCFF23']
        ];

        const colorGradient = meteorColors[Math.floor(Math.random() * meteorColors.length)];
        
        const spawnSide = Math.random();
        let x, y;
        
        if (spawnSide < 0.5) {
            x = Math.random() * 100;
            y = Math.random() * 100;
        } else {
            x = Math.random() * -100;
            y = Math.random() * 100;
        }
        
        const animationDuration = Math.random() * 3 + 6;
        
        return {
            id: `${Date.now()}-${Math.random()}`,
            size: Math.random() * 3 + 1,
            x: x,
            y: y,
            delay: Math.random() * 2,
            animationDuration: animationDuration, 
            rotation: 0, // Fixed to match CSS animation
            color1: colorGradient[0],
            color2: colorGradient[1],
            color3: colorGradient[0] + '80',
            color4: colorGradient[1],
        };
    };

    const checkAndRegenerateMeteors = () => {
        setMeteors(currentMeteors => {
            const now = Date.now();
            const updatedMeteors = [];
            
            currentMeteors.forEach(meteor => {
                const meteorStartTime = parseInt(meteor.id.split('-')[0]);
                const delayMs = parseFloat(meteor.delay) * 1000;
                const animationDurationMs = meteor.animationDuration * 1000;
                const buffer = 3000; // Buffer to prevent early removal
                const totalDuration = delayMs + animationDurationMs + buffer;
                const meteorEndTime = meteorStartTime + totalDuration;
                
                if (now < meteorEndTime) {
                    updatedMeteors.push(meteor);
                } else {
                    const newMeteor = generateSingleMeteor();
                    updatedMeteors.push(newMeteor);
                }
            });
            
            return updatedMeteors;
        });
    };

    const generateStars = () => {
        const numberOfStars = Math.floor(
            (window.innerWidth * window.innerHeight) / 20000
        );

        const starColors = [
            ['#00FFFF', '#0080FF'], 
            ['#FF0080', '#FF00FF'], 
            ['#00FF00', '#80FF00'], 
            ['#FFFF00', '#FF8000'], 
            ['#8000FF', '#FF00FF'], 
            ['#00FF80', '#00FFFF'], 
            ['#FF4000', '#FF0080'], 
            ['#4000FF', '#8000FF'], 
            ['#80FF00', '#FFFF00'], 
            ['#FF0040', '#FF4080'], 
            ['#0040FF', '#00FFFF'], 
            ['#FF8000', '#FFFF00'],
            ['#FF006F', '#FF3399'],
            ['#39FF14', '#CCFF00'],
            ['#FF073A', '#FF4466'],
            ['#00FF41', '#66FF99'],
            ['#FF9F00', '#FFCC33'],
            ['#9400D3', '#CC66FF'],
            ['#FF1493', '#FF6BB3'],
            ['#00CED1', '#66E6E6'],
            ['#FF4500', '#FF8033'],
            ['#7FFF00', '#B3FF66'],
            ['#FF69B4', '#FF3399'],
            ['#00BFFF', '#0099FF'],
            ['#DC143C', '#FF0033'],
            ['#FF6347', '#FF3300'],
            ['#00FA9A', '#00FF66'],
            ['#FF00FF', '#FF66FF'],
            ['#00FFFF', '#66FFFF'],
            ['#FFD700', '#FFCC00'],
            ['#8A2BE2', '#9933FF'],
            ['#FF1493', '#FF0066'],
            ['#00FF7F', '#00FF33'],
            ['#FF4500', '#FF6600'],
            ['#7CFC00', '#99FF00'],
            ['#FF69B4', '#FF0099'],
            ['#00BFFF', '#0099FF'],
            ['#9370DB', '#6633FF'],
            ['#FF6347', '#FF3300'],
            ['#20B2AA', '#00CCAA'],
            ['#FF7F50', '#FF4400'],
            ['#9ACD32', '#AAFF00'],
            ['#FF1493', '#FF0066'],
            ['#00CED1', '#00CCFF'],
            ['#FF4500', '#FF6600'],
            ['#32CD32', '#33FF33'],
            ['#FF69B4', '#FF0099'],
            ['#00BFFF', '#0099FF']
        ];

        const newStars = []

    for (let i = 0; i < numberOfStars; i++) {
        const colorGradient = starColors[Math.floor(Math.random() * starColors.length)]
        const starSize = Math.random() < 0.1 ? Math.random() * 1 + 1.5 : Math.random() * 1 + 0.75;
        
        newStars.push({
            id: i,
            size: starSize,
            x: Math.random() * 100,
            y: Math.random() * 100 - 5,
            opacity: Math.random() * 0.5 + 0.5,
            animationDuration: Math.random() * 4 + 2,
            glowLarge: starSize * 3, // Scale glow with star size
            glowSmall: starSize * 2,
            color1: colorGradient[0],
            color2: colorGradient[1],
            color3: colorGradient[0] + '60',
            color4: colorGradient[1],
        });
    }

    setStars(newStars);
  };

  const generateMeteors = () => {
    const numberOfMeteors = 50;
    const newMeteors = [];

    for (let i = 0; i < numberOfMeteors; i++) {
        newMeteors.push(generateSingleMeteor());
    }

    setMeteors(newMeteors);
  };
  return ( 
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {stars.map((star) => (
            <div 
                key={star.id} 
                className="star animate-pulse-subtle" 
                style={{
                  width: star.size + "px",
                  height: star.size + "px",
                  left: star.x + "%",
                  top: star.y + "%",
                  opacity: star.opacity,
                  animationDuration: star.animationDuration + "s",
                  '--star-color-1': star.color1,
                  '--star-color-2': star.color2,
                  '--star-color-3': star.color3,
                  '--star-color-4': star.color4,
                  '--star-glow-large': star.glowLarge + 'px',
                  '--star-glow-small': star.glowSmall + 'px',
              }}
            />
        ))}
        
        {meteors.map((meteor) => (
            <div 
                key={meteor.id} 
                className="meteor animate-meteor" 
                style={{
                  width: meteor.size * 50 + "px",
                  height: meteor.size * 1 + "px",
                  left: meteor.x + "%",
                  top: meteor.y + "%",
                  animationDelay: meteor.delay,
                  animationDuration: meteor.animationDuration + "s",
                  transform: `rotate(${meteor.rotation}deg)`,
                  '--meteor-color-1': meteor.color1,
                  '--meteor-color-2': meteor.color2,
                  '--meteor-color-3': meteor.color3,
                  '--meteor-color-4': meteor.color4,
                  '--meteor-shadow-color': `${meteor.color1}66`,
              }}
            />
        ))}
    </div>
  );
};