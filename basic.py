import os
from flask import Flask, render_template
#from flask_sqlalchemy import SQLAlchemy

# basedir = os.path.abspath(os.path.dirname(__file__))

app = Flask(__name__)
##############################################################################
# app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///'+os.path.join(basedir,'data.sqlite')
# app.config['SQLALCHEMY_TRACK_MODIFIACTIONS'] = False

# db = SQLAlchemy(app)
##############################################################################


@app.route('/')
def index():
    return render_template('Home.html')


@app.route('/Category')
def Category():
    return render_template('Category.html')


@app.route('/Category/Experience')
def Experience():
    return render_template('Experience.html')


@app.route('/Category/Education')
def Education():
    return render_template('Education.html')


@app.route('/Category/Projects')
def Projects():
    return render_template('Projects.html')


@app.route('/Category/Certification')
def Certification():
    return render_template('Certification.html')


if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')
    # app.run(host='0.0.0.0' , port=5000)
