# Iris: A Conversational Agent for Data Science

![interface](/interface.png)

Read more about the system [in this article](https://hackernoon.com/a-conversational-agent-for-data-science-4ae300cdc220).

## Installation guide

### Warning! The current version of Iris is an alpha release and is not yet ready for real data science work. We are still adding many new commands to the system and fixing bugs. A production-ready beta release will be out later this summer. Use at your own risk!

These are instructions to install and run Iris in debugging mode. A self-contained Electron app for OSX will be released later this summer.

You will first need to [install anaconda](https://conda.io/docs/install/quick.html).

Install and run the Python components:

    cd iris-agent/backend
    # create new conda env called iris with necessary packages
    conda create --name iris --file packages.txt
    # enter the conda env
    source activate iris
    # install the remaining pip packages
    pip install -r requirements.txt
    cd app/
    # run the backend application
    python app.py

Install and run the Javascript components:

    cd iris-agent
    npm install
    # build JS app with webpack (can also run webpack --watch in seperate command window)
    webpack
    # start electron (this will open the application automatically)
    npm start

Both the backend and frontend must be running for Iris to work!

### Tests

To verify the backend is working:

    cd iris-agent/backend/test
    python test.py
