pipeline {
    agent any

    environment {
        BACKEND_IMAGE = 'resume-backend'
        FRONTEND_IMAGE = 'resume-frontend'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/vijayalakshmi80/resume-analyzer.git'
            }
        }

        stage('Clean Old Containers') {
            steps {
                bat 'docker rm -f backend || exit 0'
                bat 'docker rm -f frontend || exit 0'
            }
        }

        stage('Clean Old Images') {
            steps {
                bat 'docker rmi -f %BACKEND_IMAGE% || exit 0'
                bat 'docker rmi -f %FRONTEND_IMAGE% || exit 0'
            }
        }

        stage('Build Backend') {
            steps {
                bat 'docker build -t %BACKEND_IMAGE% ./backend'
            }
        }

        stage('Build Frontend') {
            steps {
                bat 'docker build -t %FRONTEND_IMAGE% ./frontend'
            }
        }

        stage('Deploy Containers') {
            steps {
                bat 'docker run -d -p 5000:5000 --name backend %BACKEND_IMAGE%'
                bat 'docker run -d -p 3000:80 --name frontend %FRONTEND_IMAGE%'
            }
        }

        stage('Verify Deployment') {
            steps {
                bat 'docker ps'
            }
        }
    }

    post {
        success {
            echo '✅ Build and Deployment Successful!'
        }
        failure {
            echo '❌ Build Failed! Check logs.'
        }
    }
}