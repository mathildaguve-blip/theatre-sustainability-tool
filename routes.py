from flask import request, jsonify
from material.data import materials
from shop.data import shops
from countries.data import countries
from models import db, SustainableObject, MaterialEntry

def init_routes(app):

    @app.get("/api/materials")
    def get_materials():
        q = request.args.get("q","").lower()
        if q:
            return jsonify([m for m in materials if q in m["name"].lower()])
        return jsonify(materials)

    @app.get("/api/shops")
    def get_shops():
        q = request.args.get("q","").lower()
        if q:
            return jsonify([s for s in shops if q in s["name"].lower() or q in s["ort"].lower()])
        return jsonify(shops)

    @app.get("/api/countries")
    def get_countries():
        q = request.args.get("q","").lower()
        if q:
            return jsonify([c for c in countries if q in c["name"].lower()])
        return jsonify(countries)

    @app.post("/api/objects")
    def create_object():
        data = request.json
        obj = SustainableObject(kategori=data["kategori"], namn=data["namn"])
        db.session.add(obj)
        db.session.commit()
        for m in data["material"]:
            me = MaterialEntry(
                object_id=obj.id,
                typ=m["typ"],
                butik=m.get("butik",""),
                fraktsätt=m.get("fraktsätt",""),
                fraktdistans=m.get("fraktdistans",0),
                färgning=m.get("färgning",""),
                tvätt=m.get("tvätt",""),
                land=m.get("land","")
            )
            db.session.add(me)
        db.session.commit()
        return jsonify({"message":"ok"}), 201
