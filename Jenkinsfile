pipeline {
    agent any

    environment {
        NODE_ENV = "production"
        APP_DIR = "/home/production/projects/mysa/mysa-fe/mysa-landingpage"   // change to your app directory
        APP_NAME = "mysa-landingpage"
    }

    stages {
        stage('Checkout') {
            steps {
                git branch: 'release/CICD-100925-v1', url: 'https://hi-coding@bitbucket.org/schoolatic/mysa-fe.git'
            }
        }

        stage('Install Dependencies') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm install'
                }
            }
        }

        stage('Build') {
            steps {
                dir("${APP_DIR}") {
                    sh 'npm run build'
                }
            }
        }

        stage('Restart with PM2') {
            steps {
                dir("${APP_DIR}") {
                    sh "pm2 restart ${APP_NAME} || pm2 start npm --name ${APP_NAME} -- run start -- -p 9990"
                }
            }
        }
    }

    post {
        success {
            echo '✅ Deployment successful!'
        }
        failure {
            echo '❌ Deployment failed!'
        }
    }
}