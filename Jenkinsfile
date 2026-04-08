pipeline {
    agent any
    tools {
        jdk 'JDK17'
        nodejs 'NODEJS18'
    }
    stage('Clean Workspace'){
        steps{
            CleanWs()
        }
    }
    stages{
        stage('Git Checkout'){
            steps{
                git branch: 'main' url: 'https://github.com/tawfeeq421/tourist-application.git'
            }
        }
    }
}