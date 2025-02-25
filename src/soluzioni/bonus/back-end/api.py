from flask import Flask, jsonify, request, abort
from flasgger import Swagger
from flask_cors import CORS  

app = Flask(__name__)
CORS(app) 
swagger = Swagger(app)

# Database simulato: un dizionario per gestire gli utenti
users = {}

@app.route('/users', methods=['GET'])
def get_users():
    """
    Ottieni la lista di tutti gli utenti
    ---
    responses:
      200:
        description: Lista degli utenti
        schema:
          type: array
          items:
            type: object
            properties:
              id:
                type: integer
                description: L'ID dell'utente
              username:
                type: string
                description: Il nome utente
              email:
                type: string
                description: L'email dell'utente
    """
    return jsonify(list(users.values())), 200

@app.route('/users/<int:user_id>', methods=['GET'])
def get_user(user_id):
    """
    Ottieni un utente per ID
    ---
    parameters:
      - name: user_id
        in: path
        type: integer
        required: true
        description: L'ID dell'utente
    responses:
      200:
        description: Dati dell'utente
        schema:
          id: User
          properties:
            id:
              type: integer
              description: L'ID dell'utente
            username:
              type: string
              description: Il nome utente
            email:
              type: string
              description: L'email dell'utente
      404:
        description: Utente non trovato
    """
    user = users.get(user_id)
    if user is None:
        abort(404, description="Utente non trovato")
    return jsonify(user), 200

@app.route('/users', methods=['POST'])
def create_user():
    """
    Crea un nuovo utente
    ---
    parameters:
      - name: body
        in: body
        required: true
        schema:
          id: User
          required:
            - username
          properties:
            username:
              type: string
              description: Il nome utente
            email:
              type: string
              description: L'email dell'utente
    responses:
      201:
        description: Utente creato
        schema:
          id: User
          properties:
            id:
              type: integer
              description: L'ID dell'utente
            username:
              type: string
              description: Il nome utente
            email:
              type: string
              description: L'email dell'utente
      400:
        description: Dati mancanti o formattazione errata
    """
    if not request.json or 'username' not in request.json:
        abort(400, description="Dati mancanti o formattazione errata")
    # Genera un id utente incrementale
    user_id = max(users.keys(), default=0) + 1
    user = {
        'id': user_id,
        'username': request.json['username'],
        'email': request.json.get('email', '')
    }
    users[user_id] = user
    return jsonify(user), 201

@app.route('/users/<int:user_id>', methods=['PUT'])
def update_user(user_id):
    """
    Aggiorna i dati di un utente esistente
    ---
    parameters:
      - name: user_id
        in: path
        type: integer
        required: true
        description: L'ID dell'utente
      - name: body
        in: body
        required: true
        schema:
          id: User
          properties:
            username:
              type: string
              description: Il nuovo nome utente
            email:
              type: string
              description: La nuova email dell'utente
    responses:
      200:
        description: Utente aggiornato
        schema:
          id: User
          properties:
            id:
              type: integer
              description: L'ID dell'utente
            username:
              type: string
              description: Il nome utente aggiornato
            email:
              type: string
              description: L'email aggiornata
      400:
        description: Dati mancanti o formattazione errata
      404:
        description: Utente non trovato
    """
    user = users.get(user_id)
    if user is None:
        abort(404, description="Utente non trovato")
    if not request.json:
        abort(400, description="Dati mancanti o formattazione errata")
    user['username'] = request.json.get('username', user['username'])
    user['email'] = request.json.get('email', user['email'])
    users[user_id] = user
    return jsonify(user), 200

@app.route('/users/<int:user_id>', methods=['DELETE'])
def delete_user(user_id):
    """
    Elimina un utente
    ---
    parameters:
      - name: user_id
        in: path
        type: integer
        required: true
        description: L'ID dell'utente da eliminare
    responses:
      200:
        description: Utente eliminato correttamente
        schema:
          type: object
          properties:
            result:
              type: boolean
      404:
        description: Utente non trovato
    """
    user = users.pop(user_id, None)
    if user is None:
        abort(404, description="Utente non trovato")
    return jsonify({'result': True}), 200

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5000)
