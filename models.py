from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

db = SQLAlchemy()

class SustainableObject(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    kategori = db.Column(db.String(50))
    namn = db.Column(db.String(100))
    created = db.Column(db.DateTime, default=datetime.utcnow)

class MaterialEntry(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    object_id = db.Column(db.Integer)
    typ = db.Column(db.String(150))
    butik = db.Column(db.String(150))
    fraktsätt = db.Column(db.String(50))
    fraktdistans = db.Column(db.Integer)
    färgning = db.Column(db.String(150))
    tvätt = db.Column(db.String(50))
    land = db.Column(db.String(100))
