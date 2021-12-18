import json,random
from numpy.random import normal
from time import sleep
from kafka import KafkaProducer



def __init__(self,lb,ub,f): 
    self.producer== KafkaProducer(
    bootstrap_servers=['localhost:9092']
    )  
    self.lb=lb
    self.ub=ub
    self.f=f


def serialize(signal):
    """Serialisierung des übergebenen Signals."""
    return json.dumps(signal).encode(('utf-8'))


def sendRandomSignalf(self):
    """Es wird eine Random-Zahl zwischen 'lowerBoundary' und 'upperBoundary' erstellt und diese an das Kafka Topic "Random Signal" geschickt. 
    'transmissionFrequency' beschreibt die Übertragungsrate des Signals.
    
    Args:
        lowerBoundary (int): Die untere Grenze des Signals        
        upperBoundary (int): Die obere Grenze des Signals
        transmissionFrequency(float): Pause zwischen den einzelnen Werten des Signals
    """
    while(True):
        random_number= int(random.randint(self.lb,self.ub,self.f))
        print(f"Sending number {random_number}")
        self.producer.send('Random-Signal', serialize((random_number)))
        sleep(self.f)
        