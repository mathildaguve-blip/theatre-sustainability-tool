from flask import Flask, jsonify, request
from material_data import materials
from shop_data import shops
from countries_data import countries

app = Flask(__name__)

@app.route('/materials')
def get_materials():
    return jsonify(materials)

@app.route('/shops')
def get_shops():
    return jsonify(shops)

@app.route('/countries')
def get_countries():
    return jsonify(countries)

if __name__ == "__main__":
    app.run(debug=True)
