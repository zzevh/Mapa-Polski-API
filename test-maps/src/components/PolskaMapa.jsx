import { useEffect, useRef, useState } from "react";

const PolskaMapa = ({ wojewodztwa, onWojewodztwoClick }) => {
  const canvasRef = useRef(null);
  const [hovered, setHovered] = useState(null); // Stan dla województwa pod myszką

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = "black";
    ctx.fillStyle = "lightgray"; // Kolor wypełnienia województw
    ctx.lineWidth = 1;

    const canvasWidth = 800;
    const canvasHeight = 600;
    const scale = 75;
    const offsetX = canvasWidth / 2;
    const offsetY = canvasHeight / 2;

    const paths = []; // Przechowuje ścieżki województw do sprawdzania hovera

    wojewodztwa.features.forEach((woj, index) => {
      const path = new Path2D();
      const coords = woj.geometry.type === "Polygon"
        ? woj.geometry.coordinates
        : woj.geometry.coordinates.flat(1);

      coords.forEach((polygon) => {
        polygon.forEach(([lng, lat], i) => {
          const x = (lng - 19) * scale + offsetX;
          const y = -(lat - 53.3) * scale + offsetY;

          if (i === 0) {
            path.moveTo(x, y);
          } else {
            path.lineTo(x, y);
          }
        });
      });

      path.closePath();
      paths.push({ path, woj });

      // Rysowanie województwa
      ctx.fillStyle = hovered === index ? "darkgray" : "lightgray";
      ctx.fill(path);
      ctx.lineWidth = hovered === index ? 3 : 1; // Pogrubienie obramówki
      ctx.stroke(path);
    });

    // Obsługa hovera
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      let found = null;
      paths.forEach(({ path }, i) => {
        if (ctx.isPointInPath(path, mouseX, mouseY)) {
          found = i;
        }
      });

      setHovered(found);
    };

    // Obsługa kliknięcia
    const handleClick = (e) => {
      const rect = canvas.getBoundingClientRect();
      const mouseX = e.clientX - rect.left;
      const mouseY = e.clientY - rect.top;

      paths.forEach(({ path, woj }) => {
        if (ctx.isPointInPath(path, mouseX, mouseY)) {
          onWojewodztwoClick(woj.properties.nazwa);
        }
      });
    };

    canvas.addEventListener("mousemove", handleMouseMove);
    canvas.addEventListener("click", handleClick);

    return () => {
      canvas.removeEventListener("mousemove", handleMouseMove);
      canvas.removeEventListener("click", handleClick);
    };
  }, [wojewodztwa, hovered]);

  return <canvas ref={canvasRef} width={800} height={800} className="border bg-white" />;
};

export default PolskaMapa;
