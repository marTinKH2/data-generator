# Import installed packages
from flask import Flask, jsonify
import time,json,random




# Import app code
app = Flask(__name__)

# After creating the app, so that cors can import it
from app import random_generator
from app import messageProducer
from kafka import KafkaProducer


@app.route("/api/")
def root():
    testgenarator= random_generator
    return jsonify({"message": "Message"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)
    messageProducer.sendRandomSignal()
