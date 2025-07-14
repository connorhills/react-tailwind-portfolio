const hexToHsl = (hex) => {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h, s, l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r: h = (g - b) / d + (g < b ? 6 : 0); break;
      case g: h = (b - r) / d + 2; break;
      case b: h = (r - g) / d + 4; break;
    }
    h /= 6;
  }

  return `${Math.round(h * 360)} ${Math.round(s * 100)}% ${Math.round(l * 100)}%`;
};

export const setRandomPrimaryColor = () => {
  console.log('🎨 Setting random primary color...');
  
  const vibrantColors = [
    '#00FFFF', '#FF0080', '#00FF00', '#FFFF00', '#8000FF',
    '#00FF80', '#FF4000', '#4000FF', '#80FF00', '#FF0040',
    '#0040FF', '#FF8000', '#FF006F', '#39FF14', '#FF073A',
    '#00FF41', '#FF9F00', '#9400D3', '#FF1493', '#00CED1',
    '#FF4500', '#7FFF00', '#FF69B4', '#00BFFF', '#DC143C',
    '#FF6347', '#00FA9A', '#FF00FF', '#FFD700', '#8A2BE2',
    '#00FF7F', '#7CFC00', '#9370DB', '#20B2AA', '#FF7F50',
    '#9ACD32', '#32CD32'
  ];

  const randomColor = vibrantColors[Math.floor(Math.random() * vibrantColors.length)];
  const primaryHsl = hexToHsl(randomColor);
  
  console.log('🎨 Random color selected:', randomColor, 'HSL:', primaryHsl);
  
  document.documentElement.style.setProperty('--primary', primaryHsl);
  
  const isDark = document.documentElement.classList.contains('dark');
  const foregroundHsl = isDark ? '213 31% 91%' : '210 40% 98%';
  document.documentElement.style.setProperty('--primary-foreground', foregroundHsl);
  
  console.log('🎨 CSS variables set successfully');
};