pipeline {
    agent any

    tools {
        jdk 'JDK17'
        nodejs 'NODEJS18'
    }

    stages {

        stage('Clean Workspace') {
            steps {
                cleanWs()
            }
        }

        stage('Git Checkout') {
            steps {
                git branch: 'main', url: 'https://github.com/tawfeeq421/tourist-application.git'
            }
        }

        stage('Install Dependency') {
            steps {
                sh 'npm install'
            }
        }

    }
}