# Import installed packages
from flask import Flask, jsonify
from flask_restful import Resource, Api,reqparse
from kafka import KafkaProducer
import json

def serialize(signal):
    """Serialisierung des übergebenen Signals."""
    return json.dumps(signal).encode(('utf-8'))

producer = KafkaProducer(
    bootstrap_servers=['localhost:9092'],
    api_version=(0,11,5)
    )    


# Import app code
app = Flask(__name__)
api = Api(app)



#from app import message_producer 
"""
running_signals={}

random_arguments = reqparse.RequestParser()
random_arguments.add_argument("lowerBoundary", type = int)
random_arguments.add_argument("upperBoundary", type = int)
random_arguments.add_argument("transmissionfrequency", type = float)

class GenerateRandomStream(Resource):

    def put(self,signal_name):
        args = random_arguments.parse_args()
        running_signals[signal_name] = args
        test = message_producer()
        test.sendRandomSignal(1,100,1)
        return 200

"""
class HelloWorld(Resource):
    def get(self):
        #return {'hello': 'world'}
        producer.send('Random-Signal', value=serialize((6)))




api.add_resource(HelloWorld, '/api/test/')

@app.route("/api/")
def root():
    
    return jsonify({"message": "Message"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)

  
  
