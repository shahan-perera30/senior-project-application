from flask import Flask, render_template, request, redirect, url_for
import openpyxl
from io import BytesIO

app = Flask(__name__)

@app.route('/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        # Check if the file is present in the request
        if 'file' not in request.files:
            return redirect(request.url)

        file = request.files['file']

        # Check if the file is a valid Excel file
        if file.filename == '':
            return redirect(request.url)

        # Read the data from the Excel file
        excel_data = []
        workbook = openpyxl.load_workbook(filename=BytesIO(file.read()))
        sheet = workbook.active
        for row in sheet.iter_rows(values_only=True):
            excel_data.append(row)

        # Store the data for display in the template
        session['excel_data'] = excel_data

        # Return the name of the template to render
        return render_template('index.html', data=excel_data)

    return render_template('upload.html')

if __name__ == '__main__':
    app.run(debug=True)