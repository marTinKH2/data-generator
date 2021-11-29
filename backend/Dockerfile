FROM tiangolo/uwsgi-nginx-flask:python3.6

RUN pip install flask_cors
RUN pip install kafka-python
RUN pip install Faker

COPY ./app /app
WORKDIR /app/

EXPOSE 80
