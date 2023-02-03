"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Mascotas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

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
#     return jsonify(response_body), 200




















@api.route("/login", methods=["POST"])
def login():
    # Obtengo credenciales del usuario desde el cuerpo de la solicitud
    username = request.json.get("username")
    password = request.json.get("password")

    usuario_login = Usuario.query.filter_by(username=username).first()

    if username != username_login.username | password != usuario_login.password:
        return jsonify({"message": "Usuario o contraseña incorrectos"}), 401

    else: 
        return jsonify({"message": "Inicio de sesión exitoso"})

    #Token de acceso
    access_token = create_access_token(identity=user.id)

    response_body = {
        "access_token": access_token,
    }
