import { useEffect, useState } from "react";
import PolskaMapa from "./components/PolskaMapa";
import Popup from "./components/Popup";

const App = () => {
  const [data, setData] = useState(null);
  const [selectedWoj, setSelectedWoj] = useState(null);


  useEffect(() => {
    fetch("/wojewodztwa.geojson")
      .then((res) => res.json())
      .then((json) => setData(json));
  }, []);

  const handleWojewodztwoClick = (wojewodztwo) => {
    console.log("Wybrane województwo:", wojewodztwo);
    setSelectedWoj(wojewodztwo);
  };

  return (
    <div className="flex flex-col justify-center items-center min-h-screen bg-gray-100">
      {data ? (
        <PolskaMapa wojewodztwa={data} onWojewodztwoClick={handleWojewodztwoClick} />
      ) : (
        <p>Ładowanie...</p>
      )}

      {selectedWoj && (
        <Popup closePopup={setSelectedWoj} selectedWoj={selectedWoj} />
      )}
    </div>
  );
};

export default App;
