cd test-map
npm install
npm run build
cd ..

uvicorn main:app --host 0.0.0.0 --port 8000
