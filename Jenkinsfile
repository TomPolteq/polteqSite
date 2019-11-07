pipeline {
  agent any
  options {
    buildDiscarder(logRotator(numToKeepStr: '5', artifactNumToKeepStr: '5'))
  }
  stages {
    stage('Build') {
      steps {
        bat 'npm install'
      }
    }

    stage('Test') {
      steps {
        bat './node_modules/.bin/wdio wdio.conf.js'
      }
    }
  }
  post {
    always {
      archive "test/reports/**/*,errorShots/*,screenshots/**/**"
      allure([
        includeProperties: false,
        jdk: '',
        properties: [],
        reportBuildPolicy: 'ALWAYS',
        results: [[path: 'allure-results']]
      ])
    }
  }
}
