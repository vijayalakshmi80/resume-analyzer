pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git 'https://github.com/your-repo/resume-analyzer.git'
            }
        }

        stage('Build Backend Docker') {
            steps {
                sh 'docker build -t backend ./backend'
            }
        }

        stage('Build Frontend Docker') {
            steps {
                sh 'docker build -t frontend ./frontend'
            }
        }

        stage('Push Images') {
            steps {
                sh '''
                docker tag backend yourdockerhub/backend:latest
                docker tag frontend yourdockerhub/frontend:latest

                docker push yourdockerhub/backend:latest
                docker push yourdockerhub/frontend:latest
                '''
            }
        }

        stage('Deploy to Kubernetes') {
            steps {
                sh '''
                kubectl apply -f k8s/
                '''
            }
        }
    }
}