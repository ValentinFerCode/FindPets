"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User
from api.utils import generate_sitemap, APIException

api = Blueprint('api', __name__)


# @api.route('/hello', methods=['POST', 'GET'])
# def handle_hello():

#     response_body = {
#         "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
#     }

@api.route('/signup', methods=['POST'])
def signup():

    body = json.loads(request.data)
    
    user = Usuario.query.filter_by(username=body["username"]).first() 
    
    if user is None:
            agregar_new_user = Usuario(username=body["username"], email=body["email"], password=body["password"], nombre=body["nombre"],apellido=body["apellido"],contacto=body["contacto"], admin=body["admin"])
            db.session.add(agregar_new_user)
            db.session.commit()
            response_body = {
                "msg": "El usuario fue creado exitosamente"
            }
            return jsonify(response_body), 200

    response_body = {
            "msg": "El usuario ya existe en el sistema"
        }
    return jsonify(response_body), 400
