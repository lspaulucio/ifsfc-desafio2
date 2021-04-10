kubectl apply -f backend/deploy.yaml 
kubectl apply -f backend/service.yaml  
kubectl port-forward service/backend-service 3000:3000 

kubectl apply -f frontend/deploy.yaml 
kubectl apply -f frontend/service.yaml 
kubectl port-forward service/server-service 8080:80
