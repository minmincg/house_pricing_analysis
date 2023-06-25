#Import flask
from flask import Flask,jsonify
from flask_cors import CORS
from flask import render_template
import json
import pandas as pd
# import tensorflow as tf

# Define app to run api using Flask
app = Flask(__name__)

# Read austin housing reduced CSV into df dataFrame
df=pd.read_csv("../Resources/austin_calculations.csv")

# create geojson from dataframe
def geo_from_df(data):
    geo={"type": "FeatureCollection","features": []}
    for i in data.index:
        one_feat={"type": "Feature",
                "geometry": {
                    "type": "Point",
                    "coordinates": [data["longitude"].iloc[i],data["latitude"].iloc[i]]
                    },
                "properties": {"address":data["streetAddress"].iloc[i],
                               
                               "latestPrice":int(data["latestPrice"].iloc[i]),
                            #    "yearBuilt":int(data["yearBuilt"].iloc[i]),
                            #    "lotSizeSqFt":int(data["lotSizeSqFt"].iloc[i]),
                               "livingAreaSqFt":int(data["livingAreaSqFt"].iloc[i]),
                               "zipcode":int(data["zipcode"].iloc[i]),
                            #    "numOfStories":int(data["numOfStories"].iloc[i]),
                               "homeType":data["homeType"].iloc[i],
                            #    "garageSpaces":int(data["garageSpaces"].iloc[i]),
                               "numOfBathrooms":int(data["numOfBathrooms"].iloc[i]),
                               "numOfBedrooms":int(data["numOfBedrooms"].iloc[i]),
                               "difference_nn":round(float(data["difference_nn"].iloc[i])),
                               "percent_change_nn":float(data["percent_change_nn"].iloc[i]),
                               "predict_nn":round(float(data["predict_price_nn"].iloc[i])),
                               "difference_lr":round(float(data["difference_lr"].iloc[i])),
                               "percent_change_lr":float(data["percent_change_lr"].iloc[i]),
                               "predict_lr":round(float(data["predicted_price_lr"].iloc[i])),

                              }}
        geo["features"].append(one_feat)
    return geo

# Override chrome's CORS settings to be able to connect two different local ports
CORS(app)

#Create main route for API
@app.route("/")
def home():
    return \
    """
    <b>To Website:</b><br>
    <a href='http://127.0.0.1:5000/endpoint'>Austin Housing Prices</a><br>
    <br>
    <b>To API:</b><br>
    <a href='http://127.0.0.1:5000/geo'>GeoJSON</a><br>
    <a href='http://127.0.0.1:5000/unique/zipcode'>Unique values</a> (Ex: zipcode)<br>
    <a href='http://127.0.0.1:5000/linearModel'>Linear Model Coefficients and intersection</a><br>
    """

#Retrieve geojson
@app.route("/geo")
def geo():
    return jsonify(geo_from_df(df))
    
@app.route("/geoquery/<query>")
def geoquery(query):
    print(query)
    query_list=query.split("_")
    query_list.pop(-1)
    index_list=["latestPrice","latestPrice","yearBuilt","yearBuilt","lotSizeSqFt","lotSizeSqFt","livingAreaSqFt","livingAreaSqFt",
      "zipcode","homeType","numOfStories","numOfBathrooms","garageSpaces","numOfBedrooms","hasCooling","hasHeating",
      "hasSpa","hasView","numOfAccessibilityFeatures","hasGarage"]
    query_filters=[]
    query_dropdowns=[]
    query_amenities=[]
    for i in range(8):
        min_max= "min" if i%2==0 else "max"
        query_filters.append([query_list[i],index_list[i],min_max])
    for i in range(8,14):
        query_dropdowns.append([query_list[i],index_list[i]])
        query_dropdowns
    for i in range(14,20):
        if query_list[i]=="true":
            query_amenities.append([True,index_list[i]])
        else:
            query_amenities.append([False,index_list[i]])

    
    conditional=[True]*len(df)
    for q in query_filters:
        if q[2]=="min" and q[0]!="":
            conditional=conditional&(df[q[1]]>=int(q[0]))
        elif q[0]!="":
            conditional=conditional&(df[q[1]]<=int(q[0]))
    for q in query_dropdowns:
        if q[0]!="All":
            if q[1]=="zipcode" or q[1]=="numOfStories":
                conditional=conditional&(df[q[1]]==int(q[0]))
            elif q[1]=="homeType":
                conditional=conditional&(df[q[1]]==q[0])
            else:
                conditional=conditional&(df[q[1]]>=float(q[0]))
    for q in query_amenities:
        if q[0]==True:
            if q[1]=="numOfAccessibilityFeatures":
                conditional=conditional&(df[q[1]]>=1)
            else:
                conditional=conditional&(df[q[1]]==q[0])
    filtered_df=df[conditional].copy().reset_index(drop=True)
    return jsonify(geo_from_df(filtered_df))
    
@app.route("/unique/<column>")
def unique(column):
    results=df[column].unique().tolist()
    return jsonify(results)

@app.route("/nn/<query>")
def nn(query):
    print(query)
    return jsonify([1000000])

@app.route("/linearModel")
def linear():
    with open("../Resources/linear.json","r") as file:
        linear=jsonify(json.load(file))
        return linear

@app.route("/graphs/<variable>")
def graphs(variable):
    y=df["latestPrice"].to_list()
    x=df[variable].to_list()
    # print(x)
    # print(y)
    return jsonify({"y":y, "x":x})



#Use render_template to return the dashboard HTML site
@app.route("/endpoint")
def endpoint():
    return (render_template('index.html'))
        
#Run app code
if __name__=="__main__":
    app.run(debug=True)
