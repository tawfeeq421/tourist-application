pipeline {
    agent any
    tools{
        jdk 'JDK17'
        nodejs 'NODEJS18'
    }
    environment{
        DOCKER_IMAGE = "tawfeeq421/tourist-app"
        DOCKER_TAG = ${BUILD_NUMBER}
    }
    stages{
        stage('Clean Workspace'){
            steps{
                cleanWs()
            }
        }
        stage('Git Checkout'){
            steps{
                git branch: 'main', url: 'https://github.com/tawfeeq421/tourist-application.git'
            }
        }
        stage('Dependency Install'){
            steps{
                sh 'npm install'
            }
        }
        stage('Run Tests'){
            steps{
                sh 'npm test -- --watchAll=false --coverage'
            }
        }
        stage('SonarQube Analysis'){
            environment{
                scannerHome = tool 'sonar'
            }
            steps{
                withSonarQubeEnv('sonarserver'){
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Quality Gate'){
            steps{
                timeout(time: 1, unit: 'HOURS'){
                    waitForQualityGate abortPipeline: true
                }
            }
        }
        stage('Trivy FS Scan'){
            steps{
                sh '''
                trivy fs . \
                --severity HIGH,CRITICAL \
                --format table \
                -o trivy-report.txt
                '''
            }
        }
    }
    post{
       always{
            archiveArtifacts artifacts: 'trivy-report.txt', fingerprint: true
       }
       
    }
}