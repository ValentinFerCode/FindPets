from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class Usuario(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    apellido = db.Column(db.String(80), unique=False, nullable=False)
    contacto = db.Column(db.String(80), unique=False, nullable=False)
    admin = db.Column(db.Boolean, unique=False, nullable=False)
    raza = db.Column(db.String(80), unique=False, nullable=True)
    paypal_url = db.Column(db.String(250), nullable=True)
    mascotas = db.relationship('Mascotas', backref='usuario', lazy=True)


    def __repr__(self):
        return f'<Usuario {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "nombre": self.nombre,
            "apellido": self.apellido,
            "contacto": self.contacto,
            "admin": self.admin,
            "username": self.username,
# do not serialize the password, its a security breach
        }

class Mascotas(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    genero = db.Column(db.String(120), unique=False, nullable=True)
    tamaño = db.Column(db.String(120), unique=False, nullable=False)
    color = db.Column(db.String(80), unique=False, nullable=False)
    descripcion = db.Column(db.String(250), unique=False, nullable=True)
    edad = db.Column(db.String(80), unique=False, nullable=True)
    raza = db.Column(db.String(80), unique=False, nullable=True)
    estado = db.Column(db.String(80), unique=False, nullable=False)
    especie = db.Column(db.String(80), unique=False, nullable=False)
    latitud = db.Column(db.String(100), unique=False, nullable=True)
    longitud = db.Column(db.String(100), unique=False, nullable=True)
    url = db.Column(db.String(250), nullable=True)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))


    def __repr__(self):
        return f'<Mascotas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "genero": self.genero,
            "tamaño": self.tamaño,
            "color": self.color,
            "descripcion": self.descripcion,
            "edad": self.edad,
            "raza": self.raza,
            "estado": self.estado,
            "especie": self.especie,
            "latitud": self.latitud,
            "longitud": self.longitud,
            "url": self.url,
            "usuario_id": self.usuario_id,
            # do not serialize the password, its a security breach
        }
