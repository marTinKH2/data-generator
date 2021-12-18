
FROM tiangolo/uwsgi-nginx-flask:python3.8

RUN pip install flask_cors
RUN pip install kafka-python
RUN pip install numpy


COPY ./app /app
WORKDIR /app/

EXPOSE 80