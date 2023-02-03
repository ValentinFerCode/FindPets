"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, Usuario, Mascotas
from api.utils import generate_sitemap, APIException
from flask_jwt_extended import create_access_token, get_jwt_identity, jwt_required, JWTManager

api = Blueprint('api', __name__)























@api.route("/login", methods=["POST"])
def login():
    # Obtengo credenciales del usuario desde el cuerpo de la solicitud
    username = request.json.get("username")
    password = request.json.get("password")

    usuario_login = Usuario.query.filter_by(username=username).first()

    if username != usuario_login.username or password != usuario_login.password:
        return jsonify({"message": "Usuario o contraseña incorrectos"}), 401

    else: 
        return jsonify({"message": "Inicio de sesión exitoso"})

    #Token de acceso
    access_token = create_access_token(identity=user.id)

    response_body = {
        "access_token": access_token,
    }