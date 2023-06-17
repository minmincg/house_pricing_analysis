#Import flask
from flask import Flask,jsonify
from flask_cors import CORS
from flask import render_template
import json
import pandas as pd

# Define app to run api using Flask
app = Flask(__name__)

# Override chrome's CORS settings to be able to connect two different local ports
CORS(app)

#Create main route for API
@app.route("/")
def home():
    return "Hello"

#Retrieve geojson
@app.route("/geo")
def geo():
    with open("../Resources/austin.geojson","r") as file:
        geo=jsonify(json.load(file))
        return geo

#Use render_template to return the dashboard HTML site
@app.route("/endpoint")
def endpoint():
    return (render_template('index.html'))
        
#Run app code
if __name__=="__main__":
    app.run(debug=True)
