
import json,random
from time import sleep
from kafka import KafkaProducer



def serialize(signal):
    return json.dumps(signal).encode(('utf-8'))



def sendRandomSignal():
    producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=serialize
    )

    i=0
    while(i<20):
        random_number= int(random.randint(1,1000))
        print(f"Sending number {random_number}")
        producer.send('Random-Signal', random_number)
        sleep(1)
        i=i+1

sendRandomSignal()
        

