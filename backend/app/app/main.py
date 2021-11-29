# Import installed packages
from flask import Flask, jsonify


# Import app code
app = Flask(__name__)

# After creating the app, so that cors can import it
#from app import message_producer



@app.route("/api/")
def root():
    return jsonify({"message": "Message"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)

  
  
