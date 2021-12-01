
import json,random,math
from numpy.random import normal
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
        frequence (float): Die Frequenz des Signals
    """
    while(True):
        for i in range(0,360):
            periodic_number= frequence*math.sin(math.radians(i))
            print(f"Sending number {periodic_number}")
            producer.send('Periodic-Signal', periodic_number)
            sleep(0.1)
            

def sendPeriodicCosinusSignal(frequence):
    """Es wird ein Cosinus-Singal mit der übergebenen Frequenz erstellt und an das Kafka Topic "Periodic Signal" geschickt. 

    Args:
        frequence (float): Die Frequenz des Signals
    """
    while(True):
        for i in range(0,360):
            periodic_number = frequence*math.cos(math.radians(i))
            print(f"Sending number {periodic_number}")
            producer.send('Periodic-Signal', periodic_number)
            sleep(0.1)


def sendEmphasisedRandomSinal(center,scale):
    while(True):
        data = normal(loc=center, scale=scale, size=200)
        for i in data:
            emphasisedNumber = i
            print(f"Sending number {emphasisedNumber}")
            producer.send('Emphasised-Signal', emphasisedNumber)
            sleep(0.2)


def sendSpikedSignal(distance, propability, size, base):
    i=0
    while(True):
        if i % distance == 0 and random.random() <= propability:
            spiked_number = base + size
            print(f"Sending number {spiked_number}")
        else:
            spiked_number = base 
            print(f"Sending number {spiked_number}")
        producer.send('Emphasised-Signal', spiked_number)
        sleep(0.2)
        i=i+1
    

       
        

sendSpikedSignal(4,0.8,3.5,100)
#sendEmphasisedRandomSinal(100,8)
#sendPeriodicCosinusSignal(50)
#sendRandomSignal(1,100000)
        

