
import json,random,math
from time import sleep
from kafka import KafkaProducer


def serialize(signal):
    """Serialisierung des übergebenen Signals."""
    return json.dumps(signal).encode(('utf-8'))

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    value_serializer=serialize
    )    



def sendRandomSignal(lowerBoundary, upperBoundary):
    """Es wird eine Random-Zahl zwischen 1 und dem übergebenen Parameter erstellt und diese an das Kafka Topic "Random Signal" geschickt. 
    Danach schläft die Methode für eine Sekunde und wiederholt den Vorgang.
    
    Args:
        upperBoundary (int): Die obere Grenze des Signals
    """
    while(True):
        random_number= int(random.randint(lowerBoundary,upperBoundary))
        print(f"Sending number {random_number}")
        producer.send('Random-Signal', random_number)
        sleep(1)
        

def sendPeriodicSinusSignal(frequence):
    """Es wird ein Sinus-Singal mit der übergebenen Frequenz erstellt und an das Kafka Topic "Periodic Signal" geschickt. 

    Args:
        frequence ([type]): [description]
    """
    while(True):
        for i in range(0,360):
            periodic_number= frequence*math.sin(math.radians(i))
            print(f"Sending number {periodic_number}")
            producer.send('Periodic-Signal', periodic_number)
            sleep(0.1)


sendPeriodicSinusSignal(50)
#sendRandomSignal(100000)
        

