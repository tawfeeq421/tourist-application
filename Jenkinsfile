pipeline {
    agent any

    tools {
        jdk 'JDK17'
        nodejs 'NODEJS18'
    }
    environment {
        DOCKER_IMAGE = "tawfeeq421/tourist-app"
        DOCKER_TAG = "${BUILD_NUMBER}"

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
        stage('Trivy File Scan'){
            steps{
                sh 'trivy fs . > trivyfs.txt'
            }
        }
        stage('OWASP Dependency Check') {
            steps {
                dependencyCheck additionalArguments: '--scan .', odcInstallation: 'DP-Check'
                dependencyCheckPublisher pattern: '**/dependency-check-report.xml'
            }
        }
        stage('Docker Build') {
            steps{
                sh 'docker build -t $DOCKER_IMAGE:$DOCKER_TAG .'
            }
        }
        stage('Docker Push'){
            steps{
                withDockerRegistery1(credentialsId: 'dockerlogin', toolName: 'docker')
            }
        }

    }
}