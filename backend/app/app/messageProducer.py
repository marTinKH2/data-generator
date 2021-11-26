import json,random
from app import cors,random_generator
from kafka import KafkaProducer


def serialize(signal):
    return json.dumps(signal).encode(('utf-8'))

 # Kafka Producer
producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=serialize
)


def sendRandomSignal():
    i=0
    while(i<20):
        random_number= random_generator.generate_random_number

        print("Sending number" + random_generator)
        producer.send('messages', random_number)
        i=i+1
