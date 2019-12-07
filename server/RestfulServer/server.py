#python 2.7.10
#pip install flask

from flask import Flask, request, jsonify
from dbcon import DBcon

# Init
app = Flask(__name__)
db = DBcon()


@app.route('/')
def index():
    return "Hello, World!"


@app.route('/api/v1.0/test', methods=['GET'])
def get_tests():
    data = db.getTests()
    if data is not None:
        return data, 200
    else:
        return jsonify({'error': 'no content'}), 404


@app.route('/api/v1.0/test/<string:id>', methods=['GET'])
def get_test(id):
    data = db.getTest(id)
    if data is not None:
        return data, 200
    else:
        return jsonify({'error': 'no content'}), 500


@app.route('/api/v1.0/test', methods=['POST'])
def new_vehicle():
    data = request.data
    response = db.newTest(data)
    if response is not None:
        return jsonify({'id': response}), 201
    else:
        return jsonify({'error': 'could not create'}), 500


if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0')
