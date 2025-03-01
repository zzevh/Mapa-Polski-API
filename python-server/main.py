from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from zeep import Client
from zeep.wsse.username import UsernameToken

token = UsernameToken(
    username='TestPubliczny',
    password='1234abcd'
)
client = Client(wsdl='https://uslugaterytws1test.stat.gov.pl/wsdl/terytws1.wsdl', wsse=token)


# print(client.service.PobierzListeRegionow('2024-01-01'))
# print(client.service.PobierzListeWojewodztw('2024-01-01'))
# print(client.service.PobierzListeMiejscowosciWGminie('MAZOWIECKIE','','','2024-01-01'))

app = FastAPI()

# Dodaj middleware CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Dla testów "*" - potem możesz zmienić na konkretne domeny
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/api/terytws1.svc/PobierzListeMiejscowosciWGminie")
async def get_miejscowosci(province: str):
    return {"miejscowosci": client.service.PobierzListeMiejscowosciWGminie(province, '', '', '2024-01-01')}