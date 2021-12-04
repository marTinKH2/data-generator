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



def sendRandomSignal(lowerBoundary, upperBoundary,transmissionFrequency):
    """Es wird eine Random-Zahl zwischen 'lowerBoundary' und 'upperBoundary' erstellt und diese an das Kafka Topic "Random Signal" geschickt. 
    Danach schläft die Methode für eine Sekunde und wiederholt den Vorgang.
    
    Args:
        upperBoundary (int): Die obere Grenze des Signals
    """
    while(True):
        random_number= int(random.randint(lowerBoundary,upperBoundary))
        print(f"Sending number {random_number}")
        producer.send('Random-Signal', random_number)
        sleep(transmissionFrequency)
        

def sendPeriodicSinusSignal(frequency,transmissionFrequency):
    """Es wird ein Sinus-Singal mit der übergebenen Frequenz erstellt und an das Kafka Topic "Periodic Signal" geschickt. 

    Args:
        frequence (float): Die Frequenz des Signals
    """
    while(True):
        for i in range(0,360):
            periodic_number= frequency*math.sin(math.radians(i))
            print(f"Sending number {periodic_number}")
            producer.send('Periodic-Signal', periodic_number)
            sleep(transmissionFrequency)
            

def sendPeriodicCosinusSignal(frequence,transmissionFrequency):
    """Es wird ein Cosinus-Singal mit der übergebenen Frequenz erstellt und an das Kafka Topic "Periodic Signal" geschickt. 

    Args:
        frequence (float): Die Frequenz des Signals
    """
    while(True):
        for i in range(0,360):
            periodic_number = frequence*math.cos(math.radians(i))
            print(f"Sending number {periodic_number}")
            producer.send('Periodic-Signal', periodic_number)
            sleep(transmissionFrequency)


def sendEmphasisedRandomSinal(center,scale,transmissionFrequency):
    """Es wird ein Signal, das einer Normalverteilung mit dem Erwartungswert 'center' und der Standardabweichung 'scale' folgt erstellt und an das Kafka Topic "Emphasised Signal"
    geschickt.

    Args:
        center (float): Der Erwartungswert der Normalverteilung
        scale (float): Die Standardabweichung der Normalverteilung
    """    
    while(True):
        data = normal(loc=center, scale=scale, size=200)
        for i in data:
            emphasisedNumber = i
            print(f"Sending number {emphasisedNumber}")
            producer.send('Emphasised-Signal', emphasisedNumber)
            sleep(transmissionFrequency)


def sendSpikedSignal(distance, propability, size, base,transmissionFrequency):
    """[summary]

    Args:
        distance (float): Der Abstand in dem ein potentieller Spike entsteht
        propability (float): Die Wahrscheinlichkeit für einen Spike
        size (float): Die Größe der Spikes
        base (float): Die Basis des Signals
    """    
    i=0
    while(True):
        if i % distance == 0 and random.random() <= propability:
            spiked_number = base + size
            print(f"Sending number {spiked_number}")
        else:
            spiked_number = base 
            print(f"Sending number {spiked_number}")
        producer.send('Spiked-Signal', spiked_number)
        sleep(transmissionFrequency)
        i=i+1
    

       
        

#sendSpikedSignal(4,0.8,3.5,100)
#sendEmphasisedRandomSinal(100,8)
#sendPeriodicSinusSignal(20)
sendRandomSignal(1,100000)
        

