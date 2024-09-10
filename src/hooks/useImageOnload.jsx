import { useEffect, useState } from "react";

export default function useImageOnload() {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        const img = new Image();
        img.src = '../public/162_04.jpg';
        img.onload = () => setIsLoaded(true);
      }, []);
      
      
  return isLoaded 
}
