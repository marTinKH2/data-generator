# Import installed packages
from flask import Flask, jsonify
from flask_restful import Resource, Api


# Import app code
app = Flask(__name__)




@app.route("/api/")
def root():
    return jsonify({"message": "Message"})

if __name__ == "__main__":
    app.run(debug=True, host="0.0.0.0", port=80)

  
  
