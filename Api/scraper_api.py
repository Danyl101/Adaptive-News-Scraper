from flask_cors import CORS
from flask import Flask
import json
from flask import request, jsonify
from Backend.Scrape.utils import write_to_json,websites
from Backend.Scrape.robot import can_scrape
from Backend.Scrape.link_extract import scrape_multiple_sites
app = Flask(__name__)
CORS(app)


@app.route("/api/fetch-goodlist", methods=["GET"])
def get_goodlist():
    with open("Datasets/goodlist.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return jsonify(data)

@app.route("/api/fetch-websites", methods=["GET"])
def get_websites():
    with open("Datasets/websites.json", "r", encoding="utf-8") as f:
        data = json.load(f)
    return jsonify(data)


@app.route("/api/save-goodlist", methods=["POST"]) #Web Link Endpoint
def save_goodlist():
    data = request.get_json()
    with open("Datasets/goodlist.json", "w") as f: #Reads Json file
        json.dump(data, f) #Saves data into json file
    return jsonify({"status": "success"})

@app.route("/api/save-websites", methods=["POST"]) #Web Link Endpoint
def save_websites():
    data = request.get_json()
    with open("Datasets/websites.json", "w") as f: #Reads Json file
        json.dump(data, f) #Saves data into json file
    return jsonify({"status": "success"})


if __name__ == "__main__":
    app.run(debug=True, port=5000)
