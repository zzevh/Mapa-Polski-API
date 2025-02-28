FROM node:18 AS frontend

WORKDIR /app

COPY test-map/ test-map/


WORKDIR /app/test-map
RUN npm install
RUN npm run build


FROM python:3.12 AS backend

WORKDIR /app


COPY --from=frontend /app/test-map/dist test-map/dist
COPY . .


RUN pip install --no-cache-dir -r requirements.txt

CMD ["uvicorn", "main:app", "--host", "0.0.0.0", "--port", "8000"]
