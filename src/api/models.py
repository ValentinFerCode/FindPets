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
    mascotas_usuario = db.relationship('Mascotas', backref='usuario', lazy=True)


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
            "mascotas_usuario": self.mascotas_usuario,
# do not serialize the password, its a security breach
        }

class Mascotas(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    genero = db.Column(db.String(120), unique=True, nullable=False)
    tamaño = db.Column(db.String(120), unique=True, nullable=False)
    color = db.Column(db.String(80), unique=False, nullable=False)
    nombre = db.Column(db.String(80), unique=False, nullable=False)
    edad = db.Column(db.String(80), unique=False, nullable=False)
    raza = db.Column(db.String(80), unique=False, nullable=False)
    estado = db.Column(db.String(80), unique=False, nullable=False)
    especie = db.Column(db.String(80), unique=False, nullable=False)
    usuario_id = db.Column(db.Integer, db.ForeignKey('usuario.id'))


    def __repr__(self):
        return f'<Mascotas {self.id}>'

    def serialize(self):
        return {
            "id": self.id,
            "genero": self.genero,
            "tamaño": self.tamaño,
            "color": self.color,
            "nombre": self.nombre,
            "edad": self.edad,
            "raza": self.raza,
            "estado": self.estado,
            "especie": self.especie,
            "usuario_id": self.usuario_id,

            # do not serialize the password, its a security breach
        }