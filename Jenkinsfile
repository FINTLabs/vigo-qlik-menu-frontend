pipeline {
    agent { label 'docker' }
    stages {
        stage('Build') {
            steps {
                withDockerRegistry([credentialsId: 'fintlabs.azurecr.io', url: 'https://fintlabs.azurecr.io']) {
                    sh "docker build --tag ${GIT_COMMIT} ."
                }
            }
        }
        stage('Publish') {
            when { branch 'master' }
            steps {
                sh "docker tag ${GIT_COMMIT} fintlabs.azurecr.io/vigo-qlik-menu-frontend:build.${BUILD_NUMBER}"
                withDockerRegistry([credentialsId: 'fintlabs.azurecr.io', url: 'https://fintlabs.azurecr.io']) {
                    sh "docker push fintlabs.azurecr.io/vigo-qlik-menu-frontend:build.${BUILD_NUMBER}"
                }
                kubernetesDeploy configs: 'k8s.yaml'
            }
        }
    }
}
