# DevOps Engineer Hands-On Assignment

Welcome to the hands-on portion of the interview! This task is designed to evaluate your practical skills in automating infrastructure provisioning, deploying applications, and ensuring scalability and high availability. Please follow the instructions below and feel free to ask any clarifying questions during the session.

---

## **Scenario**
Our freelancing platform is expanding to new markets, including Indonesia, Vietnam, and the global market. To support this growth, we need an automated process to provision infrastructure and deploy services smoothly across multiple regions.

Our current stack includes **GKE**, **Google Cloud Pub/Sub**, **Cloud SQL**, and other Google Cloud services. However, you are free to use your **preferred cloud provider** (e.g., AWS, Azure) to demonstrate your skills.

---

## **Objective**
Automate the provisioning of infrastructure and deployment of a scalable, highly available application across multiple regions. Configure a global load balancer, demonstrate failover and scaling capabilities, and optionally implement monitoring for the deployed services.

---

## **Task Breakdown**

### **Step 1: Provision Multi-Region Infrastructure**
- Provision **two clusters** in different regions (e.g., `Asia` and `Global` regions such as `us-central1` or `europe-west1`).
- Requirements:
  1. **Cluster Type**: Create **private clusters** (nodes should not have public IPs).
  2. **Node Pools**:
     - Enable **autoscaling** for the node pool.
     - Choose an appropriate machine type based on your reasoning.
  3. **Networking**:
     - Create a **VPC and subnet** for each cluster.
     - Ensure the clusters can communicate with cloud services (e.g., Pub/Sub, Cloud SQL, or equivalent services in your chosen cloud).
  4. **IAM Roles**:
     - Assign appropriate roles to the cluster for workloads to securely access cloud services.

**Deliverables**:
- Infrastructure-as-Code (IaC) files (e.g., Terraform, CloudFormation, or YAML files).
- Explanation of choices (e.g., why private clusters, autoscaling configuration, machine type, and networking setup).

---

### **Step 2: Deploy the Application**
- Deploy our containerized microservices application to **both clusters**.
- Application Components:
  1. **Frontend Service**: Bun.js application running on port 8080.
  2. **Backend Service**: Bun.js application running on port 3000.
- Requirements:
  1. Use Kubernetes manifests (Deployment, Service) to deploy both services.
  2. Configure **Horizontal Pod Autoscaler (HPA)** to scale pods based on CPU usage.
  3. Expose the frontend service using a Kubernetes Service (e.g., `LoadBalancer` type).
  4. Ensure proper service discovery between frontend and backend services.

**Deliverables**:
- Kubernetes manifests for Deployments, Services, and HPAs.
- Steps to verify both services are running and communicating properly.

---

### **Step 3: Configure Global Load Balancer and Failover**
- Set up a **Global Load Balancer** to route traffic between the two clusters.
- Requirements:
  1. Configure the load balancer to route traffic to the nearest cluster.
  2. Simulate a regional outage (e.g., by stopping services in one cluster).
  3. Verify that traffic fails over to the healthy cluster.

**Deliverables**:
- Load balancer configuration (e.g., steps or IaC files).
- Steps to simulate and test failover.

---

### **Step 4: Automate Deployment (Optional, Bonus Task)**
- If time permits, create a **CI/CD pipeline** to automate the deployment process.
- Use tools like **GitHub Actions**, **ArgoCD**, or any other preferred CI/CD tool to manage application deployment to both clusters.

**Deliverables**:
- CI/CD pipeline configuration (e.g., GitHub Actions YAML, ArgoCD manifests, or equivalent).

---

### **Step 5: Implement Monitoring (Optional, Bonus Task)**
- Set up monitoring for the deployed application and infrastructure.
- Requirements:
  1. Use a monitoring tool of your choice (e.g., **Prometheus/Grafana**, **Cloud Monitoring**, **Datadog**, etc.).
  2. Configure alerts for key metrics such as:
     - Application performance (e.g., response time, error rate).
     - Cluster health (e.g., node/pod availability, CPU/memory usage).
     - Load balancer health checks.
  3. Visualize metrics using dashboards.
  4. (Optional) Simulate a failure and demonstrate how monitoring detects the issue.

**Deliverables**:
- Monitoring configuration (e.g., YAML files, Terraform, or screenshots of dashboards).
- Steps to verify monitoring and alerts are working.

---

## **Evaluation Criteria**
1. **Infrastructure Automation**:
   - Proper setup of private clusters with autoscaling and IAM roles.
   - Correct networking configuration (VPC and subnets).
2. **Application Deployment**:
   - Correct deployment of both frontend and backend services with HPA.
   - Proper service communication configuration.
3. **High Availability**:
   - Functional global load balancer with failover.
4. **Scalability**:
   - Proper configuration of autoscaling mechanisms.
5. **Monitoring (Bonus)**:
   - Effective monitoring setup with meaningful metrics and alerts.
   - Clear and actionable dashboards.
6. **Clarity**:
   - Clean and well-documented configuration files.
7. **Troubleshooting**:
   - Ability to debug and resolve issues during the task.

---

## **Time Allocation**
- **Infrastructure Provisioning**: 40 minutes
- **Application Deployment and Scaling**: 20-30 minutes
- **Global Load Balancer and Failover**: 30 minutes
- **CI/CD Pipeline (Optional)**: Remaining time (if any)
- **Monitoring (Optional)**: Remaining time (if any)

---

## **Good Luck!**
Feel free to ask questions or clarify requirements during the session. We are excited to see your approach and solutions!
