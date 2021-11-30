
import json,random
from time import sleep
from kafka import KafkaProducer


def serialize(signal):
    """Serialisierung des übergebenen Signals."""
    return json.dumps(signal).encode(('utf-8'))

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=serialize
    )    



def sendRandomSignal(upperBoundary):
    """Es wird eine Random-Zahl zwischen 1 und dem übergebenen Parameter erstellt und diese an das Kafka Topic "Random Signal" geschickt. 
    Danach schläft die Methode für eine Sekunde und wiederholt den Vorgang.
    
    Args:
        upperBoundary (int): Die obere Grenze des Signals
    """
    while(True):
        random_number= int(random.randint(1,upperBoundary))
        print(f"Sending number {random_number}")
        producer.send('Random-Signal', random_number)
        sleep(1)
        

sendRandomSignal(100000)
        

