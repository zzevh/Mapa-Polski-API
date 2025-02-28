import { useEffect, useState } from "react";

const Popup = ({ selectedWoj, closePopup }) => {

  const ApiURL = `http://localhost:8000/api/terytws1.svc/PobierzListeMiejscowosciWGminie?province=${encodeURIComponent(selectedWoj)}`;


  const [isSearchWoj, setIsSearchWoj] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (selectedWoj) {
      setIsLoading(true);
      setError(null);

      console.log("Nazwa województwa:", selectedWoj);
      console.log("Fetching data for wojewodztwo:", selectedWoj);
      console.log("API URL:", ApiURL);

      fetch(ApiURL, {
        method: 'GET',
        headers: {
          'Authorization': 'Basic ' + btoa('blazej.krupkaa@gmail.com:sQ4FlTZtv'),
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      })
        .then(response => {
          if (!response.ok) {
            throw new Error('Problem z API network');
          }
          return response.json();
        })
        .then(data => {
          console.log("Dane z API:", data);
          console.log("Miejscowości:", data.miejscowosci);
          setIsSearchWoj(data.miejscowosci || []);
        })
        .catch(error => {
          console.error('Blad z api..', error);
          setError('Wystapil blad podczas pobierania inforamcji na temat Miejscowosci i Wsi');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [selectedWoj]);

  return (
    <div className="bg-black/50 inset-0 fixed flex justify-center items-center">
      <div className="bg-white p-8 rounded-2xl px-20 max-w-140 md:max-w-350" style={{ maxHeight: '80vh', overflowY: 'auto' }}>
        <div className="flex justify-end mb-5 -mr-10">
          <button onClick={() => closePopup(false)} className="text-black text-xl bg-blue-100 px-4 py-2 rounded-lg cursor-pointer hover:bg-blue-50">X</button>
        </div>
        <p className="text-2xl font-bold">Miejscowosci i Wsie z wojewodztwa <span className="text-blue-700 font-bolder">{selectedWoj}</span>:</p>
        <div className="justify-center flex mt-10">
          {isLoading && <p className="text-yellow-200">Trwa ladowanie..</p>}
          {error && <p>{error}</p>}
          {!isLoading && !error &&
            (
              <ul>
                {Array.isArray(isSearchWoj) && isSearchWoj.length > 0 && (
                  isSearchWoj.map((miejscowosc, index) => (
                    <li key={index} className="text-xl font-bold text-black">
                      {miejscowosc.__values__ ? miejscowosc.__values__.Nazwa : 'Brak nazwy'}
                    </li>
                  ))
                )}
              </ul>
            )}
        </div>
      </div>
    </div>
  )
}

export default Popup;
